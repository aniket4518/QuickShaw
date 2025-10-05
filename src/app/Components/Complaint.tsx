export default function Complaint(){
    return(
        <div className="w-full py-[3rem] sm:py-[4rem] lg:py-[6rem] px-[4%] bg-white">
            <div className="max-w-[800px] mx-auto">
                
                {/* Header */}
                <div className="mb-[2rem] sm:mb-[3rem] lg:mb-[4rem]">
                    <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-bold text-black text-left">
                        Got a query or complaint?
                    </h2>
                </div>

                {/* Form Container */}
                <div className="w-full">
                    
                    {/* Textarea */}
                    <div className="mb-[1.5rem] sm:mb-[2rem]">
                        <textarea 
                            className="w-full h-[150px] sm:h-[180px] lg:h-[200px] 
                                     border border-gray-300 rounded-[0.75rem] 
                                     p-[1rem] sm:p-[1.25rem] lg:p-[1.5rem]
                                     text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]
                                     text-gray-700 placeholder-gray-500
                                     resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent
                                     bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            placeholder="Happy to listen to you..."
                            rows={6}
                        />
                    </div>

                    {/* Buttons Container */}
                    <div className="flex flex-col items-start gap-[1rem] sm:gap-[1.25rem]">
                        
                        {/* Submit Button */}
                        <button className="bg-[#FFB800] hover:bg-[#E6A600] 
                                         text-black font-semibold 
                                         py-[0.75rem] sm:py-[1rem] 
                                         px-[2rem] sm:px-[2.5rem] lg:px-[3rem]
                                         rounded-[0.75rem] 
                                         text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]
                                         transition-all duration-300 
                                         shadow-md hover:shadow-lg
                                         min-w-[120px] sm:min-w-[140px]
                                         cursor-pointer">
                            Submit
                        </button>

                        {/* "or" Text */}
                        <div className="flex items-center">
                            <span className="text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] text-gray-600 font-medium">
                                or
                            </span>
                        </div>

                        {/* Contact Us Button */}
                        <button className="bg-[#FFB800] hover:bg-[#E6A600] 
                                         text-black font-semibold 
                                         py-[0.75rem] sm:py-[1rem] 
                                         px-[2rem] sm:px-[2.5rem] lg:px-[3rem]
                                         rounded-[0.75rem] 
                                         text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]
                                         transition-all duration-300 
                                         shadow-md hover:shadow-lg
                                         min-w-[120px] sm:min-w-[140px]
                                         cursor-pointer">
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}