import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-pink-500">Me</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#111] p-8 rounded-lg border border-white/10">
                            <code className="text-sm text-gray-300 block font-mono">
                                <span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = &#123;<br />
                                &nbsp;&nbsp;name: <span className="text-yellow-300">'Yashvi Saini'</span>,<br />
                                &nbsp;&nbsp;role: <span className="text-yellow-300">'Frontend Developer'</span>,<br />
                                &nbsp;&nbsp;location: <span className="text-yellow-300">'India'</span>,<br />
                                &nbsp;&nbsp;passion: [<span className="text-yellow-300">'Coding'</span>, <span className="text-yellow-300">'Data Analytics'</span>]<br />
                                &#125;;
                            </code>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Building Digital Experiences</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am a Frontend Developer skilled in <strong className="text-white">React.js, Redux Toolkit, Next.js, and shadcn/ui</strong>.
                            Currently working at <strong className="text-white">Software Incubator – Software Development Center</strong>, I love crafting
                            performant and beautiful interfaces.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I am also exploring <strong className="text-white">DSA in C++</strong> and am passionate about <strong className="text-white">Data Analytics & Power BI</strong>.
                            With strong fundamentals in Python and automation, my goal is to become a Full-Stack Developer with expertise in real-time systems.
                        </p>

                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-[#111] rounded-lg border border-white/5 hover:border-pink-500/50 transition-colors">
                                <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">10+</h4>
                                <p className="text-sm text-gray-400 mt-2">Projects</p>
                            </div>
                            <div className="p-4 bg-[#111] rounded-lg border border-white/5 hover:border-pink-500/50 transition-colors">
                                <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">01+</h4>
                                <p className="text-sm text-gray-400 mt-2">Years Exp.</p>
                            </div>
                            <div className="p-4 bg-[#111] rounded-lg border border-white/5 hover:border-pink-500/50 transition-colors">
                                <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">100%</h4>
                                <p className="text-sm text-gray-400 mt-2">Dedication</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
