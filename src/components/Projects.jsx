import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'VOW – Virtual Office Workspace',
            description: 'A real-time virtual workspace supporting 50+ active users. Features role-based UI, task navigation, and group video calling for efficient collaboration.',
            tech: ['React.js', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB'],
            link: 'https://vow-live.me/',
            color: 'from-pink-500 to-rose-500'
        },
        {
            title: 'Getting Over It (Browser Game)',
            description: 'A 60-FPS physics-driven puzzle platformer with custom physics engine including momentum, inertia, and gravity. Optimized render loop.',
            tech: ['HTML5 Canvas', 'JavaScript', 'CSS'],
            link: 'https://getting-over-it-seven.vercel.app/',
            color: 'from-purple-500 to-indigo-500'
        },
        // Adding a placeholder project to balance the grid or show more work
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring dark mode and smooth animations.',
            tech: ['React', 'Tailwind CSS', 'Vite'],
            link: '#',
            color: 'from-blue-500 to-cyan-500'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-pink-500">Projects</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-[#111] rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-pink-500/30">
                            <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                <h3 className="text-2xl font-bold text-white relative z-10 text-center drop-shadow-lg">{project.title}</h3>

                                {/* Overlay with link */}
                                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                                        View Project
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors font-medium">
                                        Live Demo <i className="fas fa-external-link-alt ml-2 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
