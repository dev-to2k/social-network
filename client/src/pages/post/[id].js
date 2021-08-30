import PostCard from 'components/PostCard';
import LoadIcon from 'images/loading.gif';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostDetails } from 'redux/actions/postAction';

function PostDetails() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const { auth, postDetails } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetails({ auth, postDetails, id }));
    if (postDetails.length > 0) {
      const newArr = postDetails.filter((postItem) => postItem._id === id);
      setPost(newArr);
    }
  }, [postDetails, id, auth, dispatch]);

  return (
    <div className="post-details width-682 mx-auto mt-4 mb-5">
      {post.length === 0 && <img src={LoadIcon} alt="loading" />}
      {post.map((item) => (
        <PostCard key={item._id} post={item} />
      ))}
    </div>
  );
}

export default PostDetails;
