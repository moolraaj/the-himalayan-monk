"use client";
import React, { useState, useEffect } from "react";
import triangle from '@/app/assets/homepageAssets/triangle.png';
import profile from '../../../assets/homepageAssets/profile.png';
import Image from "next/image";
import arrowl from '../../../assets/homepageAssets/larr.gif';
import arrowr from '../../../assets/homepageAssets/rarr.gif';
import testback from '../../../assets/homepageAssets/testimonialbac.png';
import quote from '../../../assets/homepageAssets/quote.png';

const testimonials = [
  {
    name: "Rakesh Sharma",
    location: "Italy",
    review:
      "When we agreed to this trip, I was nervous to say the least. Our guide Lachen and the people of Morocco immediately put all of that to ease. We had a Nice amazing trip. Lachen and our other tour guides",
    date: "May 5, 2024",
    time: "10:30 AM",
    rating: 5,
    avatar: "/avatars/rakesh.jpg",
  },
  {
    name: "Henry Menry",
    location: "Italy",
    review:
      "When we agreed to this trip, I was nervous to say the least. Our guide Lachen and the people of Morocco immediately put all of that to ease. We had a Nice amazing trip. Lachen and our other tour guides",
    date: "May 5, 2024",
    time: "10:30 AM",
    rating: 4,
    avatar: "/avatars/henry-menry.jpg",
  },
  {
    name: "Jane Doe",
    location: "France",
    review:
      "This trip was a life-changing experience. The guides were professional and made us feel safe throughout the journey. Highly recommend!",
    date: "May 5, 2024",
    time: "10:30 AM",
    rating: 5,
    avatar: "/avatars/jane-doe.jpg",
  },
  {
    name: "John Smith",
    location: "USA",
    review:
      "An unforgettable adventure! The team was amazing and everything was well-organized. Can't wait for the next trip!",
    date: "May 5, 2024",
    time: "10:30 AM",
    rating: 5,
    avatar: "/avatars/john-smith.jpg",
  },
  {
    name: "Alice Johnson",
    location: "Canada",
    review:
      "The trip was fantastic! The scenery was breathtaking and the guides were knowledgeable and friendly.",
    date: "May 5, 2024",
    time: "10:30 AM",
    rating: 4,
    avatar: "/avatars/alice-johnson.jpg",
  },
  {
    name: "Max Johnson",
    location: "Canada",
    review:
      "The trip was fantastic! The scenery was breathtaking and the guides were knowledgeable and friendly.",
    date: "May 5, 2024",
    time: "10:30 AM",
    rating: 4,
    avatar: "/avatars/alice-johnson.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth <= 600) {
      setSlidesToShow(1);
    } else if (window.innerWidth <= 991) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Changed to 5 seconds

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, [slidesToShow]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const displayedTestimonials = [];
  for (let i = 0; i < slidesToShow; i++) {
    const index = (currentIndex + i) % testimonials.length;
    displayedTestimonials.push(testimonials[index]);
  }

  return (
    <div className="testimonial_outer" style={{ backgroundImage: `url(${testback.src})` }}>
      <div className="testimonials-container">
        <h2 className="section-title">Customer Reviews</h2>

        <div className="slider-controls">
           <div className="buttons_sliderc">
            <button onClick={handlePrev} className="left-arrow">
              <p><img src={arrowr.src} alt="Previous" /></p>
            </button>
            <button onClick={handleNext} className="right-arrow">
              <p><img src={arrowl.src} alt="Next" /></p>
            </button>
          </div>
          </div>
        <div className="testimonials-slider">
         
          {displayedTestimonials.length === 0
            ? 'No testimonials available'
            : displayedTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p className="review">{testimonial.review}</p>
                
              <div className="testimonial-review-rating">
                <div className="rating">
                  <div><label>Rating</label></div>
                  {"★".repeat(testimonial.rating) + "☆".repeat(5 - testimonial.rating)}
                </div>
                <div className="quote-img">
                  <img src={quote.src}/>
                </div>
                <div className="reviewer-info">
                  <div className="reviewer-details">
                    <div className="review-meta">
                    <div> <span className="date">{testimonial.date}</span> </div>
                    <span className="time">{testimonial.time}</span>
                    </div>
                  </div>
                </div>
              </div>
               
                <img 
                  src={triangle.src}
                  alt="Triangle"
                  className="triangle-testimonial-img"
                />
                <div className="user_infos">
                  <div className="avtar_outer">
                    <img
                      src={profile.src}
                      alt={testimonial.name}
                      className="avatar"
                    />
                  </div>
                  <div className="user_desc">
                    <span className="name">{testimonial.name}</span>
                    <span className="location">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
