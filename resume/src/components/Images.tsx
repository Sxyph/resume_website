import React from "react";
import "../index.css";
import logo1 from "../images/eric_selfie.jpg";
import logo2 from '../images/unity.jpg';
import logo from '../images/eric_pic1.jpg';

const Images = () => {
    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 sm:w-72 sm:rounded-2xl rotate-2">
                    <img src={logo1} alt="picture 1" />
                </div>
                <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 sm:w-72 sm:rounded-2xl -rotate-2">
                    <img src={logo} alt="picture 3" />
                </div>
            </div>
        </div>
    );
}

export default Images;

