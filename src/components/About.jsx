import React from 'react';
import { motion } from 'framer-motion'; 

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#050505] text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-900/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative group">
                            {/* Decorative Glow */}


                            {/* Image Container */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <img
                                    src="/about.png"
                                    alt="About Me"
                                    className="w-full h-auto object-cover md:max-w-md mx-auto"
                                />
                            </div>


                        </div>
                    </motion.div>

                    {/* Right Column: Bio & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Code</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-8">
                            <p>
                                I am a passionate Frontend Developer skilled in <strong className="text-white">React.js, Redux Toolkit, and Next.js</strong>.
                                Currently, I'm building innovative solutions at <strong className="text-white">Software Incubator – Software Development Center</strong>,
                                where I transform complex requirements into seamless, high-performance interfaces.
                            </p>
                            <p>
                                Beyond frontend, I explore <strong className="text-white">DSA in C++</strong> and dive into <strong className="text-white">Data Analytics & Power BI</strong>.
                                My goal is to master real-time systems and evolve into a Full-Stack Developer who builds scalable, user-centric applications.
                            </p>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
