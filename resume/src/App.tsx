import React from "react";
import "./index.css";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
    return (
        <div>
            <Home />
        </div>
    );
};


export default App;