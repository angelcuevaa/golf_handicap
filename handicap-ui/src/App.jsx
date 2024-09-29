import './App.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Login from './login'
import Signup from './Signup'
import Profile from './Profile'

import Nav from './Nav'
import { AuthContext } from './Context/AuthContext'
import { Protected } from './Protected'
import Home from './home'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/profile",
      element: <Protected><Profile/></Protected>
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ])

  return(
    <AuthContext>
      <Nav/>
    <RouterProvider router={router}/>
    </AuthContext>
  )



}

export default App
