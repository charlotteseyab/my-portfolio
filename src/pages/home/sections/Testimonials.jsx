import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Working with [Your Name] was an incredible experience. Their technical expertise and attention to detail transformed our project into something extraordinary. They consistently delivered beyond our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      // image: "https://your-image-url.com/sarah.jpg", // Replace with actual image URL
      rating: 4,
      type: "Client"
    },
    {
      id: 2,
      content: "One of the most talented developers I've had the pleasure to work with. Their problem-solving skills and innovative approaches have been invaluable to our team's success.",
      author: "Michael Chen",
      position: "Senior Developer, InnovateTech",
      // image: "https://your-image-url.com/michael.jpg", // Replace with actual image URL
      rating: 5,
      type: "Colleague"
    },
    {
      id: 3,
      content: "An exceptional professional who brings both technical excellence and creative thinking to every project. Their work consistently demonstrates a deep understanding of user needs and modern development practices.",
      author: "Emma Williams",
      position: "Product Manager, DesignHub",
      // image: "https://your-image-url.com/emma.jpg", // Replace with actual image URL
      rating: 5,
      type: "Client"
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1E293B] opacity-90" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(#C6A55C 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] mb-4">
            <div className="px-6 py-1 rounded-full bg-[#1E293B]">
              <span className="text-[#C6A55C] text-sm font-medium tracking-wider uppercase">
                Testimonials
              </span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1]">Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback from clients and colleagues who I've had the pleasure of working with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
              
              {/* Card Content */}
              <div className="relative bg-[#1E293B]/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#1E293B]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#C6A55C]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-400 mb-6 flex-grow">"{testimonial.content}"</p>

                {/* Author Info */}
                <div className="flex items-center">
                  {/* <div className="relative w-12 h-12 mr-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] rounded-full blur-sm opacity-50" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="relative w-full h-full object-cover rounded-full border-2 border-[#C6A55C]/20"
                    />
                  </div> */}
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <span className="inline-block px-2 py-1 mt-1 text-xs font-medium text-[#C6A55C] bg-[#C6A55C]/10 rounded-full">
                      {testimonial.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C6A55C] to-[#E5D4A1] text-[#1E293B] rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#C6A55C]/20"
          >
            <span>Work With Me</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
