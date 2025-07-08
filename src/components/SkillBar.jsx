import React from 'react';
const SkillBar = ({ skill, percentage }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span>{skill}</span>
                <span>{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2 rounded-full skill-bar" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};
export default SkillBar;
