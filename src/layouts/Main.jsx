import { Outlet } from "react-router-dom"

import Header from "../shared/header/header"
import Footer from '../shared/footer/Footer'

const Main = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer/>
    </>
  )
}

export default Main