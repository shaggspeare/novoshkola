import { Link } from "react-router-dom";
import nmt_instructor_data from "../../data/nmt-data/NMTInstructorData";

const NMTTeachers = () => {
   return (
      <section className="instructor__area section-py-120" id="teachers">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Наші викладачі</span>
                     <h2 className="title">Досвідчені експерти з підготовки до НМТ</h2>
                     <p>Наші викладачі — це професіонали з багаторічним досвідом підготовки учнів до НМТ</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {nmt_instructor_data.map((teacher) => (
                  <div key={teacher.id} className="col-xl-4 col-lg-4 col-sm-6 mb-25 nmt-teacher-col">
                     <div className="instructor__item nmt-teacher-card" style={{
                        border: "1px solid #e8e8e8",
                        borderRadius: "8px",
                        paddingTop: "8px",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column"
                     }}>
                        <div className="instructor__thumb nmt-teacher-thumb" style={{
                           overflow: "hidden",
                           borderRadius: "8px",
                           height: "200px",
                           position: "relative"
                        }}>
                           <Link to={`/teachers/${teacher.slug}`}>
                              <img
                                 src={teacher.image}
                                 alt={teacher.name}
                                 style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "top center",
                                    display: "block",
                                    transition: "transform 0.3s ease"
                                 }}
                                 onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                 onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                              />
                           </Link>
                        </div>
                        <div className="instructor__content nmt-teacher-content" style={{
                           padding: "18px 15px",
                           flex: "1",
                           display: "flex",
                           flexDirection: "column",
                           textAlign: "center"
                        }}>
                           <h2 className="title nmt-teacher-name" style={{ marginBottom: "6px" }}>
                              <Link to={`/teachers/${teacher.slug}`}>{teacher.name}</Link>
                           </h2>
                           <span className="designation nmt-teacher-subject" style={{
                              display: "block",
                              color: "#666"
                           }}>{teacher.subject}</span>

                           <div className="nmt-teacher-btn-wrap" style={{ marginTop: 8, textAlign: "center" }}>
                              <Link to={`/teachers/${teacher.slug}`} className="btn arrow-btn">
                                 Детальніше
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* CTA Button */}
            <div className="row justify-content-center" style={{ marginTop: "40px" }}>
               <div className="col-auto">
                  <a href="#contact" className="btn arrow-btn" style={{ textTransform: 'none' }}>
                     Записатися на безкоштовний урок
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTTeachers;
