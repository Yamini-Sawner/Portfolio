import React from 'react';
const ContactInfo = ({ label, value }) => {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            </div>
            <div className="ml-4">
                <h4 className="text-lg font-medium">{label}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value}</p>
            </div>
        </div>
    );
};
export default ContactInfo;