import React from "react";
import './App.css';
import Navigation from "./components/Navbar";
import Slider from "./components/Slider";
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Slider/>
        </div>
    );
}

export default App;
