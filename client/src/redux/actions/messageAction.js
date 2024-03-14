import { deleteDataApi, getDataApi, postDataApi } from 'utils/fetchData';
import { DeleteData, GLOBALTYPES } from './globalTypes';

export const MESS_TYPES = {
  ADD_USER: 'ADD_USER',
  ADD_MESSAGE: 'ADD_MESSAGE',
  GET_CONVERSATIONS: 'GET_CONVERSATIONS',
  GET_MESSAGES: 'GET_MESSAGES',
  UPDATE_MESSAGES: 'UPDATE_MESSAGES',
  DELETE_MESSAGES: 'DELETE_MESSAGES',
  DELETE_CONVERSATION: 'DELETE_CONVERSATION',
  CHECK_ONLINE_OFFLINE: 'CHECK_ONLINE_OFFLINE',
  GET_BOTS: 'GET_BOTS',
};

export const addMessage = (props) => async (dispatch) => {
  const { msg, auth, socket } = props;
  dispatch({ type: MESS_TYPES.ADD_MESSAGE, payload: msg });

  const { _id, avatar, fullname, username } = auth.user;
  socket.emit('addMessage', { ...msg, user: { _id, avatar, fullname, username } });

  try {
    await postDataApi('message', msg, auth.token);
  } catch (err) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};
export const addAIMessage = (props) => async (dispatch) => {
  const { msg, auth, socket } = props;
  dispatch({ type: MESS_TYPES.ADD_MESSAGE, payload: msg });

  const aiBot = {
    _id: '65f18a919b40fc18f05dc02a',
    avatar: 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png',
    fullname: 'T-kun Thông Thái',
    username: 'tkunopenai',
  };
  const { _id, avatar, fullname, username } = aiBot;
  socket.emit('addMessage', { ...msg, user: { _id, avatar, fullname, username } });

  try {
    await postDataApi('message', msg, auth.token);
  } catch (err) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};

export const getConversations = (props) => async (dispatch) => {
  const { auth, page = 1 } = props;
  try {
    const res = await getDataApi(`conversations?limit=${page * 9}`, auth.token);

    const newArr = [];
    res.data.conversations.forEach((item) => {
      item.recipients.forEach((cv) => {
        if (cv._id !== auth.user._id) {
          newArr.push({ ...cv, text: item.text, media: item.media, call: item.call });
        }
      });
    });

    dispatch({
      type: MESS_TYPES.GET_CONVERSATIONS,
      payload: { newArr, result: res.data.result },
    });
  } catch (err) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};

export const getMessages = (props) => async (dispatch) => {
  const { auth, id, page = 1 } = props;
  try {
    const res = await getDataApi(`message/${id}?limit=${page * 9}`, auth.token);
    const newData = { ...res.data, messages: res.data.messages.reverse() };

    dispatch({ type: MESS_TYPES.GET_MESSAGES, payload: { ...newData, _id: id, page } });
  } catch (err) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};

export const loadMoreMessages = (props) => async (dispatch) => {
  const { auth, id, page = 1 } = props;
  try {
    const res = await getDataApi(`message/${id}?limit=${page * 9}`, auth.token);
    const newData = { ...res.data, messages: res.data.messages.reverse() };

    dispatch({ type: MESS_TYPES.UPDATE_MESSAGES, payload: { ...newData, _id: id, page } });
  } catch (err) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } });
  }
};

export const deleteMessages = (props) => async (dispatch) => {
  const { msg, auth, data } = props;
  const newData = DeleteData(data, msg._id);
  dispatch({ type: MESS_TYPES.DELETE_MESSAGES, payload: { newData, _id: msg.recipient } });

  try {
    await deleteDataApi(`message/${msg._id}`, auth.token);
  } catch (error) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } });
  }
};

export const deleteConversation = (props) => async (dispatch) => {
  const { auth, id } = props;
  dispatch({ type: MESS_TYPES.DELETE_CONVERSATION, payload: id });
  try {
    await deleteDataApi(`conversation/${id}`, auth.token);
  } catch (error) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } });
  }
};
