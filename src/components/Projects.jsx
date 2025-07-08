import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="py-20 text-white bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                    <p className="mt-4 max-w-2xl mx-auto">Here are some of my recent projects showcasing my skills and expertise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* Project 1 */}
                    <ProjectCard
                        image="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efe03ee5-8a4c-4ed5-9f4b-811aaf7fd841.png"
                        title="E-commerce Dashboard"
                        description="A comprehensive admin dashboard for managing products, orders, customers, and business metrics."
                        technologies={['React', 'Redux', 'Chart.js']}
                    />
                    {/* Project 2 */}
                    <ProjectCard
                        image="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ea16bd33-453e-40f7-bbf1-437a97a2d23b.png"
                        title="Social Media Platform"
                        description="A full-featured social networking application with user profiles, posts, comments, and likes."
                        technologies={['React', 'Node.js', 'MongoDB']}
                    />
                    {/* Project 3 */}
                    <ProjectCard
                        image="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9e57b58-1369-489e-a1f7-d1a3320ed009.png"
                        title="Task Management App"
                        description="A productivity application to organize tasks with Kanban boards, deadlines, and team collaboration."
                        technologies={['Vue.js', 'Firebase', 'Tailwind CSS']}
                    />
                </div>
                <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <a href="#" className="inline-block px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
