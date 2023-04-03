import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './bits/ScrollToTop';
import Footer from './bits/Footer';

import '../../src/styles/styles.css';

// main routes
import Navbar from './bits/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutMe from './pages/SubPages/AboutMe';
import Portfolio from './pages/SubPages/Portfolio/Portfolio';
// import Resume from './pages/SubPages/Resume';
import Contact from './pages/SubPages/Contact';

// portfolio routes
import CoffeeCalculator from './pages/SubPages/Portfolio/CoffeeCalculator';
import NotesApp from './pages/SubPages/Portfolio/NotesApp';
import WeatherApp from './pages/SubPages/Portfolio/WeatherApp';
import BlogSite from './pages/SubPages/Portfolio/BlogSite';
import Bored from './pages/SubPages/Portfolio/Bored';

function App() {
    return (
        <>
            <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about-me' element={<AboutMe />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        {/* <Route path='/resume' element={<Resume />} /> */}
                        <Route path='/contact-me' element={<Contact />} />
                        <Route
                            path='portfolio/coffee-calculator'
                            element={<CoffeeCalculator />}
                        />
                        <Route
                            path='/portfolio/notes-app'
                            element={<NotesApp />}
                        />
                        <Route
                            path='/portfolio/weather-app'
                            element={<WeatherApp />}
                        />
                        <Route
                            path='/portfolio/blog-site'
                            element={<BlogSite />}
                        />
                        <Route path='/portfolio/bored' element={<Bored />} />
                    </Routes>
                    <Footer />
            </ScrollToTop>
        </>
    );
}

export default App;
