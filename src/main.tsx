import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { initMercadoPago } from '@mercadopago/sdk-react'
          
import { router } from '@/routes/router.tsx'

import './styles/global.css'

initMercadoPago('TEST-c2278743-737d-4c96-9448-e1c76bb49b37');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
