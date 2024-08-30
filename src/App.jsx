import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Erreur404 from './pages/Error404';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";




function App(props) {
  const{json}=props
  JSON.stringify(json)
  return <>
    <Header/>
    <Home/>
    <Footer/>
    <Erreur404/>
    </>
    
}


export default App;
