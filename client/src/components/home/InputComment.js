/* eslint-disable react/prop-types */
import Icons from 'components/Icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { createComment } from 'redux/actions/commentAction';

function InputComment(props) {
  // eslint-disable-next-line react/prop-types
  const { post, children, onReply, setOnReply } = props;
  const [content, setContent] = useState('');
  const { auth, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      if (onReply) return setOnReply(false);
      return null;
    }

    setContent('');

    const newComment = {
      content,
      likes: [],
      user: auth.user,
      createdAt: new Date().toISOString(),
      reply: onReply && onReply.commentId,
      tag: onReply && onReply.user,
    };

    dispatch(createComment({ post, newComment, auth, socket }));

    if (onReply) return setOnReply(false);

    return null;
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="comment_input d-flex mb-1" onSubmit={handleSubmit}>
      {children}
      <div>
        <img src={auth.user.avatar} className="rounded-circle circle img-cover" alt="avatar" />
      </div>
      <div className="d-flex w-100 ps-3 pe-1">
        <TextareaAutosize
          placeholder="Nhập bình luận"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyPress={handleEnter}
        />
        <Icons setContent={setContent} content={content} />
      </div>
      <button type="submit" className="btn btn-primary fw-500" style={{ height: '34px' }}>
        Gửi
      </button>
    </form>
  );
}

export default InputComment;

InputComment.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};
