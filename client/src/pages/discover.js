/* eslint-disable no-use-before-define */
import PostThumb from 'components/PostThumb';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import LoadIcon from 'images/loading.gif';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DISCOVER_TYPES, getDiscoverPosts } from 'redux/actions/discoverAction';
import { getDataApi } from 'utils/fetchData';

export default function Discover() {
  const [load, setLoad] = useInfiniteScroll(fetchMoreListItems);

  const { auth, discover } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!discover.firstLoad) {
      dispatch(getDiscoverPosts(auth.token));
    }
  }, [auth.token, dispatch, discover.firstLoad]);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataApi(`post_discover?num=${discover.page * 3}`, auth.token);
    dispatch({ type: DISCOVER_TYPES.UPDATE_POST, payload: res.data });
    setLoad(false);
  };

  function fetchMoreListItems() {
    setTimeout(() => {
      handleLoadMore();
    }, 1000);
  }

  return (
    <div className="discover">
      <div className="container-fluid pt-5">
        <div className="width-905 mx-auto">
          <div className="rounded-3 p-3 shadow mb-4 bg-white d-flex align-items-center justify-content-between border">
            <span className="fw-600 fs-4">Khám phá bài viết.</span>
            <i className="far fa-list-alt fs-4" />
          </div>
          {discover.loading ? (
            <img src={LoadIcon} alt="loading" />
          ) : (
            <PostThumb posts={discover.posts} result={discover.result} />
          )}
          {load && <img src={LoadIcon} alt="loading" />}
        </div>
      </div>
    </div>
  );
}
