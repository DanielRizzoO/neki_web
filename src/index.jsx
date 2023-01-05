import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/globalStyles';
import Home from './templates/App';
import Registro from './templates/Registro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
);
