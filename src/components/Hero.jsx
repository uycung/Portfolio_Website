import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Mail, Linkedin, Github } from 'lucide-react';

const contactLinks = [
    { icon: <Mail />, href: "mailto:cungdinhuy@gmail.com" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/uy-cung/" },
    { icon: <Github />, href: "https://github.com/uycung" },
];

const Hero = () => {
    const titles = ["Business Analyst", "Aspiring Product Manager"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
        }, 3000); // Change title every 3 seconds

        return () => clearInterval(intervalId);
    }, [titles.length]);

    const gradientTextStyle = {
        background: 'linear-gradient(to right, #007CF0, #00DFD8)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        // Removed line-height to prevent text cut-off
    };

    const titleVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Uy Cung
            </h1>
            {/* Removed fixed height from this container, added padding to h2 for spacing */}
            <div className="mt-4 flex items-center justify-center"> 
                <motion.h2
                    key={titles[currentTitleIndex]} // Add key to trigger re-animation
                    style={gradientTextStyle}
                    className="text-3xl md:text-5xl font-bold tracking-tight py-2 md:py-3" // Added padding here
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {titles[currentTitleIndex]}
                </motion.h2>
            </div>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300">
                A Business Analyst with a technical background, passionate about using technology to solve real-world problems.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#work-experience" className="px-6 py-3 font-semibold text-white rounded-lg transition-transform duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(to right, #007CF0, #00DFD8)' }}>
                    View My Experience
                </a>
                <a
                    href={`${import.meta.env.BASE_URL}resume.pdf`} 
                    download
                    className="px-6 py-3 font-semibold text-white bg-slate-800/50 border border-slate-700 rounded-lg flex items-center gap-2 transition-colors duration-300 hover:bg-slate-700/50"
                >
                    <Download size={20} />
                    Download Resume
                </a>
            </div>

            {/* Contact Icons */}
            <div className="mt-8 flex justify-center gap-6">
                {contactLinks.map((link, index) => (
                    <a 
                        href={link.href} 
                        key={index} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-slate-800/50"
                        title={link.href.startsWith('mailto:') ? 'Email' : link.href.includes('linkedin') ? 'LinkedIn' : 'GitHub'}
                    >
                       {React.cloneElement(link.icon, { size: 24 })}
                    </a>
                ))}
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
