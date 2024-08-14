// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const UpdateItem = () => {
//   const [initialValues, setInitialValues] = useState({ name: '', description: '', price: '' });
//   const { id } = useParams(); // Get the product ID from the URL
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the existing product data
//     axios.get(`http://localhost:5000/Products/${id}`)
//       .then(response => {
//         setInitialValues({
//           name: response.data.name,
//           description: response.data.description,
//           price: response.data.price
//         });
//       })
//       .catch(error => console.error(error));
//   }, [id]);

//   return (
//     <div className="mt-5">
//       <h2>Update Pizza</h2>
//       <Formik
//         enableReinitialize
//         initialValues={initialValues}
//         validationSchema={Yup.object({
//           name: Yup.string().required('Required'),
//           description: Yup.string().required('Required'),
//           price: Yup.number().required('Required').positive('Price must be positive')
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           axios.put(`http://localhost:5000/Products/${id}`, values)
//             .then(() => {
//               alert('Pizza updated successfully!');
//               setSubmitting(false);
//               navigate(`/display/${id}`); // Redirect to the display page with the updated item ID
//             })
//             .catch(error => console.error(error));
//         }}
//       >
//         <Form>
//           <div className="form-group">
//             <label htmlFor="name">Pizza Name</label>
//             <Field name="name" type="text" className="form-control" />
//             <ErrorMessage name="name" component="div" className="text-danger" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <Field name="description" type="text" className="form-control" />
//             <ErrorMessage name="description" component="div" className="text-danger" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <Field name="price" type="text" className="form-control" />
//             <ErrorMessage name="price" component="div" className="text-danger" />
//           </div>

//           <button type="submit" className="btn btn-primary mt-3">Update Pizza</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default UpdateItem;

// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const UpdateItem = () => {
//   const [initialValues, setInitialValues] = useState({ name: '', description: '', price: '' });
//   const { id } = useParams(); // Get the product ID from the URL
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the existing product data
//     axios.get(`http://localhost:5001/Products/${id}`)  // Changed to port 5001
//       .then(response => {
//         setInitialValues({
//           name: response.data.name,
//           description: response.data.description,
//           price: response.data.price
//         });
//       })
//       .catch(error => console.error(error));
//   }, [id]);

//   return (
//     <div className="mt-5">
//       <h2>Update Pizza</h2>
//       <Formik
//         enableReinitialize
//         initialValues={initialValues}
//         validationSchema={Yup.object({
//           name: Yup.string().required('Required'),
//           description: Yup.string().required('Required'),
//           price: Yup.number().required('Required').positive('Price must be positive')
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           axios.put(`http://localhost:5001/Products/${id}`, values)  // Changed to port 5001
//             .then(() => {
//               alert('Pizza updated successfully!');
//               setSubmitting(false);
//               navigate(`/display/${id}`); // Redirect to the display page with the updated item ID
//             })
//             .catch(error => console.error(error));
//         }}
//       >
//         <Form>
//           <div className="form-group">
//             <label htmlFor="name">Pizza Name</label>
//             <Field name="name" type="text" className="form-control" />
//             <ErrorMessage name="name" component="div" className="text-danger" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <Field name="description" type="text" className="form-control" />
//             <ErrorMessage name="description" component="div" className="text-danger" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <Field name="price" type="text" className="form-control" />
//             <ErrorMessage name="price" component="div" className="text-danger" />
//           </div>

//           <button type="submit" className="btn btn-primary mt-3">Update Pizza</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default UpdateItem;

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateItem = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    size: '',
    toppings: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/Products/${id}`)
      .then(response => {
        setInitialValues({
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          image: response.data.image,
          size: response.data.size,
          toppings: response.data.toppings
        });
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div className="mt-5">
      <h2>Update Pizza</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          description: Yup.string().required('Required'),
          price: Yup.number().required('Required').positive('Price must be positive'),
          image: Yup.string().url('Invalid URL').required('Required'),
          size: Yup.string().required('Required'),
          toppings: Yup.string().required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.put(`http://localhost:5001/Products/${id}`, values)
            .then(() => {
              alert('Pizza updated successfully!');
              setSubmitting(false);
              navigate(`/display/${id}`);
            })
            .catch(error => {
              console.error(error);
              setSubmitting(false);
            });
        }}
      >
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
            <Field name="image" type="text" className="form-control" />
            <ErrorMessage name="image" component="div" className="text-danger" />
          </div>

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

          <button type="submit" className="btn btn-primary mt-3">Update Pizza</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateItem;
