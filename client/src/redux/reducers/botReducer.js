import { BOT_TYPES } from 'redux/actions/botAction';
import { MESS_TYPES } from 'redux/actions/messageAction';

const initialState = {
  activeBot: {},
  wiseTkun: {
    _id: '65f197639b40fc18f05dc08e',
    avatar: 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png',
    fullname: 'T-kun Thông Thái',
    username: 'tkunopenai',
  },
  isBotChat: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BOT_TYPES.GET_ACTIVE_BOT:
      return { ...state, activeBot: payload, isBotChat: true };
    case BOT_TYPES.SET_IS_BOT_CHAT:
      return { ...state, activeBot: payload.activeBot, isBotChat: payload.isBotChat };
    default:
      return state;
  }
};
