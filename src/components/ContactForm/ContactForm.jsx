// // ContactForm.js
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contactsSlicer';
// import css from './contactForm.module.css';

// export default function ContactForm() {
//   const dispatch = useDispatch();

//   const initialValues = {
//     name: '',
//     number: '',
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(3, 'Minimum 3 characters')
//       .max(50, 'Maximum 50 characters')
//       .required('Required'),
//     number: Yup.string()
//       .min(3, 'Minimum 3 characters')
//       .max(50, 'Maximum 50 characters')
//       .required('Required'),
//   });

//   const onSubmit = (values, { resetForm }) => {
//     const newContact = {
//       id: nanoid(),
//       ...values,
//     };
//     dispatch(addContact(newContact));
//     resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//       <Form className={css.container}>
//         <div className={css.name}>
//           <label htmlFor="name">Name:</label>
//           <Field className = {css.field} type="text" id="name" name="name" />
//           <ErrorMessage name="name" component="div" className="error" />
//         </div>
//         <div className={css.number}>
//           <label htmlFor="number">Number:</label>
//           <Field className = {css.field} type="text" id="number" name="number" />
//           <ErrorMessage name="number" component="div" className="error" />
//         </div>
//         <button className={css.button} type="submit">Add Contact</button>
//       </Form>
//     </Formik>
//   );
// }

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
// import { nanoid } from "nanoid";
import * as yup from 'yup';
import css from './contactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactsSlicer';
import { nanoid } from '@reduxjs/toolkit';

const validationFormSchema = yup.object().shape({
  name: yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Requiered'),
  number: yup.string().required('Required'),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  //   addContacts;
  //   const handleSubmit = event => {
  //     event.preventDefault();
  //       // dispatch(addContacts());
  //       form.reset();
  //   };
  //   const model = nanoid();
  return (
    <div>
      <Formik
        validationSchema={validationFormSchema}
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          const contacts = {
            id: nanoid(),
            name: values.name,
            number: values.number,
          };
          dispatch(addContacts(contacts));
          //   onAdd({ id: model, ...values });
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <div className={css.labelContainer}>
              <label htmlFor={nameId}>Name</label>
              <Field className={css.input} type="text" id={nameId} name="name" />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={css.labelContainer}>
              <label htmlFor={numberId}>Number</label>
              <Field className={css.input} type="text" id={numberId} name="number" />
              <ErrorMessage name="number" component="span" />
            </div>
            <button className={css.button} type="submit">
              Add Contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}