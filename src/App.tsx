import React from 'react';
import './App.css';
import StartPage from './pages/StartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage/>}>
    </Route>

    </Routes>
  </BrowserRouter>
  
}

export default App;
