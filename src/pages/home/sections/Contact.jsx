import React from 'react'

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "hello@yourname.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Location",
      value: "Your City, Country",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const socialLinks = [
    {
      // name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      // name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      // name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      // name: 'WhatsApp',
      url: 'https://wa.me/yournumber',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0A0F1C]">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMGwyNS45ODE0IDE1djMwTDMwIDYwIDQuMDE4NiA0NVYxNUwzMCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzZBNTVDIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9zdmc+')] bg-[length:30px_30px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C6A55C]"></div>
            <span className="mx-4 text-[#C6A55C] text-sm font-medium tracking-[0.2em] uppercase">Contact Me</span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-[#C6A55C] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1]"> Amazing Together</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#C6A55C]/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#C6A55C]/10 rounded-full blur-[100px]" />

          <div className="relative grid lg:grid-cols-5 gap-8 items-start">
            {/* Contact Info & Social - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#1E293B]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group mb-8 last:mb-0">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 rounded-lg bg-[#C6A55C]/10 text-[#C6A55C]">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-sm">{info.title}</h3>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-8 border-t border-gray-800/50">
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-[#0A0F1C] hover:bg-[#C6A55C]/10 text-gray-400 hover:text-[#C6A55C] transition-all duration-300"
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] rounded-2xl blur opacity-10" />
                <div className="relative bg-[#1E293B]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-[#0A0F1C]/50 rounded-lg border border-gray-800/50 focus:outline-none focus:border-[#C6A55C] transition-all duration-300 placeholder:text-gray-600"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-[#0A0F1C]/50 rounded-lg border border-gray-800/50 focus:outline-none focus:border-[#C6A55C] transition-all duration-300 placeholder:text-gray-600"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#0A0F1C]/50 rounded-lg border border-gray-800/50 focus:outline-none focus:border-[#C6A55C] transition-all duration-300 placeholder:text-gray-600"
                        placeholder="Project Discussion"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Message</label>
                      <textarea
                        rows="6"
                        className="w-full px-4 py-3 bg-[#0A0F1C]/50 rounded-lg border border-gray-800/50 focus:outline-none focus:border-[#C6A55C] transition-all duration-300 placeholder:text-gray-600"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full group relative px-8 py-4 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] text-[#0A0F1C] rounded-lg font-medium overflow-hidden transition-all duration-300"
                    >
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <svg 
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact