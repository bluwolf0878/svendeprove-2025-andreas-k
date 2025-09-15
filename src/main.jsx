import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './provider/AuthProvider.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <App/>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
)
