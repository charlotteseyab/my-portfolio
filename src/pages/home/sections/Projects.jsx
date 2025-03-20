import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory and payment processing",
      image: "/project1.jpg",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization",
      image: "/project2.jpg",
      category: "Frontend",
      tech: ["React", "TypeScript", "Tailwind", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered platform for generating marketing content using GPT-3",
      image: "/project3.jpg",
      category: "Backend",
      tech: ["Python", "OpenAI", "Next.js", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    // Add more projects...
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1C]">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #C6A55C 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C6A55C]/10 text-[#C6A55C] text-sm">
            <span className="w-2 h-2 bg-[#C6A55C] rounded-full animate-pulse"></span>
            Portfolio
          </div>
          <h2 className="text-4xl font-bold text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1]">Projects</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#C6A55C] text-[#0A0F1C]'
                  : 'bg-[#1E293B] text-gray-300 hover:bg-[#C6A55C]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => activeFilter === 'All' || project.category === activeFilter)
            .map((project, index) => (
              <div
                key={index}
                className="group relative bg-[#1E293B] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <a
                        href={project.link}
                        className="px-4 py-2 bg-[#C6A55C] text-[#0A0F1C] rounded-lg font-medium hover:bg-[#E5D4A1] transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="px-4 py-2 bg-[#1E293B] text-white rounded-lg font-medium hover:bg-[#2E3B4B] transition-colors"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#C6A55C] transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-[#C6A55C]/10 text-[#C6A55C] text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#0A0F1C] text-xs text-gray-300 rounded-full hover:bg-[#C6A55C]/10 hover:text-[#C6A55C] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#C6A55C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#C6A55C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;