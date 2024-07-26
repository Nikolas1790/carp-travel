"use client"

import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask-next';
import styles from './form.module.css';
import clsx from 'clsx';

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
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <div>
          <div className=" relative mb-4">
            <label htmlFor="fullName" className={styles.label}>Full name</label>
            <input 
              id="fullName"
              {...register('fullName')} 
              className={styles.input}
              placeholder="John Smith"
            />
            {errors.fullName && (
              <div className={styles['err-container']}>
                <p className={styles.err}>{errors.fullName.message}</p>
              </div>
            )}
          </div>

          <div className=" relative mb-4">
            <label htmlFor="email" className={clsx(styles.label, { [styles['label-error']]: errors.email })}>E-mail</label>
            <input 
              id="email"
              {...register('email')} 
              className={styles.input}
              placeholder="johnsmith@email.com"
            />
            {errors.email && (
              <div className={styles['err-container']}>
                <p className={styles.err}>{errors.email.message}</p>
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="position" className={styles.label}>Position</label>
            <input 
              id="position"
              {...register('position')} 
              className={styles.input}
              placeholder="Movie maker"
            />
          </div>

          <div className=" relative mb-4">
            <label htmlFor="phone" className={styles.label}>Phone</label>
            <InputMask 
              id="phone"
              mask="(999) 99 99 999"
              {...register('phone')} 
              className={clsx(styles.input, styles.pl)}
              placeholder="(097) 12 34 567"
            />
            <p className=' absolute top-[26px] left-2 text-[13px] font-extralight '>+ 38</p>
            {errors.phone && (
              <div className={styles['err-container']}>
                <p className={styles.err}>{errors.phone.message}</p>
              </div>
            )}
          </div>
        </div>

        
                
        
        <div>
          <div className="mb-4">
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea 
              id="message"
              {...register('message')} 
              className={clsx(styles.input, styles.textarea)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className=" flex items-start ">
              <input 
                type="checkbox" 
                {...register('consent')} 
                className="mr-2 leading-tight "
              />
              <span className="text-[12px] font-extralight">
                I confirm my consent to the processing of personal data.
              </span>
            </label>
            {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>}
          </div>
          <div className="flex items-center justify-center">
            <button 
              type="submit" 
              className=" text-[30px] font-medium leading-[1.2] ml-auto"
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



