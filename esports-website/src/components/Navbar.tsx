'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
      
      {/* Main navbar */}
      <div className="bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left side - Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-2xl tracking-wider">ESPORTS</h1>
                <p className="text-purple-400 text-xs font-medium tracking-widest">ELITE</p>
              </div>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                  HOME
                </Link>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
              
              <div className="relative group">
                <Link href="/tournaments" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                  TOURNAMENTS
                </Link>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
              
              <div className="relative group">
                <Link href="/teams" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                  TEAMS
                </Link>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
              
              <div className="relative group">
                <Link href="/news" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
                  NEWS
                </Link>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>

            {/* Right side - CTA and Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">
                  SIGN IN
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  SIGN UP
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                    <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/95">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                HOME
              </Link>
              <Link href="/tournaments" className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                TOURNAMENTS
              </Link>
              <Link href="/teams" className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                TEAMS
              </Link>
              <Link href="/news" className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                NEWS
              </Link>
              <div className="pt-4 border-t border-white/10 space-y-3">
                <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  SIGN IN
                </button>
                <button className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-full font-medium">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
