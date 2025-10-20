import { useState } from "react"
import { Link } from "react-router-dom"
import UseSticky from "../../hooks/UseSticky"

const NMTHeader = () => {
   const { sticky } = UseSticky();
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

   const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
         setIsMobileMenuOpen(false);
      }
   };

   return (
      <>
         <header>
            <div id="header-fixed-height"></div>
            <div id="sticky-header" className={`tg-header__area ${sticky ? "sticky-menu" : ""}`}>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tgmenu__wrap">
                           <nav className="tgmenu__nav">
                              <div className="logo">
                                 <Link to="/nmt"><img src="/assets/img/logo/logo-violet.png" alt="Новошкола" style={{ maxWidth: "150px", maxHeight: "60px" }} /></Link>
                              </div>

                              {/* Desktop Menu */}
                              <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                 <ul className="navigation">
                                    <li>
                                       <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                                          Про курс
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#program" onClick={(e) => { e.preventDefault(); scrollToSection('program'); }}>
                                          Програма
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#teachers" onClick={(e) => { e.preventDefault(); scrollToSection('teachers'); }}>
                                          Викладачі
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#prices" onClick={(e) => { e.preventDefault(); scrollToSection('prices'); }}>
                                          Ціни
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>
                                          Відгуки
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
                                          FAQ
                                       </a>
                                    </li>
                                 </ul>
                              </div>

                              {/* Contact info */}
                              <div className="tgmenu__action d-none d-md-flex">
                                 <ul className="list-wrap" style={{ alignItems: "center" }}>
                                    <li style={{ marginRight: "20px", fontSize: "14px" }}>
                                       <i className="flaticon-phone-call" style={{ marginRight: "8px" }}></i>
                                       <a href="tel:+380123456789" style={{ color: "inherit", fontSize: '16px' }}>+380 12 345 67 89</a>
                                    </li>
                                    <li>
                                       <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn arrow-btn">
                                          Записатися
                                       </a>
                                    </li>
                                 </ul>
                              </div>

                              {/* Mobile Menu Toggle */}
                              <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-nav-toggler d-xl-none">
                                 <i className="tg-flaticon-menu-1"></i>
                              </div>
                           </nav>
                        </div>

                        {/* Mobile Menu */}
                        {isMobileMenuOpen && (
                           <div className="mobile-menu d-xl-none" style={{
                              position: "absolute",
                              top: "100%",
                              left: 0,
                              right: 0,
                              background: "#fff",
                              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                              zIndex: 999,
                              padding: "20px"
                           }}>
                              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                 <li style={{ marginBottom: "15px" }}>
                                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} style={{ fontSize: "16px", color: "#1e1e1e" }}>
                                       Про курс
                                    </a>
                                 </li>
                                 <li style={{ marginBottom: "15px" }}>
                                    <a href="#program" onClick={(e) => { e.preventDefault(); scrollToSection('program'); }} style={{ fontSize: "16px", color: "#1e1e1e" }}>
                                       Програма
                                    </a>
                                 </li>
                                 <li style={{ marginBottom: "15px" }}>
                                    <a href="#teachers" onClick={(e) => { e.preventDefault(); scrollToSection('teachers'); }} style={{ fontSize: "16px", color: "#1e1e1e" }}>
                                       Викладачі
                                    </a>
                                 </li>
                                 <li style={{ marginBottom: "15px" }}>
                                    <a href="#prices" onClick={(e) => { e.preventDefault(); scrollToSection('prices'); }} style={{ fontSize: "16px", color: "#1e1e1e" }}>
                                       Ціни
                                    </a>
                                 </li>
                                 <li style={{ marginBottom: "15px" }}>
                                    <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }} style={{ fontSize: "16px", color: "#1e1e1e" }}>
                                       Відгуки
                                    </a>
                                 </li>
                                 <li style={{ marginBottom: "15px" }}>
                                    <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} style={{ fontSize: "16px", color: "#1e1e1e" }}>
                                       FAQ
                                    </a>
                                 </li>
                                 <li style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #e8e8e8" }}>
                                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn arrow-btn" style={{ display: "block", textAlign: "center" }}>
                                       Записатися
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}

export default NMTHeader;
