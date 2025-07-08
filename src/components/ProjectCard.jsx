import React from 'react';

const ProjectCard = ({ image, title, description, technologies }) => {
    return (
        <div className="project-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md transition-all duration-300">
            <div className="relative overflow-hidden">
                <img src={image} alt={title} className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                    {technologies[0]} {/* Display the first technology */}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span key={index} className="inline-block bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-full text-xs">{tech}</span>
                    ))}
                </div>
                <div className="flex space-x-3">
                    <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                        View Project
                    </a>
                    {/* <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                        Code
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
