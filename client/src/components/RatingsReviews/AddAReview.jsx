import React from 'react';
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

  return (
    <button className="write-reviews-button"
      onClick={(e)=> {
        const modal = document.getElementById();
        modal.style.display = 'block';
      }}
    >Write New Review</button>



  );
};

export default AddAReview;