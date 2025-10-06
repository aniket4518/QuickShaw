export default function Social(){
    return(
        <div className="w-full py-[3rem] sm:py-[4rem] lg:py-[6rem] px-[4%] bg-white">
      
            <div className="text-center mb-[2rem] sm:mb-[3rem] lg:mb-[4rem]">
                <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-bold text-black font-[Archivo]  ">
                    Be a part of us!
                </h2>
            </div> 
            <div className="flex flex-col md:flex-row justify-center items-center gap-[2rem] sm:gap-[2.5rem] lg:gap-[3rem] xl:gap-[4rem] max-w-[1200px] mx-auto">
                
           
                <div className="bg-[#FFF9E1] rounded-[1rem] p-[1.5rem] sm:p-[2rem] w-full md:w-[350px] lg:w-[380px] text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem] font-semibold text-black mb-[1rem] sm:mb-[1.5rem]">
                        Whatsapp community
                    </h3>
                  
                    <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] mx-auto mb-[1rem] sm:mb-[1.5rem] flex items-center justify-center">
                        <img 
                            src="/whatsappblack.png" 
                            alt="WhatsApp" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    
                    {/* Button */}
                    <button className="bg-[#FFB800] hover:bg-[#E6A600] text-black font-medium py-[0.75rem] px-[2rem] sm:px-[2.5rem] rounded-[0.5rem] text-[0.9rem] sm:text-[1rem] transition-colors duration-300 mb-[1rem] sm:mb-[1.5rem]">
                        Join group
                    </button>
                     
                    <p className="text-[0.85rem] sm:text-[0.9rem] lg:text-[1rem] text-gray-700 leading-relaxed">
                        Have any doubt click on Join and want to be a part of the QuickShaw building discussions.
                    </p>
                </div>
 
                <div className="bg-[#FFF9E1] rounded-[1rem] p-[1.5rem] sm:p-[2rem] w-full md:w-[350px] lg:w-[380px] text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem] font-semibold text-black mb-[1rem] sm:mb-[1.5rem]">
                        Instagram page
                    </h3>
                    
                    {/* Instagram Icon */}
                    <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] mx-auto mb-[1rem] sm:mb-[1.5rem] flex items-center justify-center">
                        <img 
                            src="/instablack.png" 
                            alt="Instagram" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    
                    {/* Button */}
                    <button className="bg-[#FFB800] hover:bg-[#E6A600] text-black font-medium py-[0.75rem] px-[2rem] sm:px-[2.5rem] rounded-[0.5rem] text-[0.9rem] sm:text-[1rem] transition-colors duration-300 mb-[1rem] sm:mb-[1.5rem]">
                        Visit page
                    </button> 
                    <p className="text-[0.85rem] sm:text-[0.9rem] lg:text-[1rem] text-gray-700 leading-relaxed">
                        Watch out the new feature selection and some of the pictures and posts of QuickShaw
                    </p>
                </div>
 
                <div className="bg-[#FFF9E1] rounded-[1rem] p-[1.5rem] sm:p-[2rem] w-full md:w-[350px] lg:w-[380px] text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.5rem] font-semibold text-black mb-[1rem] sm:mb-[1.5rem]">
                        LinkedIn page
                    </h3>
                    
                    {/* LinkedIn Icon */}
                    <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] mx-auto mb-[1rem] sm:mb-[1.5rem] flex items-center justify-center">
                        <img 
                            src="/linkedinblack.png" 
                            alt="LinkedIn" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    
                    {/* Button */}
                    <button className="bg-[#FFB800] hover:bg-[#E6A600] text-black font-medium py-[0.75rem] px-[2rem] sm:px-[2.5rem] rounded-[0.5rem] text-[0.9rem] sm:text-[1rem] transition-colors duration-300 mb-[1rem] sm:mb-[1.5rem]">
                        Visit page
                    </button>
                    
                    {/* Description */}
                    <p className="text-[0.85rem] sm:text-[0.9rem] lg:text-[1rem] text-gray-700 leading-relaxed">
                        Stay updated with news, releases, offers and new partnerships and content QuickShaw
                    </p>
                </div>

            </div>
        </div>
    )
}