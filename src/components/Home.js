/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ClockIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/20/solid';

// Custom HoverDropdown component (unchanged)
function HoverDropdown({ buttonText, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="flex justify-between w-full px-4 py-2 text-left text-xl font-semibold text-blue-700 bg-white border border-blue-300 rounded-lg hover:bg-blue-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
        <span>{buttonText}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-blue-500 transform ${isHovered ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`mt-2 w-full p-4 bg-white text-gray-800 rounded-lg shadow-md transition-all duration-200 ease-out ${
          isHovered
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
   <section className="bg-white text-black py-24">
  <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
    <h1
      className={`text-4xl sm:text-4xl md:text-4xl font-bold leading-tight transition-transform transition-opacity duration-700 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      Where Powerful Web Design Meets Strategic Branding Excellence.
    </h1>

    <p
      className={`mt-6 text-lg sm:text-xl max-w-2xl transition-transform transition-opacity duration-700 delay-200 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      We craft stunning websites and build iconic brand identities that capture attention, drive engagement, and fuel digital growth for businesses of all sizes.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <a
        href="#"
        className={`px-6 py-3 text-lg font-medium border-2 border-green-500 bg-transparent text-blue-500 rounded-lg hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform ${
          loaded ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'
        }`}
      >
        Request a Free Web Consultation
      </a>
    </div>
  </div>
</section>



     {/* About Section */}
<section className="bg-green-700 text-white py-16 px-6 lg:px-32">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">About</h2>
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-2/3 text-left mb-8 lg:mb-0">
        <p className="text-lg">
          We're not your average digital agency We're the architects behind high-performance brands. Our team is built on a convergence of sharp coders, brand strategists, data scientists, and systems thinkers who design web and brand ecosystems that don’t just look good they win.
        </p>
        <p className="text-lg mt-4">
          Our mission is to engineer dominance in digital spaces. Through conversion-driven websites, bulletproof brand identities, and ROI-backed strategies, we equip businesses to scale with precision. Every decision we make is data-informed, every design intentional, and every outcome measurable.
        </p>
        <a
          href="/about"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
        >
          Learn More
        </a>
      </div>
      <div className="lg:w-1/3">
        <div className="relative">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/mLW0GmxR4wI"
            title="Brand Strategy Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Explore Our Featured Work Section */}
<section className="bg-blue-100 text-green-700 py-16 px-6 lg:px-32">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Explore Our Featured Work</h2>
    <div className="flex justify-center space-x-6 mb-12">
      <a className="font-small hover:text-blue-700">WEB DEVELOPMENT</a>
      <a className="font-small hover:text-blue-700">MOBILE DEVELOPMENT</a>
      <a className="font-small hover:text-blue-700">BRANDING</a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 md:gap-x-0">
      {/* Project 1 */}
      <a href="https://peakfluence.co.ke" className="group block h-80 relative" aria-label="Project 1">
        <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
          <img
            src="/writing.jpg"
            alt="Project 1"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 rounded-none">
          <p className="text-white text-center">
            Branding for Madison Architects, featuring a cohesive identity across digital and print media.
          </p>
        </div>
      </a>
      {/* Project 2 */}
      <a href="https://eight-blue.vercel.app" className="group block h-80 relative" aria-label="Project 2">
        <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
          <img
            src="/branding.jpg"
            alt="Project 2"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 rounded-none">
          <p className="text-white text-center">
            Marketing campaign for Madison Architects, showcasing their innovative architectural solutions through impactful outdoor advertising.
          </p>
        </div>
      </a>
      {/* Project 3 */}
      <a href="https://https://pridetok.com/" className="group block h-80 relative" aria-label="Project 3">
        <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
          <img
            src="/seo.jpg"
            alt="Project 3"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 rounded-none">
          <p className="text-white text-center">
            Web design for Madison Architects, creating a user-friendly and visually appealing online presence.
          </p>
        </div>
      </a>
      {/* Project 4 */}
      <a href="https://bestmart-two.vercel.app/" className="group block h-80 relative" aria-label="Project 4">
        <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
          <img
            src="/blog.jpg"
            alt="Logo Design for Tech Startup"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 rounded-none">
          <p className="text-white text-center">
            Custom logo design for a tech startup, creating a modern and innovative brand identity.
          </p>
        </div>
      </a>
      {/* Project 5 */}
      <a href="https://topscriber-git-main-bob-ogonos-projects.vercel.app/" className="group block h-80 relative" aria-label="Project 5">
        <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
          <img
            src="/port.jpg"
            alt="Social Media Campaign for Fashion Brand"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 rounded-none">
          <p className="text-white text-center">
            Engaging social media campaign for a fashion brand, obtaining brand awareness and customer engagement.
          </p>
        </div>
      </a>
      {/* Project 6 */}
      <a href="https://bobgenga.vercel.app/" className="group block h-80 relative" aria-label="Project 6">
        <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
          <img
            src="/2.jpg"
            alt="Mobile App Design for Fitness Company"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 rounded-none">
          <p className="text-white text-center">
            User-friendly mobile app design for a fitness company, helping users track their workouts and progress.
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-100 text-green-700 py-16 px-6 lg:px-60">
        <div className="max-w-19xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
          <p className="text-xl mb-12">
            We are trusted by leading brands and professionals for our expertise in Web Developmment, MOBILE, and branding.
          </p>
          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center hover:bg-blue-50 transition-colors">
              <ClockIcon className="w-13 h-12 text-green-700 mb-2" />
              <h3 className="text-2xl font-bold text-green-700">10+ Years</h3>
              <p>of experience in delivering excellence</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center hover:bg-blue-50 transition-colors">
              <UserGroupIcon className="w-12 h-12 text-green-700 mb-2" />
              <h3 className="text-2xl font-bold text-green-700">700+ Clients</h3>
              <p>served across the globe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center hover:bg-blue-50 transition-colors">
              <GlobeAltIcon className="w-13 h-12 text-green-700 mb-2" />
              <h3 className="text-2xl font-bold text-green-700">10 Countries</h3>
              <p>with satisfied clients</p>
            </div>
          </div>
          {/* Expert Team */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">Meet Our Expert Team</h3>
            <p>
              Our team consists of highly qualified DeVelopers, AI specialists, and branding experts dedicated to helping you achieve your goals. With a passion for excellence and a commitment to quality, we ensure every project meets the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="bg-blue-100 text-green-700 py-16 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">
                “Eight8 transformed my  brand! It became beuatiful and appealing to our clients.”
              </p>
              <div className="flex items-center space-x-3">
                <img src="" alt="Jane Doe" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Mary Zheng</p>
                  <p className="text-sm">Graduate Student, USA</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">
                “SEO-driven articles from CleanWriters boosted our website traffic by 200% in just three months!”
              </p>
              <div className="flex items-center space-x-3">
                <img src="" alt="Michael Smith" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Michael Nderitu</p>
                  <p className="text-sm">Marketing Manager, UK</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">
                “Their virtual brand strategy service took our online presence from zero to hero. Highly recommend!”
              </p>
              <div className="flex items-center space-x-3">
                <img src="" alt="Sara Lee" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Sara Khan</p>
                  <p className="text-sm">Startup Founder, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-[#2E5BFF] rounded-full p-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </main>
  );
}