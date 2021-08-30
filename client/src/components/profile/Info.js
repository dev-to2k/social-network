import LoadIcon from 'images/loading.gif';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import EditAvatar from '../EditAvatar';
import FollowButton from '../follow/FollowButton';
import Followers from '../follow/Followers';
import Following from '../follow/Following';
import EditProfile from './EditProfile';
import Posts from './Posts';
import Saved from './Saved';

export default function Info(props) {
  const { auth, profile, dispatch, id } = props;

  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [formChangeAvatar, setFormChangeAvatar] = useState(false);

  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [saveTab, setSaveTab] = useState(false);

  useEffect(() => {
    if (id === auth.user._id) {
      setUserData([auth.user]);
    } else {
      const newData = profile.users.filter((user) => user._id === id);
      setUserData(newData);
    }
  }, [id, auth.user, profile.users]);

  return (
    <div className="info">
      {userData.map((user) => (
        <div className="info__container" key={user._id}>
          <div className="info__content w-100">
            <div className="info__content__title bg-white shadow-sm">
              <div className="container px-0">
                <div className="position-relative edit-avatar mb-3">
                  <div className="block-avatar">
                    <img src={user.avatar} width="168" className="img-fluid" alt="avatar" />
                  </div>
                  {user._id === auth.user._id ? (
                    <button
                      type="button"
                      className="btn btn-edit d-flex justify-content-center align-items-center rounded-circle circle"
                      onClick={() => setFormChangeAvatar(true)}
                    >
                      <span className="material-icons">photo_camera</span>
                    </button>
                  ) : (
                    ''
                  )}
                </div>
                {formChangeAvatar && <EditAvatar user={user} setFormChangeAvatar={setFormChangeAvatar} />}
                <div className="container-fluid mw-878">
                  <h1>{user.fullname}</h1>
                  <hr className="mb-0" />
                  <div className="row mx-auto fs-14 py-2">
                    <div className="col col-lg-6 col-md-6 col-sm-12 ps-0 d-none d-sm-block">
                      {auth.user._id === id && (
                        <ul className="tab align-items-center mb-0">
                          <button
                            type="button"
                            className={saveTab ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2'}
                            onClick={() => setSaveTab(false)}
                          >
                            <span> Bài viết</span>
                          </button>
                          <button
                            type="button"
                            className={saveTab ? 'btn btn-outline-primary' : 'btn btn-primary'}
                            onClick={() => setSaveTab(true)}
                          >
                            <span>Bài viết đã lưu</span>
                          </button>
                        </ul>
                      )}
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-12 pe-0 setting-profile">
                      {user._id === auth.user._id ? (
                        <div className="d-flex h-100 align-items-center justify-content-end">
                          <button type="button" className="btn btn-edit fw-600">
                            <p className="mb-0 d-flex align-items-end">
                              <span className="material-icons-outlined">more_horiz</span>
                            </p>
                          </button>
                        </div>
                      ) : (
                        <div className="d-flex h-100 align-items-center justify-content-end profile-follow">
                          <FollowButton user={user} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="info__content__body mw-878 container mt-4">
              {profile.loading ? (
                <img className="d-block mx-auto" src={LoadIcon} alt="loading" />
              ) : (
                <>
                  {saveTab ? (
                    <Saved auth={auth} dispatch={dispatch} />
                  ) : (
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="rounded-10 bg-white p-3 shadow-sm border">
                          <h2 className="fw-bold fs-5">Giới thiệu</h2>
                          <div className="d-flex mb-3">
                            <span className="material-icons-outlined me-2 text-secondary">account_circle</span>
                            <span>{user.fullname}</span>
                          </div>
                          <div className="d-flex mb-3">
                            <span className="material-icons-outlined text-secondary me-2">public</span>
                            <span>{user.address}</span>
                          </div>
                          <div className="d-flex mb-3">
                            <span className="material-icons-outlined me-2 text-secondary">contact_mail</span>
                            <span>{user.email}</span>
                          </div>
                          <div className="d-flex mb-3">
                            <span className="material-icons-outlined me-2 text-secondary">people</span>
                            <span>
                              Đang theo dõi{' '}
                              <strong
                                role="button"
                                className="hover-underline"
                                tabIndex={0}
                                onClick={() => setShowFollowing(true)}
                                onKeyDown={() => setShowFollowing(true)}
                              >
                                {user.following.length}
                              </strong>{' '}
                              người
                            </span>
                          </div>
                          <div className="d-flex mb-3">
                            <span className="material-icons-outlined me-2 text-secondary">rss_feed</span>
                            <span>
                              Có{' '}
                              <strong
                                role="button"
                                className="hover-underline"
                                tabIndex={0}
                                onClick={() => setShowFollowers(true)}
                                onKeyDown={() => setShowFollowers(true)}
                              >
                                {user.followers.length}
                              </strong>{' '}
                              người theo dõi
                            </span>
                          </div>
                          <div className="d-flex mb-3">
                            <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-wrap">
                              {user.website}
                            </a>
                          </div>
                          <div className="d-flex mb-3">
                            <span className="material-icons-outlined me-2 text-secondary">auto_stories</span>
                            {user.story}
                          </div>
                          {user._id === auth.user._id ? (
                            <button type="button" className="btn btn-edit fw-600 w-100" onClick={() => setEdit(true)}>
                              Chỉnh sửa chi tiết
                            </button>
                          ) : (
                            ''
                          )}

                          {edit && <EditProfile user={user} setOnEdit={setEdit} />}
                        </div>
                        <p className="text-center mt-3">Thanh Trung - Admin</p>
                      </div>
                      <div className="w-100" />
                      <div className="col-lg-12 col-md-12">
                        <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          {showFollowers && <Followers users={user.followers} setShowFollowers={setShowFollowers} />}
          {showFollowing && <Following users={user.following} setShowFollowing={setShowFollowing} />}
        </div>
      ))}
    </div>
  );
}

Info.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
  profile: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
