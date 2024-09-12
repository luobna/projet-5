import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout';
import About from './pages/About';
import Location from './pages/Location';




function App(props) {
  const{json}=props
  JSON.stringify(json)
  return<Routes>
  <Route path="/" element={<Layout />}>
    <Route
      path="/" element={<Home />} />
    <Route path="*" element={<Error404 />} />
    <Route path="/Apropos" element={<About />} />
    <Route path="/location/:id" element={<Location />} />
  </Route>
</Routes>
    
}


export default App;
