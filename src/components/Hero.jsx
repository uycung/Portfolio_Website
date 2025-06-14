import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
    const gradientTextStyle = {
        background: 'linear-gradient(to right, #007CF0, #00DFD8)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Uy Cung
            </h1>
            <h2 style={gradientTextStyle} className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                Product-Centric Innovator
            </h2>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300">
                A Business Analyst with a technical background, passionate about using technology to solve real-world problems.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#work-experience" className="px-6 py-3 font-semibold text-white rounded-lg transition-transform duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(to right, #007CF0, #00DFD8)' }}>
                    View My Experience
                </a>
                <a
                    href={`${import.meta.env.BASE_URL}resume.pdf`} // <--- CHANGE THIS LINE
                    download
                    className="px-6 py-3 font-semibold text-white bg-slate-800/50 border border-slate-700 rounded-lg flex items-center gap-2 transition-colors duration-300 hover:bg-slate-700/50"
                >
                    <Download size={20} />
                    Download Resume
                </a>
            </div>

            {/* Scroll down arrow */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <a href="#product-philosophy" className="text-slate-400 hover:text-white transition-colors duration-300">
                    <ChevronDown size={32} className="animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
