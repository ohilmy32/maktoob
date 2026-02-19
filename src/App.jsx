import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';

const App = () => {
  return (
    <div className="antialiased selection:bg-red selection:text-paper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
