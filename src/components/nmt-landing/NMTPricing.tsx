import nmt_pricing_data, { pricing_notes } from "../../data/nmt-data/NMTPricingData";

const NMTPricing = () => {
   return (
      <section className="courses-area section-py-120" id="prices" style={{ backgroundImage: `url(/assets/img/bg/courses_bg.jpg)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Вартість навчання</span>
                     <h2 className="title" style={{ textTransform: "none" }}>Прозорі ціни та гнучкі умови оплати</h2>
                     <p className="desc">Оберіть формат навчання, який підходить саме вам</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {nmt_pricing_data.map((pricing) => (
                  <div key={pricing.id} className="col-lg-5 col-md-6 mb-30">
                     <div className="courses__item shine__animate-item" style={{
                        border: pricing.isPopular ? "2px solid #6A4E9B" : "1px solid #e8e8e8",
                        position: "relative",
                        height: "100%"
                     }}>
                        {pricing.badge && (
                           <div style={{
                              position: "absolute",
                              top: "15px",
                              right: "15px",
                              background: "#6A4E9B",
                              color: "#fff",
                              padding: "5px 15px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: "600",
                              zIndex: 1
                           }}>
                              {pricing.badge}
                           </div>
                        )}

                        <div className="courses__item-content" style={{ paddingTop: "40px", paddingLeft: "15px", paddingRight: "15px" }}>
                           <div className="text-center mb-30">
                              <h3 className="title" style={{ fontSize: "clamp(20px, 5vw, 24px)", marginBottom: "15px" }}>
                                 {pricing.title}
                              </h3>
                              <div style={{ marginBottom: "10px" }}>
                                 <span style={{ fontSize: "42px", fontWeight: "800", color: "#6A4E9B" }}>
                                    {pricing.price}
                                 </span>
                                 <span style={{ fontSize: "18px", marginLeft: "5px", color: "#666" }}>
                                    {pricing.currency}
                                 </span>
                              </div>
                              <p style={{ fontSize: "14px", color: "#888", margin: "0" }}>
                                 за {pricing.duration} хвилин
                              </p>
                           </div>

                           <ul className="about__info-list list-wrap" style={{ marginBottom: "20px" }}>
                              {pricing.features.map((feature, index) => (
                                 <li key={index} className="about__info-list-item">
                                    <i className="flaticon-angle-right"></i>
                                    <p className="content">{feature}</p>
                                 </li>
                              ))}
                           </ul>

                           <div className="courses__item-bottom">
                              <div className="button">
                                 <a href="#contact">
                                    <span className="text">Обрати пакет</span>
                                    <i className="flaticon-arrow-right"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Additional pricing info */}
            <div className="fact__inner-wrap"  style={{marginTop: "100px"}}>
               <div className="row">
                  <div className="col-md-4 mb-3">
                     <div className="fact__item">
                        <div className="mb-3">
                           <i className="flaticon-trophy" style={{ fontSize: "48px", color: "#fff" }}></i>
                        </div>
                        <h4 className="title" style={{ color: "#fff", fontSize: "24px", marginBottom: "10px" }}>
                           {pricing_notes.trialLesson.title}
                        </h4>
                        <p style={{ color: "rgba(255,255,255,0.9)" }}>
                           {pricing_notes.trialLesson.duration} хв, до {pricing_notes.trialLesson.groupSize}
                        </p>
                     </div>
                  </div>

                  <div className="col-md-4 mb-3">
                     <div className="fact__item">
                        <div className="mb-3">
                           <i className="flaticon-instructor" style={{ fontSize: "48px", color: "#fff" }}></i>
                        </div>
                        <h4 className="title" style={{ color: "#fff", fontSize: "24px", marginBottom: "10px" }}>
                           {pricing_notes.mentorSupport.title}
                        </h4>
                        <p style={{ color: "rgba(255,255,255,0.9)" }}>
                           {pricing_notes.mentorSupport.freePeriod}<br />
                           Далі: {pricing_notes.mentorSupport.price} {pricing_notes.mentorSupport.currency}
                        </p>
                     </div>
                  </div>

                  <div className="col-md-4 mb-3">
                     <div className="fact__item">
                        <div className="mb-3">
                           <i className="flaticon-credit-card" style={{ fontSize: "48px", color: "#fff" }}></i>
                        </div>
                        <h4 className="title" style={{ color: "#fff", fontSize: "24px", marginBottom: "10px" }}>
                           Оплата частинами
                        </h4>
                        <p style={{ color: "rgba(255,255,255,0.9)" }}>
                           {pricing_notes.paymentOptions.description}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTPricing;
