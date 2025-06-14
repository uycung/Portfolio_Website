import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const contactLinks = [
    { icon: <Mail />, href: "mailto:cungdinhuy@gmail.com" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/uy-cung/" },
    { icon: <Github />, href: "https://github.com/uycung" },
];

const Contact = () => {
    return (
        <footer className="py-12 px-4 bg-slate-900">
            <div className="max-w-lg mx-auto text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-slate-300 mb-8">
                    I'm always excited to tackle new product challenges. If you think I could be a good fit for your team, I'd love to chat.
                </p>
                <div className="flex justify-center gap-6">
                    {contactLinks.map((link, index) => (
                        <a href={link.href} key={index} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                           {React.cloneElement(link.icon, { size: 32 })}
                        </a>
                    ))}
                </div>
                <p className="mt-12 text-sm text-slate-500">© 2025 Uy Cung. Built with React & Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Contact;
