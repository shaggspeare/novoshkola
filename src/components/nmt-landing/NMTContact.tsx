import InjectableSvg from "../../hooks/InjectableSvg";

const NMTContact = () => {
   return (
      <section className="contact-area section-py-120" id="contact">
         <div className="container">
            <div className="row justify-content-center mb-50">
               <div className="col-xl-8 col-lg-10">
                  <div className="section__title text-center">
                     <span className="sub-title">Зв'яжіться з нами</span>
                     <h2 className="title" style={{ textTransform: "none" }}>Готові розпочати підготовку?</h2>
                     <p>Залиште свої контактні дані, і ми зв'яжемося з вами найближчим часом</p>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-lg-4">
                  <div className="contact-info-wrap">
                     <ul className="list-wrap">
                        <li>
                           <div className="icon">
                              <InjectableSvg src="/assets/img/icons/contact_phone.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Телефон</h4>
                              <a href="tel:+380123456789">+380 (12) 345 67 89</a>
                              <a href="tel:+380987654321">+380 (98) 765 43 21</a>
                           </div>
                        </li>
                        <li>
                           <div className="icon">
                              <InjectableSvg src="/assets/img/icons/emial.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Email</h4>
                              <a href="mailto:info@novoshkola.com">info@novoshkola.com</a>
                              <a href="mailto:nmt@novoshkola.com">nmt@novoshkola.com</a>
                           </div>
                        </li>
                        <li>
                           <div className="icon">
                              <InjectableSvg src="/assets/img/icons/map.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Графік роботи</h4>
                              <p>Пн-Пт: 9:00 - 20:00<br />Сб-Нд: 10:00 - 18:00</p>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="col-lg-8">
                  <div className="contact-form-wrap">
                     <h4 className="title">Записатися на безкоштовний урок</h4>
                     <p>Заповніть форму, і наш менеджер зв'яжеться з вами протягом 15 хвилин</p>
                     <form id="nmt-contact-form">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-grp">
                                 <input type="text" name="name" placeholder="Ваше ім'я *" required />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-grp">
                                 <input type="tel" name="phone" placeholder="Телефон *" required />
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="form-grp">
                                 <input type="email" name="email" placeholder="Email *" required />
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="form-grp">
                                 <select name="program" className="form-select">
                                    <option value="">Оберіть програму</option>
                                    <option value="standard">НМТ Стандарт (9 місяців)</option>
                                    <option value="accelerated">НМТ Прискорений (6 місяців)</option>
                                    <option value="express">НМТ Експрес (3 місяці)</option>
                                    <option value="personal">Персональна програма</option>
                                    <option value="annual">Річна програма для 10 класу</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="form-grp">
                                 <textarea name="message" placeholder="Коментар (необов'язково)" rows={4}></textarea>
                              </div>
                           </div>
                        </div>
                        <button type="submit" className="btn btn-two arrow-btn">
                           Відправити заявку
                           <i className="flaticon-arrow-right"></i>
                        </button>
                     </form>
                     <p className="ajax-response mb-0"></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTContact;
