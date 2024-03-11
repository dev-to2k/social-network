/* eslint-disable react/prop-types */
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostThumb({ posts, result }) {
  if (result === 0) return <h2 className="text-center">Không có bài viết</h2>;

  return (
    <div className="post_thumb">
      {posts.map((post) => (
        <div className="post_thumb_display border rounded-3 shadow mb-5 overflow-hidden bg-white" key={post._id}>
          <Link to={`/post/${post._id}`}>
            {post.images[0].url.match(/video/i) ? (
              <video controls src={post.images[0].url} alt={post.images[0].url} className="w-100">
                <track kind="captions" />
              </video>
            ) : (
              <img
                src={post.images[0].url}
                alt={post.images[0].url}
                style={{ height: 300 }}
                className="w-100 img-cover img-fluid"
              />
            )}
          </Link>

          <div className="post_thumb_post">
            <div className="text-dark d-flex">
              <Link to={`/profile/${post.user._id}`}>
                <img src={post.user.avatar} className="circle rounded-circle me-2" alt="avatar" />
              </Link>

              <div>
                <p className="fw-600 mb-0">{post.user.fullname}</p>
                <Link to={`/post/${post._id}`}>
                  <small className="text-muted hover-underline">{moment(post.createdAt).fromNow()}</small>
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center text-dark fs-6 mt-3 ps-1">
              <div className="me-3">
                <i className="fas fa-heart text-danger me-2" />
                <strong>{post.likes.length}</strong>
              </div>
              <div>
                <i className="far fa-comment-dots me-2" />
                <strong>{post.comments.length}</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostThumb;

PostThumb.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
