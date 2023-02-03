import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AuthState from './utils/auth/AuthState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <AuthState database='team_x'>
      <BrowserRouter>
  		  <App />
      </BrowserRouter>
    </AuthState>
	</React.StrictMode>
)