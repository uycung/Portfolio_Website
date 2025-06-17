import React from 'react';

const projectsData = [
    {
        title: "Establishing a Product-Led Workflow (Friendify AI)",
        challenge: "The team lacked a structured product development process, leading to inconsistent quality and slow delivery of their AI platform.",
        contribution: "I took ownership of the product definition process. I introduced a Scrum-based methodology, established clear documentation standards using Epics and User Stories, and facilitated communication across the entire team to create a shared understanding.",
        result: "This created a predictable, efficient workflow and a solid foundation for future development, aligning the team around a single source of truth for the product.",
        skills: ["Product Roadmapping", "Agile/Scrum", "Stakeholder Management", "Jira", "Figma"],
    },
    {
        title: "Modernizing a Critical Enterprise System",
        challenge: "A legacy shipping documentation system was unreliable and difficult to maintain, creating significant business risk for the client.",
        contribution: "I was responsible for defining the 'what' and 'why' of the migration. I reverse-engineered legacy logic, authored a detailed Software Requirements Specification (SRS), and created BPMN/UML diagrams to guide the development of the new cloud solution.",
        result: "The detailed specifications ensured a smooth migration, resulting in a more scalable, reliable, and cost-effective system that met all business requirements.",
        skills: ["Requirements Engineering (SRS)", "BPMN/UML", "System Analysis", "Enterprise Software"],
    },
    // {
    //     title: "From Idea to Concept for a Next-Gen AI Device",
    //     challenge: "How could we leverage new LLM capabilities to create a viable concept for a next-generation consumer device?",
    //     contribution: "I led the initial product discovery phase, conducting market and technical research to define the core value proposition. I documented potential features and worked closely with designers to create initial UI mockups to validate the concept.",
    //     result: "Delivered a comprehensive product proposal and initial designs, creating a tangible vision that could be used to seek funding and stakeholder buy-in.",
    //     skills: ["Product Discovery", "Market Research", "Feature Documentation", "Prototyping"],
    // },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-center mb-4 text-white">
                        Project Contributions
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
                </div>
                <div className="space-y-12">
                    {projectsData.map((project, index) => (
                        <div key={index} className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl backdrop-blur-sm">
                           <h4 className="text-2xl font-semibold mb-4 text-white">{project.title}</h4>
                           <div className="grid md:grid-cols-3 gap-8 text-slate-300">
                               <div>
                                   <h5 className="font-semibold text-cyan-400 mb-2">Challenge</h5>
                                   <p>{project.challenge}</p>
                               </div>
                               <div>
                                   <h5 className="font-semibold text-cyan-400 mb-2">My Contribution</h5>
                                   <p>{project.contribution}</p>
                               </div>
                               <div>
                                   <h5 className="font-semibold text-cyan-400 mb-2">Result</h5>
                                   <p>{project.result}</p>
                               </div>
                           </div>
                           <div className="mt-6 flex flex-wrap gap-2">
                               {project.skills.map(skill => (
                                   <span key={skill} className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded-full">{skill}</span>
                               ))}
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
