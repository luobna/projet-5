import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";




function Layout(props) {
  const{json}=props
  JSON.stringify(json)
  return <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
}


export default Layout;