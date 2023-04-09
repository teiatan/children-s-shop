import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeContextProvider } from 'providers/themeContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { HeaderContextProvider } from 'providers/headerContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeContextProvider>
      <HeaderContextProvider>
      <BrowserRouter /* basename="children-s-shop" */>
        <App />
      </BrowserRouter>
      </HeaderContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
