'use client'
import React from 'react';
import ReactStars from "react-rating-stars-component";

const StarRating = ({ rating }) => {

  let options={
    edit:false,
    color:'gray',
    activeColor:'#2CB2B4',
    isHalf:true,
    size:25,
    value: rating
  }

  return (
    <ReactStars {...options}/>
  );
};

export default StarRating;
