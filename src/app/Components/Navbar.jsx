"use client"
import Link from "next/link";

 

export default function Navbar(){
return (
    <div className="w-full h-[9.1875rem] bg-black flex items-center justify-between px-[2%] lg:px-[4%]">
        <div className="w-[18.4875rem] h-[3.25rem] bg-[url('/logo.png')] bg-no-repeat bg-contain bg-center flex-shrink-0"> 
        
        </div>
           <div className="hidden lg:flex items-center gap-[0.625rem] flex-shrink-0">
            <Link href="/">
            <span className="text-white hover:text-yellow-600 transition-colors cursor-pointer p-[0.625rem] font-normal text-[2.25rem] tracking-[0.05em] leading-[100%] whitespace-nowrap">Home</span>
            </Link>
            
            <Link href="/offering">
            <span className="text-white hover:text-yellow-600 transition-colors cursor-pointer p-[0.625rem] font-normal text-[2.25rem] tracking-[0.05em] leading-[100%] whitespace-nowrap">Offering</span>
            </Link>
            <Link href="/social">
            <span className="text-white hover:text-yellow-600 transition-colors cursor-pointer p-[0.625rem] font-normal text-[2.25rem] tracking-[0.05em] leading-[100%] whitespace-nowrap">Social</span>
            </Link>
            <Link href="/report">
            <span className="text-white hover:text-yellow-600 transition-colors cursor-pointer p-[0.625rem] font-normal text-[2.25rem] tracking-[0.05em] leading-[100%] whitespace-nowrap">Report a problem</span>
            </Link>

            
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button className="text-white p-[0.5rem]">
                    <svg className="w-[1.5rem] h-[1.5rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
    </div>
)
}