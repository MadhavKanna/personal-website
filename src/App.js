import React from 'react';
import Home from './components/home/Home';
import EducationSkills from './components/educationSkills/EducationSkills';
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import AllBlogs from "./components/blog/AllBlogs";
import Navbar from './Navbar';
import Footer from "./Footer";
import { Route, Routes } from 'react-router-dom';

function App() {

    return (
        <div>
            <Navbar />
            <div className="component-container">
                <Routes>
                    <Route path="/" element={<Home />}>Home</Route>
                    <Route path="/education" element={<EducationSkills />}>Education</Route>
                    <Route path="/projects" element={<Projects />}>Projects</Route>
                    <Route path="/contact" element={<Contact />}>Contact</Route>
                    <Route path="/blog" element={<AllBlogs />}>Blog</Route>
                </Routes>
            </div>
            <Footer />
        </div>

    );

}


export default App;