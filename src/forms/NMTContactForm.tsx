import { toast } from 'react-toastify';
import BtnArrow from '../svg/BtnArrow';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

interface FormData {
   user_name: string;
   user_phone: string;
   user_email: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Ім'я"),
      user_phone: yup.string().required().label("Телефон"),
      user_email: yup.string().required().email().label("Email"),
   })
   .required();

const NMTContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = () => {
      if (form.current) {
         emailjs.sendForm('eaglesthemes', 'template_lojvsvb', form.current, 'mtLgOuG25NnIwGeKm')
            .then((result) => {
               const notify = () => toast('Повідомлення успішно відправлено! Ми зв\'яжемося з вами найближчим часом.', { position: 'top-center' });
               notify();
               reset();
               console.log(result.text);
            }, (error) => {
               const notifyError = () => toast('Помилка відправки. Спробуйте ще раз.', { position: 'top-center' });
               notifyError();
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)} id="nmt-contact-form">
         <div className="form-grp">
            <input {...register("user_name")} type="text" placeholder="Ім'я *" required />
            <p className="form_error">{errors.user_name?.message}</p>
         </div>
         <div className="form-grp">
            <input {...register("user_phone")} type="tel" placeholder="Телефон *" required />
            <p className="form_error">{errors.user_phone?.message}</p>
         </div>
         <div className="form-grp">
            <input {...register("user_email")} type="email" placeholder="Email *" required />
            <p className="form_error">{errors.user_email?.message}</p>
         </div>
         <button type="submit" className="btn arrow-btn" style={{ width: "100%" }}>
            Відправити <BtnArrow />
         </button>
      </form>
   )
}

export default NMTContactForm;
