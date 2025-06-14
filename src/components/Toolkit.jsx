import React from 'react';

const toolkitData = {
    "Product & Strategy": ["Requirements Elicitation", "User Stories & Epics", "Roadmapping", "Agile/Scrum", "Stakeholder Management"],
    "Analysis & Design": ["Wireframing", "Business Process Modeling (BPMN)", "System Modeling (UML)", "Figma"],
    "Data & Technical": ["SQL", "Python", "API Testing (Postman)", "Gen AI (RAG, Prompt Engineering)", "Swift"],
};

const Toolkit = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-12 text-white">My Toolkit</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(toolkitData).map(([category, skills]) => (
                        <div key={category} className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl backdrop-blur-sm">
                            <h4 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h4>
                            <ul className="space-y-2">
                                {skills.map(skill => (
                                    <li key={skill} className="text-slate-300">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Toolkit;
