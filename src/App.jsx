import React from 'react';
import DynamicBackground from './components/DynamicBackground';
import WaveBackground from './components/WaveBackground';
import Hero from './components/Hero';
import ProductPhilosophy from './components/ProductPhilosophy';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import PersonalProjects from './components/PersonalProjects';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      {/* Set enableAnimation to false to turn off the p5.js background */}
      <DynamicBackground enableAnimation={false} />
      <WaveBackground />
      
      <main className="relative z-10">
        <Hero />
        <ProductPhilosophy />
        <WorkExperience />
        <Projects />
        <PersonalProjects />
        <Toolkit />
        <Contact />
      </main>
    </div>
  );
}

export default App;
