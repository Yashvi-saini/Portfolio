import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); 

        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
}

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = [
        "Frontend Developer",
        "Data Analytics Enthusiast",
        "Problem Solver"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 4000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center justify-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        <h2 className="text-cyan-400 font-medium tracking-[0.2em] mb-6 text-sm md:text-base uppercase">
                            Hello, I'm
                        </h2>

                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                            Yashvi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Saini</span>
                        </h1>

                        <div className="h-12 md:h-16 mb-8 text-2xl md:text-4xl text-gray-300 font-light items-center justify-center flex gap-3">
                            <span className="opacity-50">&lt;</span>
                            <span className="min-w-[200px] md:min-w-[300px] text-left font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
                                <key key={roles[roleIndex]}>
                                    <TypewriterText text={roles[roleIndex]} />
                                </key>
                                <span className="animate-pulse ml-1 text-cyan-400">|</span>
                            </span>
                            <span className="opacity-50">/&gt;</span>
                        </div>

                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Building seamless digital experiences with <span className="text-white">React</span>, <span className="text-white">Next.js</span>, and modern web technologies.
                            Turning complex ideas into interactive reality.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-50 transition-colors duration-300"
                            >
                                Let's Talk
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                            >
                                View Work
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>


        </section>
    );
};

export default Hero;
