
import * as React from "react";
import "./App.css";
import Navigation from "./components/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";


export default function App() {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
}
