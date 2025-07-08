import React from 'react';

const ExperienceItem = ({ title, company, duration, description }) => {
    return (
        <div className="mb-8 flex animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-900 z-10"></div>
            <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{company}</p>
                <p className="text-sm text-gray-500">{duration}</p>
            </div>
            <div className="w-1/2 pl-8">
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ExperienceItem;
