import nmt_feature_data from "../../data/nmt-data/NMTFeatureData";
import InjectableSvg from "../../hooks/InjectableSvg";

const NMTFeatures = () => {
   return (
      <section className="features__area-two section-pt-120 section-pb-90" id="about">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title text-center mb-40">
                     <span className="sub-title">Чому обирають нас</span>
                     <h2 className="title" style={{ textTransform: "none", fontSize: "clamp(24px, 6vw, 34px)" }}>Переваги нашої школи підготовки до НМТ</h2>
                     <p style={{ fontSize: "clamp(14px, 3.5vw, 16px)" }}>Ми створили всі умови для ефективної підготовки до тестування. Кожна деталь продумана для вашого успіху.</p>
                  </div>
               </div>
            </div>
            <div className="features__item-wrap">
               <div className="row justify-content-center">
                  {nmt_feature_data.filter((items) => items.page === "nmt").map((item) => (
                     <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-25 nmt-feature-col" style={{ display: "flex" }}>
                        <div className="features__item-two nmt-feature-item" style={{
                           display: "flex",
                           flexDirection: "column",
                           width: "100%",
                           height: "100%",
                           marginBottom: 0
                        }}>
                           <div className="features__content-two" style={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: 1
                           }}>
                              <div className="content-top">
                                 <div className="features__icon-two nmt-feature-icon">
                                    <InjectableSvg src={item.icon} alt={item.title} className="injectable" />
                                 </div>
                                 <h2 className="title nmt-feature-title">{item.title}</h2>
                              </div>
                              <p className="nmt-feature-desc" style={{ flexGrow: 1 }}>{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTFeatures;
