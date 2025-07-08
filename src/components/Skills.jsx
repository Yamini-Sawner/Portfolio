import React from 'react';
import SkillBar from './SkillBar';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container bg-gray-900 mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 text-white md:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                        <SkillBar skill="HTML" percentage={95} />
                        <SkillBar skill="React" percentage={90} />
                        <SkillBar skill="JavaScript" percentage={88} />
                        <SkillBar skill="Node.js" percentage={85} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Professional Skills</h3>
                        <SkillBar skill="Communication" percentage={90} />
                        <SkillBar skill="Team Work" percentage={92} />
                        <SkillBar skill="Project Management" percentage={85} />
                        <SkillBar skill="Creativity" percentage={87} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
