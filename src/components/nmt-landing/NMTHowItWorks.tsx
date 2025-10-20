import nmt_how_it_works_data from "../../data/nmt-data/NMTHowItWorksData";
import BtnArrow from "../../svg/BtnArrow";

const NMTHowItWorks = () => {
   return (
      <section className="about-area section-py-120" id="how-it-works">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Як це працює</span>
                     <h2 className="title" style={{ textTransform: "none" }}>6 простих кроків до успіху на НМТ</h2>
                     <p>Пройдіть шлях від заявки до високого балу разом з нами</p>
                  </div>
               </div>
            </div>

            <div className="row">
               {nmt_how_it_works_data.map((step) => (
                  <div key={step.id} className="col-lg-4 col-md-6 mb-30">
                     <div className="about__info-list-item" style={{
                        background: "#f9f9f9",
                        padding: "30px 25px",
                        borderRadius: "8px",
                        height: "100%",
                        border: "1px solid #e8e8e8",
                        transition: "all 0.3s ease",
                        position: "relative"
                     }}>
                        <div className="step-number" style={{
                           position: "absolute",
                           top: "20px",
                           right: "20px",
                           width: "50px",
                           height: "50px",
                           borderRadius: "50%",
                           background: "linear-gradient(135deg, #5866eb 0%, #4755d6 100%)",
                           color: "#fff",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           fontSize: "20px",
                           fontWeight: "700"
                        }}>
                           {step.step}
                        </div>
                        <div style={{ paddingRight: "60px" }}>
                           <h4 className="title" style={{ fontSize: "18px", marginBottom: "15px", color: "#1e1e1e" }}>
                              {step.title}
                           </h4>
                           <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#666", margin: 0 }}>
                              {step.description}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="row justify-content-center mt-50">
               <div className="col-lg-8 text-center">
                  <div className="tg-button-wrap" style={{ justifyContent: "center" }}>
                     <a href="#contact" className="btn arrow-btn">
                        Записатися зараз <BtnArrow />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTHowItWorks;
