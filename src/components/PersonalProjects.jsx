import React from 'react';
import { Github } from 'lucide-react';

const personalProjectsData = [
    {
        title: "GenAI_Agents_Notebooks",
        description: "This repository contains Jupyter Notebook case studies showcasing the development of AI-powered applications using Gen AI, Vector Databases, LangChain, LangGraph, and other relevant technologies.",
        link: "https://github.com/uycung/GenAI_Agents_Notebooks",
        skills: ["Gen AI", "LangChain", "LangGraph", "Vector DB", "Python"],
    },
];

const PersonalProjects = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-12 text-white">Personal Projects & Explorations</h3>
                <div className="grid md:grid-cols-1 gap-8">
                    {personalProjectsData.map((project, index) => (
                         <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} 
                            className="block bg-slate-800/50 border border-slate-700 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1">
                            <div className="flex justify-between items-start">
                                <h4 className="text-xl font-semibold mb-2 text-white">{project.title}</h4>
                                <Github size={24} className="text-slate-400" />
                            </div>
                            <p className="text-slate-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                               {project.skills.map(skill => (
                                   <span key={skill} className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded-full">{skill}</span>
                               ))}
                           </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PersonalProjects;
