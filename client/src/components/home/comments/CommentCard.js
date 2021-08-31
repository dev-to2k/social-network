/* eslint-disable react/prop-types */
import LikeComment from 'components/LikeComment';
import Reacts from 'components/Reacts';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { likeComment, unLikeComment, updateComment } from 'redux/actions/commentAction';
import InputComment from '../InputComment';
import CommentMenu from './CommentMenu';

function CommentCard({ comment, post, commentId, children }) {
  const [content, setContent] = useState('');
  const [readMore, setReadMore] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [loadLike, setLoadLike] = useState(false);
  const [onReply, setOnReply] = useState(false);

  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setContent(comment.content);
    setIsLike(false);
    setOnReply(false);
    if (comment.likes.find((like) => like._id === auth.user._id)) {
      setIsLike(true);
    }
  }, [comment, auth.user._id]);

  const handleUpdate = () => {
    if (comment.content !== content) {
      dispatch(updateComment({ comment, post, content, auth }));
      setOnEdit(false);
    } else {
      setOnEdit(false);
    }
  };

  const handleLike = async () => {
    if (loadLike) return;
    setIsLike(true);

    setLoadLike(true);
    await dispatch(likeComment({ comment, post, auth, socket }));
    setLoadLike(false);
  };

  const handleUnLike = async () => {
    if (loadLike) return;
    setIsLike(false);

    setLoadLike(true);
    await dispatch(unLikeComment({ comment, post, auth, socket }));
    setLoadLike(false);
  };

  const handleReply = () => {
    if (onReply) return setOnReply(false);
    setOnReply({ ...comment, commentId });
    return null;
  };

  const styleCard = {
    opacity: comment._id ? 1 : 0.5,
    pointerEvents: comment._id ? 'inherit' : 'none',
  };

  const widthFull = {
    width: '100%',
  };

  const widthNormal = {
    width: 'auto',
  };

  return (
    <>
      <div className="comment_card d-flex" style={styleCard}>
        <Link to={`/profile/${comment.user._id}`}>
          <img src={comment.user.avatar} className="img-cover rounded-circle circle" alt="avatar" />
        </Link>
        <div className="comment_content ms-3 w-100">
          <div className="d-flex mb-1">
            <div style={onEdit ? widthFull : widthNormal}>
              <div className="mb-1 d-flex">
                <div className="top p-3" style={onEdit ? widthFull : widthNormal}>
                  <Link to={`/profile/${comment.user._id}`} className="text-dark hover-underline">
                    <h6>{comment.user.username}</h6>
                  </Link>
                  <div className="flex-fill text-wrap">
                    {onEdit ? (
                      <TextareaAutosize value={content} onChange={(e) => setContent(e.target.value)} autoFocus />
                    ) : (
                      <>
                        {comment.tag && comment.tag._id !== comment.user._id && (
                          <Link to={`profile/${comment.tag._id}`} className="me-1">
                            @{comment.tag.username}
                          </Link>
                        )}
                        <span>
                          {content.length < 100 ? content : readMore ? `${content} ` : `${content.slice(0, 100)}... `}
                        </span>
                        {content.length > 100 && (
                          <button
                            type="button"
                            className="text-primary pointer hover-underline"
                            onClick={() => setReadMore(!readMore)}
                          >
                            {readMore ? 'Ẩn đi' : 'Xem thêm'}
                          </button>
                        )}
                      </>
                    )}
                  </div>
                  {comment.likes.length > 0 && (
                    <div className="react d-flex bg-white rounded-pill shadow px-1">
                      <Reacts />
                      <strong className="mx-2">{comment.likes.length}</strong>
                    </div>
                  )}
                </div>
                <CommentMenu post={post} comment={comment} setOnEdit={setOnEdit} />
              </div>
              <div className="d-flex">
                {onEdit ? (
                  <>
                    <button onClick={handleUpdate} type="button">
                      <small className="me-3 fw-bold text-secondary reply">Cập nhật</small>
                    </button>
                    <button onClick={() => setOnEdit(false)} type="button">
                      <small className="me-3 fw-bold text-secondary reply">Huỷ bỏ</small>
                    </button>
                  </>
                ) : (
                  <>
                    <LikeComment isLike={isLike} handleLike={handleLike} handleUnLike={handleUnLike} />
                    <button onClick={handleReply} type="button">
                      <small className="me-3 fw-bold text-secondary reply">{onReply ? 'Huỷ bỏ' : 'Phản hồi'}</small>
                    </button>
                  </>
                )}
                <small className="text-secondary pointer">{moment(comment.createdAt).fromNow()}</small>
              </div>
            </div>
          </div>
          {children}
          {onReply && (
            <div className="mt-3">
              <InputComment post={post} onReply={onReply} setOnReply={setOnReply} />
              <small className="fw-bold text-muted">
                Phản hồi:{' '}
                <Link to={`profile/${onReply.user._id}`} className="me-3 fs-14">
                  @{onReply.user.fullname}:
                </Link>
              </small>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CommentCard;

CommentCard.propTypes = {
  comment: PropTypes.shape({
    likes: PropTypes.arrayOf(PropTypes.object).isRequired,
    content: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    user: PropTypes.objectOf(PropTypes.any),
    tag: PropTypes.objectOf(PropTypes.any),
    createdAt: PropTypes.string.isRequired,
  }).isRequired,

  post: PropTypes.objectOf(PropTypes.any).isRequired,
  commentId: PropTypes.string.isRequired,
};
