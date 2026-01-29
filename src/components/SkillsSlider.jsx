// components/SkillsSlider.jsx
import React from 'react';

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg' }
];

export default function SkillsSlider() {
  return (
    <section className="py-5 bg-base-200 ">
      <div className="container mx-auto px-4 bg-base-200 pb-30 ">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        
        {/* Marquee/Slider Effect */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee">
            {/* Baris 1 */}
            {skills.map((skill, index) => (
              <div key={index} className="flex-shrink-8 mx-8 text-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16 mx-auto mb-2"
                />
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
            {/* Duplicate untuk infinite loop */}
            {skills.map((skill, index) => (
              <div key={`dup-${index}`} className="flex mx-8 text-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16 mx-auto mb-2"
                />
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}