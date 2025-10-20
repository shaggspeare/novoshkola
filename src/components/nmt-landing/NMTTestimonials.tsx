// Placeholder Testimonials component - to be updated when reviews are available

const NMTTestimonials = () => {
   return (
      <section className="testimonial__area section-py-120" id="reviews">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title">Відгуки</span>
                     <h2 className="title">Що говорять наші учні та їхні батьки</h2>
                     <p>Реальні історії успіху наших випускників</p>
                  </div>
               </div>
            </div>

            {/* Placeholder content - will be replaced with actual testimonials */}
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="text-center p-5" style={{
                     background: "#f9f9f9",
                     borderRadius: "8px",
                     border: "1px dashed #e8e8e8"
                  }}>
                     <i className="flaticon-quote" style={{ fontSize: "48px", color: "#5866eb", marginBottom: "20px" }}></i>
                     <h4 style={{ marginBottom: "15px" }}>Розділ в розробці</h4>
                     <p style={{ color: "#666", marginBottom: 0 }}>
                        Відгуки учнів та батьків будуть додані найближчим часом
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTTestimonials;
