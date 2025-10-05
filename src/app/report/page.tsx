"use client"
import { useState } from 'react'
import Footer from '../Components/Footer'
import Buttons from '../Components/ui/Button'
import ComplaintForm from '../Components/ComplaintForm'

export default function Report(){
    const [showComplaintForm, setShowComplaintForm] = useState(false)

    const handleRaiseComplaint = () => {
        setShowComplaintForm(true)
    }

    const handleCloseComplaint = () => {
        setShowComplaintForm(false)
    }

    return(
        <div className="w-full bg-white">
            {showComplaintForm ? (
                <ComplaintForm onClose={handleCloseComplaint} />
            ) : (
                <>
                    {/* Hero Section with Background Image */}
                    <div className="w-full min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-[4%] py-[2rem]">
                <div className="text-center mx-auto">
                    {/* Main Heading */}
                    <h1 className="font-Archivo font-black text-center mb-[3rem] sm:mb-[4rem] lg:mb-[5rem] text-[rgba(59,33,10,1)]
                                 text-[7.5rem] sm:text-[5rem] md:text-[6.25rem] lg:text-[7.5rem]
                                    w-[75.625rem] max-w-full h-[18.75rem]
                                 flex items-center justify-center
                                 opacity-100">
                        A safe mobility<br/>
                        platform is here
                    </h1>

                    {/* Raise Complaint Button */}
                    <div className="flex justify-center">
                        <Buttons
                            onClick={handleRaiseComplaint}
                            width="40.1143rem"
                            height="7.221rem"
                            fontSize="clamp(1rem, 1.2vw, 2.469rem)"
                            className="shadow-md hover:shadow-lg rounded-xl"
                        >
                            Raise a complaint
                        </Buttons>
                    </div>
                </div>
            </div>

            {/* Safety Priority Section */}
            <div className="w-full bg-white py-[4rem] sm:py-[5rem] lg:py-[6rem] px-[4%] mb-[3rem] sm:mb-[4rem] lg:mb-[5rem]">
                <div className="max-w-[1096px]  mx-auto text-center">
                    {/* Main Title */}
                    <h2 className="font-Brawler font-bold text-[3rem] sm:text-[4rem] lg:text-[7.5rem] 
                                 text-[#FFB800] mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]
                                 leading-tight tracking-wide pt-[3rem]">
                        YOUR SAFETY IS<br/>
                        OUR PRIORITY
                    </h2>

                    {/* Description Text */}
                    <p className="font-Archivo text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem]
                                text-black leading-relaxed mb-[3rem] sm:mb-[4rem] lg:mb-[5rem]
                                max-w-[800px] mx-auto">
                        One-tap alert to trusted contacts & QuickShaw team, verified drivers for every ride, live trip tracking from start to finish, instant support, always on standby.
                    </p>

                    {/* Ensuring Safety Section */}
                    <div className="   max-w-[600px] mx-auto">
                        <div className="flex items-center justify-between cursor-pointer   ">
                            <h3 className="font-Archivo font-bold text-[2rem] sm:text-[1.375rem] lg:text-[2.5rem]
                                         text-[#8B4513] flex-1 text-left">
                                Ensuring Safety, <span className="text-gray-600 font-normal text-[1.75rem]">HOW IT WORKS</span>
                            </h3>
                            
                        </div>
                         
                    </div>
                     <svg className="w-[34px] h-[34px] text-gray-600 transform transition-transform duration-300 justify-self-center mt-[2rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                </div>
            </div>

            {/* Tap Safe Now Section */}
            <div className="w-full bg-white py-[4rem] sm:py-[5rem] lg:py-[6rem] px-[6.2%] relative overflow-hidden mb-[3rem] sm:mb-[4rem] lg:mb-[5rem]">
                <div className="max-w-[1200px] m-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-[4rem] items-center">
                        
                        {/* Left Content */}
                        <div className="space-y-[4rem] lg:space-y-[5rem] self-start">
                            {/* Main Heading */}
                            <h2 className="font-Archivo font-extrabold text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] 
                                         text-black leading-tight self-start pl-[1rem]">
                                Tap safe now
                            </h2>

                            {/* Yellow Info Box */}
                            <div className="bg-[#FFD66F] rounded-3xl p-[1.5rem] sm:p-[2rem] lg:p-[2.5rem] relative ml-[2rem] w-[452px] h-[248px]">
                                <p className="font-Archivo text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] 
                                           text-black leading-relaxed font-medium h-full">
                                    Your ride comes with more than just wheels, it comes with trust in verified drivers, care built into every detail, & a constant watch over your journey to ensure your safety.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Phone Mockup */}
                        <div className="flex justify-center lg:justify-end relative">
                            {/* Phone Image */}
                            <div className="relative z-20">
                                <img 
                                    src="/phone.png" 
                                    alt="QuickShaw App Interface" 
                                    className="w-[280px] sm:w-[320px] lg:w-[380px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                      <div className="absolute top-4 left-9 ">
                    <img 
                        src="/cross.png" 
                        alt="Decorative curves" 
                        className="w-full h-auto object-cover opacity-80"
                    />
                </div>
                </div>
  
               

                {/* Yellow Ellipse Background Element - Full Width Below Mobile */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
                    <img 
                        src="/Ellipse 144@2x.png" 
                        alt="Background decoration" 
                        className="w-full h-auto object-cover opacity-30"
                    />
                </div>
            </div>

            {/* Share Your Ride Section */}
            <div className="w-full bg-white py-[8rem] sm:py-[9rem] lg:py-[10rem] px-[4%] relative overflow-hidden mb-[3rem] sm:mb-[4rem] lg:mb-[5rem]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-[4rem] items-center">
                        
                        {/* Left Content */}
                        <div className="space-y-[2rem] lg:space-y-[3rem]">
                            {/* Main Heading */}
                            <h2 className="font-Archivo font-bold text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] 
                                         text-black leading-tight">
                                share<br/>
                                your ride
                            </h2>

                            {/* Yellow Info Box */}
                            <div className="bg-[#FFD66F] rounded-2xl p-[1.5rem] sm:p-[2rem] lg:p-[2.5rem] relative max-w-[452px]">
                                <p className="font-Archivo text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] 
                                           text-black leading-relaxed font-medium">
                                    Before your ride begins, your peace of mind is set, share your trip instantly, let loved ones track your journey, and drive together knowing safety always has an eye out for you.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Group Image */}
                        <div className="flex justify-center lg:justify-end relative">
                            {/* Group Image with Yellow Platform */}
                            <div className="relative z-20">
                                <img 
                                    src="/Group 652.png" 
                                    alt="Share your ride - Group of people" 
                                    className="w-[320px] sm:w-[380px] lg:w-[440px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cross Lines Top Left */}
                <div className="absolute top-0 left-0 pointer-events-none">
                    <img 
                        src="/cross.png" 
                        alt="Decorative curves top left" 
                        className="w-[200px] sm:w-[250px] lg:w-[300px] h-auto object-cover opacity-60"
                    />
                </div>

                {/* Yellow Ellipse Background Element - Full Width Bottom */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
                    <img 
                        src="/Ellipse 144@2x.png" 
                        alt="Background decoration" 
                        className="w-full h-auto object-cover opacity-30"
                    />
                </div>
            </div>

            {/* Trusted Drivers Section */}
            <div className="w-full bg-white py-[8rem] sm:py-[9rem] lg:py-[10rem] px-[4%] relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-[4rem] items-center">
                        
                        {/* Left Content */}
                        <div className="space-y-[2rem] lg:space-y-[3rem]">
                            {/* Main Heading */}
                            <h2 className="font-Archivo font-bold text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] 
                                         text-black leading-tight">
                                trusted<br/>
                                drivers
                            </h2>

                            {/* Yellow Info Box */}
                            <div className="bg-[#FFD66F] rounded-2xl p-[1.5rem] sm:p-[2rem] lg:p-[2.5rem] relative max-w-[452px]">
                                <p className="font-Archivo text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] 
                                           text-black leading-relaxed font-medium">
                                    Before your ride arrives, your safety is already taken care of, with verified profiles, live monitoring, & safeguards built to help every journey worry-free.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Group Image */}
                        <div className="flex justify-center lg:justify-end relative">
                            {/* Group Image with Yellow Platform */}
                            <div className="relative z-20">
                                <img 
                                    src="/Group 652 (1).png" 
                                    alt="Trusted drivers - Group of people" 
                                    className="w-[320px] sm:w-[380px] lg:w-[440px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cross Lines Bottom Right */}
                <div className="absolute bottom-0 right-0 pointer-events-none">
                    <img 
                        src="/cross2.png" 
                        alt="Decorative curves bottom right" 
                        className="w-[200px] sm:w-[250px] lg:w-[300px] h-auto object-cover opacity-60"
                    />
                </div>

                {/* Yellow Ellipse Background Element - Full Width Bottom */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
                    <img 
                        src="/Ellipse 144@2x.png" 
                        alt="Background decoration" 
                        className="w-full h-auto object-cover opacity-30"
                    />
                </div>
            </div>

            {/* Security Message Section */}
            <div className="w-full bg-white py-[6rem] sm:py-[7rem] lg:py-[8rem] px-[4%]">
                <div className="max-w-[800px] mx-auto text-center">
                    {/* Main Security Message */}
                    <div className="mb-[4rem] sm:mb-[5rem] lg:mb-[6rem]">
                        <p className="font-Archivo text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] 
                                   text-black leading-relaxed">
                            feeling <span className="font-bold text-[#8B4513]">safe</span> shouldn't be a <span className="font-bold text-[#FFB800]">luxury.</span> with<br/>
                            QuickShaw, it's built in.<br/>
                            every ride <span className="font-bold text-black">tracked</span>, every detail <span className="font-bold text-black">shared</span>,<br/>
                            so you never travel <span className="font-bold text-[#FFB800]">alone</span>, <span className="font-bold text-black">especially</span><br/>
                            when you're <span className="font-bold text-[#8B4513]">by yourself</span>.
                        </p>
                    </div>

                    {/* Bottom Message */}
                    <div className="space-y-[1rem]">
                        <h3 className="font-Archivo font-bold text-[2rem] sm:text-[2.5rem] lg:text-[3rem] 
                                     text-[#FFB800] leading-tight">
                            Every trip on QuickShaw<br/>
                            comes with one extra<br/>
                            passenger,
                        </h3>
                        <p className="font-Archivo font-bold text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] 
                                   text-[#8B4513]">
                            your security.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
                </>
            )}
        </div>
    )
}