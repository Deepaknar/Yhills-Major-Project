// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './DisplayItems.css';

// function DisplayItems() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/Products')
//       .then(response => setItems(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/Products/${id}`)
//       .then(() => {
//         setItems(items.filter(item => item.id !== id));
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div className="container mt-5">
//       <h2>All Pizzas</h2>
//       <div className="row">
//         {items.map(item => (
//           <div className="col-md-4 mb-4" key={item.id}>
//             <div className="card h-100">
//               <img
//                 className="card-img-top"
//                 src={item.image || 'placeholder.jpg'}
//                 alt={`${item.name}`}
//                 style={{ objectFit: 'cover', height: '200px' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text">{item.description}</p>
//                 <p className="card-text"><strong>Price:</strong> ${item.price}</p>
//                 <p className="card-text"><strong>Size:</strong> {item.size}</p>
//                 <p className="card-text"><strong>Toppings:</strong> {item.toppings}</p>
//                 <Link to={`/update/${item.id}`} className="btn btn-warning">Edit</Link> {/* Updated Link */}
//                 <button onClick={() => handleDelete(item.id)} className="btn btn-danger ml-2">Delete</button>
//               </div>
//               <div className="card-footer">
//                 <small className="text-muted">Last updated {new Date(item.updatedAt || new Date()).toLocaleString()}</small>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DisplayItems;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DisplayItems.css';

function DisplayItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/Products')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5001/Products/${id}`)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h2>All Pizzas</h2>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img
                className="card-img-top"
                src={item.image || 'placeholder.jpg'}
                alt={`${item.name}`}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                <p className="card-text"><strong>Size:</strong> {item.size}</p>
                <p className="card-text"><strong>Toppings:</strong> {item.toppings}</p>
                <Link to={`/update/${item.id}`} className="btn btn-warning">Edit</Link>
                <button onClick={() => handleDelete(item.id)} className="btn btn-danger ml-2">Delete</button>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated {new Date(item.updatedAt || new Date()).toLocaleString()}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayItems;
