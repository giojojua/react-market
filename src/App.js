import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
