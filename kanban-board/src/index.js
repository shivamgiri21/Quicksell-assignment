import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppStateProvider } from './Context/AppStateContext';
import { DataProvider } from './Context/DataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AppStateProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AppStateProvider>
  // </React.StrictMode>

);

