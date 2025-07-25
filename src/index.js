import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import { OutcomeProvider } from './OutcomeContext'; // Import the provider

import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/homePage';
import VerticalNavbarPermanent from './components/navbars';
import Header from './components/header'; // Import the Header component

import { useState, useEffect } from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:outcome" element={<VerticalNavbarPermanent />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OutcomeProvider>
    <App />
  </OutcomeProvider>
);