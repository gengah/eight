/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-white-700 to-teal-500 text-black px-6 py-20 lg:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
          Where Academic Brilliance Meets Strategic Content & Digital Authority.
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl">
          Helping students, professionals & brands achieve excellence through plagiarism-free academic writing, SEO-driven content, & virtual brand strategy.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-300 hover:bg-yellow-400 text-green-800 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-200">
            Book a Free Strategy Call
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-200">
            Get a Custom Writing Quote
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-blue-700 py-16 px-6 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-5xl font-bold uppercase text-white mb-6 text-center">About</h2>
            <p className="text-white text-lg leading-relaxed">
              CleanWriters Arena was born from a singular belief that every{" "}
              <span className="font-bold">story, every thesis, and every brand voice deserves to resonate with authenticity, precision, and passion</span>. We create unique, memorable identities that resonate with your audience and set your brand apart.
            </p>
            <p className="text-white text-lg leading-relaxed mt-4">
              Our mission is to transform your vision into reality with innovative, impactful solutions. From logos to websites and marketing design, we strategically position your brand for success, ensuring a cohesive and memorable identity that resonates with your audience.
            </p>
            <button className="mt-8 bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
              Visit Us
            </button>
          </div>
          {/* Right Column: Video Embed */}
          <div>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg border-2 border-black"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="INTRODUCING AD STUDIO PART 01"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline mt-2 inline-block"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Explore Our Featured Work Section */}
      <section className="bg-white py-16 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Explore Our Featured Work</h2>
          <div className="flex justify-center space-x-6 mb-12">
            <a className="text-gray-600 font-semibold hover:text-gray-900">
              ALL PROJECTS
            </a>
            <a className="text-gray-600 font-semibold hover:text-gray-900">
              BRAND DESIGN
            </a>
            <a className="text-gray-600 font-semibold hover:text-gray-900">
              MARKETING DESIGN
            </a>
            <a className="text-gray-600 font-semibold hover:text-gray-900">
              WEB DESIGN
            </a>
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

      {/* Trust Builders Section */}
      <section className="bg-white py-16 px-6 lg:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-semibold text-gray-800">
            Trusted by <span className="text-green-600">700+</span> Clients in <span className="text-green-600">10</span> Countries
          </p>
          {/* Testimonials Carousel */}
          <div className="mt-8 relative">
            <div className="overflow-x-auto no-scrollbar flex space-x-6 py-4">
              {/* Testimonial 1 */}
              <div className="min-w-[300px] bg-gray-100 rounded-xl p-6 shadow">
                <p className="text-gray-700 italic mb-4">
                  “CleanWriters transformed my academic career! The plagiarism-free papers were top-notch and got me straight A’s.”
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold">JD</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Jane Doe</p>
                    <p className="text-gray-600 text-sm">Graduate Student, USA</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="min-w-[300px] bg-gray-100 rounded-xl p-6 shadow">
                <p className="text-gray-700 italic mb-4">
                  “SEO-driven articles from CleanWriters boosted our website traffic by 200% in just three months!”
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold">MS</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Michael Smith</p>
                    <p className="text-gray-600 text-sm">Marketing Manager, UK</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="min-w-[300px] bg-gray-100 rounded-xl p-6 shadow">
                <p className="text-gray-700 italic mb-4">
                  “Their virtual brand strategy service took our online presence from zero to hero. Highly recommend!”
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold">SL</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Sara Lee</p>
                    <p className="text-gray-600 text-sm">Startup Founder, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Indicators */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-[#2E5BFF] rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </main>
  );
}