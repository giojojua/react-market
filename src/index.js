import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './main.scss'

// My Components
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Error from "./pages/Error";

// Entry Point
ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
                <Route element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="pages/shop" element={<Shop/>}/>
                    <Route path="pages/about" element={<About/>}/>
                    <Route path="pages/contact" element={<Contact/>}/>
                    <Route path='*' exact={true} element={<Error/>} />
                </Route>
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById("root")
);
