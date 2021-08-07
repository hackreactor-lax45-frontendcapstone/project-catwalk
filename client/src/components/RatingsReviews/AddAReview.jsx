import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI.js';
import '../../../dist//styles/ratingsreviews/WriteReview.css';

export default props => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  const handleModal = () => {
    const modalBox = document.querySelector('#write-review-modal');
    const overlay = document.querySelector('#review-modal-overlay');

    if (modalBox.classList.contains('active') && overlay.classList.contains('active')) {
      modalBox.classList.remove('active');
      overlay.classList.remove('active');

      const inputs = document.querySelectorAll('.review-input');
      inputs.forEach(node => {
        node.value = '';
      });

      const allStars = document.querySelectorAll('.review-modal-stars');
      allStars.forEach(star => star.classList.remove('filled'));
    } else {
      modalBox.classList.add('active');
      overlay.classList.add('active');
    }
  };

  const ratings = [1, 2, 3, 4, 5];
  const rText = ['star - "Poor"', 'stars - "Fair"', 'stars - "Average"', 'stars - "Good"', 'stars - "Great"'];

  const charMetadata = useSelector(state => state.reviews.metadataInfo.characteristics);
  const characteristics = Object.keys(charMetadata);
  const charMeanings = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below Average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  };

  const [radio, setRadio] = useState('yes');
  const [radioChar, setRadioChar] = useState('');

  const charCount = (e) => {
    const minCount = document.querySelector('#min-char-count');
    let remaining = 50 - e.target.value.length;
    minCount.innerHTML = remaining > 0 ? `Minimum required characters left: [${remaining}]` : 'Minimum reached';
  };

  let starRating = 3;
  const charData = {};

  return (
    <div id="write-review">
      <button id="write-review-btn" onClick={handleModal}>Write A Review</button>
      <div id="write-review-modal" className="write-review-modal">
        <div className="review-modal-header">
          <div>
            <div className="review-modal-title">Write Your Review</div>
            <div className="review-modal-subtitle">About the {product.productInfo.name}</div>
          </div>
          <button onClick={handleModal} className="review-modal-close">&times;</button>
        </div>
        <div className="review-modal-body">
          <form id="review-modal-form" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = {};
            formData.forEach((value, property) => data[property] = value);

            axios(`${AtelierAPI.url}/reviews`, {
              method: 'post',
              headers: AtelierAPI.headers,
              data: {
                product_id: product.productID,
                rating: starRating,
                summary: data['summary'],
                body: data['body'],
                recommend: Boolean(data['recommend']),
                name: data['name'],
                email: data['email'],
                photos: [],
                characteristics: charData
              }
            })
              .then(res => handleModal())
              .catch(err => console.error(err));
          }}>
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
                  ratingText.innerHTML = `${ratings[i]} ${rText[i]}`;
                  starRating = i+1;
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
                  name="recommend"
                  value="true"
                  checked={radio === 'yes' && true}
                  onChange={() => {}}
                ></input>
                <label htmlFor="review-modal-yes"> Yes</label>
              </span>
              <span onClick={() => setRadio('no')}>
                <input
                  type="radio"
                  id="review-modal-no"
                  name="recommend"
                  value="false"
                  checked={radio === 'no' && true}
                  onChange={() => {}}
                ></input>
                <label htmlFor="review-modal-no"> No</label>
              </span>
            </div>

            <div>Characteristics * </div>
              {characteristics.map(char => {
                return <table className="review-radio-table" key={char}>
                  <tbody>
                    <tr>
                      <th className="radio-table-headers">{char}</th>
                      {ratings.map((r, i) => {
                        return <td id={`radio-td-${i}`} key={i}>
                          <span
                            id={`radio-cell-${i}`}
                            className={`radio-meanings-${char}`}
                          >{`${charMeanings[char][i]}`}
                            <input
                              type="radio"
                              id={`radio-${char}-${i}`}
                              className="radio-char"
                              name={`review-${char}`}
                              value={`${i+1}`}
                              required
                              onChange={(e) => {
                                const allMeanings = document.querySelectorAll(`.radio-meanings-${char}`);
                                allMeanings.forEach(m => {
                                  m.style.fontWeight = '400';
                                })

                                const meaning = e.target.parentElement;
                                meaning.style.fontWeight = '600';

                                charData[charMetadata[char].id] = Number(e.target.value);
                              }}
                            ></input>
                            <label htmlFor={`radio-${char}-1`}></label>
                          </span>
                        </td>
                      })}
                    </tr>
                  </tbody>
                </table>
              })}

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
              onInvalid={(e) => {
                e.target.setCustomValidity('You must write a review');
              }}
              onKeyUp={charCount}
            ></textarea>
            <div id="min-char-count">{'Minimum required characters left: [50]'}</div>

            <div id="review-file-input">
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
                    preview.width = 75;
                    preview.src = reader.result;
                  }
                  if (file) {
                    reader.readAsDataURL(file);
                  }
                }}
              ></input>
              <img id="review-img-preview"></img>
            </div>

            <label className="review-label" htmlFor="review-modal-name">What is your Nickname? * </label>
            <input
              id="review-modal-name"
              className="review-input"
              type="text"
              name="name"
              maxLength="60"
              placeholder="Example: jackson11!"
              onInvalid={(e) => {
                e.target.setCustomValidity('You must enter your nickname');
              }}
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
              onInvalid={(e) => {
                e.target.setCustomValidity('You must enter your email');
              }}
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