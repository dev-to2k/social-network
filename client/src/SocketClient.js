import audiobell from 'audio/client_src_audio_got-it-done-613.mp3';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBALTYPES } from 'redux/actions/globalTypes';
import { MESS_TYPES } from 'redux/actions/messageAction';
import { NOTIFY_TYPES } from 'redux/actions/notifyAction';
import { POST_TYPES } from 'redux/actions/postAction';

const spawnNotification = (body, icon, url, title) => {
  const options = {
    body,
    icon,
  };
  const n = new Notification(title, options);

  n.onclick = (e) => {
    e.preventDefault();
    window.open(url, '_blank');
  };
};

function SocketClient() {
  const { auth, socket, notify, online, call } = useSelector((state) => state);
  const dispatch = useDispatch();

  const audioRef = useRef();

  // joinUser
  useEffect(() => {
    socket.emit('joinUser', auth.user);
  }, [auth.user, socket]);

  // Like
  useEffect(() => {
    socket.on('likePostToClient', (newPost) => {
      dispatch({
        type: POST_TYPES.UPDATE_POST,
        payload: newPost,
      });
    });

    return () => socket.off('likePostToClient');
  }, [socket, dispatch]);

  // unLike
  useEffect(() => {
    socket.on('unLikePostToClient', (newPost) => {
      dispatch({
        type: POST_TYPES.UPDATE_POST,
        payload: newPost,
      });
    });

    return () => socket.off('unLikePostToClient');
  }, [socket, dispatch]);

  // Create comment
  useEffect(() => {
    socket.on('createCommentToClient', (newPost) => {
      dispatch({
        type: POST_TYPES.UPDATE_POST,
        payload: newPost,
      });
    });

    return () => socket.off('createCommentToClient');
  }, [socket, dispatch]);

  // Delete comment
  useEffect(() => {
    socket.on('deleteCommentToClient', (newPost) => {
      dispatch({
        type: POST_TYPES.UPDATE_POST,
        payload: newPost,
      });
    });

    return () => socket.off('deleteCommentToClient');
  }, [socket, dispatch]);

  // Like comment
  useEffect(() => {
    socket.on('likeCommentToClient', (newPost) => {
      dispatch({
        type: POST_TYPES.UPDATE_POST,
        payload: newPost,
      });
    });

    return () => socket.off('likeCommentToClient');
  }, [socket, dispatch]);

  // UnLike comment
  useEffect(() => {
    socket.on('unLikeCommentToClient', (newPost) => {
      dispatch({
        type: POST_TYPES.UPDATE_POST,
        payload: newPost,
      });
    });

    return () => socket.off('unLikeCommentToClient');
  }, [socket, dispatch]);

  // Follow
  useEffect(() => {
    socket.on('followToClient', (newUser) => {
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          ...auth,
          user: newUser,
        },
      });
    });

    return () => socket.off('followToClient');
  }, [socket, dispatch]);

  // Unfollow
  useEffect(() => {
    socket.on('unFollowToClient', (newUser) => {
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          ...auth,
          user: newUser,
        },
      });
    });

    return () => socket.off('unFollowToClient');
  }, [socket, dispatch]);

  // Create notify
  useEffect(() => {
    socket.on('createNotifyToClient', (msg) => {
      dispatch({
        type: NOTIFY_TYPES.CREATE_NOTIFY,
        payload: msg,
      });

      if (notify.sound) audioRef.current.play();
      spawnNotification(`${msg.user.fullname} ${msg.text}`, msg.user.avatar, msg.url, 'T-NETWORK');
    });

    return () => socket.off('createNotifyToClient');
  }, [socket, dispatch, notify.sound]);

  // Remove notify
  useEffect(() => {
    socket.on('removeNotifyToClient', (msg) => {
      dispatch({
        type: NOTIFY_TYPES.REMOVE_NOTIFY,
        payload: msg,
      });
    });

    return () => socket.off('removeNotifyToClient');
  }, [socket, dispatch]);

  // Message
  useEffect(() => {
    socket.on('addMessageToClient', (msg) => {
      dispatch({ type: MESS_TYPES.ADD_MESSAGE, payload: msg });

      dispatch({
        type: MESS_TYPES.ADD_USER,
        payload: {
          ...msg.user,
          text: msg.text,
          media: msg.media,
        },
      });
    });
  }, [socket, dispatch]);

  // Check User Online / Offline
  useEffect(() => {
    socket.emit('checkUserOnline', auth.user);
  }, [socket, auth.user]);

  useEffect(() => {
    socket.on('checkUserOnlineToMe', (data) => {
      data.forEach((item) => {
        if (!online.includes(item.id)) {
          dispatch({ type: GLOBALTYPES.ONLINE, payload: item.id });
        }
      });
    });
    return () => socket.off('checkUserOnlineToMe');
  }, [socket, dispatch, online]);

  useEffect(() => {
    socket.on('checkUserOnlineToClient', (id) => {
      if (!online.includes(id)) {
        dispatch({ type: GLOBALTYPES.ONLINE, payload: id });
      }
    });
    return () => socket.off('checkUserOnlineToClient');
  }, [socket, dispatch, online]);

  // Check User Offline
  useEffect(() => {
    socket.on('CheckUserOffline', (id) => {
      dispatch({ type: GLOBALTYPES.OFFLINE, payload: id });
    });

    return () => socket.off('CheckUserOffline');
  }, [socket, dispatch]);

  // Call User
  useEffect(() => {
    socket.on('callUserToClient', (data) => {
      dispatch({ type: GLOBALTYPES.CALL, payload: data });
    });

    return () => socket.off('callUserToClient');
  }, [socket, dispatch]);

  useEffect(() => {
    socket.on('userBusy', () => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { error: `${call.fullname} is busy!` } });
    });

    return () => socket.off('userBusy');
  }, [socket, dispatch, call]);

  return (
    <>
      <audio controls ref={audioRef} className="d-none">
        <track kind="captions" />
        <source src={audiobell} type="audio/mp3" />
      </audio>
    </>
  );
}

export default SocketClient;
