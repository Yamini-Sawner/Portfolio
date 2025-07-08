import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/Resume Photo-2.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100 text-white dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <div className="relative overflow-hidden rounded-full w-64 h-64 border-4 border-white dark:border-gray-700 shadow-lg">
                            <img src={profileImg} alt="Yamini Sawner" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-12">
                        <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                        <p className="text-lg mb-6">
                            Tech enthusiast on a journey to master the MERN stack, blending creativity with technical expertise in MongoDB, Express.js, React.js, and Node.js. With a background in Java and a drive to explore cutting-edge web technologies, I’m ready to dive into real-world challenges, building smart, scalable applications that push the boundaries of user experience. Seeking an opportunity to contribute fresh perspectives and continuously evolve as a full-stack developer.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <p className="mb-2"><span className="font-semibold">Name:</span> Yamini Sawner</p>
                                <p className="mb-2"><span className="font-semibold">Email:</span> yamini@example.com</p>
                                <p className="mb-2"><span className="font-semibold">Degree:</span> Computer Science</p>
                            </div>
                            <div>
                                <p className="mb-2"><span className="font-semibold">Phone:</span> +1 234 567 8900</p>
                                <p className="mb-2"><span className="font-semibold">Experience:</span> Fresher</p>
                            </div>
                        </div>
                        <Link
                            to="/resume"
                            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            View CV
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;