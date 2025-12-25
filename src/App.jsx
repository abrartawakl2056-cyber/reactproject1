import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Base from './Base/Base'
import About from './About/About'
import Portofolio from './Portfolio/Portofolio'
import Contact from './Contact/Contact'

const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Base /> },
        { path: "about", element: <About /> },
        { path: "portofolio", element: <Portofolio /> },
        { path: "contact", element: <Contact /> }
      ]
    }
  ],
 
)

function App() {
  return <RouterProvider router={route} />
}

export default App
