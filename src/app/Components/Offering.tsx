"use client"
import Buttons from "./ui/Button";
export default function Offering(){
    return(
        <div className="w-full min-h-screen bg-white overflow-x-hidden">
            {/* Making journeys comfortable heading */}
            <div 
                className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
                          mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24
                          font-[Archivo] font-extrabold 
                          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                          leading-tight
                          text-black
                          mb-8 sm:mb-12 md:mb-16"
            >
              Making journeys comfortable
            </div>
            
            {/* Cards Container - Grid Layout for Better Responsiveness */}
            <div className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-6 mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {/* Card 1 */}
                    <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src="/Frame1.png" 
                            alt="Frame 1" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src="/Frame2.png" 
                            alt="Frame 2" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src="/Frame3.png" 
                            alt="Frame 3" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Card 4 */}
                    <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src="/Frame4.png" 
                            alt="Frame 4" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Scan & Onboard Section */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-12 sm:mt-16 md:mt-20 lg:mt-28 py-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
                    {/* Left side content */}
                    <div className="flex flex-col flex-1 w-full lg:w-auto">
                        <h2 className="font-extrabold font-[Archivo] 
                                      text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                                      text-black
                                      leading-tight tracking-tight mb-4">
                            Scan & Onboard
                        </h2>
                        
                        <div className="flex justify-start items-center mb-6">
                            <img 
                              src="/Line 2.png" 
                              alt="Line decorator" 
                              className="w-24 sm:w-32 md:w-36 h-auto" 
                            />
                        </div>
                        
                        <div className="w-full max-w-2xl">
                            <p className="text-lg sm:text-xl md:text-2xl font-medium text-black leading-relaxed mb-6 sm:mb-8">
                                Seeing an auto idle on the road, than no need to book online, just Scan QR placed in it and enjoy all benefits of QuickShaw!
                            </p>
                            <Buttons 
                              width="clamp(180px, 45vw, 350px)"
                              height="clamp(45px, 8vh, 70px)"
                              fontSize="clamp(0.875rem, 3.5vw, 1.5rem)"
                              className="font-[Archivo] font-semibold w-full sm:w-auto min-w-[200px] max-w-[350px]"
                              onClick={() => {}}
                            >
                              Coming Soon
                            </Buttons>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="w-full lg:w-[480px] xl:w-[520px] flex-shrink-0">
                        <div className="aspect-[4/3] w-full">
                            <img 
                              src="/Group 759.png" 
                              alt="QuickShaw Auto Service" 
                              className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ensuring Safety Section - Reversed Layout */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-12 sm:mt-16 md:mt-20 lg:mt-28 py-8">
                <div className="flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center gap-8 lg:gap-12">
                    {/* Right side content */}
                    <div className="flex flex-col flex-1 w-full lg:w-auto">
                        <h2 className="font-extrabold font-[Archivo] 
                                      text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                                      text-black
                                      leading-tight tracking-tight mb-4">
                            Ensuring Safety
                        </h2>
                        
                        <div className="flex justify-start items-center mb-6">
                            <img 
                              src="/Line 2.png" 
                              alt="Line decorator" 
                              className="w-24 sm:w-32 md:w-36 h-auto" 
                            />
                        </div>
                        
                        <div className="w-full max-w-2xl">
                            <p className="text-lg sm:text-xl md:text-2xl font-medium text-black leading-relaxed mb-6 sm:mb-8">
                                Full-time access to nearest emergency contact facilities like Police stations, proctor office, ambulance, & post-ride feedback facility for every driver.
                            </p>
                            <Buttons 
                              width="clamp(180px, 45vw, 350px)"
                              height="clamp(45px, 8vh, 70px)"
                              fontSize="clamp(0.875rem, 3.5vw, 1.5rem)"
                              className="font-[Archivo] font-semibold w-full sm:w-auto min-w-[200px] max-w-[350px]"
                              onClick={() => {}}
                            >
                              Know More
                            </Buttons>
                        </div>
                    </div>

                    {/* Left side image */}
                    <div className="w-full lg:w-[480px] xl:w-[520px] flex-shrink-0">
                        <div className="aspect-[4/3] w-full">
                            <img 
                              src="/sos.png" 
                              alt="SOS Emergency Service" 
                              className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Driver Reliability Section */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-12 sm:mt-16 md:mt-20 lg:mt-28 py-8 mb-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
                    {/* Left side content */}
                    <div className="flex flex-col flex-1 w-full lg:w-auto">
                        <h2 className="font-extrabold font-[Archivo] 
                                      text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                                      text-black
                                      leading-tight tracking-tight mb-4">
                            Driver Reliability
                        </h2>
                        
                        <div className="flex justify-start items-center mb-6">
                            <img 
                              src="/Line 2.png" 
                              alt="Line decorator" 
                              className="w-24 sm:w-32 md:w-36 h-auto" 
                            />
                        </div>
                        
                        <div className="w-full max-w-2xl">
                            <p className="text-lg sm:text-xl md:text-2xl font-medium text-black leading-relaxed mb-6 sm:mb-8">
                                Ensuring responsible driver behavior and a smoother ride experience by a solid driver feedback system for quality checks and improvements.
                            </p>
                            <Buttons 
                              width="clamp(180px, 45vw, 350px)"
                              height="clamp(45px, 8vh, 70px)"
                              fontSize="clamp(0.875rem, 3.5vw, 1.5rem)"
                              className="font-[Archivo] font-semibold w-full sm:w-auto min-w-[200px] max-w-[350px]"
                              onClick={() => {}}
                            >
                              Know More
                            </Buttons>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="w-full lg:w-[480px] xl:w-[520px] flex-shrink-0">
                        <div className="aspect-[4/3] w-full">
                            <img 
                              src="/Group502.png" 
                              alt="Driver Reliability" 
                              className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
     