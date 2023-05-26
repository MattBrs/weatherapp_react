import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Welcome from './components/Welcome/Welcome.jsx'


function App() {
  const [place, setPlace] = useState('')

  function handleSearch(newPlace) {
    setPlace(newPlace)
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />,

    },
    {
      path: '/weather',
      element: <Dashboard place={place} />
    }
  ])

  useEffect(() => {
    router.navigate('/weather')
  }, [place])

  return (
    <>
      <Header onSearch={handleSearch} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
