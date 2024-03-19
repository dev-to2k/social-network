import { getDataApi } from 'utils/fetchData';
import { GLOBALTYPES } from './globalTypes';

export const BOT_TYPES = {
  ADD_ACTIVE_BOT: 'ADD_ACTIVE_BOT',
  GET_ACTIVE_BOT: 'GET_ACTIVE_BOT',
  SET_IS_BOT_CHAT: 'SET_IS_BOT_CHAT',
};
export const getActiveBot = (props) => async (dispatch) => {
  const { auth, id } = props;

  try {
    const res = (await getDataApi(`bot/${id}`, auth.token)).data.user;
    dispatch({ type: BOT_TYPES.GET_ACTIVE_BOT, payload: res });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};
