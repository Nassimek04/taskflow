import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import { AuthProvider } from './features/auth/AuthContext';
createRoot(document.getElementById('root')!).render(
 <StrictMode>
 <AuthProvider>
 <App />
 </AuthProvider>
 </StrictMode>
);