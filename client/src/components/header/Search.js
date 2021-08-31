/* eslint-disable operator-linebreak */
import LoadIcon from 'images/loading.gif';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GLOBALTYPES } from 'redux/actions/globalTypes';
import { getDataApi } from 'utils/fetchData';
import UserCard from '../UserCard';

export default function Search() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;

    try {
      setLoad(true);
      const res = await getDataApi(`search?username=${search}`, auth.token);
      setUsers(res.data.users);
      setLoad(false);
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }
  };

  const handleClose = () => {
    setSearch('');
    setUsers([]);
  };

  return (
    <form className="d-flex" onSubmit={handleSearch}>
      <div className="search-input">
        <input
          type="text"
          placeholder="Nhập để tìm kiếm..."
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase().replace(/ /g, ''));
          }}
        />
        <div className="icon">
          <button type="submit">
            <span className="material-icons">search</span>
          </button>
        </div>

        {load && <img src={LoadIcon} alt="avatar" className="load" />}

        <div className="users shadow rounded">
          {search &&
            users.map((user) => (
              <Link key={user._id} to={`/profile/${user._id}`} onClick={handleClose}>
                <UserCard user={user} />
              </Link>
            ))}
        </div>
      </div>
    </form>
  );
}
