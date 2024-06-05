import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme', !isDarkTheme);
    };

    return (
        <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
            <Router>
                <Navbar toggleTheme={toggleTheme} />
                <Home />
            </Router>
        </div>
    );
};

export default App;
