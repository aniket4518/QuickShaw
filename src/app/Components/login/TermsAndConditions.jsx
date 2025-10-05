'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TermsAndConditions(){
    const [isAgreed, setIsAgreed] = useState(false)
    const router = useRouter()

    const handleNext = () => {
        if (isAgreed) {  
            router.push('/')
        }
    }

    const handleBack = () => {
        router.back()
    }

    return (
        <div className="w-full min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-[4%] py-[2rem]">
            
            {/* Main Content Container */}
            <div className="w-full max-w-[600px] sm:max-w-[650px] lg:max-w-[700px] p-[2rem] sm:p-[2.5rem] lg:p-[3rem]">
                
                {/* Heading */}
                <div className="text-center mb-[2rem] sm:mb-[1rem] lg:mb-[2rem]">
                    <h1 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2.75rem] font-medium text-black leading-tight font-Archivo font-bold">
                        Accept QuickShaw's Terms<br className='font-medium' />& review Privacy conditions
                    </h1>
                </div>

                {/* Terms Text */}
                <div className="mb-[4rem] sm:mb-[5rem] lg:mb-[6rem] flex justify-center">
                    <p className="w-[565px] max-w-full h-[105px] 
                                 font-Archivo font-medium 
                                 text-[22px] sm:text-[18px] md:text-[20px] lg:text-[22px]
                                 leading-[35px] sm:leading-[28px] md:leading-[32px] lg:leading-[35px]
                                 text-black opacity-100
                                 text-center
                                 tracking-[0%]">
                        By selecting 'I Agree' below, I agree that I have reviewed & agreed to the Terms & Conditions and acknowledged the Privacy Notice. I am at least 18 years of age.
                    </p>
                </div>

                {/* Agreement Section */}
                <div className="mb-[4rem] sm:mb-[5rem] lg:mb-[6rem]">
                    <div className="flex items-center justify-between p-[1rem] border-t border-b border-gray-300 bg-white/50">
                        <span className="text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] text-black">
                            I agree
                        </span>
                        <button
                            onClick={() => setIsAgreed(!isAgreed)}
                            className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] border-2 transition-all duration-300 flex items-center justify-center ${
                                isAgreed 
                                    ? 'bg-black border-black' 
                                    : 'bg-white border-gray-400'
                            }`}
                        >
                            {isAgreed && (
                                <svg className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                    {/* Back Button */}
                    <button 
                        onClick={handleBack}
                        className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] lg:w-[4rem] lg:h-[4rem]
                                 bg-white border border-gray-300 hover:bg-gray-50
                                 rounded-full
                                 transition-colors duration-300
                                 cursor-pointer
                                 flex items-center justify-center">
                        <svg className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button 
                        onClick={handleNext}
                        disabled={!isAgreed}
                        className={`font-semibold
                                 py-[0.75rem] sm:py-[1rem] lg:py-[1.25rem]
                                 px-[2rem] sm:px-[2.5rem] lg:px-[3rem]
                                 rounded-[2rem]
                                 text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]
                                 transition-all duration-300
                                 flex items-center gap-[0.5rem] ${
                                     isAgreed 
                                         ? 'bg-[#FFB800] hover:bg-[#E6A600] text-black cursor-pointer' 
                                         : 'bg-[rgba(252,182,7,1)] text-black cursor-not-allowed'
                                 }`}>
                        Next →
                    </button>
                </div>
            </div>
        </div>
    )
}