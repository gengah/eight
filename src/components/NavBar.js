import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Brand & Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Brand Title */}
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            CleanWriters
          </NavLink>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden ml-4 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg
                className="h-8 w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav & Social Icons */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Us!
          </NavLink>
        </nav>

        <div className="hidden md:inline-flex md:items-center md:space-x-4">
          <SocialIcon
            url="https://twitter.com/"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com/"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/post"
              className="block py-2 px-2 rounded text-red-200 hover:text-green-800"
              activeClassName="text-red-100 bg-red-700"
              onClick={() => setMenuOpen(false)}
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              className="block py-2 px-2 rounded text-red-200 hover:text-green-800"
              activeClassName="text-red-100 bg-red-700"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="block py-2 px-2 rounded text-red-200 hover:text-green-800"
              activeClassName="text-red-100 bg-red-700"
              onClick={() => setMenuOpen(false)}
            >
              About Us!
            </NavLink>
          </nav>
          <div className="mt-4 flex space-x-4">
            <SocialIcon
              url="https://twitter.com/"
              target="_blank"
              fgColor="#fff"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://youtube.com/"
              target="_blank"
              fgColor="#fff"
              style={{ height: 30, width: 30 }}
            />
            <SocialIcon
              url="https://linkedin.com/"
              target="_blank"
              fgColor="#fff"
              style={{ height: 30, width: 30 }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
