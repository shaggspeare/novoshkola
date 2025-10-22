const NMTSubjects = () => {
   const subjects = [
      {
         id: 1,
         name: "Українська мова",
          icon: "flaticon-book",
         popular: true,
         color: "linear-gradient(135deg, #5866eb 0%, #8b5cf6 100%)", // Blue-Purple
         borderColor: "#5866eb"
      },
      {
         id: 2,
         name: "Математика",
          icon: "flaticon-book",
         popular: true,
         color: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)", // Orange
         borderColor: "#f59e0b"
      },
      {
         id: 3,
         name: "Історія України",
         icon: "flaticon-book",
         popular: true,
         color: "linear-gradient(135deg, #10b981 0%, #059669 100%)", // Green
         borderColor: "#10b981"
      },

      {
         id: 4,
         name: "Інші предмети",
         icon: "flaticon-essay",
         popular: false,
         note: "за запитом",
         color: "#e8e8e8",
         borderColor: "#e8e8e8"
      }
   ];

   return (
      <section className="categories-area section-py-120" style={{
         background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
         paddingTop: "60px !important",
         paddingBottom: "60px !important"
      }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title text-center mb-40">
                     <span className="sub-title">Наші предмети</span>
                     <h2 className="title" style={{ textTransform: "none", fontSize: "clamp(24px, 5vw, 36px)" }}>
                        Предмети для підготовки до НМТ
                     </h2>
                     <p style={{ fontSize: "clamp(14px, 3.5vw, 16px)" }}>
                        Основні предмети завжди доступні. Інші предмети — за вашим запитом
                     </p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {subjects.map((subject) => (
                  <div key={subject.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-25">
                     <div className="nmt-subject-card" style={{
                        background: subject.popular ? "#fff" : "#f9f9f9",
                        border: `2px solid ${subject.borderColor}`,
                        borderRadius: "12px",
                        padding: "25px 15px",
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        cursor: "pointer"
                     }}
                     onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = `0 10px 30px ${subject.popular ? 'rgba(88, 102, 235, 0.15)' : 'rgba(0, 0, 0, 0.1)'}`;
                     }}
                     onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                     }}
                     >

                        <div style={{
                           width: "60px",
                           height: "60px",
                           borderRadius: "50%",
                           background: subject.color,
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           marginBottom: "15px"
                        }}>
                           <i className={subject.icon} style={{
                              fontSize: "28px",
                              color: subject.popular ? "#fff" : "#666"
                           }}></i>
                        </div>

                        <h4 style={{
                           fontSize: "16px",
                           fontWeight: "600",
                           marginBottom: subject.note ? "5px" : "0",
                           color: "#1a1a1a",
                           lineHeight: "1.3"
                        }}>
                           {subject.name}
                        </h4>

                        {subject.note && (
                           <span style={{
                              fontSize: "12px",
                              color: "#888",
                              fontStyle: "italic"
                           }}>
                              {subject.note}
                           </span>
                        )}
                     </div>
                  </div>
               ))}
            </div>

            <div className="row justify-content-center" style={{ marginTop: "30px" }}>
               <div className="col-auto">
                  <p style={{
                     textAlign: "center",
                     fontSize: "14px",
                     color: "#666",
                     marginBottom: "0"
                  }}>
                     <i className="flaticon-info" style={{ marginRight: "8px", color: "#5866eb" }}></i>
                     Потрібен інший предмет? Зв'яжіться з нами, і ми підберемо викладача!
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default NMTSubjects;
