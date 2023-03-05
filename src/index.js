import React from 'react';
import ReactDOM from 'react-dom/client';
// import env from 'dotenv';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// env.config();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

