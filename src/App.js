import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import AddNewItem from './components/AddNewItem';
import UpdateItem from './components/UpdateItem';
import DisplayItem from './components/DisplayItem';
import Contact from './components/Contact'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Vision from "./components/Vision";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add" element={<AddNewItem />} />
            <Route path="/update/:id" element={<UpdateItem />} />
            <Route path="/display/:id" element={<DisplayItem />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
   
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
