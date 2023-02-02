import React, {useState} from 'react';
import Socials from './Socials';
import logo from "../images/eric_pic1.jpg";
import Work from './Work';

const About = () => {

    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const className = width < 924 ? "w-full" : "w-3/4 lg:w-2/3";

    return (
        <div className="flex-initial flex-col items-start">
            <div className="container w-40 h-40 p-2">
                <img className="object-contain rounded-full" src={logo} alt="Image"></img>
            </div>
            <p className="text-white p-4 text-5xl font-bold"> Eric Santos</p>
            <div className={`container ${className} p-4`}>
                <p className="text-gray-400">
                    Hi there, Im Eric Santos. I am a talented computer scientist looking for
                    opportunities to improve my skills in web development, cyber security, and game design. Im very talented in HTML,
                    CSS, Javascript, and Python. I have a strong understanding of the React framework and TailwindCSS. Also familiar with many cyber
                    security tools such as Kali Linux, the metasploit framework, metasploitable, and nmap.
                </p>
                <Socials />
            </div>
            <Work />
        </div>
    );
}

export default About;