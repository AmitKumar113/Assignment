import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme({
  palette:{
    primary: {
      main : "#301E4E",
    },
    secondary: {
      main: '#123123'
    }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
