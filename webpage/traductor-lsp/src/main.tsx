import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// Programar el AuthContext y el ChatContext
// import { AuthProvider } from './context/AuthContext'
// import { ChatProvider } from './context/ChatContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        {/* <AuthProvider>
        <ChatProvider> */}  
        <App />
        {/* </ChatProvider>
      </AuthProvider> */}
      </BrowserRouter>
    </React.StrictMode>
  );
}