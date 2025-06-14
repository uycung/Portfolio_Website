import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const WorkExperience = () => {
    const experiences = [
        {
            title: "Business Analyst",
            company: "Friendify AI Company",
            period: "Aug 2023 - Feb 2025",
            achievements: [
                "Took ownership of the Friendify AI project, managing its lifecycle from planning and requirement gathering to development and launch, escalating only high-level concerns to the project manager.",
                "Prepared comprehensive development documents and created detailed visual aids, including wireframes and diagrams, to ensure clear understanding of project requirements.",
                "Conducted in-depth technical and product research to inform strategic decisions, staying up-to-date with industry trends and emerging technologies, particularly in AI.",
                "Collaborated effectively with cross-functional teams, including developers, designers, marketers, and QA testers, to align project objectives and deliverables.",
                "Implemented a structured, iterative development methodology based on Scrum, introducing ceremonies like Sprint Planning and Retrospectives to enhance team workflow and continuous improvement."
            ]
        },
        {
            title: "Business Analyst",
            company: "FPT Software",
            period: "Apr 2022 - Nov 2022",
            achievements: [
                "Authored the Software Requirements Specification (SRS) document, employing use case methodology to capture detailed requirements.",
                "Designed wireframes to represent the user interface and user experience aspects of the system, ensuring intuitive and effective interactions.",
                "Contributed to project planning activities, actively tracking progress, identifying potential roadblocks, and reporting on the overall project status.",
                "Served as a key liaison, reporting project progress, issues, and risks to stakeholders, and gathering bug reports and change requests from the client for future development phases."
            ]
        },
        {
            title: "Business Analyst",
            company: "THL One",
            period: "Dec 2020 - Mar 2022",
            achievements: [
                "Led feature delivery for Inventory, Purchasing, and Process Management for a Manufacturing Execution System (MES), prioritizing requirements for timely implementation.",
                "Created technical diagrams and wireframes to support system understanding and development.",
                "Utilized SQL for data consistency checks between integrated systems."
            ]
        },
        {
            title: "Mobile Developer",
            company: "THL One",
            period: "Feb 2020 - Nov 2020",
            achievements: [
                "Developed a new iOS hotel service app using Swift.",
                "Implemented code refactoring to improve app performance and maintainability.",
                "Managed the deployment of the app to TestFlight."
            ]
        }
    ];

    return (
        <section id="work-experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Work Experience
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
                </div>
                
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 hidden md:block"></div>
                    
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline dot */}
                                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full hidden md:block"></div>
                                
                                {/* Content */}
                                <div className="md:ml-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                                            <p className="text-lg text-blue-400 font-semibold">{exp.company}</p>
                                        </div>
                                        <div className="flex flex-col md:items-end mt-2 md:mt-0">
                                            <div className="flex items-center text-slate-300 mb-1">
                                                <Calendar size={16} className="mr-2" />
                                                <span className="text-sm">{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {exp.achievements.map((achievement, achievementIndex) => (
                                            <div key={achievementIndex} className="flex items-start">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <p className="text-slate-300 leading-relaxed">{achievement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;