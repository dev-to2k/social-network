/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { follow, unFollow } from 'redux/actions/profileAction';

export default function FollowButton({ user }) {
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
    setFollowed(true);
    setLoad(true);
    await dispatch(follow({ users: profile.users, user, auth, socket }));
    setLoad(false);
  };

  const handleUnFollow = async () => {
    if (load) return;
    setFollowed(false);
    setLoad(true);
    await dispatch(unFollow({ users: profile.users, user, auth, socket }));
    setLoad(false);
  };

  return (
    <>
      {followed ? (
        <button className="btn btn-outline-primary btn-sm fw-600" type="button" onClick={handleUnFollow}>
          <p className="mb-0 d-flex align-items-end">
            <span className="material-icons-outlined me-1">done</span>
            Bỏ theo dõi
          </p>
        </button>
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
