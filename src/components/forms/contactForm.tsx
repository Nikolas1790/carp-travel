"use client"

import React, { FC } from 'react';
import styles from './form.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import ButtonSend from './buttonSend';
import { IContactForm } from '@/lib/utils/utils';
import { schemaContacts } from '@/lib/yupCircuits/yupCircuits';

const ContactForm: FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IContactForm>({
    resolver: yupResolver(schemaContacts)
  });

  const onSubmit: SubmitHandler<IContactForm> = data => {
    localStorage.setItem('formContacts', JSON.stringify(data));
    toast.success('Contact form submitted successfully!');
    reset();
  };

  return (
    <div className={styles.formContainer}>    
      <form  onSubmit={handleSubmit(onSubmit)}  className='md:flex xl:flex-col xl:w-[607px]'>
        <div className='md:w-[137px] xl:flex xl:gap-5 xl:mb-10 '>
          <div className=" relative mb-4 md:mb-[28px] xl:mb-0">
            <label htmlFor="name" className={clsx(styles.label, { [styles['label-error']]: errors.fullName })}>Full name</label>
            <input 
              id="name"
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

          <div className=" relative mb-4 md:mb-0 ">
            <label htmlFor="e-mail" className={clsx(styles.label, { [styles['label-error']]: errors.email })}>E-mail</label>
            <input 
              id="e-mail"
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
        </div>

        <div className='md:ml-auto xl:ml-0'> 
          <div className="mb-4 md:w-[463px]  xl:mb-6 ">
            <label htmlFor="textarea" className={styles.label}>Message</label>
            <textarea 
              id="textarea"
              {...register('message')} 
              className={clsx(styles.input, styles.contactTextarea)}
            ></textarea>
          </div>
          <ButtonSend />
        </div> 
      </form>    
    </div>
  );
};

export default ContactForm;