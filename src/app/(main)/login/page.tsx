'use client'
import { useRouter } from 'next/navigation'

export default function Login(){
    const router = useRouter()

    const handleContinue = () => {
        router.push('/login/confirmDetails')
    }

    return(
        <div className="w-full min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-[4%] py-[2rem]">
            
            {/* Main Content Container - No background, just shadow for definition */}
            <div className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px]    p-[2rem] sm:p-[2.5rem] lg:p-[3rem]">
                
                {/* Heading */}
                <div className="mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]">
                    <h1 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-medium text-black leading-tight text-left">
                        May we know more<br />about you?
                    </h1>
                </div>

                {/* Form Container */}
                <div className="w-full">
                    
                    {/* Phone/Email Input */}
                    <div className="mb-[1.5rem] sm:mb-[2rem]">
                        <input 
                            type="text"
                            placeholder="Enter your phone or email"
                            className="w-full h-[3rem] sm:h-[3.5rem] lg:h-[4rem]
                                     border border-gray-300 rounded-[0.5rem]
                                     px-[1rem] sm:px-[1.25rem] lg:px-[1.5rem]
                                     text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem]
                                     text-gray-700 placeholder-gray-500
                                     focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent
                                     transition-all duration-300 bg-white"
                        />
                    </div>

                    {/* Continue Button */}
                    <div className="mb-[1.5rem] sm:mb-[2rem]">
                        <button 
                            onClick={handleContinue}
                            className="w-full h-[3rem] sm:h-[3.5rem] lg:h-[4rem]
                                     bg-[#FFB800] hover:bg-[#E6A600]
                                     text-black font-semibold
                                     text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]
                                     rounded-[0.5rem]
                                     transition-colors duration-300
                                     cursor-pointer">
                            Continue
                        </button>
                    </div>

                    {/* "or" Divider */}
                    <div className="flex items-center justify-center mb-[1.5rem] sm:mb-[2rem]">
                        <div className="flex-grow h-[1px] bg-gray-300"></div>
                        <span className="px-[1rem] text-[0.9rem] sm:text-[1rem] text-gray-600 font-medium">
                            or
                        </span>
                        <div className="flex-grow h-[1px] bg-gray-300"></div>
                    </div>

                    {/* Continue with Google Button */}
                    <div className="mb-[2rem] sm:mb-[2.5rem]">
                        <button className="w-full h-[3rem] sm:h-[3.5rem] lg:h-[4rem]
                                         bg-white border border-gray-300 hover:bg-gray-50
                                         text-gray-700 font-medium
                                         text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem]
                                         rounded-[0.5rem]
                                         transition-colors duration-300
                                         cursor-pointer
                                         flex items-center justify-center gap-[0.75rem]">
                            <img src="/google.png" alt="Google" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] flex-shrink-0" />
                            Continue with Google
                        </button>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="text-center flex bg-gray-200/50 content-center justify-center  ">
                     <img src="/Group 666.png" alt="is that " className="w-[15px] h-[25px] content-center justify-center m-5 mr-1"/>
                        <p className="text-[0.75rem] sm:text-[0.8rem] lg:text-[0.85rem] text-gray-600 leading-relaxed pt-5 pb-5 ">
                            By continuing you agree to calls, IVR, WhatsApp,<br />
                            texts from QuickShaw
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}