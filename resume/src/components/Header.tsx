import React from "react";
import "../index.css";
import { Route, Link } from "react-router-dom";
import App from "../App";
import About from "./About";

const Contact = () => <h2>Contact</h2>;
const Projects = () => <h2>Projects</h2>;


const Header = () => {
    return (
        <div>
            <nav>
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                    <li>
                        <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/">Home</a>
                    </li>    
                    <li>
                        <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/">Contact</a>
                    </li>
                    <li>
                        <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/">Projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;