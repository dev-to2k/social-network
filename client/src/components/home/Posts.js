/* eslint-disable no-use-before-define */
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { useDispatch, useSelector } from 'react-redux';
import { POST_TYPES } from 'redux/actions/postAction';
import { getDataApi } from 'utils/fetchData';
import PostCard from '../PostCard';

function Posts() {
  const { homePosts, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useInfiniteScroll(fetchMoreListItems);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataApi(`posts?limit=${homePosts.page * 9}`, auth.token);

    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: {
        ...res.data,
        page: homePosts.page + 1,
      },
    });
    setLoad(false);
  };

  function fetchMoreListItems() {
    setTimeout(() => {
      handleLoadMore();
    }, 1000);
  }

  return (
    <div className="posts my-3">
      {homePosts.posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}

      {load && <div className="loader" />}
    </div>
  );
}

export default Posts;
