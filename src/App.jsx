import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePage from './Page/ResumePage';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <About />
                            <Skills />
                            <Projects />
                            <Experience />
                            <Contact />
                        </>
                    } />
                    <Route path="/resume" element={<ResumePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;