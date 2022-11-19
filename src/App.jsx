import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/Dashboard/Home')
  }, [])
  
  return (
    <>
      <Dashboard/>
    </>
  )
}

export default App
