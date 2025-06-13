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
    <div className="bg-white text-black font-sans pt-24
    ">
     {/* Hero Section */}
<section className="bg-gray-100 py-20 px-6 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
    {/* Text Content */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-3xl md:text-3xl font-bold mb-6">
        Building Brands. Engineering Digital Experiences.
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        We craft intelligent, high-impact digital products  from dynamic websites to powerful mobile apps. Our approach blends deep technical expertise with clear brand strategy to create digital ecosystems that work for the present and scale for the future. If you're serious about growth, we're serious about building it with you  ethically, intelligently, and without the fluff.
      </p>
    </div>

    {/* Hero Image */}
    <div className="w-full lg:w-1/2">
      <img
        src="/7.jpg"
        alt="Web & App Development Illustration"
        className="shadow-lg w-full object-cover"
      />
    </div>
  </div>
</section>

 {/* Mission */}
<section className="bg-gray-50 py-16 px-6 md:px-20">
  <div className="max-w-5xl mx-auto">
    <div className="bg-green-700 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
        Our Mission
      </h2>
      <p className="text-lg leading-relaxed text-white">
        To empower innovators, entrepreneurs, and scholars with holistic digital solutions—from bespoke web and mobile apps to cohesive brand experiences—backed by AI‑driven insights and rigorous research. We’re committed to delivering clarity, creativity, and measurable impact in every project, ethically and without compromise.
      </p>
    </div>
  </div>
</section>

{/* Vision */}
<section className="py-16 px-6 md:px-20">
  <div className="max-w-5xl mx-auto">
    <div className="bg-green-700 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
        Our Vision
      </h2>
      <p className="text-lg leading-relaxed text-white">
        To set a new standard for digital excellence—becoming the trusted partner for businesses and academics worldwide by merging strategic branding, cutting‑edge development, and uncompromising research integrity. We envision a connected future where every idea finds its perfect digital home.
      </p>
    </div>
  </div>
</section>

{/* Who We Are */}
<section className="py-16 px-6 md:px-20 ">
  <div className="max-w-6xl mx-auto">
    <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl bg-green-700  space-y-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center sm:text-left tracking-tight animate-fade-in-down">
        Who We Are
      </h2>

      <div className="space-y-6">
        <p className="text-lg sm:text-xl leading-relaxed text-gray-100">
          We are a multidisciplinary team of developers, designers, strategists, and researchers united by one goal: building digital solutions that resonate, perform, and evolve. From pixel-perfect interfaces to data-driven academic insights, we bring depth, discipline, and creativity to every collaboration.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-100">
          Our combined expertise makes us the go-to partner for:
        </p>
      </div>

      <ul className="list-none space-y-6">
        <li className="flex items-start group animate-fade-in-up delay-100">
          <GlobeAltIcon className="h-8 w-8 mr-4 mt-1 text-blue-300 group-hover:text-white transition-colors duration-200 flex-shrink-0" />
          <div>
            <strong className="text-lg sm:text-xl text-white">Startups & Scale-ups</strong>
            <p className="text-gray-200 text-base sm:text-lg">Hungry for a robust web or mobile platform that can grow with them.</p>
          </div>
        </li>
        <li className="flex items-start group animate-fade-in-up delay-200">
          <ShoppingCartIcon className="h-8 w-8 mr-4 mt-1 text-blue-300 group-hover:text-white transition-colors duration-200 flex-shrink-0" />
          <div>
            <strong className="text-lg sm:text-xl text-white">E-Commerce Brands</strong>
            <p className="text-gray-200 text-base sm:text-lg">Needing seamless integrations, secure transactions, and standout UX.</p>
          </div>
        </li>
        <li className="flex items-start group animate-fade-in-up delay-300">
          <AcademicCapIcon className="h-8 w-8 mr-4 mt-1 text-blue-300 group-hover:text-white transition-colors duration-200 flex-shrink-0" />
          <div>
            <strong className="text-lg sm:text-xl text-white">Researchers & Academics</strong>
            <p className="text-gray-200 text-base sm:text-lg">Who demand rigorous papers and data analysis that drive meaningful conclusions.</p>
          </div>
        </li>
        <li className="flex items-start group animate-fade-in-up delay-400">
          <ChartBarIcon className="h-8 w-8 mr-4 mt-1 text-blue-300 group-hover:text-white transition-colors duration-200 flex-shrink-0" />
          <div>
            <strong className="text-lg sm:text-xl text-white">Enterprises & NGOs</strong>
            <p className="text-gray-200 text-base sm:text-lg">Seeking AI-powered analytics, scalable apps, and strategic branding to amplify impact.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>


{/* What We Do */}
<section className="py-16 px-6 md:px-20">
  <div className="max-w-5xl mx-auto">
    <div className="bg-green-700 p-8 rounded-lg shadow-md space-y-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">
        What We Do
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Web & Mobile App Development */}
        <div className="space-y-6">
          <img
            src="/11.jpg"
            alt="Web & Mobile Development"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Web & Mobile App Development
          </h3>
          <ul className="list-disc list-inside space-y-4 text-gray-200">
            <li>
              <strong>Custom React & Next.js Sites</strong><br />
              Blazing‑fast, SEO‑friendly websites built to scale.
            </li>
            <li>
              <strong>Cross‑Platform Mobile Apps</strong><br />
              React Native solutions that feel truly native on iOS and Android.
            </li>
            <li>
              <strong>API & Backend Engineering</strong><br />
              Secure REST/GraphQL APIs, real‑time data, and serverless architecture.
            </li>
            <li>
              <strong>Performance & Security</strong><br />
              Optimized loading, CI/CD pipelines, and enterprise‑grade security audits.
            </li>
          </ul>
        </div>

        {/* Branding & Digital Strategy */}
        <div className="space-y-6">
          <img
            src="/8.jpg"
            alt="Branding & Strategy"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Branding & Digital Strategy
          </h3>
          <ul className="list-disc list-inside space-y-4 text-gray-200">
            <li>
              <strong>Visual Identity & Logo Design</strong><br />
              Cohesive brand systems that tell your unique story.
            </li>
            <li>
              <strong>UX/UI & Prototype Design</strong><br />
              Intuitive interfaces backed by user research and testing.
            </li>
            <li>
              <strong>AI‑Powered Market Insights</strong><br />
              Data‑driven analysis, trend forecasting, and competitor mapping.
            </li>
            <li>
              <strong>e‑Commerce & Conversion Optimization</strong><br />
              High‑impact funnels, payment integrations, and A/B testing.
            </li>
            <li>
              <strong>SEO & Content Strategy</strong><br />
              Keyword research, on‑page SEO, and editorial planning that drives growth.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
