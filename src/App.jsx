import { useState } from 'react'
import './App.css'
import About from './assets/About/About'
import Portfolio from './Portfolio/Portfolio.jsx'
import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';
import Layout from './layout/Layout.jsx';



let page = createBrowserRouter([
  {path: "",
  element: <Layout/>,
   children:[
  {path: "about", element: <About/>},
  {path: "portfolio", element: <Portfolio/>},
  {path: "contact", element: <Contact/>},
  {index: true, element: <Home/>}
]}


])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<RouterProvider router={page}></RouterProvider>
    </>
  )
}

export default App
