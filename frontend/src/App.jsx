// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import VisitListPage from './pages/VisitListPage';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10, borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ marginRight: 10 }}>홈</Link>
        <Link to="/list">방문 목록</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<VisitListPage />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
