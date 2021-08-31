/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import CommentDisplay from './comments/CommentDisplay';

function Comments({ post }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState([]);
  const [next, setNext] = useState(2);
  const [replyComments, setReplyComments] = useState([]);

  useEffect(() => {
    const newCmt = post.comments.filter((cmt) => !cmt.reply);
    setComments(newCmt);
    setShowComments(newCmt.slice(newCmt.length - next));
  }, [post.comments, next]);

  useEffect(() => {
    const newReply = post.comments.filter((cmt) => cmt.reply);
    setReplyComments(newReply);
  }, [post.comments]);

  return (
    <div className="comments">
      {comments.length - next > 0 ? (
        <button type="button" className="text-secondary hover-underline mb-3" onClick={() => setNext(next + 10)}>
          <span className="fw-600">Xem thêm bình luận...</span>
        </button>
      ) : (
        comments.length > 2 && (
          <button type="button" className="text-secondary hover-underline mb-3" onClick={() => setNext(2)}>
            <span className="fw-600">Ẩn bình luận</span>
          </button>
        )
      )}
      {showComments.map((comment) => (
        <CommentDisplay
          key={comment._id}
          comment={comment}
          post={post}
          replyCmt={replyComments.filter((item) => item.reply === comment._id)}
        />
      ))}
    </div>
  );
}

export default Comments;
