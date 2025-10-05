"use client"
import { useState } from 'react'
import Footer from '../../Components/Footer'
import Buttons from '../../Components/ui/Button'
import ComplaintForm from '../../Components/ComplaintForm'

export default function Report(){
    const [showComplaintForm, setShowComplaintForm] = useState(false)

    const handleRaiseComplaint = () => {
        setShowComplaintForm(true)
    }

    const handleCloseComplaint = () => {
        setShowComplaintForm(false)
    }

    return(
        <div className="w-full bg-white overflow-x-hidden">
            {showComplaintForm ? (
                <ComplaintForm onClose={handleCloseComplaint} />
            ) : (
                <>
                    {/* Hero Section with Background Image */}
                    <div className="relative w-full min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-[4%] py-8 sm:py-12 md:py-16 lg:py-[2rem]">
                        <div className="text-center mx-auto max-w-7xl w-full">
                            {/* Main Heading */}
                            <h1 className="font-Archivo font-black text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[3rem] xl:mb-[5rem] text-[rgba(59,33,10,1)]
                                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[7.5rem]
                                         leading-tight sm:leading-tight md:leading-tight
                                         px-4">
                                A safe mobility<br/>
                                platform is here
                            </h1>

                            {/* Raise Complaint Button */}
                            <div className="flex justify-center px-4">
                                <Buttons
                                    onClick={handleRaiseComplaint}
                                    width="100%"
                                    height="auto"
                                    fontSize="clamp(1rem, 2.5vw, 2.469rem)"
                                    className="shadow-md hover:shadow-lg rounded-xl max-w-[40rem] w-full py-4 sm:py-5 md:py-6 lg:py-7 transition-all duration-300"
                                >
                                    Raise a complaint
                                </Buttons>
                            </div>
                        </div>

                       
                        
                        
                    </div>

            {/* Safety Priority Section */}
            <div className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[6rem] px-4 sm:px-6 md:px-8 lg:px-[4%] mb-12 sm:mb-16 md:mb-20 lg:mb-[5rem] overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    {/* Main Title */}
                    <h2 className="font-Brawler font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7.5rem] 
                                 text-[#FFB800] mb-8 sm:mb-10 md:mb-12 lg:mb-[3rem]
                                 leading-tight tracking-wide pt-8 sm:pt-10 md:pt-12 lg:pt-[3rem] px-4">
                        YOUR SAFETY IS<br/>
                        OUR PRIORITY
                    </h2>

                    {/* Description Text */}
                    <p className="font-Archivo text-base sm:text-lg md:text-xl lg:text-[1.375rem]
                                text-black leading-relaxed mb-12 sm:mb-16 md:mb-20 lg:mb-[5rem]
                                max-w-[800px] mx-auto px-4">
                        One-tap alert to trusted contacts & QuickShaw team, verified drivers for every ride, live trip tracking from start to finish, instant support, always on standby.
                    </p>

                    {/* Ensuring Safety Section */}
                    <div className="max-w-[600px] mx-auto px-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between cursor-pointer gap-4">
                            <h3 className="font-Archivo font-bold text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem]
                                         text-[#8B4513] flex-1 text-center sm:text-left">
                                Ensuring Safety, <span className="text-gray-600 font-normal text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] block sm:inline mt-2 sm:mt-0">HOW IT WORKS</span>
                            </h3>
                        </div>
                    </div>
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-[34px] md:h-[34px] text-gray-600 transform transition-transform duration-300 mx-auto mt-8 md:mt-[2rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                
                
                {/* Glowing Ellipse Gradient - Layered on top */}
                
            </div>

            {/* Tap Safe Now Section */}
            <div className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[6rem] px-4 sm:px-6 md:px-8 lg:px-[6.2%] mb-12 sm:mb-16 md:mb-20 lg:mb-[5rem] overflow-hidden">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                        
                        {/* Left Content */}
                        <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 order-2 lg:order-1">
                            {/* Main Heading */}
                            <h2 className="font-Archivo font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] 
                                         text-black leading-tight pl-0 sm:pl-4 lg:pl-[1rem] text-center lg:text-left">
                                Tap safe now
                            </h2>

                            {/* Yellow Info Box */}
                            <div className="bg-[#FFD66F] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-[2.5rem] relative mx-auto lg:ml-[2rem] w-full max-w-[452px] min-h-[200px] sm:min-h-[220px] md:min-h-[248px]">
                                <p className="font-Archivo text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.25rem] 
                                           text-black leading-relaxed font-medium">
                                    Your ride comes with more than just wheels, it comes with trust in verified drivers, care built into every detail, & a constant watch over your journey to ensure your safety.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Phone Mockup */}
                        <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
                            {/* Phone Image */}
                            <div className="relative z-20">
                                <img 
                                    src="/phone.png" 
                                    alt="QuickShaw App Interface" 
                                    className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[380px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
  
                {/* Decorative Cross - Hidden on mobile */}
                <div className="absolute top-4 left-4 sm:left-6 md:left-9 hidden md:block">
                    <img 
                        src="/cross.png" 
                        alt="Decorative curves" 
                        className="w-24 sm:w-32 md:w-40 lg:w-auto h-auto object-cover opacity-80"
                    />
                </div>

                {/* Original Ellipse Background */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
                    <img 
                        src="/Ellipse 144@2x.png" 
                        alt="" 
                        className="w-full h-auto object-cover opacity-30"
                    />
                </div>
                
                {/* Glowing Ellipse Gradient - Layered on top */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 pointer-events-none z-[1]">
                    <img 
                        src="/elipsegraident.png" 
                        alt="" 
                        className="w-full h-full object-contain object-bottom opacity-80"
                    />
                </div>
            </div>

            {/* Share Your Ride Section */}
            <div className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[10rem] px-4 sm:px-6 md:px-8 lg:px-[4%] mb-12 sm:mb-16 md:mb-20 lg:mb-[5rem] overflow-hidden">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                        
                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 order-2 lg:order-1">
                            {/* Main Heading */}
                            <h2 className="font-Archivo font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] 
                                         text-black leading-tight text-center lg:text-left">
                                share<br/>
                                your ride
                            </h2>

                            {/* Yellow Info Box */}
                            <div className="bg-[#FFD66F] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-[2.5rem] relative w-full max-w-[452px] mx-auto lg:mx-0">
                                <p className="font-Archivo text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.25rem] 
                                           text-black leading-relaxed font-medium">
                                    Before your ride begins, your peace of mind is set, share your trip instantly, let loved ones track your journey, and drive together knowing safety always has an eye out for you.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Group Image */}
                        <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
                            {/* Group Image with Yellow Platform */}
                            <div className="relative z-20">
                                <img 
                                    src="/Group 652.png" 
                                    alt="Share your ride - Group of people" 
                                    className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[440px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cross Lines Top Left - Hidden on mobile */}
                <div className="absolute top-0 left-0 pointer-events-none hidden md:block">
                    <img 
                        src="/cross.png" 
                        alt="Decorative curves top left" 
                        className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-[300px] h-auto object-cover opacity-60"
                    />
                </div>

                {/* Original Ellipse Background */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
                    <img 
                        src="/Ellipse 144@2x.png" 
                        alt="" 
                        className="w-full h-auto object-cover opacity-30"
                    />
                </div>
                
                {/* Glowing Ellipse Gradient - Layered on top */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 pointer-events-none z-[1]">
                    <img 
                        src="/elipsegraident.png" 
                        alt="" 
                        className="w-full h-full object-contain object-bottom opacity-80"
                    />
                </div>
            </div>

            {/* Trusted Drivers Section */}
            <div className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[10rem] px-4 sm:px-6 md:px-8 lg:px-[4%] mb-12 sm:mb-16 md:mb-20 lg:mb-[5rem] overflow-hidden">
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                        
                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 order-2 lg:order-1">
                            {/* Main Heading */}
                            <h2 className="font-Archivo font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] 
                                         text-black leading-tight text-center lg:text-left">
                                trusted<br/>
                                drivers
                            </h2>

                            {/* Yellow Info Box */}
                            <div className="bg-[#FFD66F] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-[2.5rem] relative w-full max-w-[452px] mx-auto lg:mx-0">
                                <p className="font-Archivo text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.25rem] 
                                           text-black leading-relaxed font-medium">
                                    Before your ride arrives, your safety is already taken care of, with verified profiles, live monitoring, & safeguards built to help every journey worry-free.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Group Image */}
                        <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
                            {/* Group Image with Yellow Platform */}
                            <div className="relative z-20">
                                <img 
                                    src="/Group 652 (1).png" 
                                    alt="Trusted drivers - Group of people" 
                                    className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[440px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cross Lines Bottom Right - Hidden on mobile */}
                <div className="absolute bottom-0 right-0 pointer-events-none hidden md:block">
                    <img 
                        src="/cross2.png" 
                        alt="Decorative curves bottom right" 
                        className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-[300px] h-auto object-cover opacity-60"
                    />
                </div>

                {/* Original Ellipse Background */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
                    <img 
                        src="/Ellipse 144@2x.png" 
                        alt="" 
                        className="w-full h-auto object-cover opacity-30"
                    />
                </div>
                
                {/* Glowing Ellipse Gradient - Layered on top */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 pointer-events-none z-[1]">
                    <img 
                        src="/elipsegraident.png" 
                        alt="" 
                        className="w-full h-full object-contain object-bottom opacity-80"
                    />
                </div>
            </div>

            {/* Security Message Section */}
            <div className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[8rem] px-4 sm:px-6 md:px-8 lg:px-[4%] overflow-hidden">
                <div className="max-w-[800px] mx-auto text-center relative z-10">
                    {/* Main Security Message */}
                    <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-[6rem]">
                        <p className="font-Archivo text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2rem] 
                                   text-black leading-relaxed px-4">
                            feeling <span className="font-bold text-[#8B4513]">safe</span> shouldn't be a <span className="font-bold text-[#FFB800]">luxury.</span> with<br className="hidden sm:block"/>
                            QuickShaw, it's built in.<br/>
                            every ride <span className="font-bold text-black">tracked</span>, every detail <span className="font-bold text-black">shared</span>,<br className="hidden sm:block"/>
                            so you never travel <span className="font-bold text-[#FFB800]">alone</span>, <span className="font-bold text-black">especially</span><br className="hidden sm:block"/>
                            when you're <span className="font-bold text-[#8B4513]">by yourself</span>.
                        </p>
                    </div>

                    {/* Bottom Message */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-8 px-4">
                        <h3 className="font-Archivo font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[3rem] 
                                     text-[#FFB800] leading-tight">
                            Every trip on QuickShaw<br/>
                            comes with one extra<br/>
                            passenger,
                        </h3>
                        <p className="font-Archivo font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.25rem] 
                                   text-[#8B4513]">
                            your security.
                        </p>
                    </div>
                </div>

                {/* Original Ellipse Background */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
                    <img 
                        src="/Ellipse 144@2x.png" 
                        alt="" 
                        className="w-full h-auto object-cover opacity-30"
                    />
                </div>
                
                {/* Glowing Ellipse Gradient - Layered on top */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 pointer-events-none z-[1]">
                    <img 
                        src="/elipsegraident.png" 
                        alt="" 
                        className="w-full h-full object-contain object-bottom opacity-80"
                    />
                </div>
            </div>
            <Footer/>
                </>
            )}
        </div>
    )
}