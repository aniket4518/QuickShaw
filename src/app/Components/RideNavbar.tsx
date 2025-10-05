"use client"
import Link from "next/link";

export default function RideNavbar(){
    return (
        <div className="w-full bg-white shadow-sm border-b border-gray-200">
            {/* Main Navbar */}
            <div className="w-full h-[4rem] sm:h-[5rem] lg:h-[6rem] flex items-center justify-between px-[4%] lg:px-[6%]">
                {/* Logo */}
                <Link href="/">
                    <div className="w-[8rem] h-[2rem] sm:w-[12rem] sm:h-[2.5rem] lg:w-[16rem] lg:h-[3rem] bg-[url('/logo.png')] bg-no-repeat bg-contain bg-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"> 
                    </div>
                </Link>
                
                {/* Navigation Items */}
                <div className="flex items-center gap-[1rem] lg:gap-[2rem] flex-shrink-0">
                    <Link href="/">
                        <span className="text-black hover:text-yellow-600 transition-colors cursor-pointer font-medium text-[0.9rem] sm:text-[1rem] lg:text-[1.25rem] whitespace-nowrap">
                            Home
                        </span>
                    </Link>
                    
                    <Link href="/profile">
                        <span className="text-black hover:text-yellow-600 transition-colors cursor-pointer font-medium text-[0.9rem] sm:text-[1rem] lg:text-[1.25rem] whitespace-nowrap">
                            Profile
                        </span>
                    </Link>
                    
                    <Link href="/report">
                        <span className="text-black hover:text-yellow-600 transition-colors cursor-pointer font-medium text-[0.9rem] sm:text-[1rem] lg:text-[1.25rem] whitespace-nowrap">
                            Activity
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
