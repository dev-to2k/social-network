/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { MESS_TYPES } from 'redux/actions/messageAction';
import { follow, unFollow } from 'redux/actions/profileAction';
import { getSuggestions } from 'redux/actions/suggestionsAction';

export default function FollowButton({ user }) {
  const history = useHistory();
  const [followed, setFollowed] = useState(false);
  const [load, setLoad] = useState(false);

  const { auth, profile, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user.following.find((item) => item._id === user._id)) {
      setFollowed(true);
    }
    return () => setFollowed(false);
  }, [auth.user.following, user._id]);

  const handleFollow = async () => {
    if (load) return;
    setLoad(true);
    setFollowed(true);
    await dispatch(follow({ users: profile.users, user, auth, socket }));
    dispatch(getSuggestions(auth.token));
    setLoad(false);
  };

  const handleUnFollow = async () => {
    if (load) return;
    setFollowed(false);
    setLoad(true);
    await dispatch(unFollow({ users: profile.users, user, auth, socket }));
    dispatch(getSuggestions(auth.token));
    setLoad(false);
  };

  const onDirectToMessage = () => {
    dispatch({ type: MESS_TYPES.ADD_USER, payload: { ...user, text: '', media: [] } });
    return history.push(`/message/${user._id}`);
  };

  return (
    <>
      {followed ? (
        <div className="d-flex align-items-center" style={{ columnGap: '1rem' }}>
          <button type="button" className="btn btn-primary" onClick={onDirectToMessage}>
            Message
          </button>
          <button className="btn btn-outline-primary btn-sm fw-600" type="button" onClick={handleUnFollow}>
            <p className="mb-0 d-flex align-items-end">
              <span className="material-icons-outlined me-1">done</span>
              Bỏ theo dõi
            </p>
          </button>
        </div>
      ) : (
        <button className="btn btn-primary btn-sm" type="button" onClick={handleFollow}>
          <p className="mb-0 d-flex align-items-end">
            <span className="material-icons-outlined me-1">add</span>
            Theo dõi
          </p>
        </button>
      )}
    </>
  );
}
