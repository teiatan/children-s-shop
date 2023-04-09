import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeContextProvider } from 'providers/themeContextProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter basename="children-s-shop">
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);
