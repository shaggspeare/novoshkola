// Placeholder Teachers component - to be updated when teacher data is available

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

            {/* Placeholder content - will be replaced with actual teacher cards */}
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="text-center p-5" style={{
                     background: "#f9f9f9",
                     borderRadius: "8px",
                     border: "1px dashed #e8e8e8"
                  }}>
                     <i className="flaticon-instructor" style={{ fontSize: "48px", color: "#5866eb", marginBottom: "20px" }}></i>
                     <h4 style={{ marginBottom: "15px" }}>Розділ в розробці</h4>
                     <p style={{ color: "#666", marginBottom: 0 }}>
                        Інформація про викладачів буде додана найближчим часом
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTTeachers;
