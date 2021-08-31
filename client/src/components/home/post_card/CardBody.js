import CarouselImage from 'components/CarouselImage';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function CardBody({ post }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="card_body mb-3">
      <div className="card_body-content mb-3">
        <span>
          {post.content.length < 60 ? post.content : readMore ? `${post.content} ` : `${post.content.slice(0, 60)}...`}
        </span>
        {post.content.length > 60 && (
          <button type="button" onClick={() => setReadMore(true)}>
            <strong className="readMore text-primary fw-500 hover-underline pointer">
              {readMore ? '' : 'Xem thêm'}
            </strong>
          </button>
        )}
      </div>
      {post.images.length > 0 && <CarouselImage images={post.images} id={post._id} />}
    </div>
  );
}

export default CardBody;

CardBody.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
};
