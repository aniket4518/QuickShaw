export default function Footer(){
    return(
        <footer className="w-full bg-black text-white py-[2rem] sm:py-[3rem] lg:py-[4rem] px-[4%]">
            <div className="max-w-[1200px] mx-auto">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] lg:gap-[3rem]">
                    
                    {/* Logo Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-[2rem]">
                            <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-yellow-400 rounded-[0.5rem] flex items-center justify-center mr-[0.75rem]"> 
                                <span className="text-black font-bold text-[1.2rem] sm:text-[1.5rem]">Q</span>
                            </div>
                            <span className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-bold text-yellow-400">
                                uickShaw
                            </span>
                        </div>
                    </div> 
                    <div className="lg:col-span-1">
                        <div className="flex flex-col gap-[1rem]">
                            <a href="#" className="text-[1rem] sm:text-[1.1rem] text-white hover:text-yellow-400 transition-colors duration-300">
                                Home
                            </a>
                            <a href="#" className="text-[1rem] sm:text-[1.1rem] text-white hover:text-yellow-400 transition-colors duration-300">
                                About us
                            </a>
                        </div>
                    </div> 
                    <div className="lg:col-span-1">
                        <div className="flex flex-col gap-[1rem]">
                            <a href="#" className="text-[1rem] sm:text-[1.1rem] text-white hover:text-yellow-400 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-[1rem] sm:text-[1.1rem] text-white hover:text-yellow-400 transition-colors duration-300">
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
 
                    <div className="lg:col-span-1 flex flex-col items-start lg:items-end">
                        
                        {/* Social Icons Row */}
                        <div className="flex gap-[1rem] sm:gap-[1.5rem] mb-[2rem]">
                            {/* WhatsApp */}
                            <a href="#" className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-gray-800 rounded-[0.5rem] flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                                <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[url('/whatsappwhite.png')] bg-contain bg-center bg-no-repeat"></div>
                            </a>
                            
                            {/* Instagram */}
                            <a href="#" className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-gray-800 rounded-[0.5rem] flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                                <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[url('/instawhite.png')] bg-contain bg-center bg-no-repeat"></div>
                            </a>
                            
                            {/* LinkedIn */}
                            <a href="#" className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-gray-800 rounded-[0.5rem] flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                                <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[url('/linkedinwhite.png')] bg-contain bg-center bg-no-repeat"></div>
                            </a>
                        </div> 
                        <div className="flex flex-col gap-[0.75rem]">
                            {/* Google Play Store */}
                            <a href="#" className="hover:opacity-80 transition-opacity duration-300">
                                <img 
                                    src="/googleplay.png" 
                                    alt="Get it on Google Play" 
                                    className="h-[40px] sm:h-[48px] w-auto object-contain"
                                />
                            </a>
                            
                            {/* App Store */}
                            <a href="#" className="hover:opacity-80 transition-opacity duration-300">
                                <img 
                                    src="/appstore.png" 
                                    alt="Download on the App Store" 
                                    className="h-[40px] sm:h-[48px] w-auto object-contain"
                                />
                            </a>
                        </div>
                    </div>
                </div> 
                <div className="mt-[2rem] sm:mt-[3rem] pt-[1rem] sm:pt-[1.5rem] border-t border-gray-700">
                    <p className="text-center text-[0.8rem] sm:text-[0.9rem] text-gray-400">
                        © 2024 QuickShaw. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}