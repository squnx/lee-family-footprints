import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Isotope from 'isotope-layout';
import koreaItems from './koreaItems.json';

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

const Korea = () => {
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

    // Automatically click the filter button for '.filter-korea-2007'
    const clickFilterDefault = () => {
      const filterDefaultButton = document.querySelector('[data-filter=".filter-korea-2007"]');
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

  return (
    <>
      {/* Korea Section */}
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <span>Korea</span>
          <h2>Korea</h2>
        </div>
        <div className="container">
          <div className="isotope-layout" data-default-filter=".filter-korea-2007" data-layout="masonry" data-sort="original-order">
            <ul className="gallery-filters isotope-filters sticky-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter=".filter-korea-2007" onClick={() => handleFilterClick('.filter-korea-2007')} className="filter-active">2007</li>
              <li data-filter=".filter-korea-2008" onClick={() => handleFilterClick('.filter-korea-2008')}>2008</li>
              <li data-filter=".filter-korea-2018" onClick={() => handleFilterClick('.filter-korea-2018')}>2018</li>
            </ul>
            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {koreaItems.map((item, index) => (
                <div key={index} className={`col-lg-3 col-md-4 col-sm-6 gallery-item isotope-item ${item.filter}`}>
                  {/* Hover effect #1 */}
                  <div className="gallery-wrap">
                    <LazyLoadImage
                      src={item.src}
                      alt={item.title}
                      effect="blur"
                      className="img-fluid"
                      onLoad={handleImageLoad}  // Trigger Isotope layout after image is loaded
                    />
                    <div className="gallery-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <div className="gallery-links">
                        <a href={item.src} data-gallery={item.gallery} className="glightbox" title={item.title}><i className="bi bi-zoom-in"></i></a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect #2 */}
                  {/* <LazyLoadImage
                    src={item.src}
                    alt={item.title}
                    // placeholderSrc={item.placeholderSrc} // Placeholder image for blur effect
                    effect="blur"
                    className="img-fluid"
                    onLoad={handleImageLoad}  // Trigger Isotope layout after image is loaded
                  />
                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href={item.src} title={item.title} data-gallery={item.gallery} className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  </div> */}

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Korea;
