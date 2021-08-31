/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

function CommentDisplay({ comment, post, replyCmt }) {
  const [showReply, setShowReply] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    setShowReply(replyCmt.slice(replyCmt.length - next));
  }, [replyCmt, next]);

  return (
    <>
      <div className="comment_display">
        <CommentCard comment={comment} post={post} commentId={comment._id}>
          <div className="mt-3">
            {replyCmt.length - next > 0 ? (
              <button type="button" className="text-secondary mb-3" onClick={() => setNext(next + 10)}>
                <span className="fw-600">Xem thêm bình luận...</span>
              </button>
            ) : (
              replyCmt.length > 2 && (
                <button type="button" className="text-secondary mb-3" onClick={() => setNext(2)}>
                  <span className="fw-600">Ẩn bình luận</span>
                </button>
              )
            )}
            {showReply.map(
              (item) => item.reply && <CommentCard key={item._id} comment={item} post={post} commentId={comment._id} />
            )}
          </div>
        </CommentCard>
      </div>
    </>
  );
}

export default CommentDisplay;
