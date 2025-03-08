import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  const [animate, setAnimate] = useState(true);

  const handleSlideChange = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50); // Small delay to reset the animation
  };

  const carouselItems = [
    {
      background: '/assets/images/hero-carousel/lee.family-01.jpg',
      title: 'The Lee Family',
      text: 'Celebrating the Lee Family Legacy',
      bgStyle: 'transparent-40',
      type: 'image',
    },
    {
      background: '/assets/images/hero-carousel/grandparents-01.mp4',
      title: 'Grand Parents',
      text: 'Forever in Our Hearts',
      bgStyle: 'transparent-90',
      type: 'video',
    },
    {
      background: '/assets/images/hero-carousel/jin-01.jpg',
      title: 'The Jin Family',
      text: 'A Family of Love and Support',
      bgStyle: 'transparent-80',
      type: 'image',
    },
    {
      background: '/assets/images/hero-carousel/lee-01.jpg',
      title: 'The Lee Family',
      text: 'Deeply Rooted in Love',
      bgStyle: 'transparent-40',
      type: 'image',
    },
    {
      background: '/assets/images/hero-carousel/song-01.jpg',
      title: 'The Song Family',
      text: 'California Memories',
      bgStyle: 'transparent-90',
      type: 'image',
    },
    {
      background: '/assets/images/hero-carousel/kim-01.jpg',
      title: 'The Kim Family',
      text: 'Embracing Warmth and Joy',
      bgStyle: 'transparent-90',
      type: 'image',
    },
  ];

  return (
    <section id="hero" className="hero section">
      <div className="hero-container">
        <Carousel fade interval={5000} controls indicators={true} pause={false} onSlide={handleSlideChange}>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index} className={item.bgStyle}>
              <div className="carousel-container">
                {item.type === 'video' ? (
                  <video autoPlay loop muted playsInline className="carousel-video">
                    <source src={item.background} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={item.background} alt={item.title} data-aos="fade-in" />
                )}
                <div className={`container text-center ${animate ? 'zoom-out' : ''}`}>
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Home;