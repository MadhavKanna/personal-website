import React from 'react';
import Home from './components/home/Home';
import EducationSkills from './components/educationSkills/EducationSkills';
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects"; 
import Footer from "./components/Footer"; 
import Navbar from "./components/Navbar"; 
import './styles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
   return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} /> 
      <Route path="/educationskills" element={<EducationSkills/>} />
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contact />} /> 
      <Route path="*" element={<h1>Error Page not found 404</h1>} />
    </Routes>
    <Footer /> 
  </Router>
  
  );
      
}


export default App;
