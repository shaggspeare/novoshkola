import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import nmt_instructor_data from "../../data/nmt-data/NMTInstructorData";
import BtnArrow from "../../svg/BtnArrow";

const NMTTeacherDetails = () => {
  const { teacherSlug } = useParams<{ teacherSlug: string }>();
  const teacher = nmt_instructor_data.find(t => t.slug === teacherSlug);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!teacher) {
    return (
      <section className="instructor__details-area section-pt-120 section-pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Викладача не знайдено</h2>
              <button onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const teachersSection = document.getElementById('teachers');
                  if (teachersSection) {
                    teachersSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }} className="btn arrow-btn mt-30">
                Повернутися до списку викладачів <BtnArrow />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleTeachersClick = () => {
    navigate('/');
    setTimeout(() => {
      const teachersSection = document.getElementById('teachers');
      if (teachersSection) {
        teachersSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="instructor__details-area section-pt-120 section-pb-90" id="teacher-bio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="instructor__details-wrap">
              <div className="instructor__details-info">
                <div className="instructor__details-thumb" style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  maxWidth: "300px"
                }}>
                  <img src={teacher.image} alt={teacher.name} style={{
                    width: "100%",
                    height: "auto",
                    display: "block"
                  }} />
                </div>
                <div className="instructor__details-content">
                  <h2 className="title">{teacher.name}</h2>
                  <span className="designation">{teacher.subject}</span>
                  <ul className="list-wrap">
                    <li className="avg-rating">
                      <i className="fas fa-graduation-cap"></i>
                      {teacher.experience}
                    </li>
                  </ul>
                  <p>{teacher.bio}</p>
                </div>
              </div>

              {teacher.education.length > 0 && (
                <div className="instructor__details-biography">
                  <h4 className="title">Освіта</h4>
                  <ul className="list-wrap">
                    {teacher.education.map((item, index) => (
                      <li key={index} style={{ marginBottom: "10px" }}>
                        <i className="fas fa-check-circle" style={{ color: "#ffc224", marginRight: "10px" }}></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {teacher.certificates && teacher.certificates.length > 0 && (
                <div className="instructor__details-Skill">
                  <h4 className="title">Сертифікати та курси підвищення кваліфікації</h4>
                  <ul className="list-wrap">
                    {teacher.certificates.map((cert, index) => (
                      <li key={index} style={{ marginBottom: "8px" }}>
                        <i className="fas fa-award" style={{ color: "#ffc224", marginRight: "10px" }}></i>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="instructor__details-biography">
                <h4 className="title">Досягнення та результати</h4>
                <ul className="list-wrap">
                  {teacher.achievements.map((achievement, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                      <i className="fas fa-trophy" style={{ color: "#ffc224", marginRight: "10px" }}></i>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="row justify-content-center mt-50">
                <div className="col-lg-10">
                  <div style={{
                    background: "#f9f9f9",
                    padding: "40px 30px",
                    borderRadius: "8px",
                    border: "2px solid #ffc224",
                    textAlign: "center"
                  }}>
                    <h4 className="mb-20">Готові розпочати навчання з {teacher.name.split(' ')[0]}?</h4>
                    <p className="mb-25">Запишіться на безкоштовний пробний урок вже сьогодні!</p>
                    <div className="tg-button-wrap" style={{ justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
                      <button onClick={handleContactClick} className="btn arrow-btn">
                        Записатися на пробний урок <BtnArrow />
                      </button>
                      <button onClick={handleTeachersClick} className="btn btn-two arrow-btn">
                        ← Всі викладачі
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NMTTeacherDetails;
