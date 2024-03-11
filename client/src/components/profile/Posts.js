/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import PostThumb from 'components/PostThumb';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { useEffect, useState } from 'react';
import { PROFILE_TYPES } from 'redux/actions/profileAction';
import { getDataApi } from 'utils/fetchData';

export default function Posts(props) {
  const { auth, profile, dispatch, id } = props;
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [load, setLoad] = useInfiniteScroll(fetchMoreListItems);

  useEffect(() => {
    profile.userPosts.forEach((data) => {
      if (data._id === id) {
        setPosts(data.posts);
        setPage(data.page);
      }
    });
  }, [profile.userPosts, id]);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataApi(`user_posts/${id}?limit=${page * 9}`, auth.token);

    const newData = { ...res.data, page: page + 1, _id: id };
    dispatch({ type: PROFILE_TYPES.UPDATE_POST, payload: newData });
    setLoad(false);
  };

  function fetchMoreListItems() {
    setTimeout(() => {
      handleLoadMore();
    }, 1000);
  }

  return (
    <>
      <PostThumb posts={posts} />

      {load && <div className="loader" />}
    </>
  );
}
