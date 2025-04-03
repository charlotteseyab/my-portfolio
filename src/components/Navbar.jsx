import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  // Handle scroll effects and active section
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      setScrolled(window.scrollY > 50);

      // Handle active section
      const sections = navItems.map(item => document.querySelector(`#${item.toLowerCase()}`));
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      sections.forEach((section) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="relative group"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-2 py-1 group ${
                  activeSection === item.toLowerCase()
                    ? 'text-[#C6A55C]'
                    : 'text-gray-300 hover:text-[#C6A55C]'
                } transition-colors duration-300 text-sm uppercase tracking-wider`}
              >
                {item}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] transform origin-left transition-transform duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-[#C6A55C] scale-x-100'
                      : 'bg-[#C6A55C] scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            ))}
            {/* <button className="relative overflow-hidden px-6 py-2 rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] opacity-0 group-hover:opacity-100"></span>
              <span className="relative text-[#C6A55C] group-hover:text-[#0F172A] transition-colors duration-300">
                Resume
              </span>
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 focus:outline-none"
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span 
                  className={`block h-0.5 w-6 bg-[#C6A55C] transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-[#C6A55C] transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-[#C6A55C] transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'max-h-64 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`relative px-4 py-2 ${
                  activeSection === item.toLowerCase()
                    ? 'text-[#C6A55C] bg-[#C6A55C]/10'
                    : 'text-gray-300'
                } rounded-lg transition-all duration-300 hover:bg-[#C6A55C]/10`}
              >
                {item}
              </a>
            ))}
            <button className="mt-2 px-4 py-2 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] text-[#0F172A] rounded-lg font-medium">
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-800/50">
        <div 
          className="h-full bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1]"
          style={{
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
            transition: 'width 0.1s'
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;