import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import nmt_testimonial_data from '../../data/nmt-data/NMTTestimonialData';

const setting = {
   slidesPerView: 1,
   spaceBetween: 30,
   observer: true,
   observeParents: true,
   loop: true,
   autoplay: {
      delay: 7000,
      disableOnInteraction: false,
   },
   breakpoints: {
      '1500': {
         slidesPerView: 1,
      },
      '1200': {
         slidesPerView: 1,
      },
      '992': {
         slidesPerView: 1,
         spaceBetween: 24,
      },
      '768': {
         slidesPerView: 1,
         spaceBetween: 24,
      },
      '576': {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      '0': {
         slidesPerView: 1,
         spaceBetween: 15,
      },
   },
   pagination: {
      el: '.testimonial-pagination',
      clickable: true,
   },
}

const NMTTestimonials = () => {
   return (
      <section className="testimonial__area section-py-120" id="reviews">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Відгуки</span>
                     <h2 className="title">Що говорять наші учні</h2>
                     <p>Реальні історії успіху наших випускників</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <Swiper {...setting} modules={[Pagination, Autoplay]} className="swiper-container testimonial-active-four">
                     {nmt_testimonial_data.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="testimonial__item-four">
                              <div className="rating">
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                              </div>
                              <p>{item.desc}</p>
                              <div className="testimonial__bottom-two">
                                 <h4 className="title">{item.title}</h4>
                                 <span>{item.designation}</span>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                     <div className="testimonial-pagination testimonial-pagination-two"></div>
                  </Swiper>
               </div>
            </div>

            {/* CTA Button */}
            <div className="row justify-content-center" style={{ marginTop: "40px" }}>
               <div className="col-auto">
                  <a href="#contact" className="btn arrow-btn" style={{ textTransform: 'none' }}>
                     Спробувати пробний урок
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTTestimonials;
