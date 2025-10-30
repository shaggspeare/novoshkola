import InjectableSvg from "../../hooks/InjectableSvg";

const NMTContact = () => {
   return (
      <section className="contact-area section-py-120" id="contact">
         <div className="container">
            <div className="row justify-content-center mb-50">
               <div className="col-xl-8 col-lg-10">
                  <div className="section__title text-center">
                     <span className="sub-title">Зв'яжіться з нами</span>
                     <h2 className="title" style={{ textTransform: "none", fontSize: "clamp(24px, 6vw, 48px)" }}>Готові розпочати підготовку?</h2>
                     <p style={{ fontSize: "clamp(14px, 3.5vw, 16px)" }}>Залиште свої контактні дані, і ми зв'яжемося з вами найближчим часом</p>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-lg-8 order-1 order-lg-2">
                  <div className="contact-form-wrap" id="contact-form">
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
                           <div className="col-md-6">
                              <div className="form-grp">
                                 <select name="program" className="form-select">
                                    <option value="">Оберіть програму</option>
                                    <option value="standard">НМТ Стандарт (9 місяців)</option>
                                    <option value="accelerated">НМТ Прискорений (6 місяців)</option>
                                    <option value="express">НМТ Експрес (3 місяці)</option>
                                    <option value="personal">Персональна програма</option>
                                    <option value="annual">Річна програма для 10 класу</option>
                                    <option value="undecided">Ще не визначився(-лась)</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-grp">
                                 <select name="format" className="form-select">
                                    <option value="">Оберіть формат навчання</option>
                                    <option value="group">Група (до 5 учнів)</option>
                                    <option value="individual">Індивідуально (1-на-1)</option>
                                    <option value="undecided">Не визначився(-лась)</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="form-grp">
                                 <textarea name="message" placeholder="Коментар (необов'язково)" rows={3}></textarea>
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

               <div className="col-lg-4 order-2 order-lg-1 mb-4 mb-lg-0">
                  <div className="contact-info-wrap">
                     <ul className="list-wrap">
                        <li>
                           <div className="icon">
                              <InjectableSvg src="/assets/img/icons/contact_phone.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Телефон</h4>
                              <a href="tel:+380501939393">+38 (050) 193-93-93</a>
                              <a href="tel:+380681939333">+38 (068) 193-93-33</a>
                              <a href="tel:+380443590750">+38 (044) 359-07-50</a>
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
            </div>
         </div>
      </section>
   )
}

export default NMTContact;
