import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white py-12 border-t border-white/10 relative overflow-hidden">
            {/* Simple background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-32 bg-purple-500/10 blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>&copy; 2026 Yashvi Saini. All rights reserved.</p>
                    <p className="flex items-center gap-2 group">
                        Thinking in components <FaCode className="text-cyan-500 animate-pulse hover:scale-120 transition-transform" /> rendering reality
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
