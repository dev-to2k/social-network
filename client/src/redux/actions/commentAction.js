/* eslint-disable no-shadow */
import { deleteDataApi, patchDataApi, postDataApi } from 'utils/fetchData';
import { DeleteData, EditData, GLOBALTYPES } from './globalTypes';
import { createNotify, removeNotify } from './notifyAction';
import { POST_TYPES } from './postAction';

/* eslint-disable import/prefer-default-export */
export const createComment = (props) => async (dispatch) => {
  const { post, newComment, auth, socket } = props;
  const newPost = { ...post, comments: [...post.comments, newComment] };
  dispatch({
    type: POST_TYPES.UPDATE_POST,
    payload: newPost,
  });

  try {
    const data = { ...newComment, postId: post._id, postUserId: post.user._id };
    const res = await postDataApi('comment', data, auth.token);
    const newData = { ...res.data.newComment, user: auth.user };
    const newPost = { ...post, comments: [...post.comments, newData] };

    dispatch({
      type: POST_TYPES.UPDATE_POST,
      payload: newPost,
    });

    // Socket
    socket.emit('createComment', newPost);

    // Notify
    const msg = {
      id: res.data.newComment._id,
      text: newComment.reply ? 'đã nhắc bạn trong bình luận' : 'đã bình luận bài viết của bạn',
      recipients: newComment.reply ? [newComment.tag._id] : [post.user._id],
      url: `/post/${post._id}`,
      content: post.content,
      image: post.images[0].url,
    };

    dispatch(createNotify({ msg, auth, socket }));
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const updateComment = (props) => async (dispatch) => {
  const { content, post, auth, comment } = props;

  const newComments = EditData(post.comments, comment._id, { ...comment, content });
  const newPost = { ...post, comments: newComments };

  dispatch({
    type: POST_TYPES.UPDATE_POST,
    payload: newPost,
  });

  try {
    const res = await patchDataApi(`comment/${comment._id}`, { content }, auth.token);
    console.log(res);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const likeComment = (props) => async (dispatch) => {
  const { comment, post, auth, socket } = props;
  const newComment = { ...comment, likes: [...comment.likes, auth.user] };
  const newComments = EditData(post.comments, comment._id, newComment);
  const newPost = { ...post, comments: newComments };

  dispatch({
    type: POST_TYPES.UPDATE_POST,
    payload: newPost,
  });

  socket.emit('likeComment', newPost);

  try {
    await patchDataApi(`comment/${comment._id}/like`, null, auth.token);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const unLikeComment = (props) => async (dispatch) => {
  const { comment, post, auth, socket } = props;
  const newComment = { ...comment, likes: DeleteData(comment.likes, auth.user._id) };
  const newComments = EditData(post.comments, comment._id, newComment);
  const newPost = { ...post, comments: newComments };

  dispatch({
    type: POST_TYPES.UPDATE_POST,
    payload: newPost,
  });

  socket.emit('unLikeComment', newPost);

  try {
    await patchDataApi(`comment/${comment._id}/unlike`, null, auth.token);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const deleteComment = (props) => async (dispatch) => {
  const { comment, auth, post, socket } = props;
  const deleteArr = [...post.comments.filter((cmt) => cmt.reply === comment._id), comment];

  const newPost = {
    ...post,
    comments: post.comments.filter((cmt) => !deleteArr.find((data) => cmt._id === data._id)),
  };

  dispatch({
    type: POST_TYPES.UPDATE_POST,
    payload: newPost,
  });

  socket.emit('deleteComment', newPost);

  try {
    deleteArr.forEach((item) => {
      deleteDataApi(`comment/${item._id}`, auth.token);

      // Notify
      const msg = {
        id: item._id,
        text: comment.reply ? 'đã nhắc bạn trong bình luận' : 'đã bình luận bài viết của bạn',
        recipients: comment.reply ? [comment.tag._id] : [post.user._id],
        url: `/post/${post._id}`,
      };

      dispatch(removeNotify({ msg, auth, socket }));
    });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};
