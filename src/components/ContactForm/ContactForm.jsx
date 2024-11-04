import React from 'react'
import { useId } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css'

const ContactForm = ({handleSubmit, ContactSchema}) => {
  const nameId = useId();
  const numberId = useId();

  return (
    <div className={styles.formBloc}>
      <Formik initialValues={{name: "", number: ""}} onSubmit={handleSubmit} validationSchema={ContactSchema}>
        <Form className={styles.form}>
          <label htmlFor={nameId}>Name</label>
          <Field className={styles.input} type='text' id={nameId} name='name' />
          <ErrorMessage name='name' component='span' className={styles.error} />

          <label htmlFor={numberId}>Number</label>
          <Field className={styles.input} type='tel' id={numberId} name='number' />
          <ErrorMessage name='number' component='span' className={styles.error} />

          <button className={styles.button} type='submit'>Add contact</button>
        </Form>
      </Formik>

    </div>
  );
};

export default ContactForm