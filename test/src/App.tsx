import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import TestPage from './pages/test';
import { staticServerUrl } from './constants/urls';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <BrowserRouter>
          <InnerRouter />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

const InnerRouter = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={staticServerUrl + '/test'} element={<TestPage />} />
      </Routes>
    </>
  );
};
