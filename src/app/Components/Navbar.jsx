"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="w-full bg-black relative">
            {/* Main Navbar */}
            <div className="w-full h-[6rem] sm:h-[7rem] lg:h-[9.1875rem] flex items-center justify-between px-[4%] lg:px-[4%]">
                {/* Logo */}
                <div className="w-[8rem] h-[2rem] sm:w-[12rem] sm:h-[2.5rem] lg:w-[18.4875rem] lg:h-[3.25rem] bg-[url('/logo.png')] bg-no-repeat bg-contain bg-center flex-shrink-0"> 
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-[0.625rem] flex-shrink-0">
                    <Link href="/">
                        <span className="text-white hover:text-yellow-600 transition-colors cursor-pointer p-[0.625rem] font-normal text-[1.5rem] xl:text-[2.25rem] tracking-[0.05em] leading-[100%] whitespace-nowrap">Home</span>
                    </Link>
                    
                    <Link href="/offering">
                        <span className="text-white hover:text-yellow-600 transition-colors cursor-pointer p-[0.625rem] font-normal text-[1.5rem] xl:text-[2.25rem] tracking-[0.05em] leading-[100%] whitespace-nowrap">Offering</span>
                    </Link>
                    
                    <Link href="/social">
                        <span className="text-white hover:text-yellow-600 transition-colors cursor-pointer p-[0.625rem] font-normal text-[1.5rem] xl:text-[2.25rem] tracking-[0.05em] leading-[100%] whitespace-nowrap">Social</span>
                    </Link>
                    
                    <Link href="/report">
                        <span className="text-white hover:text-yellow-600 transition-colors cursor-pointer p-[0.625rem] font-normal text-[1.2rem] xl:text-[2.25rem] tracking-[0.05em] leading-[100%] whitespace-nowrap">Report a problem</span>
                    </Link>
                </div>
                
                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-[0.5rem] hover:text-yellow-600 transition-colors"
                    >
                        <svg className="w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-gray-700 z-50">
                    <div className="flex flex-col py-[1rem]">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                            <span className="text-white hover:text-yellow-600 hover:bg-gray-800 transition-colors cursor-pointer px-[4%] py-[1rem] font-normal text-[1.25rem] block">Home</span>
                        </Link>
                        
                        <Link href="/offering" onClick={() => setMobileMenuOpen(false)}>
                            <span className="text-white hover:text-yellow-600 hover:bg-gray-800 transition-colors cursor-pointer px-[4%] py-[1rem] font-normal text-[1.25rem] block">Offering</span>
                        </Link>
                        
                        <Link href="/social" onClick={() => setMobileMenuOpen(false)}>
                            <span className="text-white hover:text-yellow-600 hover:bg-gray-800 transition-colors cursor-pointer px-[4%] py-[1rem] font-normal text-[1.25rem] block">Social</span>
                        </Link>
                        
                        <Link href="/report" onClick={() => setMobileMenuOpen(false)}>
                            <span className="text-white hover:text-yellow-600 hover:bg-gray-800 transition-colors cursor-pointer px-[4%] py-[1rem] font-normal text-[1.25rem] block">Report a problem</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}