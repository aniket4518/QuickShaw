'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function Details(){
    const [phoneNumber, setPhoneNumber] = useState('')
    const router = useRouter()

    const handleNext = () => {
        router.push('/login/terms')
    }

    const handleBack = () => {
        router.back()
    }

    return (
        <div className="w-full min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-[4%] py-[2rem]">
            
            {/* Main Content Container */}
            <div className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px]  sm:p-[2.5rem] lg:p-[3rem]">
                
                {/* Heading */}
                <div className="text-start mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]">
                    <h1 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-medium font-Archivo text-black">
                        Confirm your details
                    </h1>
                </div>

                {/* Form Container */}
                <div className="w-full">
                    
                    {/* Name Fields Row */}
                    <div className="flex gap-[0.75rem] sm:gap-[1rem] mb-[1.5rem] sm:mb-[2rem]">
                        {/* First Name */}
                        <div className="flex-1">
                            <input 
                                type="text"
                                placeholder="Dhruvin"
                                defaultValue="Dhruvin"
                                className="w-full h-[3rem] sm:h-[3.5rem] lg:h-[4rem]
                                         border border-black rounded-[0.5rem]
                                         px-[1rem] sm:px-[1.25rem]
                                         text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem]
                                         text-gray-700 placeholder-gray-500
                                         focus:outline-none focus:border-black
                                         transition-all duration-300 bg-white"
                            />
                        </div>
                        
                        {/* Last Name */}
                        <div className="flex-1">
                            <input 
                                type="text"
                                placeholder="Patel"
                                defaultValue="Patel"
                                className="w-full h-[3rem] sm:h-[3.5rem] lg:h-[4rem]
                                         border border-black rounded-[0.5rem]
                                         px-[1rem] sm:px-[1.25rem]
                                         text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem]
                                         text-gray-700 placeholder-gray-500
                                         focus:outline-none focus:border-black
                                         transition-all duration-300 bg-white"
                            />
                        </div>
                    </div>

                    {/* Phone Number Field with Real Country Flags */}
                    <div className="mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]">
                        <div className="bg-white rounded-[0.5rem] border border-black h-[3rem] sm:h-[3.5rem] lg:h-[4rem] flex items-center px-[0.5rem]">
                            <PhoneInput
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="IN"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                placeholder="Enter your mobile number"
                                className="w-full"
                                style={{
                                    '--PhoneInputCountryFlag-height': '1.2em',
                                    '--PhoneInputCountryFlag-borderRadius': '0.25em',
                                    '--PhoneInput-color--focus': '#000000',
                                    '--PhoneInputCountrySelectArrow-color': '#6B7280',
                                    '--PhoneInputCountrySelectArrow-color--focus': '#6B7280',
                                    '--PhoneInputInput-border': 'none',
                                    '--PhoneInputInput-borderRadius': '0',
                                    '--PhoneInputInput-background': 'transparent',
                                    '--PhoneInputInput-fontSize': '0.875rem',
                                    '--PhoneInputInput-padding': '0 1rem',
                                    '--PhoneInputCountrySelect-border': 'none',
                                    '--PhoneInputCountrySelect-borderRadius': '0',
                                    '--PhoneInputCountrySelect-background': 'transparent',
                                    '--PhoneInputCountrySelect-padding': '0 0.75rem',
                                    '--PhoneInputCountrySelect-marginRight': '0.5rem'
                                }}
                            />
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
                            className="bg-[#FFB800] hover:bg-[#E6A600]
                                     text-black font-semibold
                                     py-[0.75rem] sm:py-[1rem] lg:py-[1.25rem]
                                     px-[2rem] sm:px-[2.5rem] lg:px-[3rem]
                                     rounded-[0.5rem]
                                     text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]
                                     transition-colors duration-300
                                     cursor-pointer
                                     flex items-center gap-[0.5rem]">
                            Next
                            <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}