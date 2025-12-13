import React from 'react';

const Footer = () => {
    return (
        <footer className="py-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#111]/80 backdrop-blur-md border border-white/5 rounded-full py-3 px-8 flex flex-col md:flex-row items-center justify-center gap-6 shadow-lg shadow-purple-500/5">

                    <p className="text-gray-500 text-xs md:text-sm">
                        &copy; {new Date().getFullYear()} Yashvi Saini.
                    </p>

                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/yashvi-saini/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110">
                            <i className="fab fa-linkedin-in text-base"></i>
                        </a>
                        <a href="https://github.com/Yashvi-saini" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110">
                            <i className="fab fa-github text-base"></i>
                        </a>
                        <a href="mailto:yashvi.saini@example.com" className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110">
                            <i className="fas fa-envelope text-base"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
