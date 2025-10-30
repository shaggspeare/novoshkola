import { Link } from "react-router-dom"
// import Social from "../../components/common/Social"

const NMTFooter = () => {
   return (
      <footer className="footer__area">
         <div className="footer__top">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="footer__widget">
                        <div className="logo mb-35">
                           <Link to="/"><img src="/assets/img/logo/logo-violet-long.png" alt="Новошкола" style={{ maxWidth: "250px", maxHeight: "150px" }} /></Link>
                        </div>
                        <div className="footer__content">
                           <p>Ефективна підготовка до НМТ з досвідченими викладачами</p>
                           <ul className="list-wrap">
                              <li>Україна, м. Київ</li>
                              <li><a href="tel:+380501939393" style={{ color: "inherit" }}>+38 (050) 193-93-93</a></li>
                              <li><a href="tel:+380681939333" style={{ color: "inherit" }}>+38 (068) 193-93-33</a></li>
                              <li><a href="tel:+380443590750" style={{ color: "inherit" }}>+38 (044) 359-07-50</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title">Корисні посилання</h4>
                        <div className="footer__link">
                           <ul className="list-wrap">
                              <li><a href="#about">Про курс</a></li>
                              <li><a href="#program">Програма</a></li>
                              <li><a href="#teachers">Викладачі</a></li>
                              <li><a href="#prices">Ціни</a></li>
                              <li><a href="#reviews">Відгуки</a></li>
                              <li><a href="#faq">FAQ</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title">Предмети НМТ</h4>
                        <div className="footer__link">
                           <ul className="list-wrap">
                              <li><div>Українська мова</div></li>
                              <li><div>Математика</div></li>
                              <li><div>Історія України</div></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  {/* <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title">Зв'яжіться з нами</h4>
                        <div className="footer__contact-content">
                           <p>Підпішіться на наші соціальні мережі для отримання актуальних новин</p>
                           <ul className="list-wrap footer__social">
                              <Social />
                           </ul>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>

         <div className="footer__bottom">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-7">
                     <div className="copy-right-text">
                        <p>© 2025 Новошкола. Всі права захищені.</p>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div className="footer__bottom-menu">
                        <ul className="list-wrap">
                           <li><Link to="/">Умови використання</Link></li>
                           <li><Link to="/">Політика конфіденційності</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default NMTFooter
