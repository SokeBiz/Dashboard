import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import Dashboard from './Dashboard'
import './index.css'
import DefaultDash from './children/DefaultDash'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/Dashboard', element: <Dashboard />,
  children: [{path: 'Projects', element: <><h1>This is the project's page</h1></>},
            {path: 'Billings', element: <><h1>This is the Billing's page</h1></>},
            {path: 'Team', element: <><h1>This is the Team's page</h1></>},
            {path: 'Stats', element: <><h1>This is the Statistics page</h1></>},
            {path: 'Settings', element: <><h1>This is the Settings page</h1></>},
            {path: 'Home', element: <><DefaultDash></DefaultDash></>}, 
]}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
