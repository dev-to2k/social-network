/* eslint-disable no-nested-ternary */
import LeftSideBar from 'components/home/LeftSideBar';
import Posts from 'components/home/Posts';
import RightSideBar from 'components/home/RightSideBar';
import Status from 'components/home/Status';
import LoadingCard from 'components/LoadingCard';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const { homePosts } = useSelector((state) => state);

  return (
    <div className="container-fluid home pt-4">
      <div className="row">
        <div className="col-xl-3 d-none d-xl-block">
          <LeftSideBar />
        </div>
        <div className="col-md-8 col-lg-8 col-sm-12 col-xl-5">
          <Status />
          {homePosts.loading ? (
            <>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </>
          ) : homePosts.result === 0 || homePosts.posts.length === 0 ? (
            <h2 className="text-center mt-5">Không có bài viết</h2>
          ) : (
            <Posts />
          )}
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4 d-none d-md-block">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
