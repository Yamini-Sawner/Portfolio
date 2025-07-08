import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                    <p className="mt-4 max-w-2xl mx-auto">My professional journey and career milestones.</p>
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full transform -translate-x-1/2"></div>
                    <ExperienceItem
                        title="Senior Frontend Developer"
                        company="TechCorp Inc."
                        duration="Jan 2020 - Present"
                        description="Lead development of enterprise web applications using React and TypeScript. Mentored junior developers and improved frontend architecture."
                    />
                    <ExperienceItem
                        title="Full-stack Developer"
                        company="WebSolutions Ltd."
                        duration="Mar 2017 - Dec 2019"
                        description="Developed full-stack applications using Node.js, Express, and MongoDB on the backend, with React on the frontend."
                    />
                    <ExperienceItem
                        title="Junior Web Developer"
                        company="Digital Agency XYZ"
                        duration="Jun 2015 - Feb 2017"
                        description="Built responsive websites for various clients using HTML, CSS, and JavaScript. Assisted senior developers with backend integrations."
                    />
                    <ExperienceItem
                        title="Web Development Intern"
                        company="StartUp Ventures"
                        duration="Jan 2014 - May 2015"
                        description="Learned web development basics while assisting with frontend coding and content management system implementations."
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
