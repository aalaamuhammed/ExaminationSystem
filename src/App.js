import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Instructors, Reports,Students } from './pages';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/Instructors" element={<Instructors />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/Students" element={<Students />} />
    </Routes>
  );
}
export default App                 