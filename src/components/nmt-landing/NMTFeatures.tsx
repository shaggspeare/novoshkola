import nmt_feature_data from "../../data/nmt-data/NMTFeatureData";

const NMTFeatures = () => {
   return (
      <section className="features__area section-py-120" id="about">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title white-title text-center mb-50">
                     <span className="sub-title">Чому обирають нас</span>
                     <h2 className="title" style={{ textTransform: "none" }}>Переваги нашої школи підготовки до НМТ</h2>
                     <p>Ми створили всі умови для ефективної підготовки до тестування. Кожна деталь продумана для вашого успіху.</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {nmt_feature_data.filter((items) => items.page === "nmt").map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                     <div className="features__item mb-50">
                        <div className="features__icon">
                           <img src={item.icon} className="injectable" alt={item.title} style={{ width: "60px", height: "60px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                        </div>
                        <div className="features__content">
                           <h4 className="title">{item.title}</h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default NMTFeatures;
