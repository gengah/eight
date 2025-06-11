/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ClockIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/20/solid';

// Custom HoverDropdown component
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
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-24">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight transition-transform transition-opacity duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Where Academic Brilliance Meets Strategic Content & Digital Authority.
          </h1>
          <p
            className={`mt-6 text-lg sm:text-xl max-w-2xl transition-transform transition-opacity duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
Helping students, professionals & brands achieve excellence through plagiarism-free academic writing, SEO-driven content, & virtual brand strategy.          </p>
          
          <div
            className={`mt-12 w-full max-w-md transition-transform transition-opacity duration-700 delay-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <img
              src="/1.jpg"
              alt="Corporate illustration"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className={`px-6 py-3 text-lg font-medium bg-white text-blue-800 rounded-lg shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-200 transform ${
                loaded ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-6'
              }`}
            >
              Schedule Your Consultation
            </a>
            <a
              href="#"
              className={`px-6 py-3 text-lg font-medium border-2 border-white bg-transparent rounded-lg hover:bg-white hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-200 transform ${
                loaded ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'
              }`}
            >
              Request a Custom Proposal
            </a>
          </div>
        </div>
      </section>

      {/* Explore Our Featured Work Section */}
      <section className="bg-white py-16 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Explore Our Featured Work</h2>
          <div className="flex justify-center space-x-6 mb-12">
            <a className="text-gray-600 font-small hover:text-gray-900">ACADEMIC WRITING</a>
            <a className="text-gray-600 font-small hover:text-gray-900">SEO OPTIMIZATION</a>
            <a className="text-gray-600 font-small hover:text-gray-900">BRANDING</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 md:gap-x-0">
            {/* Project 1 */}
            <div className="relative group h-80">
              <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
                <img
                  src="/writing.jpg"
                  alt="Project 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <p className="text-white text-center">
                  Branding for Madison Architects, featuring a cohesive identity across digital and print media.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative group h-80">
              <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
                <img
                  src="/branding.jpg"
                  alt="Project 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <p className="text-white text-center">
                  Marketing campaign for Madison Architects, showcasing their innovative architectural solutions through impactful outdoor advertising.
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="relative group h-80">
              <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
                <img
                  src="/seo.jpg"
                  alt="Project 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <p className="text-white text-center">
                  Web design for Madison Architects, creating a user-friendly and visually appealing online presence.
                </p>
              </div>
            </div>
            {/* Project 4 */}
            <div className="relative group h-80">
              <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
                <img
                  src="/blog.jpg"
                  alt="Logo Design for Tech Startup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <p className="text-white text-center">
                  Custom logo design for a tech startup, creating a modern and innovative brand identity.
                </p>
              </div>
            </div>
            {/* Project 5 */}
            <div className="relative group h-80">
              <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
                <img
                  src="/port.jpg"
                  alt="Social Media Campaign for Fashion Brand"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <p className="text-white text-center">
                  Engaging social media campaign for a fashion brand, increasing brand awareness and customer engagement.
                </p>
              </div>
            </div>
            {/* Project 6 */}
            <div className="relative group h-80">
              <div className="w-full h-full overflow-hidden rounded-none shadow-none border border-gray-200">
                <img
                  src="/seo.jpg"
                  alt="Mobile App Design for Fitness Company"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <p className="text-white text-center">
                  User-friendly mobile app design for a fitness company, helping users track their workouts and progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-6 lg:px-60">
        <div className="max-w-19xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
          <p className="text-xl text-gray-700 mb-12">
            We are trusted by leading brands and professionals for our expertise in academic writing, SEO, and branding.
          </p>
          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center hover:bg-green-100 transition-colors">
              <ClockIcon className="w-13 h-13 text-blue-700 mb-2" />
              <h3 className="text-2xl font-bold text-blue-700">10+ Years</h3>
              <p className="text-gray-700">of experience in delivering excellence</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center hover:bg-green-100 transition-colors">
              <UserGroupIcon className="w-13 h-13 text-blue-700 mb-2" />
              <h3 className="text-2xl font-bold text-blue-700">700+ Clients</h3>
              <p className="text-gray-700">served across the globe</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col items-center hover:bg-green-100 transition-colors">
              <GlobeAltIcon className="w-13 h-13 text-blue-700 mb-2" />
              <h3 className="text-2xl font-bold text-blue-700">10 Countries</h3>
              <p className="text-gray-700">with satisfied clients</p>
            </div>
          </div>
          {/* Expert Team */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Meet Our Expert Team</h3>
            <p className="text-gray-700">
              Our team consists of highly qualified writers, SEO specialists, and branding experts dedicated to helping you achieve your goals. With a passion for excellence and a commitment to quality, we ensure every project meets the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">
                “CleanWriters transformed my academic career! The plagiarism-free papers were top-notch and got me straight A’s.”
              </p>
              <div className="flex items-center space-x-3">
                <img src="/1.jpg" alt="Jane Doe" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-gray-900 font-semibold">Jane Doe</p>
                  <p className="text-gray-600 text-sm">Graduate Student, USA</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">
                “SEO-driven articles from CleanWriters boosted our website traffic by 200% in just three months!”
              </p>
              <div className="flex items-center space-x-3">
                <img src="/2.jpg" alt="Michael Smith" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-gray-900 font-semibold">Michael Smith</p>
                  <p className="text-gray-600 text-sm">Marketing Manager, UK</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">
                “Their virtual brand strategy service took our online presence from zero to hero. Highly recommend!”
              </p>
              <div className="flex items-center space-x-3">
                <img src="/3.jpg" alt="Sara Lee" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-gray-900 font-semibold">Sara Lee</p>
                  <p className="text-gray-600 text-sm">Startup Founder, Kenya</p>
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
