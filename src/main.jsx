import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Github from './components/Github/Github.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact us/Contact.jsx'

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home />} />  
      <Route path='Home' element={<Home />} />
      <Route path="About" element={<About/>} />
      <Route path="github" element={<Github/>}/>
      <Route path="skills" element={<Skills/>} />
      <Route path="contact" element={<Contact/>} />
    </Route>
  )

)


createRoot(document.getElementById('root')).render(

  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
  
)
