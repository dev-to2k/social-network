import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import call from './callReducer';
import discover from './discoverReducer';
import message from './messageReducer';
import notify from './notifyReducer';
import online from './onlineReducer';
import peer from './peerReducer';
import postDetails from './postDetailsReducer';
import homePosts from './postReducer';
import profile from './profileReducer';
import socket from './socketReducer';
import status from './statusReducer';
import suggestions from './suggestionsReducer';

export default combineReducers({
  auth,
  alert,
  profile,
  status,
  homePosts,
  postDetails,
  discover,
  suggestions,
  socket,
  notify,
  message,
  online,
  call,
  peer,
});
