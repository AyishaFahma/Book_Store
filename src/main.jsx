import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contextshare from './context/Contextshare.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Contextshare>
        <GoogleOAuthProvider clientId='957179988589-pjgapqntmnoibqp67nv4spmcqm0mt69g.apps.googleusercontent.com'>
          <App />
        </GoogleOAuthProvider>
      </Contextshare>
    </BrowserRouter>
  </StrictMode>,
)
