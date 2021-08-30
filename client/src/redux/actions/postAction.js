/* eslint-disable no-unused-vars */
import { deleteDataApi, getDataApi, patchDataApi, postDataApi } from 'utils/fetchData';
import { imageUpload } from 'utils/imageUpload';
import { GLOBALTYPES } from './globalTypes';
import { createNotify, removeNotify } from './notifyAction';

/* eslint-disable import/prefer-default-export */
export const POST_TYPES = {
  CREATE_POST: 'CREATE_POST',
  LOADING_POST: 'LOADING_POST',
  GET_POSTS: 'GET_POSTS',
  UPDATE_POST: 'UPDATE_POST',
  GET_POST: 'GET_POST',
  DELETE_POST: 'DELETE_POST',
};

export const createPost = (props) => async (dispatch) => {
  const { content, images, auth, socket } = props;
  let media = [];
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: true,
      },
    });

    if (images.length > 0) {
      media = await imageUpload(images);
    }

    const res = await postDataApi('posts', { content, images: media }, auth.token);

    dispatch({
      type: POST_TYPES.CREATE_POST,
      payload: { ...res.data.newPost, user: auth.user },
    });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: false,
      },
    });

    // Notify
    const msg = {
      id: res.data.newPost._id,
      text: 'đã thêm một bài viết',
      recipients: res.data.newPost.user.followers,
      url: `/post/${res.data.newPost._id}`,
      content,
      image: media[0].url,
    };

    dispatch(createNotify({ auth, msg, socket }));
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.respone.data.msg,
      },
    });
  }
};

export const getPosts = (token) => async (dispatch) => {
  try {
    dispatch({
      type: POST_TYPES.LOADING_POST,
      payload: true,
    });

    const res = await getDataApi('posts', token);

    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: { ...res.data, page: 2 },
    });

    dispatch({
      type: POST_TYPES.LOADING_POST,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.respone.data.msg,
      },
    });
  }
};

export const updatePost = (props) => async (dispatch) => {
  const { content, images, auth, status } = props;

  let media = [];
  const imgNewUrl = images.filter((img) => !img.url);
  const imgOldUrl = images.filter((img) => img.url);

  if (status.content === content && imgNewUrl.length === 0 && imgOldUrl.length === status.images.length) return;

  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    if (imgNewUrl.length > 0) media = await imageUpload(imgNewUrl);

    const res = await patchDataApi(`post/${status._id}`, { content, images: [...imgOldUrl, ...media] }, auth.token);

    dispatch({ type: POST_TYPES.UPDATE_POST, payload: res.data.newPost });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.respone.data.msg,
      },
    });
  }
};

export const likePost = (props) => async (dispatch) => {
  const { auth, post, socket } = props;

  const newPost = { ...post, likes: [...post.likes, auth.user] };

  dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });

  socket.emit('likePost', newPost);

  try {
    await patchDataApi(`post/${post._id}/like`, null, auth.token);

    // Notify
    const msg = {
      id: auth.user._id,
      text: 'đã thích bài viết của bạn',
      recipients: [post.user._id],
      url: `/post/${post._id}`,
      content: post.content,
      image: post.images[0].url,
    };

    dispatch(createNotify({ auth, msg, socket }));
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const unLikePost = (props) => async (dispatch) => {
  const { auth, post, socket } = props;

  const newPost = { ...post, likes: post.likes.filter((like) => like._id !== auth.user._id) };

  dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });

  socket.emit('unLikePost', newPost);

  try {
    await patchDataApi(`post/${post._id}/unlike`, null, auth.token);

    // Notify
    const msg = {
      id: auth.user._id,
      text: 'đã thích bài viết của bạn',
      recipients: [post.user._id],
      url: `/post/${post._id}`,
    };

    dispatch(removeNotify({ auth, msg, socket }));
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const getPostDetails = (props) => async (dispatch) => {
  const { auth, postDetails, id } = props;
  if (postDetails.every((post) => post._id !== id)) {
    try {
      const res = await getDataApi(`post/${id}`, auth.token);

      dispatch({
        type: POST_TYPES.GET_POST,
        payload: res.data.postDetails,
      });
    } catch (error) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: error.response.data.msg },
      });
    }
  }
};

export const deletePost = (props) => async (dispatch) => {
  const { auth, post, socket } = props;
  dispatch({
    type: POST_TYPES.DELETE_POST,
    payload: post,
  });

  try {
    const res = await deleteDataApi(`post/${post._id}`, auth.token);

    // Notify
    const msg = {
      id: post._id,
      text: 'added a new post',
      recipients: res.data.newPost.user.followers,
      url: `/post/${post._id}`,
    };

    dispatch(removeNotify({ auth, msg, socket }));
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};

export const savePost = (props) => async (dispatch) => {
  const { post, auth } = props;
  const newUser = { ...auth.user, saved: [...auth.user.saved, post._id] };
  dispatch({ type: GLOBALTYPES.AUTH, payload: { ...auth, user: newUser } });

  try {
    await patchDataApi(`savePost/${post._id}`, null, auth.token);
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};

export const unSavePost = (props) => async (dispatch) => {
  const { post, auth } = props;
  const newUser = { ...auth.user, saved: auth.user.saved.filter((id) => id !== post._id) };
  dispatch({ type: GLOBALTYPES.AUTH, payload: { ...auth, user: newUser } });

  try {
    await patchDataApi(`unSavePost/${post._id}`, null, auth.token);
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response.data.msg },
    });
  }
};
