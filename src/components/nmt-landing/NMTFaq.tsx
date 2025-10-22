import { useState } from "react";
import nmt_faq_data from "../../data/nmt-data/NMTFaqData";

const NMTFaq = () => {
   const [activeIndexes, setActiveIndexes] = useState<number[]>([1]);

   const toggleAccordion = (index: number) => {
      setActiveIndexes(prev =>
         prev.includes(index)
            ? prev.filter(i => i !== index)
            : [...prev, index]
      );
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
                                    className={`accordion-button ${activeIndexes.includes(item.id) ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={activeIndexes.includes(item.id)}
                                 >
                                    {item.question}
                                 </button>
                              </h2>
                              <div
                                 id={`collapse${item.id}`}
                                 className={`accordion-collapse collapse ${activeIndexes.includes(item.id) ? "show" : ""}`}
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

            {/* CTA Button */}
            <div className="row justify-content-center" style={{ marginTop: "40px" }}>
               <div className="col-auto">
                  <a href="#contact" className="btn arrow-btn" style={{ textTransform: 'none' }}>
                     Записатися
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTFaq;
