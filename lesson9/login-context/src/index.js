import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './app';
import './index.css';
import './i18n';
import {ContextProvider} from './context/contextProvider'
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
</React.StrictMode>)