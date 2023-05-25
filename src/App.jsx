import { Outlet } from "react-router-dom"
import Navbar from "./compoents/Share/Navbar"
import Footer from "./compoents/Share/Footer"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
