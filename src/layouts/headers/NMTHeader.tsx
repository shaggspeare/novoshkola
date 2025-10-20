import { useState } from "react"
import { Link } from "react-router-dom"
import UseSticky from "../../hooks/UseSticky"
import NMTMobileSidebar from "./menu/NMTMobileSidebar"

const NMTHeader = () => {
   const { sticky } = UseSticky();
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

   const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
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
                              {!isMobileMenuOpen && (
                                 <div
                                    onClick={() => setIsMobileMenuOpen(true)}
                                    className="mobile-nav-toggler d-xl-none"
                                 >
                                    <i className="tg-flaticon-menu-1"></i>
                                 </div>
                              )}
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <NMTMobileSidebar
            isActive={isMobileMenuOpen}
            setIsActive={setIsMobileMenuOpen}
            scrollToSection={scrollToSection}
         />
      </>
   )
}

export default NMTHeader;
