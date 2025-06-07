/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  GlobeAltIcon,
  PencilIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  CameraIcon,
  ChartBarIcon,
  EnvelopeIcon,
  UserGroupIcon,
  BookOpenIcon,
  AcademicCapIcon,
  BuildingLibraryIcon as LibraryIcon,
  DocumentTextIcon,
  PencilSquareIcon as PencilAltIcon,
  CheckCircleIcon,
  StarIcon,
} from '@heroicons/react/20/solid';

const About = () => {
  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing, SEO Content & Academic Research
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We are a team of highly skilled digital marketers, SEO content experts, and academic research professionals dedicated to helping brands grow online while supporting academic excellence. At our core, we blend marketing innovation with intellectual depth to deliver data-driven strategies and content that converts.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/seo.jpg"
              alt="SEO & Marketing Illustration"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>
  {/* Mission */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-700 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Mission</h2>
            <p className="text-lg leading-relaxed text-white">
              To fuel brands, businesses, and students by providing clean, strategic, and result-oriented services in digital marketing, SEO content creation, brand development, and academic research support – all under one creative roof.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-700 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Vision</h2>
            <p className="text-lg leading-relaxed text-white">
              To become a global leader in delivering strategic digital solutions and academic writing support, helping businesses scale and students succeed while staying grounded in professionalism, quality, and ethical work practices.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-700 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-4 text-white">
              We are a diverse collective of copywriters, SEO strategists, graphic designers, researchers, academic writers, and virtual assistants with one thing in common – a relentless commitment to excellence.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-white">
              Our unique fusion of digital marketing and academic insight makes us the ideal partner for:
            </p>
            <ul className="list-none space-y-3 text-white">
              <li className="flex items-center">
                <GlobeAltIcon className="h-6 w-6 text-gray-600 mr-3 text-white" />
                Business owners seeking conversions, leads, and visibility
              </li>
              <li className="flex items-center">
                <GlobeAltIcon className="h-6 w-6 text-gray-600 mr-3 text-white" />
                Brands needing consistent content and digital presence
              </li>
              <li className="flex items-center">
                <AcademicCapIcon className="h-6 w-6 text-gray-600 mr-3 text-white" />
                Students and researchers seeking professionally structured papers
              </li>
            </ul>
          </div>
        </div>
      </section>

     {/* What We Do */}
<section className="py-16 px-6 md:px-20">
  <div className="max-w-5xl mx-auto">
    <div className="bg-blue-700 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
        What We Do
      </h2>

     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Digital Marketing & Brand Growth */}
        <div>
          <img
            src="/blog.jpg"
            alt="Blog & SEO"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
          />
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Digital Marketing & Brand Growth
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <GlobeAltIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Social Media Management & Page Setup</strong>
                <p className="text-gray-200 text-base">
                  Curate engaging social profiles and manage content calendars that drive interaction.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <PencilIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Content Creation & Optimization</strong>
                <p className="text-gray-200 text-base">
                  Produce high-quality copy and optimize it for search engines and conversions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ShoppingCartIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Copywriting & Sales Funnels</strong>
                <p className="text-gray-200 text-base">
                  Create compelling sales copy and funnels that guide prospects to purchase.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">SEO Website Content & Blog Writing</strong>
                <p className="text-gray-200 text-base">
                  Craft keyword-rich articles and blog posts that rank and engage readers.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CameraIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Graphic Design (Logos, Posts, Banners)</strong>
                <p className="text-gray-200 text-base">
                  Design eye-catching visuals to reinforce your brand identity.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ChartBarIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Market Research & Lead Generation</strong>
                <p className="text-gray-200 text-base">
                  Perform data-driven research to identify opportunities and generate leads.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <EnvelopeIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Email Marketing</strong>
                <p className="text-gray-200 text-base">
                  Develop email campaigns that nurture prospects and boost retention.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <UserGroupIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Virtual Assistance & Team Coordination</strong>
                <p className="text-gray-200 text-base">
                  Offer administrative support and seamless collaboration for your projects.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Academic Research & Writing Services */}
        <div>
          <img
            src="/cons.jpg"
            alt="Consulting & Research"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
          />
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Academic Research & Writing Services
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <BookOpenIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Essays, Reports, Case Studies</strong>
                <p className="text-gray-200 text-base">
                  Deliver well‑structured, plagiarism‑free papers tailored to your academic needs.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <AcademicCapIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Thesis & Dissertations</strong>
                <p className="text-gray-200 text-base">
                  Conduct in‑depth research, data analysis, and present polished dissertations that meet university standards.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <LibraryIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Literature Reviews</strong>
                <p className="text-gray-200 text-base">
                  Provide comprehensive literature surveys that inform your research direction.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <DocumentTextIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Research Proposals</strong>
                <p className="text-gray-200 text-base">
                  Craft compelling proposals that secure approvals and funding for your projects.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <PencilAltIcon className="h-6 w-6 text-gray-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-white text-lg">Editing & Proofreading</strong>
                <p className="text-gray-200 text-base">
                  Ensure clarity, proper formatting, and citation accuracy for all academic documents.
                </p>
              </div>
            </li>
          </ul>
          <p className="text-gray-200 text-lg mt-6">
            All customized, plagiarism-free, and backed by academic integrity.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Final Call-to-Action */}
      <section className="bg-black py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl font-semibold mb-4">Ready to Elevate Your Brand or Academic Journey?</h2>
          <p className="text-lg mb-6">
            Whether you need a high‑impact marketing campaign, SEO‑rich content, or academic excellence, our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
