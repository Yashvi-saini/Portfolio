import React, { useState } from 'react';
import { FaHome, FaUser, FaCode, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home', icon: FaHome },
        { name: 'About', href: '#about', icon: FaUser },
        { name: 'Skills', href: '#skills', icon: FaCode },
        { name: 'Projects', href: '#projects', icon: FaFolderOpen },
        { name: 'Contact', href: '#contact', icon: FaEnvelope },
    ];

    return (
        <>
            {/* Desktop Vertical Sidebar - Left Side */}
            <nav className="hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-6 bg-[#111]/80 backdrop-blur-md p-4 rounded-full border border-white/10 shadow-2xl">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative group p-3 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300"
                        aria-label={link.name}
                    >
                        <link.icon size={20} />

                        {/* Tooltip */}
                        <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[#1a1a1a] text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                            {link.name}
                        </span>
                    </a>
                ))}
            </nav>

            {/* Mobile Menu Button - Fixed Top Right */}
            <div className="md:hidden fixed right-6 top-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-[#111]/90 backdrop-blur-md rounded-full text-white border border-white/10 shadow-lg hover:bg-[#222] transition-colors"
                >
                    {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 backdrop-blur-xl md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-cyan-400 text-2xl font-medium transition-colors flex items-center gap-4"
                        >
                            <link.icon size={24} />
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;
