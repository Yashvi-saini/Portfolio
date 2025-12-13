import React from 'react';

const Skills = () => {
    const skills = {
        frontend: [
            { name: 'React.js', level: '90%' },
            { name: 'Next.js', level: '85%' },
            { name: 'JavaScript', level: '90%' },
            { name: 'Redux', level: '80%' },
            { name: 'Tailwind', level: '95%' },
            { name: 'HTML/CSS', level: '95%' },
        ],
        others: [
            { name: 'C++', level: '75%' },
            { name: 'Python', level: '80%' },
            { name: 'Power BI', level: '70%' },
            { name: 'MySQL', level: '75%' },
            { name: 'Git', level: '85%' },
            { name: 'Figma', level: '70%' },
        ]
    };

    return (
        <section id="skills" className="py-20 bg-[#000000] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-pink-500">Skills</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Frontend Skills */}
                    <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-8 flex items-center">
                            <span className="w-2 h-8 bg-pink-500 mr-4 rounded-full"></span>
                            Frontend Development
                        </h3>
                        <div className="space-y-6">
                            {skills.frontend.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                        <span className="text-pink-500 text-sm">{skill.level}</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transform transition-all duration-1000 ease-out"
                                            style={{ width: skill.level }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Skills */}
                    <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-8 flex items-center">
                            <span className="w-2 h-8 bg-purple-500 mr-4 rounded-full"></span>
                            Languages & Tools
                        </h3>
                        <div className="space-y-6">
                            {skills.others.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                        <span className="text-purple-500 text-sm">{skill.level}</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transform transition-all duration-1000 ease-out"
                                            style={{ width: skill.level }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
