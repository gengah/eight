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
            className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight transition-transform transition-opacity duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Where Academic Brilliance Meets Strategic Content & Digital Authority.
          </h1>
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
          <p
            className={`mt-6 text-lg sm:text-xl max-w-2xl transition-transform transition-opacity duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Helping students, professionals & brands achieve excellence through plagiarism-free academic writing, SEO-driven content, & virtual brand strategy.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className={`px-6 py-3 text-lg font-medium bg-blue-500 text-white rounded-lg shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform ${
                loaded ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-6'
              }`}
            >
              Schedule Your Consultation
            </a>
            <a
              href="#"
              className={`px-6 py-3 text-lg font-medium border-2 border-blue-500 bg-transparent text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform ${
                loaded ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-6'
              }`}
            >
              Request a Custom Proposal
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-blue-700 text-white py-16 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 text-left mb-8 lg:mb-0">
              <p className="text-lg">
We are a team of seasoned online strategists, search optimization specialists, and scholarly researchers devoted to empowering businesses to thrive digitally while fostering academic achievement. Fundamentally, we fuse creative marketing with thoughtful expertise to offer analytics-informed approaches and material that drives results.

              </p>
              <p className="text-lg mt-4">
Our Mission is To fuel brands, businesses, and students by providing clean, strategic, and result-oriented services in digital marketing, SEO content creation, brand development, and academic research support – all under one creative roof.              </p>
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
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Introducing AD Studio Par"
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
      <section className="bg-blue-100 text-blue-900 py-16 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Explore Our Featured Work</h2>
          <div className="flex justify-center space-x-6 mb-12">
            <a className="font-small hover:text-blue-700">ACADEMIC WRITING</a>
            <a className="font-small hover:text-blue-700">SEO OPTIMIZATION</a>
            <a className="font-small hover:text-blue-700">BRANDING</a>
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
                  Engaging social media campaign for a fashion brand, obtaining brand awareness and customer engagement.
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
      <section className="bg-blue-100 text-blue-900 py-16 px-6 lg:px-60">
        <div className="max-w-19xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
          <p className="text-xl mb-12">
            We are trusted by leading brands and professionals for our expertise in academic writing, SEO, and branding.
          </p>
          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center hover:bg-blue-50 transition-colors">
              <ClockIcon className="w-13 h-13 text-blue-700 mb-2" />
              <h3 className="text-2xl font-bold text-blue-700">10+ Years</h3>
              <p>of experience in delivering excellence</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center hover:bg-blue-50 transition-colors">
              <UserGroupIcon className="w-13 h-13 text-blue-700 mb-2" />
              <h3 className="text-2xl font-bold text-blue-700">700+ Clients</h3>
              <p>served across the globe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center hover:bg-blue-50 transition-colors">
              <GlobeAltIcon className="w-13 h-13 text-blue-700 mb-2" />
              <h3 className="text-2xl font-bold text-blue-700">10 Countries</h3>
              <p>with satisfied clients</p>
            </div>
          </div>
          {/* Expert Team */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">Meet Our Expert Team</h3>
            <p>
              Our team consists of highly qualified writers, SEO specialists, and branding experts dedicated to helping you achieve your goals. With a passion for excellence and a commitment to quality, we ensure every project meets the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="bg-blue-100 text-blue-900 py-16 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">
                “CleanWriters transformed my academic career! The plagiarism-free papers were top-notch and got me straight A’s.”
              </p>
              <div className="flex items-center space-x-3">
                <img src="/1.jpg" alt="Jane Doe" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Jane Doe</p>
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
                <img src="/2.jpg" alt="Michael Smith" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Michael Smith</p>
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
                <img src="/3.jpg" alt="Sara Lee" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Sara Lee</p>
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