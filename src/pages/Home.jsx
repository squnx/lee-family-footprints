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
      background: '/assets/images/hero-carousel/lee-01.jpg',
      title: 'The Lee Family',
      text: 'Celebrating the Lee Family Legacy',
      bgStyle: 'transparent-40',
    },
    {
      background: '/assets/images/hero-carousel/grandma-01.jpg',
      title: 'Grand Parents',
      text: 'Forever in Our Hearts',
      bgStyle: 'transparent-40',
    },
    {
      background: '/assets/images/hero-carousel/jin-01.jpg',
      title: 'The Jin Family',
      text: 'A Family of Love and Support',
      bgStyle: 'transparent-60',
    },
    {
      background: '/assets/images/hero-carousel/song-01.jpg',
      title: 'The Song Family',
      text: 'California Memories',
      bgStyle: 'transparent-90',
    },
    {
      background: '/assets/images/hero-carousel/ivan-01.jpg',
      title: 'The Kim Family',
      text: 'The Man, The Myth, The Dad',
      bgStyle: 'transparent-40',
    },
    {
      background: '/assets/images/hero-carousel/phil-andy-01.jpg',
      title: 'Phil & Andy',
      text: 'The Dynamic Duo',
      bgStyle: 'transparent-40',
    },
  ];

  return (
    <section id="hero" className="hero section">
      <div className="hero-container">
        <Carousel fade interval={5000} controls indicators={true} pause={false} onSlide={handleSlideChange}>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index} className={item.bgStyle}>
              <div className="carousel-container">
                <img src={item.background} alt="" data-aos="fade-in" />
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