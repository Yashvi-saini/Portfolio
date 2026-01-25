import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        alert('Message sent! (Simulation)');
        setFormData({ name: '', email: '', message: '' });
    };

    const socialLinks = [
        { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yashvi-saini/', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
        { icon: FaGithub, href: 'https://github.com/Yashvi-saini', label: 'GitHub', color: 'hover:bg-[#333]' },
        { icon: FaEnvelope, href: 'mailto:yashvisaini@example.com', label: 'Email', color: 'hover:bg-[#ea4335]' },
    ];

    return (
        <section id="contact" className="py-24 bg-[#050505] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* using framer motion */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Connect</span></h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            I'm currently available for freelance projects and open to full-time opportunities.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-white font-semibold text-xl mb-4">Find me on</h3>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social, index) => {
                                        if (!social.icon) return null;
                                        return (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                className={`w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:scale-110`}
                                            >
                                                <social.icon size={20} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-[#111] border border-white/5">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-pink-500/10 text-pink-500">
                                        <FaEnvelope size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Email directly</h4>
                                        <a href="mailto:yashvisaini@example.com" className="text-gray-400 hover:text-pink-500 transition-colors">
                                            yashvisaini@example.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative"
                    >
                        {/* Form Gradient Border Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none p-[1px] -z-10"></div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 focus:bg-[#161616] text-white transition-all duration-300 placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 focus:bg-[#161616] text-white transition-all duration-300 placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 focus:bg-[#161616] text-white transition-all duration-300 placeholder-gray-600 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold tracking-wide rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane className="text-sm" /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
