"use client"

import React, { FC } from 'react';
import styles from './form.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import clsx from 'clsx';

interface IContactForm {
  fullName: string;
  email: string;
  message?: string;
}

const schema = yup.object({
  fullName: yup.string().required('Incorrect name'),
  email: yup.string().email('Incorrect email').required('Invalid email'),
  message: yup.string(),
}).required();

const ContactForm: FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<IContactForm> = data => {
    localStorage.setItem('formData', JSON.stringify(data));
    toast.success('Form submitted successfully!');
    reset();
  };

  return (
    <div className={styles.formContainer}>    
      <form  onSubmit={handleSubmit(onSubmit)}  className={styles.form}>
        <div className=" relative mb-4 xl:mb-[24px]">
            <label htmlFor="fullName" className={clsx(styles.label, { [styles['label-error']]: errors.fullName })}>Full name</label>
            <input 
              id="fullName"
              {...register('fullName')} 
              className={clsx(styles.input, { [styles['error-color']]: errors.fullName })}
              placeholder="John Smith"
            />
            {errors.fullName && (
              <div className={styles['err-container']}>
                <p className={styles.err}>{errors.fullName.message}</p>
              </div>
            )}
          </div>



          <div className=" relative mb-4 xl:mb-[24px]">
            <label htmlFor="email" className={clsx(styles.label, { [styles['label-error']]: errors.email })}>E-mail</label>
            <input 
              id="email"
              {...register('email')} 
              className={clsx(styles.input, { [styles['error-color']]: errors.email })}
              placeholder="johnsmith@email.com"
            />
            {errors.email && (
              <div className={styles['err-container']}>
                <p className={styles.err}>{errors.email.message}</p>
              </div>
            )}
          </div>

          
          <div className="mb-4 xl:mb-6">
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea 
              id="message"
              {...register('message')} 
              className={clsx(styles.input, styles.textarea)}
            ></textarea>
          </div>



          <div className="flex items-center justify-center">
            <button 
              type="submit" 
              className=" text-[30px] font-medium leading-[1.2] ml-auto xl:text-[32px]"
            >
              SEND
            </button>
          </div>
      </form>
    
    </div>
  );
};

export default ContactForm;