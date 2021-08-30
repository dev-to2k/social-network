/* eslint-disable no-empty */
/* eslint-disable no-alert */
import CallModal from 'components/message/CallModal';
import Peer from 'peerjs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GLOBALTYPES } from 'redux/actions/globalTypes';
import { getNotifies } from 'redux/actions/notifyAction';
import { getSuggestions } from 'redux/actions/suggestionsAction';
import { io } from 'socket.io-client';
import SocketClient from 'SocketClient';
import Alert from './components/alert/Alert';
import Header from './components/header/Header';
import StatusModal from './components/StatusModal';
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { refreshToken } from './redux/actions/authAction';
import { getPosts } from './redux/actions/postAction';

function App() {
  const { auth, status, call } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());

    const socket = io();

    dispatch({
      type: GLOBALTYPES.SOCKET,
      payload: socket,
    });

    return () => socket.close();
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
      dispatch(getSuggestions(auth.token));
      dispatch(getNotifies(auth.token));
    }
  }, [dispatch, auth.token]);

  useEffect(() => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
        }
      });
    }
  }, []);

  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/',
      secure: true,
    });

    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer });
  }, [dispatch]);

  return (
    <Router>
      <Alert />
      {auth.token && <Header />}
      {status && <StatusModal />}
      {auth.token && <SocketClient />}
      {call && <CallModal />}

      <Route exact path="/" component={auth.token ? Home : Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <PrivateRouter exact path="/:page" component={PageRender} />
      <PrivateRouter exact path="/:page/:id" component={PageRender} />
    </Router>
  );
}

export default App;
