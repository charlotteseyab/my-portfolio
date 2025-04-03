import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('development');

  const skillCategories = {
    development: {
      title: "Development",
      skills: [
        {
          name: "Frontend",
          expertise: [
            { tech: "React", level: 95 },
            { tech: "Laravel", level: 90 },
            { tech: "JavaScript", level: 85 },
            { tech: "Tailwind", level: 90 }
          ]
        },
        {
          name: "Backend",
          expertise: [
            { tech: "Node.js", level: 88 },
            { tech: "PHP", level: 85 },
            { tech: "MongoDB", level: 92 },
            { tech: "MySQL", level: 87 }
          ]
        }
      ]
    },
    tools: {
      title: "Tools & Platforms",
      skills: [
        {
          name: "Development Tools",
          expertise: [
            { tech: "Git/GitHub", level: 95 },
            { tech: "Docker", level: 85 },
            { tech: "VS Code", level: 95 },
            { tech: "Terminal", level: 90 }
          ]
        },
        {
          name: "Platforms",
          expertise: [
            { tech: "AWS", level: 85 },
            { tech: "Netlify", level: 90 },
            { tech: "Firebase", level: 88 },
            { tech: "Render", level: 85 }
          ]
        }
      ]
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      {/* Background with hexagon pattern */}
      {/* <div className="absolute inset-0 bg-[#0A0F1C]">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill-rule='evenodd' stroke='%23C6A55C' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] mb-4">
            <div className="px-6 py-1 rounded-full bg-[#0A0F1C]">
              <span className="text-[#C6A55C] text-sm font-medium tracking-wider uppercase">
                Skills & Expertise
              </span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Technical Proficiency
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#1E293B] rounded-xl p-1">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] text-[#0A0F1C]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {skillCategories[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories[activeTab].skills.map((skillSet, index) => (
            <div
              key={index}
              className="bg-[#1E293B] rounded-2xl p-8 hover:bg-[#1E293B]/80 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {skillSet.name}
              </h3>
              <div className="space-y-6">
                {skillSet.expertise.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#C6A55C]" />
                        <span className="text-gray-300">{item.tech}</span>
                      </div>
                      <span className="text-[#C6A55C] text-sm">{item.level}%</span>
                    </div>
                    <div className="relative h-2 bg-[#0A0F1C] rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] transition-all duration-500"
                        style={{ width: `${item.level}%` }}
                      >
                        <div className="absolute top-0 right-0 h-full w-4 bg-white/20 blur-sm" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Years Experience', value: '4+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Happy Clients', value: '30+' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-[#1E293B] rounded-xl p-6 text-center hover:bg-[#1E293B]/80 transition-colors duration-300"
            >
              <div className="text-2xl font-bold text-[#C6A55C] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;