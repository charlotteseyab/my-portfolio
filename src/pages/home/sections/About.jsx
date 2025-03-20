import React from 'react';

const About = () => {
  const skills = [
    { name: 'Frontend', tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', tech: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'] },
    { name: 'Tools', tech: ['Git', 'Docker', 'AWS', 'Figma'] }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-[#0A0F1C]">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(#C6A55C 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #C6A55C calc(100% - 0.5px)),
                             linear-gradient(90deg, #C6A55C 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #C6A55C calc(100% - 0.5px))`,
            backgroundSize: '60px 60px'
          }}
        />
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Image & Quick Info */}
          <div className="lg:w-5/12 space-y-8">
            {/* Profile Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-[#1E293B] p-3 rounded-3xl">
                <img
                  src="/your-image.jpg"
                  alt="Profile"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-white">Your Name</h3>
                  <p className="text-[#C6A55C]">Full Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '4+ Years' },
                { label: 'Projects', value: '50+ Completed' },
                { label: 'Clients', value: '30+ Happy' },
                { label: 'Awards', value: '5+ Received' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-[#1E293B] p-4 rounded-xl border border-[#C6A55C]/20 hover:border-[#C6A55C]/50 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-[#C6A55C]">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-7/12 space-y-10">
            {/* Section Title */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C6A55C]/10 text-[#C6A55C] text-sm mb-6">
                <span className="w-2 h-2 bg-[#C6A55C] rounded-full animate-pulse"></span>
                About Me
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Crafting Digital Experiences with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1]"> Passion & Precision</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                As a Full Stack Developer, I blend creativity with technical expertise to build 
                seamless digital solutions. My journey in tech has been driven by a passion for 
                innovation and a commitment to excellence.
              </p>
            </div>

            {/* Skills Section */}
            {/* <div className="space-y-6">
              {skills.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-[#C6A55C] font-semibold">{category.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-lg bg-[#1E293B] text-white border border-[#C6A55C]/20 hover:border-[#C6A55C] hover:bg-[#C6A55C]/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div> */}

            {/* Additional Info */}
            <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#C6A55C]/20">
              <h3 className="text-white font-semibold mb-4">My Approach</h3>
              <ul className="space-y-3">
                {[
                  'Clean and maintainable code architecture',
                  'User-centered design principles',
                  'Performance optimization',
                  'Scalable solutions'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-[#C6A55C] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] text-[#0A0F1C] rounded-xl font-medium hover:shadow-lg hover:shadow-[#C6A55C]/20 transition-all duration-300 flex items-center gap-2"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-4 border border-[#C6A55C] text-[#C6A55C] rounded-xl hover:bg-[#C6A55C]/10 transition-all duration-300 flex items-center gap-2"
              >
                View Resume
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;