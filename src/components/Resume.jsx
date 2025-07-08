import React from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6 mt-15 bg-white text-gray-800 shadow-md rounded-lg">
      {/* Cancel Button Top-Right */}
      <button 
        onClick={handleCancel} 
        className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition"
        aria-label="Close Resume"
      >
        Cancel
      </button>

      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Yamini Sawner</h1>
        <p className="text-gray-600 mt-2">Tech Enthusiast | MERN Stack Developer</p>
      </header>

      {/* Contact */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Get in Touch</h2>
        <p><strong>Mobile:</strong> +91-9617019344</p>
        <p><strong>Email:</strong> <a href="mailto:yaminisawner16@gmail.com" className="text-blue-600">yaminisawner16@gmail.com</a></p>
        <p><strong>Current Location:</strong> Bhopal</p>
      </section>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Resume Summary</h2>
        <p>
          Tech enthusiast on a journey to master the MERN stack, blending creativity with technical
          expertise in MongoDB, Express.js, React.js, and Node.js. Strong background in Java and web technologies,
          skilled in designing RESTful APIs, integrating third-party services, and building responsive front-end interfaces.
          Experienced in agile teams, writing clean, maintainable code.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Java</li>
            <li>HTML, CSS, Tailwind CSS</li>
            <li>JavaScript, React.js, Next.js</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB</li>
            <li>REST API Testing</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Languages Known</h2>
          <p>English (Both spoken and written)</p>

          <h2 className="text-xl font-semibold border-b pb-1 mt-4 mb-2">Certifications</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Stellar Workshop Certificate</li>
            <li>Cyber Security Essentials</li>
            <li>Introduction to Gemini for Google Workshop</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
        <p><strong>B.Tech/B.E. (Computers)</strong> - RGPV, Bhopal <br />Score: 7.85%</p>
        <p><strong>Class XII</strong> - Madhya Pradesh Board (English Medium), 2022 - 84%</p>
        <p><strong>Class X</strong> - Madhya Pradesh Board (English Medium), 2020 - 86%</p>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
        <h3 className="font-semibold">Rent360 (April 2024 - June 2025)</h3>
        <p>
          Rent360 is a user-friendly rental platform like an eCommerce site where users can rent anything.
          It offers features like owner-customer chat functionality and streamlined rental processes.
        </p>
      </section>

      {/* Awards and Achievements */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Awards & Achievements</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>LeetCode 50-Day Streak Award</li>
          <li>Solved 200+ problems on LeetCode (Easy to Hard)</li>
          <li>College Topper, Top 10 in class</li>
          <li>NSS Volunteer, NACAT Naukri Campus Participant</li>
          <li>Blockchain Seminar Participant</li>
          <li>All-rounder, School Topper</li>
        </ul>
      </section>

      {/* Personal Info */}
      <section className="mb-2">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Personal Details</h2>
        <p><strong>Date of Birth:</strong> August 25, 2004</p>
        <p><strong>Gender:</strong> Female</p>
      </section>
    </div>
  );
};

export default Resume;
