/* eslint-disable react/prop-types */
import React from 'react';
import Comments from './home/Comments';
import InputComment from './home/InputComment';
import CardBody from './home/post_card/CardBody';
import CardFooter from './home/post_card/CardFooter';
import CardHeader from './home/post_card/CardHeader';

function PostCard({ post }) {
  return (
    <div className="border shadow-sm p-3 mb-5 rounded-10 bg-white">
      <CardHeader post={post} />
      <CardBody post={post} />
      <CardFooter post={post} />

      <Comments post={post} />
      <InputComment post={post} />
    </div>
  );
}

export default PostCard;
