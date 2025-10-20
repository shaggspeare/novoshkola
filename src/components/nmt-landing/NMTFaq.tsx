import { useState } from "react";
import nmt_faq_data from "../../data/nmt-data/NMTFaqData";

const NMTFaq = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(1);

   const toggleAccordion = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
   };

   return (
      <section className="faq__area section-py-120" id="faq">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Часті питання</span>
                     <h2 className="title bold" style={{ textTransform: "none", fontSize: "clamp(24px, 6vw, 48px)" }}>Відповіді на найпопулярніші питання</h2>
                     <p style={{ fontSize: "clamp(14px, 3.5vw, 16px)" }}>Зібрали найважливіше, що цікавить наших майбутніх учнів та їхніх батьків</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-xl-10">
                  <div className="faq__wrap faq__wrap-two">
                     <div className="accordion" id="accordionExample">
                        {nmt_faq_data.map((item) => (
                           <div key={item.id} className="accordion-item">
                              <h2 className="accordion-header">
                                 <button
                                    className={`accordion-button ${activeIndex === item.id ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={activeIndex === item.id}
                                 >
                                    {item.question}
                                 </button>
                              </h2>
                              <div
                                 id={`collapse${item.id}`}
                                 className={`accordion-collapse collapse ${activeIndex === item.id ? "show" : ""}`}
                              >
                                 <div className="accordion-body">
                                    <p>{item.answer}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTFaq;
