/* eslint-disable comma-dangle */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable no-useless-return */
/* eslint-disable react/no-array-index-key */
import Icons from 'components/Icons';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { GLOBALTYPES } from 'redux/actions/globalTypes';
import {
  addAIMessage,
  addMessage,
  deleteConversation,
  getMessages,
  loadMoreMessages,
} from 'redux/actions/messageAction';
import { imageUpload } from 'utils/imageUpload';
import { imageShow, videoShow } from 'utils/mediaShow';
import { getDataApi, postDataApi } from 'utils/fetchData';
import { BOT_TYPES, getActiveBot } from 'redux/actions/botAction';
import MsgDisplay from './MsgDisplay';

const AiChatContainer = () => {
  const { auth, message, theme, socket, peer, bot } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const { activeBot, wiseTkun } = bot;
  const aiId = activeBot ? activeBot._id : wiseTkun._id;

  const [user, setUser] = useState([]);
  const [text, setText] = useState('');
  const [media, setMedia] = useState([]);
  const [loadMedia, setLoadMedia] = useState(false);

  const refDisplay = useRef();
  const pageEnd = useRef();

  const [data, setData] = useState([]);
  const [result, setResult] = useState(9);
  const [page, setPage] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const newData = message.data.find((item) => item._id === id);
    if (newData) {
      setData(newData.messages);
      setResult(newData.result);
      setPage(newData.page);
    }
  }, [message.data, id]);

  useEffect(() => {
    if (id && message.users.length > 0) {
      setTimeout(() => {
        refDisplay.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 50);

      const newUser = message.users.find((user) => user._id === id);
      if (newUser) setUser(newUser);
    }
  }, [message.users, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setText('');

    const msg = {
      sender: auth.user._id,
      recipient: id,
      text,
      media: [],
      createdAt: new Date().toISOString(),
    };

    await dispatch(addMessage({ msg, auth, socket }));

    try {
      const response = await postDataApi('aiChat', { text, activeChatId: auth.user._id }, auth.token);
      const msg = {
        sender: aiId,
        recipient: auth.user._id,
        text: response.data.completion,
        media: [],
        createdAt: new Date().toISOString(),
      };
      dispatch(addMessage({ msg, auth, socket }));
    } catch (error) {
      console.log(error);
    }

    if (refDisplay.current) {
      refDisplay.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useEffect(() => {
    const getMessagesData = async () => {
      if (message.data.every((item) => item._id !== id)) {
        await dispatch(getMessages({ auth, id }));
        setTimeout(() => {
          refDisplay.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 50);
      }
    };
    getMessagesData();
  }, [id, dispatch, auth, message.data]);

  // Load More
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoadMore((p) => p + 1);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(pageEnd.current);
  }, [setIsLoadMore]);

  useEffect(() => {
    if (isLoadMore > 1) {
      if (result >= page * 9) {
        dispatch(loadMoreMessages({ auth, id, page: page + 1 }));
        setIsLoadMore(1);
      }
    }
  }, [isLoadMore]);

  const handleDeleteConversation = () => {
    if (window.confirm('Bạn có muốn xoá tin nhắn?')) {
      dispatch(deleteConversation({ auth, id }));
      dispatch({ type: BOT_TYPES.SET_IS_BOT_CHAT, payload: { isBotChat: false, activeBot: {} } });
      return history.push('/message');
    }
    return null;
  };

  return (
    <>
      <div className="message_header" style={{ cursor: 'pointer' }}>
        <div className="d-flex align-items-center justify-content-between p-3 w-100">
          <div>
            <div className="text-dark hover-underline">
              <img src={user.avatar} className="img-cover rounded-circle circle me-2" alt="avatar" />
              <span className="fw-600">{user.fullname}</span>
            </div>
          </div>
          <div>
            <i className="fas fa-trash text-danger" onClick={handleDeleteConversation} />
          </div>
        </div>
      </div>

      <div className="chat_container" style={{ height: media.length > 0 ? 'calc(100% - 180px)' : '' }}>
        <div className="chat_display" ref={refDisplay}>
          <button type="button" style={{ marginTop: '-25px', opacity: 0 }} ref={pageEnd}>
            Load more
          </button>
          {data.map((msg, index) => (
            <div key={index}>
              {msg.sender !== auth.user._id && (
                <div className="chat_row other_message">
                  <MsgDisplay user={user} msg={msg} theme={theme} />
                </div>
              )}

              {msg.sender === auth.user._id && (
                <div className="chat_row you_message">
                  <MsgDisplay user={auth.user} msg={msg} theme={theme} data={data} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <form className="chat_input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tin nhắn của bạn..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            filter: theme ? 'invert(1)' : 'invert(0)',
            background: theme ? '#040404' : '',
            color: theme ? 'white' : '',
          }}
        />

        <Icons setContent={setText} content={text} theme={theme} />

        <button type="submit" className="material-icons" disabled={!(text || media.length > 0)}>
          near_me
        </button>
      </form>
    </>
  );
};

export default AiChatContainer;
