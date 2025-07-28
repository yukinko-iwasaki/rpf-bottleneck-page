import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import { OutcomeProvider } from './OutcomeContext'; // Import the provider
import { AnimatePresence, motion } from 'framer-motion';


import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/homePage';
import VerticalNavbarPermanent from './components/navbars';
import Header from './components/header'; // Import the Header component

import { useState, useEffect } from 'react';

export default function App() {
  const pageVariants = {
  "initial": { // State 1: When the component is first rendered (before 'animate')
    opacity: 0,
    x: "-100vw" // Start off-screen to the left
  },
  "in": {      // State 2: The component's active/final state after entering
    opacity: 1,
    x: 0      // Move to its final position (on-screen)
  },
  "out": {     // State 3: When the component is about to be removed from the DOM
    opacity: 0,
    x: "100vw" // Exit off-screen to the right
  }
};

const pageTransition = {
  type: "tween",   // Defines the animation type (tween, spring, inertia). Tween is time-based.
  ease: "anticipate", // Defines the easing function for the animation (how it accelerates/decelerates).
  duration: 0.5    // Defines the duration of the animation in seconds.
};
  return (
    <AnimatePresence mode='wait'>
      <BrowserRouter basename="/rpf-bottleneck-page">
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/" element={<motion.div
                key="home" // Unique key for this specific motion.div for Framer Motion
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
                className="page-wrapper"
              ><HomePage /></motion.div>} />
          <Route path="/:outcome" element={<motion.div
                key="outcome"
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
                className="page-wrapper"
              ><VerticalNavbarPermanent /></motion.div>} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OutcomeProvider>
    <App />
  </OutcomeProvider>
);