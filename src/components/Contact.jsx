import React from 'react';
import { motion } from 'framer-motion'; 
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const socialLinks = [
        { icon: FaEnvelope, href: 'mailto:yashvisaini@example.com', label: 'Email', color: 'hover:text-cyan-400' },
        { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yashvi-saini/', label: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: FaGithub, href: 'https://github.com/Yashvi-saini', label: 'GitHub', color: 'hover:text-white' },
    ];

    return (
        <section id="contact" className="py-20 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Collaborate</span>
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>

                    <div className="flex items-center justify-center gap-8">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                                aria-label={social.label}
                            >
                                <social.icon size={28} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
