import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login'
import Layout from './Layout'
import Signup from './Signup'
import Profile from './Profile'

function AppRouter() {
  return (
  <BrowserRouter>
    <Routes>
          <Route path = "/" element = { <Layout></Layout> }>
            <Route path = "/login" element ={ <Login></Login> }></Route>
            <Route path = "/signup" element = { <Signup></Signup> } ></Route>
            <Route path = "/profile" element = { <Profile></Profile> }></Route>
          </Route>
      </Routes>

  </BrowserRouter>
  )
}

export default AppRouter
