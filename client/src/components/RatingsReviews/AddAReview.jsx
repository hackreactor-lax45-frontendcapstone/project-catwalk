import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI.js';
import '../../../dist//styles/ratingsreviews/WriteReview.css';

export default props => {
  const dispatch = useDispatch();

  const handleModal = () => {
    const modalBox = document.querySelector('#write-review-modal');
    const overlay = document.querySelector('#review-modal-overlay');

    if (modalBox.classList.contains('active') && overlay.classList.contains('active')) {
      modalBox.classList.remove('active');
      overlay.classList.remove('active');

      // const inputs = document.querySelectorAll('.question-input');
      // inputs.forEach(node => {
      //   node.value = '';
      // });
    } else {
      modalBox.classList.add('active');
      overlay.classList.add('active');
    }
  };

  const ratings = [1, 2, 3, 4, 5];
  const rText = ['star - "Poor"', 'stars - "Fair"', 'stars - "Average"', 'stars - "Good"', 'stars - "Great"'];

  const [radio, setRadio] = useState('yes');

  const charCount = (e) => {
    const minCount = document.querySelector('#min-char-count');
    let remaining = 50 - e.target.value.length;
    minCount.innerHTML = remaining > 0 ? `Minimum required characters left: [${remaining}]` : 'Minimum reached';
  }

  return (
    <div id="write-review">
      <button id="write-review-btn" onClick={handleModal}>Write A Review</button>
      <div id="write-review-modal" className="write-review-modal">
        <div className="review-modal-header">
          <div>
            <div className="review-modal-title">Write Your Review</div>
            <div className="review-modal-subtitle">About the PRODUCT_NAME_HERE</div>
          </div>
          <button onClick={handleModal} className="review-modal-close">&times;</button>
        </div>
        <div className="review-modal-body">
          <form id="review-modal-form">
            <div> Overall Rating *
              {ratings.map((rating, i) => {
                return <span onClick={(e) => {
                  const allStars = document.querySelectorAll('.review-modal-stars');
                  allStars.forEach(star => star.classList.remove('filled'));

                  e.target.classList.add('filled');
                  for (let s = 0; s < i; s++) {
                    let star = document.querySelector(`#review-modal-star${s}`);
                    star.classList.add('filled');
                  }

                  let ratingText = document.querySelector('#rating-text');
                  ratingText.innerHTML = ` ${ratings[i]} ${rText[i]}`;
                }} id={`review-modal-star${i}`} className="review-modal-stars" key={i}></span>
              })}
              <span id="rating-text"></span>
            </div>

            <div id="review-modal-recommend">
              <div>Do you recommend this product? * </div>
              <span onClick={() => setRadio('yes')}>
                <input
                  type="radio"
                  id="review-modal-yes"
                  name="review-modal-rec"
                  value="yes"
                  checked={radio === 'yes' && true}
                  onChange={() => {}}
                ></input>
                <label htmlFor="review-modal-yes"> Yes</label>
              </span>
              <span onClick={() => setRadio('no')}>
                <input
                  type="radio"
                  id="review-modal-no"
                  name="review-modal-rec"
                  value="no"
                  checked={radio === 'no' && true}
                  onChange={() => {}}
                ></input>
                <label htmlFor="review-modal-no"> No</label>
              </span>
            </div>

            <div>CHARACTERISTICS</div>

            <label className="review-label" htmlFor="review-modal-summary">Review Summary</label>
            <input
              type="text"
              id="review-modal-summary"
              className="review-input"
              name="summary"
              maxLength="60"
              placeholder="Example: Best purchase ever!"
            ></input>

            <label className="review-label" htmlFor="review-modal-textarea">Write Your Review * </label>
            <textarea
              type="text"
              id="review-modal-textarea"
              className="review-modal-body review-input"
              name="body"
              minLength="50"
              maxLength="1000"
              placeholder="Why did you like the product or not?"
              required
              onKeyUp={charCount}
            ></textarea>
            <div id="min-char-count">{'Minimum required characters left: [50]'}</div>

            <label className="review-label" htmlFor="review-modal-img" className="review-custom-upload">Upload Photos</label>
            <input
              id="review-modal-img"
              className="review-modal-img review-input"
              type="file"
              name="photos"
              multiple
              onChange={(e) => {
                const preview = document.querySelector('#review-img-preview');
                const file = e.target.files[0];
                const reader = new FileReader();

                reader.onload = () => {
                  preview.height = 75;
                  preview.src = reader.result;
                }
                if (file) {
                  reader.readAsDataURL(file);
                }
              }}
            ></input>
            <img id="review-img-preview"></img>

            <label className="review-label" htmlFor="review-modal-name">What is your Nickname? * </label>
            <input
              id="review-modal-name"
              className="review-input"
              type="text"
              name="nickname"
              maxLength="60"
              placeholder="Example: jackson11!"
            ></input>
            <div className="review-modal-disclaimer">For privacy reasons, do not use your full name or email address</div>

            <label className="review-label" htmlFor="review-modal-email">Your Email * </label>
            <input
              id="review-modal-email"
              className="review-input"
              type="text"
              name="email"
              maxLength="60"
              placeholder="Example: jackson11@email.com"
            ></input>
            <div className="review-modal-disclaimer">For authentication reasons, you will not be emailed</div>

            <button id="review-modal-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div onClick={handleModal} id="review-modal-overlay"></div>
    </div>
  )
}

// const AddAReview = () => {
//   const product = useSelector((state) => {
//     return {
//       id: state.product.productID,
//       name: state.product.productInfo.name
//     };
//   });

//   const [radio, setRadio] = useState('Yes');


//   return (
//     <div>
//       <button className="write-reviews-button"
//         onClick={(e)=> {
//           const modal = document.getElementById('reviews-modal');
//           modal.style.display = 'block';
//         }}
//       >Write New Review</button>

//       <div id="reviews-modal">
//         <div id="reviews-modal-content">

//           <div>
//             <span onClick={() => {
//               const modal = document.getElementById('reviews-modal');
//               modal.style.display = 'none';
//             }} id="close-reviews-modal">&times;</span>
//           </div>
//           <form
//           // onSubmit={(e) => {
//           //   e.preventDefault();
//             // const formData = new FormData(e.target);
//             // const data = {};
//             // formData.forEach((value, property) => data[property] = value);

//             // axios(`${AtelierAPI.url}/reviews`, {
//             //   method: 'post',
//             //   headers: AtelierAPI.headers,
//             //   data: {
//             //     // product_id: ,
//             //     // rating: ,
//             //     // summary: ,
//             //     // body: ,
//             //     // recommend: ,
//             //     // name: ,
//             //     // email: ,
//             //     // photo: ,
//             //     // character: {

//             //     // }
//             //   }
//             // });
//           // }}
//           >
//             <span id="review-form-stars">
//               <span className="review-fillable-stars-1">
//                 <span className="review-fillable-stars-inner"></span>
//               </span>
//               <span className="review-fillable-stars-2"></span>
//               <span className="review-fillable-stars-3"></span>
//               <span className="review-fillable-stars-4"></span>
//               <span className="review-fillable-stars-5"></span>

//             </span>

//             <label>Name:</label>
//             <input
//               id="write-name"
//               placeholder="Example: jackson11!"
//               maxLength="60"
//               required
//             ></input>
//             <div className="reviews-modal-disclaimer">For privacy reasons, do not use your full name or email address</div>

//             <label>Email:</label>
//             <input
//               id="write-email"
//               placeholder="Example: jackson11@email.com" maxLength="60"
//               required></input>
//             <div className="reviews-modal-disclaimer">For authentication reasons, you will not be emailed</div>

//             <label>Summary:</label>
//             <textarea
//               name="summary"
//               id="write-summary"
//               placeholder="Best purchase ever!" maxLength="60"
//             ></textarea>

//             <label>Body:</label>
//             <textarea

//               id="write-body"
//               placeholder="Why did you like the product or not?"
//               name="body"
//               required
//               minLength="50"
//               maxLength="1000"
//             ></textarea>
//             <div className="reviews-modal-body-count">Minimum required characters left: [##]</div>

//             <div>
//               Do you recommend this product?: {radio}
//               <br></br>
//               <label>
//                 Yes
//                 <input type='radio'
//                   value='Yes'
//                   checked={radio === 'Yes'}
//                   onChange={(e)=>{ setRadio(e.target.value); }}/>
//               </label>
//               <label>
//                 No
//                 <input type='radio'
//                   value='No'
//                   checked={radio === 'No'}
//                   onChange={(e)=>{ setRadio(e.target.value); }}/>
//               </label>
//             </div>

//             <button>Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>



//   );
// };

// export default AddAReview;