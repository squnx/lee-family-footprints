import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Isotope from 'isotope-layout';
import jinItems from './jinItems.json';

function useScript(src) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
}

const Jin = () => {
  const isotopeRef = useRef(null);

  useScript('/assets/js/main-useScript.js');

  useEffect(() => {
    // Initialize Isotope
    isotopeRef.current = new Isotope('.isotope-container', {
      itemSelector: '.isotope-item',
      layoutMode: 'masonry',
      percentPosition: true,
      masonry: {
        columnWidth: '.isotope-item',
      },
    });

    // Automatically click the filter button for '.filter-usa'
    const clickFilterDefault = () => {
      const filterDefaultButton = document.querySelector('[data-filter=".filter-usa"]');
      if (filterDefaultButton) {
        filterDefaultButton.click();
      }
    };

    // Ensure this runs after Isotope has been initialized
    const initTimeout = setTimeout(() => {
      clickFilterDefault();
    }, 50); // Adjust delay if necessary

    // Cleanup on unmount
    return () => {
      clearTimeout(initTimeout);
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

  const handleFilterClick = (filter) => {
    if (isotopeRef.current) {
      isotopeRef.current.arrange({ filter }); // Apply filter
      // Directly call layout to refresh the layout
      setTimeout(() => {
        isotopeRef.current.layout(); // Ensure layout is recalculated
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 300); // Adjust delay if needed
    }
  };

  const handleImageLoad = () => {
    if (isotopeRef.current) {
      isotopeRef.current.layout();
    }
  };

  // Helper function to determine if an item is a video based on its file extension
  // const isVideo = (src) => {
  //   const videoExtensions = ['.mp4', '.webm', '.ogg'];
  //   return videoExtensions.some((ext) => src.endsWith(ext));
  // };
  const getYouTubeVideoId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  };

  return (
    <>
      {/* Jin Section */}
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <span>The Jin Family</span>
          <h2>The Jin Family</h2>
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter=".filter-usa" data-layout="masonry" data-sort="original-order">
            <ul className="gallery-filters isotope-filters sticky-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter=".filter-usa" onClick={() => handleFilterClick('.filter-usa')} className="filter-active">America</li>
              <li data-filter=".filter-golf" onClick={() => handleFilterClick('.filter-golf')}>Golf</li>
              <li data-filter=".filter-category-1" onClick={() => handleFilterClick('.filter-category-1')}>category 1</li>
              <li data-filter=".filter-category-2" onClick={() => handleFilterClick('.filter-category-2')}>category 2</li>
              <li data-filter=".filter-category-3" onClick={() => handleFilterClick('.filter-category-3')}>category 3</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {jinItems.map((item, index) => {
                const isYouTubeVideo = item.src.includes('youtube.com');
                const videoId = isYouTubeVideo ? getYouTubeVideoId(item.src) : null;
                const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : null;

                return (
                  <div key={index} className={`col-lg-3 col-md-4 col-sm-6 gallery-item isotope-item ${item.filter}`}>
                    <div className="gallery-wrap">
                      {item.type === 'video' ? (
                        <div className={`video-container ${isYouTubeVideo ? 'youtube-video' : ''}`}>
                        {isYouTubeVideo && (
                          <div className="youtube-logo">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="red"
                            >
                              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                          </div>
                        )}
                          <a
                            href={item.src}
                            data-gallery={item.gallery}
                            className="glightbox"
                            title={item.title}
                            data-type="video"
                            data-autoplay="true"
                          >
                            {isYouTubeVideo ? (
                              <LazyLoadImage
                                src={thumbnailUrl}
                                alt={item.title}
                                effect="blur"
                                className="img-fluid"
                                onLoad={handleImageLoad}
                              />
                            ) : (
                              <video width="100%" controls playsinline>
                                <source src={item.src} type="video/mp4" />
                                <source src={item.src.replace('.mp4', '.webm')} type="video/webm" />
                                Your browser does not support the video tag.
                              </video>
                            )}
                          </a>
                          <div className="gallery-info">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="gallery-links">
                              <a href={item.src} data-gallery={item.gallery} className="glightbox" title={item.title}><i className="bi bi-play-circle-fill"></i></a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="image-container">
                          <LazyLoadImage
                            src={item.src}
                            alt={item.title}
                            effect="blur"
                            className="img-fluid"
                            onLoad={handleImageLoad}
                          />
                          <div className="gallery-info">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="gallery-links">
                              <a href={item.src} data-gallery={item.gallery} className="glightbox" title={item.title}><i className="bi bi-zoom-in"></i></a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jin;
