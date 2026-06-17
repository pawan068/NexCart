import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from "./Context/Datacontext.jsx";
import{CartProvider} from './Context/CartContext.jsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import { DataContext } from './Context/Datacontext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <CartProvider>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
    </CartProvider>
    </DataProvider>
  </React.StrictMode>,
)