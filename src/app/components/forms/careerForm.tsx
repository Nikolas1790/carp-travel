"use client"

import { FC, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask-next';
import styles from './form.module.css';
import clsx from 'clsx';
import { toast } from 'react-toastify';

interface IFormInput {
  fullName: string;
  email: string;
  position?: string;
  phone: string;
  message?: string;
  consent: boolean;
}

const schema = yup.object({
  fullName: yup.string().required('Incorrect name'),
  email: yup.string().email('Incorrect email').required('Invalid email'),
  position: yup.string(),
  phone: yup.string().required('Incorrect phone'),
  message: yup.string(),
  consent: yup.boolean().required(),
}).required();

const CareerForm: FC = () => {
  const [checked, setChecked] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    localStorage.setItem('formData', JSON.stringify(data));
    toast.success('Form submitted successfully!');
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full md:justify-start ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg md:flex md:gap-5 md:relative xl:gap-6 ">
        <div className='md:w-[222px] xl:w-[291px] xl:h-[380px]'>
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

          <div className="mb-4 md:absolute md:left-0 md:bottom-[-24px] md:w-[222px] xl:w-[291px] xl:bottom-[-4px]">
            <div className="flex items-center ">
              <div className='flex items-center justify-center min-w-[22px] h-[22px] border border-white cursor-pointer mr-2 mb-5 '
                   onClick={() => setChecked(!checked)}>
                <div
                  className={`w-3.5 h-3.5 ${!checked ? 'bg-white opacity-10' : 'bg-white'} `}
                  onClick={() => setChecked(!checked)}>
                </div>
              </div>
              <input 
                type="checkbox" 
                {...register('consent')} 
                className=" leading-tight hidden "
                onChange={() => setChecked(!checked)}
              />
              <span className="text-[12px] font-extralight leading-[2]" > 
                I confirm my consent to the processing of personal data.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button 
              type="submit" 
              className=" text-[30px] font-medium leading-[1.2] ml-auto xl:text-[32px]"
              disabled={!checked}
            >
              SEND
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default CareerForm;
