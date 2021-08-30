/* eslint-disable comma-dangle */
import UserCard from 'components/UserCard';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { GLOBALTYPES } from 'redux/actions/globalTypes';
import { getConversations, MESS_TYPES } from 'redux/actions/messageAction';
import { getDataApi } from 'utils/fetchData';

function LeftSide() {
  const [search, setSearch] = useState('');
  const [searchUsers, setSearchUsers] = useState([]);

  const { auth, message, online } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();

  const pageEnd = useRef();
  const [page, setPage] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search) return setSearchUsers([]);

    try {
      const res = await getDataApi(`search?username=${search}`, auth.token);
      setSearchUsers(res.data.users);
    } catch (error) {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } });
    }

    return null;
  };

  const handleAddUser = (user) => {
    setSearch('');
    setSearchUsers([]);
    dispatch({ type: MESS_TYPES.ADD_USER, payload: { ...user, text: '', media: [] } });
    return history.push(`/message/${user._id}`);
  };

  const isActive = (user) => {
    if (id === user._id) return 'active';
    return '';
  };

  useEffect(() => {
    if (message.firstLoad) return;
    dispatch(getConversations({ auth }));
  }, [dispatch, auth, message.firstLoad]);

  // Load more
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((p) => p + 1);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(pageEnd.current);
  }, [setPage]);

  useEffect(() => {
    if (message.resultUsers >= (page - 1) * 9 && page > 1) {
      dispatch(getConversations({ auth, page }));
    }
  }, [message.resultUsers, page, auth, dispatch]);

  // Check User Online - Offline
  useEffect(() => {
    if (message.firstLoad) {
      dispatch({ type: MESS_TYPES.CHECK_ONLINE_OFFLINE, payload: online });
    }
  }, [online, message.firstLoad, dispatch]);

  return (
    <>
      <form className="message_header d-flex px-2" onSubmit={handleSearch}>
        <div className="search-input">
          <input
            type="text"
            placeholder="Nhập để tìm kiếm..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="icon">
            <button type="submit">
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>
      </form>

      <div className="message_chat_list">
        {searchUsers.length !== 0 ? (
          <>
            {searchUsers.map((user) => (
              <div key={user._id} className={`list_user_chat message_user rounded-3 m-2 pointer ${isActive(user)}`}>
                <Link to={`/message/${user._id}`} className="w-100" onClick={() => handleAddUser(user)}>
                  <UserCard user={user} />
                </Link>
              </div>
            ))}
          </>
        ) : (
          <>
            {message.users.map((user) => (
              <div key={user._id} className={`list_user_chat message_user rounded-3 m-2 pointer ${isActive(user)}`}>
                <Link to={`/message/${user._id}`} className="w-100" onClick={() => handleAddUser(user)}>
                  <UserCard user={user} msg>
                    {user.online ? (
                      <i className="fas fa-circle text-success" />
                    ) : (
                      auth.user.following.find((item) => item._id === user._id) && <i className="fas fa-circle" />
                    )}
                  </UserCard>
                </Link>
              </div>
            ))}
          </>
        )}

        <button type="button" ref={pageEnd} style={{ opacity: 0 }}>
          Load more
        </button>
      </div>
    </>
  );
}

export default LeftSide;
