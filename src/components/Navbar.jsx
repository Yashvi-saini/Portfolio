import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 pt-6">

            {/* Desktop Menu - Absolute Center */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-50">
                <div className="flex items-center space-x-1 bg-[#111]/90 px-8 py-3 rounded-full border border-white/5 backdrop-blur-xl shadow-lg shadow-purple-500/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-400 hover:text-white hover:bg-white/10 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Button - Absolute Right */}
            <div className="md:hidden absolute right-6 top-6 z-50 bg-[#111]/80 rounded-md backdrop-blur-md">
                <button
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none border border-white/10"
                >
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 pt-24 md:hidden flex flex-col items-center space-y-8 backdrop-blur-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-pink-500 text-2xl font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
