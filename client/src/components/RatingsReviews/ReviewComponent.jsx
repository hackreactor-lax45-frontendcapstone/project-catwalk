/* eslint-disable indent */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import actions from '../../state/actions/index.js';
import { url, Server} from '../../lib/Server.js';
const URL = url.reviews;

const ReviewComponent = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => {
    return {
      reviews: state.reviews.reviewInfo,
      metadata: state.reviews.metadataInfo,
      productId: state.product.productID,
      filters: state.filters
    };
  });

  const [noClickCount, incrementCount] = useState(0);


  const renderShowMoreButton = (body, index) => {
    if (body.length > 250) {
      return (<div id={`show-more-${index}`} onClick={() => {
        document.getElementById(`review-body-${index}`).hidden = true;
        document.getElementById(`show-more-${index}`).hidden = true;
        document.getElementById(`review-fullbody-${index}`).hidden = false;
      }}>Show More</div>);
    }
  };

  const isRecommended = (boolean) => {
    if (boolean) {
      return (
        <div>
        <svg id='svg-rating-bar' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
         </svg>
         <span>  I recommend this product</span>
        </div>
      );
    }
  };

  const isVerifiedUser = () => {
    var randomBoolean = [true, false];
    var index = Math.floor(Math.random() * 2);
    if (randomBoolean[index]) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3c2c2e" className="review-verified" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
        // <div className="review-verified">Verified User</div>
      );
    }
  };

  const filterReviews = (stateArray) => {
    const filterOn = [];
    const filteredReview = [];
    for (var keys in reviews.filters) {
      if (reviews.filters[keys]) {
        filterOn.push(Number(keys));
      }
    }
    if (filterOn.length === 0) {
      return stateArray;
    } else {
      filterOn.forEach(filter => {
        stateArray.forEach(review => {
          if (review.rating === filter) {
            filteredReview.push(review);
          }
        });
      });
      return filteredReview;
    }
  };

  return (
    <div className="review-component">
      {filterReviews(reviews.reviews.results).map((review, index) => {

        return (
          <div className="review-component-tile" key={index}>
            <div className="review-tile-top">

              <span id="review-tile-star">
                <span className="review-tile-star-outer">
                  <span className="review-tile-star-inner" style={{ width: `${review.rating / 5 * 100}%`}}></span>
                </span>
              </span>

              <span className="review-user-info">
                {isVerifiedUser()}
                <span className="reviewer-name">{review.reviewer_name}</span>
                <span className="review-date">{moment(review.date).format('MMMM DD, YYYY')}</span>
              </span>
            </div>

            <div className="review-component-body">
            <div className="review-summary">{review.summary}</div>
            <div id={`review-body-${index}`}>{review.body.slice(0, 251)}</div>
            {renderShowMoreButton(review.body, index)}
            <div id={`review-fullbody-${index}`} hidden>{review.body}</div>

            <div className="review-thumbnails">
              {review.photos.map((photo, i) => {
                return (
                  <div key={`t-${i}`}
                    className="thumbnail-container">

                    <img src={photo.url}
                    id={`thumbnail-${review.review_id}-${i}`}
                    onClick={() => {
                      const modal = document.querySelector(`#thumbnail-modal-${review.review_id}-${i}`);
                      const overlay = document.querySelector(`#modal-overlay-${review.review_id}-${i}`);
                      if (modal.classList.contains('active') && overlay.classList.contains('active')) {
                        modal.classList.remove('active');
                        overlay.classList.remove('active');
                      } else {
                        modal.classList.add('active');
                        overlay.classList.add('active');
                      }
                    }}>
                    </img>

                    <div id={`thumbnail-modal-${review.review_id}-${i}`}>
                      <div id="close-thumbnail-modal">
                        <div onClick={() => {
                          const modal = document.querySelector(`#thumbnail-modal-${review.review_id}-${i}`);
                          const overlay = document.querySelector(`#modal-overlay-${review.review_id}-${i}`);
                          if (modal.classList.contains('active') && overlay.classList.contains('active')) {
                            modal.classList.remove('active');
                            overlay.classList.remove('active');
                          } else {
                            modal.classList.add('active');
                            overlay.classList.add('active');
                          }
                        }}
                        >&times;</div>

                        <img id={`modal-image-${review.review_id}-${i}`} src={photo.url}></img>
                      </div>
                    </div>

                    <div id={`modal-overlay-${review.review_id}-${i}`} onClick={() => {
                      const modal = document.querySelector(`#thumbnail-modal-${review.review_id}-${i}`);
                      const overlay = document.querySelector(`#modal-overlay-${review.review_id}-${i}`);
                      if (modal.classList.contains('active') && overlay.classList.contains('active')) {
                        modal.classList.remove('active');
                        overlay.classList.remove('active');
                      } else if (!modal.classList.contains('active') && !overlay.classList.contains('active')) {
                        modal.classList.add('active');
                        overlay.classList.add('active');
                      }
                    }}></div>
                  </div>
                );
              })}
            </div>


              <div className="review-recommend">{isRecommended(review.recommend)}</div>

              <div className="review-component-helpful">
                <span className="helpful-col-1">Was this review helpful?</span>
                <span id={`helpful-yes-${index}` }onClick={() => {

                  Server.put(`${URL}/${review.review_id}/helpful`, {
                    helpfulness: review.helpfulness + 1
                  })
                    .then(() => {
                      actions.setReviews(
                        dispatch,
                        reviews.productId, 1, reviews.reviews.results.length, 'relevant'
                      );
                      document.getElementById(`helpful-yes-${index}`).hidden = true;
                      document.getElementById(`helpful-yes-count-${index}`).hidden = false;
                      document.getElementById(`helpful-no-${index}`).hidden = true;
                      document.getElementById(`helpful-no-count-${index}`).hidden = false;
                    })
                    .catch(err=> console.error(err));
                  }}
                >{`    Yes (${review.helpfulness})`}</span>
                <span id={`helpful-yes-count-${index}`} hidden>{`    Yes (${review.helpfulness})`}</span>

                <span id={`helpful-no-${index}`} onClick={() => {
                  incrementCount(noClickCount + 1);
                  document.getElementById(`helpful-yes-${index}`).hidden = true;
                  document.getElementById(`helpful-yes-count-${index}`).hidden = false;
                  document.getElementById(`helpful-no-${index}`).hidden = true;
                  document.getElementById(`helpful-no-count-${index}`).hidden = false;
                }}>{`   No (${noClickCount})`}</span>

                <span id={`helpful-no-count-${index}`} hidden>{`    No (${noClickCount})`}</span>

              </div>

            </div>
          </div>
        );
      })}
      </div>
  );
};

export default ReviewComponent;