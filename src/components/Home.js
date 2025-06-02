import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-700 to-teal-500 text-white px-6 py-20 lg:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
          Where Academic Brilliance Meets Strategic Content &amp; Digital Authority.
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl">
          Helping students, professionals &amp; brands achieve excellence through plagiarism-free academic writing, SEO-driven content, &amp; virtual brand strategy.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-300 hover:bg-yellow-400 text-green-800 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-200">
            Book a Free Strategy Call
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-200">
            Get a Custom Writing Quote
          </button>
          <button className="bg-white hover:bg-gray-100 text-green-700 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-200">
            Download Our Content Blueprint
          </button>
        </div>
      </section>

      {/* Visuals Section (Text-Based) */}
      <section className="py-16 px-6 lg:px-32">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Animated Explainer Placeholder */}
          <div className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            {/* Replace with actual <video> or embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 italic">
                90-sec Animated Explainer Placeholder
              </span>
            </div>
          </div>

          {/* Text-Based “Screenshots” Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-start">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                LinkedIn Growth Insights
              </h3>
              <p className="text-gray-600">
                Step-by-step strategies that elevated our clients’ LinkedIn following by 150%.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-start">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                SEO Rankings Performance
              </h3>
              <p className="text-gray-600">
                Detailed keyword analysis and on-page optimizations leading to top-3 Google rankings.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-start">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Writing Dashboard Overview
              </h3>
              <p className="text-gray-600">
                Our intuitive dashboard tracks each project’s progress, deadlines, and quality metrics.
              </p>
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
    </main>
  );
}
