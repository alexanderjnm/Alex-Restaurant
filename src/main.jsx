import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Reserva from './components/Reserva'
import Menu from './components/Menu'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home /> 
  },
  {
    path:'/reserva',
    element: <Reserva />
  },
  {
    path:'/menu',
    element: <Menu />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)