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
                  <div key={teacher.id} className="col-xl-4 col-lg-4 col-sm-6 mb-30">
                     <div className="instructor__item" style={{
                        border: "1px solid #e8e8e8",
                        borderRadius: "8px",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column"
                     }}>
                        <div className="instructor__thumb" style={{
                           overflow: "hidden",
                           borderRadius: "8px",
                           height: "250px",
                           position: "relative"
                        }}>
                           <Link to={`/nmt/${teacher.slug}`}>
                              <img
                                 src={teacher.image}
                                 alt={teacher.name}
                                 style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                    transition: "transform 0.3s ease"
                                 }}
                                 onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                 onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                              />
                           </Link>
                        </div>
                        <div className="instructor__content" style={{
                           padding: "25px 20px",
                           flex: "1",
                           display: "flex",
                           flexDirection: "column"
                        }}>
                           <h2 className="title" style={{ marginBottom: "8px" }}>
                              <Link to={`/nmt/${teacher.slug}`}>{teacher.name}</Link>
                           </h2>
                           <span className="designation" style={{
                              display: "block",
                              color: "#666"
                           }}>{teacher.subject}</span>

                           <div style={{ marginTop: "auto", textAlign: "center" }}>
                              <Link to={`/nmt/${teacher.slug}`} className="btn arrow-btn">
                                 Детальніше
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default NMTTeachers;
