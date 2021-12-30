import Navigation from './components/Navigation';
import './assets/styles/main.scss';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import React from 'react';

const App = () => {
  return (
    <div className='app'>
    <Navigation />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
  </div>
  );
}

export default App;
