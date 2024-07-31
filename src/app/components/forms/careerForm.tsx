"use client"

import { FC, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask-next';
import styles from './form.module.css';
import clsx from 'clsx';
import { toast } from 'react-toastify';
import ButtonSend from './buttonSend';
import { IFormInput } from '@/lib/utils/utils';
import { schemaCareer } from '@/lib/yupCircuits/yupCircuits';

const CareerForm: FC = () => {
  const [checked, setChecked] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    resolver: yupResolver(schemaCareer)
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data); 
    if (data.consent) {
      toast.success('Form submitted successfully!');
      localStorage.setItem('formData', JSON.stringify(data));
      setChecked(false)
      reset();
    } else {
      toast.error('You must accept the terms');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full md:justify-start ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg md:flex md:gap-5 md:relative xl:gap-6 ">
        <div className='md:w-[222px] xl:w-[291px] xl:h-[380px]'>
          <div className=" relative mb-4 xl:mb-[24px]">
            <label htmlFor="n" className={clsx(styles.label, { [styles['label-error']]: errors.fullName })}>Full name</label>
            <input 
              id="n"
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

          <div className="mb-4 xl:mb-[24px]">
            <label htmlFor="position" className={styles.label}>Position</label>
            <input 
              id="position"
              {...register('position')} 
              className={styles.input}
              placeholder="Movie maker"
            />
          </div>

          <div className=" relative mb-4 xl:mb-0">
            <label htmlFor="phone" className={clsx(styles.label, { [styles['label-error']]: errors.phone })}>Phone</label>
            <InputMask 
              id="phone"
              mask="(999) 99 99 999"
              {...register('phone')} 
              className={clsx(styles.input, styles.pl , { [styles['error-color']]: errors.phone })}
              placeholder="(097) 12 34 567"
            />
            <p className=' absolute top-[26px] left-2 text-[13px] font-extralight md:top-[29px] xl:text-[20px] xl:top-[27px] '>+ 38</p>
            {errors.phone && (
              <div className={styles['err-container']}>
                <p className={styles.err}>{errors.phone.message}</p>
              </div>
            )}
          </div>
        </div>               
        
        <div className='md:w-[222px] xl:w-[291px]'>
          <div className="mb-4 xl:mb-6">
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea 
              id="message"
              {...register('message')} 
              className={clsx(styles.input, styles.textarea)}
            ></textarea>
          </div>

          <div className="relative mb-4 md:absolute md:left-0 md:bottom-[-24px] md:w-[222px] xl:w-[291px] xl:bottom-[-4px]">
            <div className="flex items-center ">
              <input 
                type="checkbox" 
                {...register('consent')} 
                className= {clsx(styles['custom-checkbox'], )}
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span className="text-[12px] font-extralight leading-[2]" > 
                I confirm my consent to the processing of personal data.
              </span>
              {errors.consent && (
                <div className={styles['err-container']}>
                  <p className={styles.err}>{errors.consent.message}</p>
                </div>
              )}
            </div>
          </div>
          <ButtonSend />
        </div>
      </form>
    </div>
  );
};

export default CareerForm;