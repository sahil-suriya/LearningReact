import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './assets/Components/Home/Home'
import About from './assets/Components/About/About'
import Contact from './assets/Components/Contact/Contact'
import User from './assets/Components/Users/User'
import Github , { githubInfoLoader } from './assets/Components/Github/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='Contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route loader={githubInfoLoader} path='Github' element={<Github />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
