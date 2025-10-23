import nmt_program_data from "../../data/nmt-data/NMTProgramData";

const NMTPrograms = () => {
  return (
    <section className="courses-area section-pt-120 section-pb-90" id="program" style={{ backgroundImage: `url(/assets/img/bg/courses_bg.jpg)` }}>
      <div className="container">
        <div className="section__title-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section__title text-center mb-50">
                <span className="sub-title">Програми курсу</span>
                <h2 className="title" style={{ textTransform: "none" }}>Оберіть програму підготовки для себе</h2>
                <p className="desc">Різні формати для різних потреб - від стандартного річного курсу до інтенсивного експрес-формату</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {nmt_program_data.map((program) => (
            <div key={program.id} className="col-lg-4 col-md-6 mb-30" style={{ display: "flex" }}>
              <div className="courses__item shine__animate-item" style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div className="courses__item-content" style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  {program.tag && (
                    <ul className="courses__item-meta list-wrap">
                      <li className="courses__item-tag">
                        <a href="#contact" style={{ background: program.tag === "Популярний" ? "#f6520a" : "#6A4E9B" }}>
                          {program.tag}
                        </a>
                      </li>
                    </ul>
                  )}
                  <h5 className="title">
                    <a href="#contact">{program.title}</a>
                  </h5>
                  <p className="author" style={{ marginBottom: "15px" }}>{program.description}</p>

                  <ul className="about__info-list list-wrap" style={{ marginBottom: "15px" }}>
                    <li className="about__info-list-item">
                      <i className="flaticon-angle-right"></i>
                      <p className="content"><strong>Тривалість:</strong> {program.duration}</p>
                    </li>
                    <li className="about__info-list-item">
                      <i className="flaticon-angle-right"></i>
                      <p className="content"><strong>Частота:</strong> {program.frequency}</p>
                    </li>
                    {program.totalLessons > 0 && (
                      <li className="about__info-list-item">
                        <i className="flaticon-angle-right"></i>
                        <p className="content"><strong>Всього:</strong> {program.totalLessons} занять × {program.lessonDuration} хв</p>
                      </li>
                    )}
                    <li className="about__info-list-item">
                      <i className="flaticon-angle-right"></i>
                      <p className="content"><strong>Формат:</strong> {program.format === "group" ? "Груповий" : program.format === "individual" ? "Індивідуальний" : "Гнучкий"}</p>
                    </li>
                  </ul>

                  <div className="courses__item-bottom" style={{ marginTop: "auto", paddingTop: "20px" }}>
                    <div className="button">
                      <a href="#contact">
                        <span className="text">Обрати програму</span>
                        <i className="flaticon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-40">
          <div className="col-lg-8 text-center">
            <div className="section__title">
              <p><strong>Предмети:</strong> Українська мова, математика, історія України, англійська мова<br />
              <em>(Інші предмети - за запитом)</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NMTPrograms;
