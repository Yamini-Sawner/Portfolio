import React from 'react';

const Header = () => {
    return (
        <header className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-2xl rounded-3xl px-5 py-2 text-white font-bold gradient-text" style={{ backgroundImage: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}>
                        Portfolio
                    </a>
                    <div className="flex items-center space-x-6">
                        {/* <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" id="dark-toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                            <label htmlFor="dark-toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div> */}
                        {/* <span className="text-sm text-white">Dark Mode</span> */}
                        {/* <button id="mobile-menu-button" className="md:hidden focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button> */}
                        <nav className="hidden md:flex space-x-8 text-white">
                            <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a>
                            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
                            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
                            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
                            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a>
                            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
