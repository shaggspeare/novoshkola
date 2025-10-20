import { Link } from "react-router-dom"

interface NMTMobileSidebarProps {
   isActive: boolean;
   setIsActive: (isActive: boolean) => void;
   scrollToSection: (sectionId: string) => void;
}

const NMTMobileSidebar = ({ isActive, setIsActive, scrollToSection }: NMTMobileSidebarProps) => {

   const handleNavClick = (sectionId: string) => {
      scrollToSection(sectionId);
      setIsActive(false);
   };

   return (
      <div className={isActive ? "mobile-menu-visible" : ""}>
         <div className="tgmobile__menu">
            <nav className="tgmobile__menu-box">
               <div onClick={() => setIsActive(false)} className="close-btn"><i className="tg-flaticon-close-1"></i></div>
               <div className="nav-logo">
                  <Link to="/nmt"><img src="/assets/img/logo/logo-violet.png" alt="Новошкола" style={{ maxWidth: "70px" }} /></Link>
               </div>

               <div className="tgmobile__menu-outer">
                  <ul className="navigation">
                     <li>
                        <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
                           Про курс
                        </a>
                     </li>
                     <li>
                        <a href="#program" onClick={(e) => { e.preventDefault(); handleNavClick('program'); }}>
                           Програма
                        </a>
                     </li>
                     <li>
                        <a href="#how-it-works" onClick={(e) => { e.preventDefault(); handleNavClick('how-it-works'); }}>
                           Як це працює
                        </a>
                     </li>
                     <li>
                        <a href="#teachers" onClick={(e) => { e.preventDefault(); handleNavClick('teachers'); }}>
                           Викладачі
                        </a>
                     </li>
                     <li>
                        <a href="#prices" onClick={(e) => { e.preventDefault(); handleNavClick('prices'); }}>
                           Ціни
                        </a>
                     </li>
                     <li>
                        <a href="#reviews" onClick={(e) => { e.preventDefault(); handleNavClick('reviews'); }}>
                           Відгуки
                        </a>
                     </li>
                     <li>
                        <a href="#faq" onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>
                           FAQ
                        </a>
                     </li>
                     <li style={{ paddingTop: "10px" }}>
                        <a
                           href="#contact"
                           onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                           className="btn"
                           style={{
                              display: "block",
                              marginLeft: "15px",
                              marginRight: "15px"
                           }}
                        >
                           Записатися
                        </a>
                     </li>
                  </ul>
               </div>

               <div className="tgmobile__menu-contact" style={{ marginTop: "30px", padding: "0 30px 20px" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                     <li style={{ marginBottom: "12px" }}>
                        <a href="tel:+380123456789" style={{ color: "#666", fontSize: "14px", display: "block" }}>
                           +380 (12) 345 67 89
                        </a>
                     </li>
                     <li>
                        <a href="mailto:nmt@novoshkola.com" style={{ color: "#666", fontSize: "14px", display: "block" }}>
                           nmt@novoshkola.com
                        </a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
         <div onClick={() => setIsActive(false)} className="tgmobile__menu-backdrop"></div>
      </div>
   )
}

export default NMTMobileSidebar
