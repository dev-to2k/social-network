import LikeButton from 'components/LikeButton';
import ShareModal from 'components/ShareModal';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { likePost, savePost, unLikePost, unSavePost } from 'redux/actions/postAction';
import { BASE_URL } from 'utils/config';

function CardFooter({ post }) {
  const [isLike, setIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [saved, setSaved] = useState(false);
  const [saveLoad, setSaveLoad] = useState(false);

  useEffect(() => {
    if (post.likes.find((like) => like._id === auth.user._id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [post.likes, auth.user._id]);

  const handleLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(likePost({ auth, post, socket }));
    setLoadLike(false);
  };

  const handleUnLike = async () => {
    if (loadLike) return;

    setLoadLike(true);
    await dispatch(unLikePost({ auth, post, socket }));
    setLoadLike(false);
  };

  // Saved
  useEffect(() => {
    if (auth.user.saved.find((id) => id === post._id)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [auth.user.saved, post._id]);

  const handleSave = async () => {
    if (saveLoad) return;

    setSaveLoad(true);
    dispatch(savePost({ post, auth }));
    setSaveLoad(false);
  };

  const handleUnSave = async () => {
    if (saveLoad) return;

    setSaveLoad(true);
    dispatch(unSavePost({ post, auth }));
    setSaveLoad(false);
  };

  return (
    <div className="card_footer">
      <div className="card_icon_menu fs-20 align-items-center d-flex justify-content-between pb-3 border-bottom mb-3">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-5 pointer">
            <LikeButton isLike={isLike} handleLike={handleLike} handleUnLike={handleUnLike} />
            <strong>{post.likes.length}</strong>
          </div>
          <Link to={`/post/${post._id}`} className="text-dark me-5 d-flex align-items-center pointer">
            <i className="far fa-comment-dots me-2" />
            <strong className="text-dark">{post.comments.length}</strong>
          </Link>
          <div className="dropdown pointer">
            <button
              type="button"
              onClick={() => setIsShare(!isShare)}
              data-bs-toggle="dropdown"
              id="dropdownMenuButton1"
            >
              <i className="far fa-share-square" />
            </button>
            <ul className="dropdown-menu shadow rounded-10 border-0 px-2" aria-labelledby="dropdownMenuButton1">
              <li className="rounded-3">{isShare && <ShareModal url={`${BASE_URL}/post/${post._id}`} />}</li>
            </ul>
          </div>
        </div>
        {saved ? (
          <button type="button" onClick={handleUnSave}>
            <i className="fas fa-bookmark me-0 text-danger" />
          </button>
        ) : (
          <button type="button" onClick={handleSave}>
            <i className="far fa-bookmark me-0" />
          </button>
        )}
      </div>
    </div>
  );
}

export default CardFooter;

CardFooter.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};
