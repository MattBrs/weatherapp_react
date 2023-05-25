import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Welcome from './components/Welcome/Welcome'
import Header from './components/Header/Header'

function App() {
  const [place, setPlace] = useState('Trento')
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />
    },
    {
      path: '/:place',
      element: <Dashboard/>,
      index: true
    }
  ])

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
