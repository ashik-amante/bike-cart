import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import FirebaseProvider from './Providers/FirebaseProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={routes}></RouterProvider>
    </FirebaseProvider>

  </StrictMode>,
)
