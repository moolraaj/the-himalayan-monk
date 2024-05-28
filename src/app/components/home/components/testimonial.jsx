'use client'
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rakesh Sharma',
    location: 'Italy',
    review: 'When we agreed to this trip, I was nervous to say the least. Our guide Lachen and the people of Morocco immediately put all of that to ease. We had a Nice amazing trip. Lachen and our other tour guides',
    date: 'May 5, 2024',
    time: '10:30 AM',
    rating: 5,
    avatar: '/avatars/rakesh-sharma.jpg' // Replace with actual avatar path
  },
  {
    name: 'Henry Menry',
    location: 'Italy',
    review: 'When we agreed to this trip, I was nervous to say the least. Our guide Lachen and the people of Morocco immediately put all of that to ease. We had a Nice amazing trip. Lachen and our other tour guides',
    date: 'May 5, 2024',
    time: '10:30 AM',
    rating: 4,
    avatar: '/avatars/henry-menry.jpg' // Replace with actual avatar path
  },
  {
    name: 'Jane Doe',
    location: 'France',
    review: 'This trip was a life-changing experience. The guides were professional and made us feel safe throughout the journey. Highly recommend!',
    date: 'May 5, 2024',
    time: '10:30 AM',
    rating: 5,
    avatar: '/avatars/jane-doe.jpg' // Replace with actual avatar path
  },
  {
    name: 'John Smith',
    location: 'USA',
    review: 'An unforgettable adventure! The team was amazing and everything was well-organized. Can\'t wait for the next trip!',
    date: 'May 5, 2024',
    time: '10:30 AM',
    rating: 5,
    avatar: '/avatars/john-smith.jpg' // Replace with actual avatar path
  },
  {
    name: 'Alice Johnson',
    location: 'Canada',
    review: 'The trip was fantastic! The scenery was breathtaking and the guides were knowledgeable and friendly.',
    date: 'May 5, 2024',
    time: '10:30 AM',
    rating: 4,
    avatar: '/avatars/alice-johnson.jpg' // Replace with actual avatar path
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <h2 className="section-title">Customer Reviews</h2>
      <div className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${index >= currentIndex && index < currentIndex + 3 ? 'visible' : ''}`}
            style={{
              display: index >= currentIndex && index < currentIndex + 3 ? 'block' : 'none'
            }}
          >
            <p className="review">{testimonial.review}</p>
            <div className="reviewer-info">
              <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
              <div className="reviewer-details">
                <span className="name">{testimonial.name}</span>
                <span className="location">{testimonial.location}</span>
                <div className="review-meta">
                  <span className="date">{testimonial.date}</span>
                  <span className="time">{testimonial.time}</span>
                </div>
              </div>
            </div>
            <div className="rating">
              {'★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
