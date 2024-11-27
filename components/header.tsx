"use client";

import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="h-12 py-3 px-11 flex items-center justify-between">
        <h1 className="text-xs hidden md:block">
          <span>Phone Number: 956 742 455 678</span>
        </h1>
        <span className="hidden md:block text-slate-600 text-4xl pb-2 relative -left-52 mx-2">|</span>
        <h1 className="text-xs relative -left-[395px]  hidden md:block">
          <span>Email: info@ddsgnr.com</span>
        </h1>
        <div className="flex space-x-5 text-2xl hidden md:flex">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </div>
      </div>
      <div className="bg-slate-200 h-16 py-3 px-11 flex items-center justify-between">
        {/* Logo */}
        <img src="/Ddsgnr Library.png" alt="Ddsgnr Library Logo" />
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div className="hidden md:flex h-6 space-x-10">
          <a href="/Home" className="underline">
            Home
          </a>
          <a href="/Courses">Courses</a>
          <a href="/Services">Services</a>
          <a href="/Achievements">Achievements</a>
          <a href="/AboutUs">About Us</a>
          <a href="/Testinomial">Testimonial</a>
        </div>

        <div className="hidden md:flex space-x-5">
          <button className="rounded group relative bg-transparent px-6 py-2 border-2 border-black text-lg text-black hover:bg-slate-300">
            Login
          </button>
          <button className="rounded group relative bg-black px-6 py-2 border-2 border-black text-lg text-white">
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-200 px-11 py-4 space-y-4">
          <h1 className="text-xs">
            <span>Phone Number: 956 742 455 678</span>
          </h1>
          <h1 className="text-xs">
            <span>Email: info@ddsgnr.com</span>
          </h1>
          <div className="flex space-x-5 text-2xl">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterCircle />
            <AiFillLinkedin />
          </div>
          <div className="flex flex-col space-y-4">
            <a href="/Home" className="underline">
              Home
            </a>
            <a href="/Courses">Courses</a>
            <a href="/Services">Services</a>
            <a href="/Achievements">Achievements</a>
            <a href="/AboutUs">About Us</a>
            <a href="/Testinomial">Testimonial</a>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="rounded bg-transparent px-6 py-2 border-2 border-black text-lg text-black hover:bg-slate-300">
              Login
            </button>
            <button className="rounded bg-black px-6 py-2 border-2 border-black text-lg text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
