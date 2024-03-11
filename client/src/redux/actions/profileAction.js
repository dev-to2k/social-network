/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { getDataApi, patchDataApi } from 'utils/fetchData';
import { imageUpload } from 'utils/imageUpload';
import { DeleteData, GLOBALTYPES } from './globalTypes';
import { createNotify, removeNotify } from './notifyAction';

export const PROFILE_TYPES = {
  LOADING: 'LOADING_PROFILE',
  GET_USER: 'GET_PROFILE_USER',
  FOLLOW: 'FOLLOW',
  UNFOLLOW: 'UNFOLLOW',
  GET_ID: 'GET_PROFILE_ID',
  GET_POSTS: 'GET_PROFILE_POSTS',
  UPDATE_POST: 'UPDATE_PROFILE_POST',
};

export const getProfileUsers = (props) => async (dispatch) => {
  const { auth, id } = props;

  dispatch({ type: PROFILE_TYPES.GET_ID, payload: id });

  try {
    dispatch({ type: PROFILE_TYPES.LOADING, payload: true });

    const res = await getDataApi(`user/${id}`, auth.token);
    const res1 = await getDataApi(`user_posts/${id}`, auth.token);

    const users = await res;
    const posts = await res1;

    dispatch({ type: PROFILE_TYPES.GET_USER, payload: users.data });

    dispatch({
      type: PROFILE_TYPES.GET_POSTS,
      payload: {
        ...posts.data,
        _id: id,
        page: 2,
      },
    });

    dispatch({ type: PROFILE_TYPES.LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};

export const updateProfileUser = (props) => async (dispatch) => {
  const { userData, auth } = props;
  if (!userData.fullname) {
    return dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: 'Please add your full name',
      },
    });
  }

  if (userData.fullname.length > 25) {
    return dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: 'Full name too long.',
      },
    });
  }

  const res = await patchDataApi(
    'user',
    {
      ...userData,
    },
    auth.token
  );

  dispatch({
    type: GLOBALTYPES.AUTH,
    payload: {
      ...auth,
      user: {
        ...auth.user,
        ...userData,
      },
    },
  });

  dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
};

export const updateAvatarUser = (props) => async (dispatch) => {
  const { avatar, auth } = props;

  try {
    let media;
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: true,
      },
    });

    if (avatar) {
      // eslint-disable-next-line no-unused-vars
      media = await imageUpload([avatar]);

      const res = await patchDataApi(
        'user/avatar',
        {
          avatar: avatar ? media[0].url : auth.username.avatar,
        },
        // eslint-disable-next-line comma-dangle
        auth.token
      );

      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          ...auth,
          user: {
            ...auth.user,
            avatar: avatar ? media[0].url : avatar.user.avatar,
          },
        },
      });

      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: res.data.msg,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};

export const follow = (props) => async (dispatch) => {
  let newUser;
  const { user, auth, users, socket } = props;

  if (users.every((item) => item._id !== user._id)) {
    newUser = { ...user, followers: [...user.followers, auth.user] };
  } else {
    users.forEach((item) => {
      if (item._id === user._id) {
        newUser = { ...item, followers: [...item.followers, auth.user] };
      }
    });
  }

  dispatch({
    type: PROFILE_TYPES.FOLLOW,
    payload: newUser,
  });

  dispatch({
    type: GLOBALTYPES.AUTH,
    payload: {
      ...auth,
      user: { ...auth.user, following: [...auth.user.following, newUser] },
    },
  });

  try {
    const res = await patchDataApi(`user/${user._id}/follow`, null, auth.token);

    socket.emit('follow', res.data.newUser);

    // Notify
    const msg = {
      id: auth.user._id,
      text: 'đã theo dõi bạn',
      recipients: [newUser._id],
      url: `/profile/${auth.user._id}`,
    };

    dispatch(createNotify({ auth, msg, socket }));
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};

export const unFollow = (props) => async (dispatch) => {
  const { user, auth, users, socket } = props;
  let newUser;

  if (users.every((item) => item._id !== user._id)) {
    newUser = { ...user, followers: DeleteData(user.followers, auth.user._id) };
  } else {
    users.forEach((item) => {
      if (item._id === user._id) {
        newUser = { ...item, followers: DeleteData(item.followers, auth.user._id) };
      }
    });
  }

  dispatch({
    type: PROFILE_TYPES.UNFOLLOW,
    payload: newUser,
  });

  dispatch({
    type: GLOBALTYPES.AUTH,
    payload: {
      ...auth,
      user: { ...auth.user, following: DeleteData(auth.user.following, newUser._id) },
    },
  });

  try {
    const res = await patchDataApi(`user/${user._id}/unfollow`, null, auth.token);
    socket.emit('follow', res.data.newUser);

    // Notify
    const msg = {
      id: auth.user._id,
      text: 'đã theo dõi bạn',
      recipients: [newUser._id],
      url: `/profile/${auth.user._id}`,
    };

    dispatch(removeNotify({ auth, msg, socket }));
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};
