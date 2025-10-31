import { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import InjectableSvg from "../../hooks/InjectableSvg";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_IDS = import.meta.env.VITE_TELEGRAM_CHAT_IDS;

interface ContactFormData {
   name: string;
   phone: string;
   email: string;
   program: string;
   format: string;
   message: string;
}

// Функція для відправки повідомлення в Telegram
const sendTelegramNotification = async (data: ContactFormData) => {
   if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_IDS) {
      console.warn('Telegram credentials not configured');
      return;
   }

   const chatIds = TELEGRAM_CHAT_IDS.split(',').map(id => id.trim());
   const timestamp = new Date().toLocaleString('uk-UA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
   });

   const message = `🎓 *Нова заявка з NMT Landing!*

📅 *Дата:* ${timestamp}

👤 *Ім'я:* ${data.name}
📞 *Телефон:* ${data.phone}
📧 *Email:* ${data.email}
📚 *Програма:* ${data.program}
👥 *Формат:* ${data.format}
💬 *Коментар:* ${data.message || 'Немає'}

[Переглянути в таблиці](https://docs.google.com/spreadsheets/d/1IQhlPC91lQA0cL_UoX0kghWk6Qy3-Jpi7XnoADL9OYM/edit)`;

   const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

   // Відправляємо повідомлення на всі chat IDs
   const promises = chatIds.map(chatId =>
      fetch(telegramUrl, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
         }),
      })
      .then(response => response.json())
      .then(result => {
         if (result.ok) {
            console.log(`Telegram notification sent to ${chatId}`);
         } else {
            console.error(`Failed to send to ${chatId}:`, result);
         }
      })
      .catch(error => {
         console.error(`Error sending to ${chatId}:`, error);
      })
   );

   await Promise.allSettled(promises);
};

const NMTContact = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);

   // Маппінг значень на українську мову
   const programMap: Record<string, string> = {
      'standard': 'НМТ Стандарт (9 місяців)',
      'accelerated': 'НМТ Прискорений (6 місяців)',
      'express': 'НМТ Експрес (3 місяці)',
      'personal': 'Персональна програма',
      'annual': 'Річна програма для 10 класу',
      'undecided': 'Ще не визначився(-лась)',
   };

   const formatMap: Record<string, string> = {
      'group': 'Група (до 5 учнів)',
      'individual': 'Індивідуально (1-на-1)',
      'undecided': 'Не визначився(-лась)',
   };

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      const programValue = formData.get('program') as string;
      const formatValue = formData.get('format') as string;

      const data: ContactFormData = {
         name: formData.get('name') as string,
         phone: formData.get('phone') as string,
         email: formData.get('email') as string,
         program: programMap[programValue] || programValue || 'Не вибрано',
         format: formatMap[formatValue] || formatValue || 'Не вибрано',
         message: formData.get('message') as string,
      };

      if (!data.name || !data.phone || !data.email) {
         toast.error("Будь ласка, заповніть всі обов'язкові поля");
         return;
      }

      setIsSubmitting(true);

      try {
         // Відправляємо дані в Google Sheets
         await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         });

         // Відправляємо сповіщення в Telegram (паралельно, не блокуючи)
         sendTelegramNotification(data).catch(err => {
            console.error('Telegram notification failed:', err);
         });

         toast.success("Дякуємо! Ваша заявка успішно відправлена. Ми зв'яжемося з вами найближчим часом!");
         form.reset();

      } catch (error) {
         console.error('Error submitting form:', error);
         toast.error("Виникла помилка при відправці форми. Будь ласка, спробуйте ще раз або зв'яжіться з нами по телефону.");
      } finally {
         setIsSubmitting(false);
      }
   };

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
                     <form id="nmt-contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-grp">
                                 <input
                                    type="text"
                                    name="name"
                                    placeholder="Ваше ім'я *"
                                    required
                                    disabled={isSubmitting}
                                 />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-grp">
                                 <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Телефон *"
                                    required
                                    disabled={isSubmitting}
                                 />
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="form-grp">
                                 <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    required
                                    disabled={isSubmitting}
                                 />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-grp">
                                 <select name="program" className="form-select" disabled={isSubmitting}>
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
                                 <select name="format" className="form-select" disabled={isSubmitting}>
                                    <option value="">Оберіть формат навчання</option>
                                    <option value="group">Група (до 5 учнів)</option>
                                    <option value="individual">Індивідуально (1-на-1)</option>
                                    <option value="undecided">Не визначився(-лась)</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="form-grp">
                                 <textarea
                                    name="message"
                                    placeholder="Коментар (необов'язково)"
                                    rows={3}
                                    disabled={isSubmitting}
                                 ></textarea>
                              </div>
                           </div>
                        </div>
                        <button type="submit" className="btn btn-two arrow-btn" disabled={isSubmitting}>
                           {isSubmitting ? 'Відправляємо...' : 'Відправити заявку'}
                           <i className="flaticon-arrow-right"></i>
                        </button>
                     </form>
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
