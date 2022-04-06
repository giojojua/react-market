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
import Market from "./pages/Market";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Entry Point
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="pages/market" element={<Market/>}/>
                <Route path="pages/about" element={<About/>}/>
                <Route path="pages/contact" element={<Contact/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById("root")
);
