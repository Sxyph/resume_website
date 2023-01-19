import React from "react";
import "../index.css";

const Footer = () => {
    return (
        <div className="sm:px-8">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
                                <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">Home</a>
                                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">About</a>
                                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;