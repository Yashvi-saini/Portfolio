import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] pt-16">
            {/* Background Effects */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center justify-center text-center">

                    <div className="w-full max-w-4xl mx-auto">
                        <h2 className="text-pink-500 font-medium tracking-wide mb-4">HELLO, I'M</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Yashvi <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Saini</span>
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
                            Frontend Developer & <br /> Data Analytics Enthusiast
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            Building seamless digital experiences with React, Next.js, and modern web technologies.
                            Turning ideas into interactive reality.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-1">
                                Let's Talk
                            </a>
                            <a href="#projects" className="px-8 py-3 border border-gray-600 text-white rounded-full font-medium hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
                                View Work
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
