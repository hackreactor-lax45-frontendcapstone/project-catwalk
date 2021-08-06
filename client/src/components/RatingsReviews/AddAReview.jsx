import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI.js';
import '../../../dist//styles/ratingsreviews/reviews.css';

const AddAReview = () => {
  const product = useSelector((state) => {
    return {
      id: state.product.productID,
      name: state.product.productInfo.name
    };
  });

  const [radio, setRadio] = useState('Yes');


  return (
    <div>
      <button className="write-reviews-button"
        onClick={(e)=> {
          const modal = document.getElementById('reviews-modal');
          modal.style.display = 'block';
        }}
      >Write New Review</button>

      <div id="reviews-modal">
        <div id="reviews-modal-content">

          <div>
            <span onClick={() => {
              const modal = document.getElementById('reviews-modal');
              modal.style.display = 'none';
            }} id="close-reviews-modal">&times;</span>
          </div>
          <form
          // onSubmit={(e) => {
          //   e.preventDefault();
            // const formData = new FormData(e.target);
            // const data = {};
            // formData.forEach((value, property) => data[property] = value);

            // axios(`${AtelierAPI.url}/reviews`, {
            //   method: 'post',
            //   headers: AtelierAPI.headers,
            //   data: {
            //     // product_id: ,
            //     // rating: ,
            //     // summary: ,
            //     // body: ,
            //     // recommend: ,
            //     // name: ,
            //     // email: ,
            //     // photo: ,
            //     // character: {

            //     // }
            //   }
            // });
          // }}
          >
            <span id="review-form-stars">
              <span className="review-fillable-stars-1">
                <span className="review-fillable-stars-inner"></span>
              </span>
              <span className="review-fillable-stars-2"></span>
              <span className="review-fillable-stars-3"></span>
              <span className="review-fillable-stars-4"></span>
              <span className="review-fillable-stars-5"></span>

            </span>

            <label>Name:</label>
            <input
              id="write-name"
              placeholder="Example: jackson11!"
              maxLength="60"
              required
            ></input>
            <div className="reviews-modal-disclaimer">For privacy reasons, do not use your full name or email address</div>

            <label>Email:</label>
            <input
              id="write-email"
              placeholder="Example: jackson11@email.com" maxLength="60"
              required></input>
            <div className="reviews-modal-disclaimer">For authentication reasons, you will not be emailed</div>

            <label>Summary:</label>
            <textarea
              name="summary"
              id="write-summary"
              placeholder="Best purchase ever!" maxLength="60"
            ></textarea>

            <label>Body:</label>
            <textarea

              id="write-body"
              placeholder="Why did you like the product or not?"
              name="body"
              required
              minLength="50"
              maxLength="1000"
            ></textarea>
            <div className="reviews-modal-body-count">Minimum required characters left: [##]</div>

            <div>
              Do you recommend this product?: {radio}
              <br></br>
              <label>
                Yes
                <input type='radio'
                  value='Yes'
                  checked={radio === 'Yes'}
                  onChange={(e)=>{ setRadio(e.target.value); }}/>
              </label>
              <label>
                No
                <input type='radio'
                  value='No'
                  checked={radio === 'No'}
                  onChange={(e)=>{ setRadio(e.target.value); }}/>
              </label>
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>



  );
};

export default AddAReview;