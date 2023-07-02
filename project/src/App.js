import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Home from './pages/home';
import Result from './pages/result';
import Admin from './pages/admin';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/result" element={<Result />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>
  )
}

export default App;