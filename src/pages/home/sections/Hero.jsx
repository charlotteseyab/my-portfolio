import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
        
        {/* Animated circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C6A55C]/10 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#C6A55C]/5 rounded-full blur-2xl"
          style={{
            animation: 'blob 7s infinite',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#E5D4A1]/5 rounded-full blur-2xl"
          style={{
            animation: 'blob 7s infinite 2s',
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto text-center">
        <div 
          className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Greeting */}
          <div className="flex items-center justify-center gap-2 text-[#C6A55C]">
            <div className="h-[1px] w-8 bg-[#C6A55C]" />
            <span className="text-sm uppercase tracking-wider">Welcome to my portfolio</span>
            <div className="h-[1px] w-8 bg-[#C6A55C]" />
          </div>

          {/* Name and title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1]">
                Hi, I'm Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              A passionate{' '}
              <span className="text-[#C6A55C]">Full Stack Developer</span>
              {' '}crafting digital experiences
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="group relative px-6 py-3 w-48 overflow-hidden rounded-lg bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] text-[#0F172A] font-medium">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-[#E5D4A1] to-[#C6A55C]" />
            </button>
            
            <button className="group relative px-6 py-3 w-48 overflow-hidden rounded-lg border border-[#C6A55C] text-[#C6A55C]">
              <span className="relative z-10 group-hover:text-[#0F172A] transition-colors duration-300">Contact Me</span>
              <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-[#C6A55C]" />
            </button>
          </div>

          {/* Scroll indicator */}
          {/* <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            style={{ animation: 'bounce 2s infinite' }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-[#C6A55C] flex justify-center">
              <div 
                className="w-1 h-2 bg-[#C6A55C] rounded-full mt-2"
                style={{ animation: 'scrollDown 2s infinite' }}
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Tech stack icons or decorative elements */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-8 text-gray-500">
        {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((tech, index) => (
          <div
            key={tech}
            className="transition-all duration-1000 opacity-0 translate-y-10"
            style={{ 
              animationDelay: `${index * 200}ms`,
              animation: 'fadeInUp 1s forwards',
              animationDelay: `${800 + index * 200}ms`
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;