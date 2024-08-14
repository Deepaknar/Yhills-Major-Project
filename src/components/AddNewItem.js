


import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate


const AddNewItem = () => {
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  return (
    <div className="mt-5">
      <h2>Add New Pizza</h2>
      <Formik
        initialValues={{
          name: '',
          description: '',
          price: '',
          image: '',
          size: '',
          toppings: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          description: Yup.string().required('Required'),
          price: Yup.number().required('Required').positive('Price must be positive'),
          image: Yup.string().url('Invalid URL').required('Required'),
          size: Yup.string().required('Required'),
          toppings: Yup.string().required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form values:', values); // Add this line
          axios.post('http://localhost:5000/Products', values)
            .then(() => {
              alert('Pizza added successfully!');
              setSubmitting(false);
              navigate(`/display/${values.id}`);  // Navigate to the display page with the new item ID
            })
            .catch(error => {
              console.error('Error adding pizza:', error); // Add this line
              setSubmitting(false); // Stop the submission state in case of error
            });
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Pizza Name</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field name="description" type="text" className="form-control" />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <Field name="price" type="text" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <Field
                name="image"
                type="text"
                className="form-control"
                onChange={(e) => {
                  handleChange(e);
                  const { value } = e.target;
                  setImagePreview(value);
                }}
              />
              <ErrorMessage name="image" component="div" className="text-danger" />
            </div>

            {imagePreview && (
              <div className="mt-3">
                <img src={imagePreview} alt="Pizza Preview" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="size">Size</label>
              <Field name="size" type="text" className="form-control" />
              <ErrorMessage name="size" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="toppings">Toppings</label>
              <Field name="toppings" type="text" className="form-control" />
              <ErrorMessage name="toppings" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Add Pizza</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewItem;

