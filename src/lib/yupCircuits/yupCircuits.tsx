import * as yup from 'yup';

export const schemaContacts = yup.object({
  fullName: yup.string().required('Incorrect name'),
  email: yup.string().email('Incorrect email').required('Invalid email'),
  message: yup.string(),
}).required();

export const schemaCareer = yup.object({
  fullName: yup.string().required('Incorrect name'),
  email: yup.string().email('Incorrect email').required('Invalid email'),
  position: yup.string(),
  phone: yup.string().required('Incorrect phone'),
  message: yup.string(),
  consent: yup.boolean().oneOf([true], 'You must accept the terms').required(),
}).required();