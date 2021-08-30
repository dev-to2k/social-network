/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../UserCard';
import FollowButton from './FollowButton';

function Followers({ users, setShowFollowers }) {
  const { auth } = useSelector((state) => state);
  return (
    <div className="follow">
      <div className="follow_block p-3 shadow">
        <div className="d-flex justify-content-center align-items-center">
          <h4 className="mb-0">Người theo dõi</h4>
          <button
            className="btn btn-edit rounded-circle circle d-flex align-items-center justify-content-center position-absolute"
            style={{ right: '1rem' }}
            type="button"
            onClick={() => setShowFollowers(false)}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <hr />
        <ul>
          {users.map((user) => (
            <li className="rounded-2 d-flex justify-content-between" key={user._id}>
              <UserCard user={user} setShowFollowers={setShowFollowers} />
              <div className="p-3">{auth.user._id !== user._id && <FollowButton user={user} />}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Followers;
