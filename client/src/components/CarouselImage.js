/* eslint-disable react/no-array-index-key */
import React from 'react';

/* eslint-disable react/prop-types */
function CarouselImage({ images, id }) {
  const isActive = (index) => {
    if (index === 0) return 'active';
    return null;
  };

  return (
    <div id={`image${id}`} className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators" style={{ zIndex: 1 }}>
        {images.map((img, index) => (
          <li key={index} data-bs-target={`#image${id}`} data-bs-slide-to={index} className={isActive(index)} />
        ))}
      </ol>

      <div className="carousel-inner">
        {images.map((img, index) => (
          <div key={index} className={`carousel-item ${isActive(index)}`}>
            {img.url.match(/video/i) ? (
              <video controls src={img.url} className="d-block w-100 rounded-3">
                <track kind="captions" />
              </video>
            ) : (
              <img src={img.url} className="d-block w-100 rounded-3" alt={img.url} />
            )}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <a
            className="carousel-control-prev"
            href={`#image${id}`}
            role="button"
            data-bs-slide="prev"
            style={{ width: '5%' }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>

          <a
            className="carousel-control-next"
            href={`#image${id}`}
            role="button"
            data-bs-slide="next"
            style={{ width: '5%' }}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </>
      )}
    </div>
  );
}

export default CarouselImage;
