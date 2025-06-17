import React from 'react';
import { Users, Code, Wand2 } from 'lucide-react';

const philosophyItems = [
    {
        icon: <Users size={28} className="text-cyan-400" />,
        title: "Start with the User's Problem",
        text: "Great products begin with a deep understanding of the 'why'. My process is rooted in thorough research and clear requirement elicitation to ensure we're building the right thing for the right people.",
    },
    {
        icon: <Code size={28} className="text-cyan-400" />,
        title: "Bridge the Technical Gap",
        text: "With a background in both code and strategy, I excel at creating alignment between technical and non-technical teams. I believe clear communication and robust documentation are the bedrock of efficient development.",
    },
    {
        icon: <Wand2 size={28} className="text-cyan-400" />,
        title: "Innovate with Purpose",
        text: "I'm fascinated by how emerging technologies like AI can create step-change improvements in user experience. My goal is to apply innovation pragmatically to deliver tangible, meaningful value.",
    },
];

const ProductPhilosophy = () => {
    return (
        <section id="product-philosophy" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-4 text-white">My Product Philosophy</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>
                <div className="grid md:grid-cols-3 gap-8">
                    {philosophyItems.map((item, index) => (
                        <div key={index} className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1">
                            <div className="mb-4">{item.icon}</div>
                            <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                            <p className="text-slate-300">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductPhilosophy;
