import React from "react";
import "./index.css";
import logo from "./images/eric_pic1.jpg";
import Header from "./components/Header";
import Socials from "./components/Socials";
import Images from "./components/Images";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="flex justify-center bg-black">
            <div className="flex flex-col items-center p-4 bg-zinc-900 space-y-8 > * + * border-gray-800 border-2">
                <Header/>
                <div className="flex flex-col items-start">
                    <div className="container w-40 h-40 p-2">
                        <img className="object-contain rounded-full" src={logo} alt="Image"></img>
                    </div>
                    <p className="text-white p-4 text-5xl font-bold"> Eric Santos</p>
                    <div className="container w-3/5 p-4">
                        <p className="text-gray-400"> Hi there, Im Eric Santos. I am a talented computer scientist looking for opportunities to improve my skills in web development, cyber security, and game design.</p>
                        <Socials/>
                    </div>
                    <Images/>
                </div>
               <Footer/>
            </div>
        </div>
    );
};


export default App;