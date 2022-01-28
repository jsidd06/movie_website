import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './views/HomeScreen';

function App() {
  return <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      </BrowserRouter>
  </div>;
}

export default App;