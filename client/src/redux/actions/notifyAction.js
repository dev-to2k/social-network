import { deleteDataApi, getDataApi, patchDataApi, postDataApi } from 'utils/fetchData';
import { GLOBALTYPES } from './globalTypes';

export const NOTIFY_TYPES = {
  GET_NOTIFIES: 'GET_NOTIFIES',
  CREATE_NOTIFY: 'CREATE_NOTIFY',
  REMOVE_NOTIFY: 'REMOVE_NOTIFY',
  UPDATE_NOTIFY: 'UPDATE_NOTIFY',
  UPDATE_SOUND: 'UPDATE_SOUND',
  DELETE_ALL_NOTIFIES: 'DELETE_ALL_NOTIFIES',
};

/* eslint-disable import/prefer-default-export */
export const createNotify = (props) => async (dispatch) => {
  const { auth, msg, socket } = props;
  try {
    const res = await postDataApi('notify', msg, auth.token);

    socket.emit('createNotify', {
      ...res.data.notify,
      user: {
        fullname: auth.user.fullname,
        avatar: auth.user.avatar,
      },
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

export const removeNotify = (props) => async (dispatch) => {
  const { auth, msg, socket } = props;
  try {
    await deleteDataApi(`notify/${msg.id}?url=${msg.url}`, auth.token);

    socket.emit('removeNotify', msg);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const getNotifies = (token) => async (dispatch) => {
  try {
    const res = await getDataApi('notifies', token);

    dispatch({ type: NOTIFY_TYPES.GET_NOTIFIES, payload: res.data.notifies });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const isReadNotify = (props) => async (dispatch) => {
  const { msg, auth } = props;
  dispatch({ type: NOTIFY_TYPES.UPDATE_NOTIFY, payload: { ...msg, isRead: true } });
  try {
    await patchDataApi(`/isReadNotify/${msg._id}`, null, auth.token);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const deleteAllNotifies = (token) => async (dispatch) => {
  dispatch({ type: NOTIFY_TYPES.DELETE_ALL_NOTIFIES, payload: [] });
  try {
    await deleteDataApi('deleteAllNotify', token);
  } catch (err) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};
