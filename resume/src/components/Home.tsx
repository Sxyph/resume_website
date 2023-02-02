import React from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const className = width < 924 ? "w-full" : "w-3/4 lg:w-2/3";
    
    return (
        <div className="flex justify-center bg-black">
            <div className={`flex flex-col items-center p-4 bg-zinc-900 space-y-8 border-gray-800 border-2 ${className}`}>
                <Header />
                <About />
                <Footer />
            </div>
        </div>
    );
}

export default Home;