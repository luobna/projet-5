import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import Layout from './components/Layout';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Location from './pages/Location';
//import reportWebVitals from './reportWebVitals';
import './json.json'
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import './assets/sass/index.scss';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
      {
        path: "Location",
        element: <Location />,
      },
    ]
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
