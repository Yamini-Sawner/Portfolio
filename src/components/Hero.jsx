import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen bg-gray-900 flex items-center justify-center pt-20">
            <div className="container mx-auto bg-gray-900 px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h1 className="text-4xl text-white md:text-6xl font-bold mb-6">
                            Hi, I'm <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}>Yamini Sawner</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-600 dark:text-gray-300">
                            Software Engineer & Web Developer
                        </h2>
                        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg">
                            I build exceptional digital experiences that combine beautiful design with flawless functionality.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                Contact Me
                            </a>
                            <a href="#projects" className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors">
                                View Projects
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl blur opacity-75"></div>
                            <div className="relative overflow-hidden rounded-2xl">
                                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1146903-4a1b-47fe-925e-ce6e5cfea1d7.png" alt="Professional portrait of Yamini Sawner" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
