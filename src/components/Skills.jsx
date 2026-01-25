import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux, SiMysql, SiFigma, SiTypescript } from 'react-icons/si';

const SkillIcon = ({ Icon, name, color }) => {
    if (!Icon) return null;
    return (
        <div className="flex flex-col items-center justify-center gap-2 group cursor-pointer">
            <div className={`p-4 rounded-full bg-[#1a1a1a] border border-white/10 group-hover:border-${color.split('-')[1]}-500/50 shadow-lg group-hover:shadow-${color.split('-')[1]}-500/20 transition-all duration-300`}>
                <Icon className={`text-3xl ${color} group-hover:scale-110 transition-transform duration-300`} />
            </div>
            <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors absolute -bottom-6 w-max opacity-0 group-hover:opacity-100">{name}</span>
        </div>
    );
};

const Skills = () => {
    // Skills configuration
    const innerOrbitSkills = [
        { Icon: FaReact, name: 'React', color: 'text-cyan-400' },
        { Icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
        { Icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-300' },
        { Icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
        { Icon: SiTypescript, name: 'TypeScript', color: 'text-blue-400' },
    ];

    const outerOrbitSkills = [
        { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
        { Icon: SiRedux, name: 'Redux', color: 'text-purple-500' },
        { Icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
        { Icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500' },
        { Icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
        { Icon: SiMysql, name: 'MySQL', color: 'text-blue-300' },
        { Icon: FaPython, name: 'Python', color: 'text-yellow-300' },
        { Icon: SiFigma, name: 'Figma', color: 'text-pink-400' },
    ];

    return (
        <section id="skills" className="py-32 bg-[#050505] text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-900/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Mastery</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        A comprehensive ecosystem of technologies I leverage to build robust, scalable applications.
                    </motion.p>
                </div>

                <div className="relative h-[600px] flex items-center justify-center scale-75 md:scale-100">
                    {/* Center Core */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 1 }}
                        className="absolute z-20 w-32 h-32 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.2)]"
                    >
                        <div className="text-center">
                            <span className="block text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">DEV</span>
                            <span className="text-xs text-gray-500 tracking-[0.2em]">STACK</span>
                        </div>
                    </motion.div>

                    {/* Innner Orbit */}
                    <div className="absolute w-[350px] h-[350px] rounded-full border border-white/5">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full relative"
                        >
                            {innerOrbitSkills.map((skill, index) => {
                                const angle = (index / innerOrbitSkills.length) * 360;
                                const radius = 175; 
                                const x = Math.cos((angle * Math.PI) / 180) * radius;
                                const y = Math.sin((angle * Math.PI) / 180) * radius;

                                return (
                                    <div
                                        key={skill.name}
                                        className="absolute top-1/2 left-1/2"
                                        style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                                    >
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            <SkillIcon {...skill} />
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Outer Orbit */}
                    <div className="absolute w-[600px] h-[600px] rounded-full border border-white/5 border-dashed">
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full relative"
                        >
                            {outerOrbitSkills.map((skill, index) => {
                                const angle = (index / outerOrbitSkills.length) * 360;
                                const radius = 300; 
                                const x = Math.cos((angle * Math.PI) / 180) * radius;
                                const y = Math.sin((angle * Math.PI) / 180) * radius;

                                return (
                                    <div
                                        key={skill.name}
                                        className="absolute top-1/2 left-1/2"
                                        style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                                        >
                                            <SkillIcon {...skill} />
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Mobile view */}
                <div className="md:hidden grid grid-cols-3 gap-8 mt-12 text-center">
                    {[...innerOrbitSkills, ...outerOrbitSkills].map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center">
                            <skill.Icon className={`text-3xl ${skill.color} mb-2`} />
                            <span className="text-xs text-gray-400">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
