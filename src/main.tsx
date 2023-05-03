import React from 'react';

import './index.css';

import App from './App.tsx';

import ReactDOM from 'react-dom/client';

import { MyProvider } from './context/MyContext.tsx';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyProvider>
  </React.StrictMode>,
)
