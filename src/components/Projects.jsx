import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'VOW – Virtual Office Workspace',
            description: 'A real-time virtual workspace supporting 50+ active users. Features role-based UI, task navigation, and group video calling for efficient collaboration. The Future of Remote Work, today.',
            tech: ['React.js', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB', 'SFU'],
            link: 'https://vow-live.me/',
            github: 'https://github.com/Yashvi-saini/VOW',
            image: '/vow.png',
            color: 'from-purple-500 to-rose-500'
        },
        {
            title: 'Redesign Ryze',
            description: 'A modern, high-performance redesign of the Ryze agency website. Focused on improved UX/UI, faster load times, and a seamless responsive experience across all devices.',
            tech: ['React', 'Tailwind CSS', 'Framer Motion'],
            link: 'https://redesign-ryze.vercel.app/',
            github: 'https://github.com/Yashvi-saini/redesign-ryze',
            image: '/redesign-ryze.png',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Anime Gaming Hub',
            description: 'An immersive gaming-vibe website for anime enthusiasts. Features dynamic character showcases, rich animations, and a distinct "gamified" distinct aesthetic.',
            tech: ['React', 'Motion', 'GSAP'],
            link: 'https://anime-two-mu.vercel.app/',
            github: 'https://github.com/Yashvi-saini/anime',
            image: '/anime.png',
            color: 'from-purple-500 to-indigo-500'
        },
        {
            title: 'CraftUI Component Library',
            description: 'A custom-built UI component library designed for speed and flexibility. Includes a robust set of accessible, themeable components for modern web applications.',
            tech: ['React', 'TypeScript', 'Shadcn', 'Next.js'],
            link: 'https://craft-ui-mocha.vercel.app/',
            github: 'https://github.com/Yashvi-saini/craft-ui',
            image: '/component.png',
            color: 'from-orange-500 to-amber-500'
        }
    ];

    return (
        <section id="projects" className="py-24 bg-[#050505] text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-pink-900/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of my recent work, from virtual workspaces to custom UI libraries.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>

                    <div className="space-y-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Project Visual */}
                                <div className="w-full md:w-1/2 group relative">
                                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] aspect-video shadow-2xl transition-all duration-500 hover:border-pink-500/30 hover:shadow-pink-500/10">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center p-10`}>
                                                <h3 className="text-4xl font-bold text-white text-center drop-shadow-md opacity-90">{project.title}</h3>
                                            </div>
                                        )}

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="View Live">
                                                <FaExternalLinkAlt size={20} />
                                            </a>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#333] text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110" aria-label="View Code">
                                                <FaGithub size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Connector Dot (Desktop) */}
                                    <div className={`hidden md:flex absolute top-1/2 ${index % 2 === 1 ? '-left-11' : '-right-11'} transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-[#050505] bg-gradient-to-r ${project.color} z-10 shadow-[0_0_15px_rgba(236,72,153,0.5)]`}></div>
                                </div>

                                {/* Project Info */}
                                <div className="w-full md:w-1/2">
                                    <div className={`flex flex-col ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} text-center md:text-left`}>
                                        <div className={`mb-4 inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-${project.color.split('-')[1]}-400`}>
                                            {project.title.split(' ')[0].toUpperCase()}
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                                            {project.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 === 1 ? 'md:justify-end justify-center' : 'md:justify-start justify-center'}`}>
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5 hover:border-pink-500/30 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <a href={project.link} className={`inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-medium group`}>
                                            View Project Details
                                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
