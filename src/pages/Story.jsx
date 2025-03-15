import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Story = () => {
  return (
    <>
      {/* Our Story Section */}
      <section id="story" className="story section">
        <div className="container section-title" data-aos="fade-up">
          <span>Our Story</span>
          <h2>Our Story</h2>
          <p>Our Journey from Then to Now</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/assets/images/our-story/2008.07-our.story-01.jpg" className="img-fluid" alt="Our Story" />
            </div>
            <div className="col-lg-8 content">
              <h2>The Journey of Us</h2>
              <p className="pt-3">
              사랑으로 똘똘 뭉친 우리 가족은, 마치 따스한 햇살이 가득한 정원 같아요! 할아버지, 할머니의 따뜻한 보살핌 아래, 일남삼녀의 찰떡궁합 유대와 여덟 손주의 빵 터지는 웃음이 끊이지 않는 행복 충전소랍니다. 이곳에선 매일매일이 축제 같고, 웃음꽃이 활짝 피어난답니다.
              </p>
              <p>
              서로를 향한 무한 신뢰와 존경으로 꽉 찬 우리 가족은, 마치 잘 조율된 오케스트라 같아요. 할아버지, 할머니의 인생 지혜는 깊고 울림 있는 베이스 같고, 일남삼녀의 따스한 마음은 부드러운 멜로디 같으며, 여덟 손주의 반짝이는 영혼은 맑고 청아한 고음처럼 만나 환상적인 가족 합창곡을 연주합니다.
              </p>
              <p>
                세대에서 세대로 이어지는 사랑과 행복, 할아버지, 할머니의 깊은 사랑과 일남삼녀의 헌신, 여덟 손주의 꿈이 함께하는 우리 가족은 소중한 보금자리입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reflections" className="reflections section">
        <img src="/assets/images/our-story/bg-reflections.jpg" className="reflections-bg" />
        <div className="container section-title" data-aos="fade-up">
          <h2 className='accent'>Family Reflections</h2>
          <p>Cherishing the moments that define us.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            centeredSlides={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="col-lg-8 mx-auto reflection-item">
                <img src="/assets/images/our-story/grandpa-360x360.jpg" className="reflection-img" />
                <h3>이기현</h3>
                <h4>할아버지</h4>
                <p style={{ wordBreak: 'keep-all' }}>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>우리 가족의 든든한 기둥이신 할아버지는 오랜 세월 동안 가족을 위해 헌신해 오셨습니다. 깊은 지혜와 따뜻한 사랑으로 우리 모두에게 귀감이 되어주시는 할아버지께 존경과 감사의 마음을 전합니다.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-8 mx-auto reflection-item">
                <img src="/assets/images/our-story/grandma-360x360.jpg" className="reflection-img" />
                <h3>김남주</h3>
                <h4>할머니</h4>
                <p style={{ wordBreak: 'keep-all' }}>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>우리 할머니는 인생의 지혜를 갖추신 분입니다. 어려운 시절을 겪으면서도 꿋꿋하게 가족을 지켜오셨고, 항상 올바른 길을 제시해주시는 분입니다. 할머니의 경험에서 우러나오는 조언은 우리 삶의 나침반과 같습니다.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-8 mx-auto reflection-item">
                <img src="/assets/images/our-story/kyungsoo-600x600.jpg" className="reflection-img" />
                <h3>이경수</h3>
                <h4>딸 (첫째)</h4>
                <p style={{ wordBreak: 'keep-all' }}>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>이경수 님은 저희 가족의 사랑스러운 첫째 딸입니다. 강한 책임감과 밝은 웃음으로 가족에게 큰 기쁨을 주는 소중한 존재입니다.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-8 mx-auto reflection-item">
                <img src="/assets/images/our-story/jinho-360x360.jpg" className="reflection-img" />
                <h3>이진호</h3>
                <h4>아들 (둘째)</h4>
                <p style={{ wordBreak: 'keep-all' }}>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>이진호 님은 밝은 에너지를 지닌 분입니다. 가족을 소중히 여기며, 항상 긍정적인 태도로 주변 사람들에게 힘을 주는 존재입니다. 맡은 일에 책임감이 강하고, 꾸준히 노력하는 성실한 면모를 지니고 있습니다.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-8 mx-auto reflection-item">
                <img src="/assets/images/our-story/terri-360x360.jpg" className="reflection-img" />
                <h3>이경아</h3>
                <h4>딸 (셋째)</h4>
                <p style={{ wordBreak: 'keep-all' }}>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>이경아 님은 따뜻한 마음을 가진 분입니다. 가족을 향한 깊은 애정과 헌신적인 태도로 주변 사람들에게 긍정적인 영향을 주는 존재입니다. 배려심으로 사람들과의 관계를 소중히 여기며, 언제나 밝고 활기찬 에너지를 전달합니다.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-8 mx-auto reflection-item">
                <img src="/assets/images/our-story/jinah-300x300.jpg" className="reflection-img" />
                <h3>이진아</h3>
                <h4>딸 (넷째)</h4>
                <p style={{ wordBreak: 'keep-all' }}>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>이진아 님은 가족의 막내딸로서 사랑받으며 성장했고, 밝은 미소와 따뜻함으로 주변 사람들을 배려합니다. 긍정적인 성격으로 늘 활기찬 분위기를 만들며, 가족과 친구들에게 힘이 되어줍니다.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides here */}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}

export default Story;
