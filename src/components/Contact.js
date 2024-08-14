
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-container mt-5">
      <h2>Contact Us</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          message: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(`Thank you for contacting us, ${values.name}!`);
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field name="message" as="textarea" className="form-control" />
            <ErrorMessage name="message" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </Form>
      </Formik>

      <div className="support-section mt-5">
        <h3>Customer Support</h3>
        <p>If you have any questions or need further assistance, please reach out to our customer support team:</p>
        <ul>
          <li>Email: <a href="mailto:support@freshypizza.com">support@freshypizza.com</a></li>
          <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
          <li>Address: 123 Pizza Lane, Flavor Town, FT 54321</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

