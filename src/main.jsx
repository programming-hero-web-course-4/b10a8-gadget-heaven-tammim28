import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
