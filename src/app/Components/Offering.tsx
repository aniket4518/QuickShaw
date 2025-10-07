"use client"
import Buttons from "./ui/Button";
export default function Offering(){
    return(
        <div className="w-full min-h-screen bg-white overflow-x-hidden">
            {/* Making journeys comfortable heading */}
            <div className="w-full max-w-none mt-[2rem] sm:mt-[3rem] lg:mt-[4rem] xl:mt-[5rem] px-[4%] sm:px-[3%] lg:px-[5%] xl:px-[8%] font-[Archivo] font-extrabold text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.75rem] xl:text-[4.25rem] leading-[100%] tracking-[0%] text-black mb-[2rem] sm:mb-[3rem] lg:mb-[4rem]">
              Making journeys comfortable
            </div>
            
          
            {/* Horizontal Scrolling Cards Container */}
            <div className="w-full bg-white mt-[1.375rem] px-[1%] sm:px-[2%] lg:px-[3%] xl:px-[4%]">
                <div className="overflow-x-auto scrollbar-hide hover:scrollbar-default pb-4">
                    <div className="flex flex-row gap-[0.75rem] sm:gap-[1rem] lg:gap-[1.375rem] min-h-[30vh] sm:min-h-[40vh] lg:min-h-[50vh]">
                        
                        {/* Card 1 */}
                        <div className="flex-shrink-0 w-[40%] sm:w-[35%] md:w-[32%] lg:w-[30%] xl:w-[28%] h-[18rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[28.5625rem] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 min-h-[120px]">
                            <img 
                                src="/Frame1.png" 
                                alt="Frame 1" 
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="flex-shrink-0 w-[40%] sm:w-[35%] md:w-[32%] lg:w-[30%] xl:w-[28%]  h-[18rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[28.5625rem] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 min-h-[120px]">
                            <img 
                                src="/Frame2.png" 
                                alt="Frame 2" 
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Card 3 */}
                        <div className="flex-shrink-0 w-[40%] sm:w-[35%] md:w-[32%] lg:w-[30%] xl:w-[28%] h-[18rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[28.5625rem] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 min-h-[120px]">
                            <img 
                                src="/Frame3.png" 
                                alt="Frame 3" 
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Card 4 */}
                        <div className="flex-shrink-0 w-[40%] sm:w-[35%] md:w-[32%] lg:w-[30%] xl:w-[28%]  h-[18rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[28.5625rem] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 min-h-[120px]">
                            <img 
                                src="/Frame4.png" 
                                alt="Frame 4" 
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Card 5 - New */}
                        <div className="flex-shrink-0 w-[40%] sm:w-[35%] md:w-[32%] lg:w-[30%] xl:w-[28%] h-[18rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[28.5625rem] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 min-h-[120px]">
                            <img 
                                src="/Frame1.png" 
                                alt="Frame 5" 
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Card 6 - New */}
                        <div className="flex-shrink-0 w-[40%] sm:w-[35%] md:w-[32%] lg:w-[30%] xl:w-[28%] h-[18rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[28.5625rem] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 min-h-[120px]">
                            <img 
                                src="/Frame2.png" 
                                alt="Frame 6" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hover\:scrollbar-default:hover::-webkit-scrollbar {
                    display: block;
                    height: 8px;
                }
                .hover\:scrollbar-default:hover::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 4px;
                }
                .hover\:scrollbar-default:hover::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 4px;
                }
                .hover\:scrollbar-default:hover::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
               <div className="w-full px-[4%] sm:px-[4%] lg:px-[6%] xl:px-[8%] mt-[2rem] sm:mt-[4rem] lg:mt-[7.438rem] min-h-[400px] lg:h-[484px] bg-white overflow-hidden flex flex-col lg:flex-row justify-between items-start gap-[2rem] lg:gap-0">
                 
                <div className="flex justify-start items-start flex-1 flex-col pr-0 lg:pr-[2rem] w-full lg:w-auto">
                    <div className="w-full lg:max-w-[80%] font-extrabold font-[Archivo] text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-left text-black leading-[1.2] tracking-[0.02em] mb-[1rem]">
                        Scan & Onboard
                    </div>
                    
                    <div className="flex justify-start items-center w-full mb-[1rem]">
                        <img 
                          src="/Line 2.png" 
                          alt="Line 2" 
                          className="w-[6rem] sm:w-[8rem] lg:w-[9.0625rem]" 
                        />
                    </div>
                    
                    <div className="w-full lg:max-w-[80%] mt-[1rem]">
                        <span className="text-[1rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-medium text-black leading-[1.4] tracking-[0.05em]">Seeing an auto idle on the road, than no need to book online, just Scan QR placed in it and enjoy all benefits of QuickShaw!</span>
                        <Buttons 
                          width="clamp(150px, 40vw, 400px)"
                          height="clamp(45px, 8vh, 85px)"
                          fontSize="clamp(0.875rem, 3vw, 2rem)"
                          className="font-[Archivo] font-semibold leading-[1.4] tracking-[0.05em] align-middle mt-[2rem] sm:mt-[3vh] lg:mt-[2.438rem] w-full sm:w-[60vw] md:w-[50vw] lg:w-[25rem] max-w-[400px]"
                          onClick={() => {}}
                        >
                          Coming Soon
                        </Buttons>
                    </div>
                </div>
 
                <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[32.0625rem] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[26.25rem] max-w-[600px] flex-shrink-0 mt-0 lg:mt-[2rem] mx-auto lg:mx-0">
                    <img 
                      src="/Group 759.png" 
                      alt="QuickShaw Auto Service" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                </div>

               </div>
 
               <div className="mt-[3rem] sm:mt-[5rem] lg:mt-[8.313rem] w-full min-h-[400px] lg:h-[484px] bg-white overflow-hidden flex flex-col lg:flex-row-reverse justify-between items-start gap-[2rem] lg:gap-0 px-[4%] sm:px-[4%] lg:px-[6%] xl:px-[8%]">
                    
                    
                    <div className="flex justify-start items-start flex-1 flex-col pr-0 lg:pr-[2rem] w-full lg:w-auto order-1 lg:order-2">
                        <div className="w-full lg:max-w-[80%] font-extrabold font-[Archivo] text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-left text-black leading-[1.2] tracking-[0.02em] ml-0 mb-[1rem]">
                            Ensuring Safety
                        </div>
                        <div className="flex justify-start items-center w-full mb-[1rem]">
                            <img 
                              src="/Line 2.png" 
                              alt="Line 2" 
                              className="w-[6rem] sm:w-[8rem] lg:w-[9.0625rem]" 
                            />
                        </div>
                        <div className="w-full lg:max-w-[80%] mt-[1rem]">
                           <span className="text-[1rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-medium text-black leading-[1.4] tracking-[0.05em]">Full-time access to nearest emergency contact facilities like Police stations, proctor office, ambulance, & post-ride feedback facility for every driver.</span>

              <Buttons 
                width="clamp(150px, 40vw, 400px)"
                height="clamp(45px, 8vh, 85px)"
                fontSize="clamp(0.875rem, 3vw, 2rem)"
                className="font-[Archivo] font-semibold leading-[1.4] tracking-[0.05em] align-middle mt-[2rem] sm:mt-[3vh] lg:mt-[2.438rem] w-full sm:w-[60vw] md:w-[50vw] lg:w-[25rem] max-w-[400px]"
                onClick={() => {}}
              >
                know more
              </Buttons>
                        </div>
                        
                    </div>

                     
                    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[32.0625rem] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[26.25rem] max-w-[600px] flex-shrink-0 mt-0 lg:mt-[2rem] order-2 lg:order-1 mx-auto lg:mx-0">
                      <img 
                        src="/sos.png" 
                        alt="SOS Emergency Service" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

               </div>

               
               <div className="w-full px-[4%] sm:px-[4%] lg:px-[6%] xl:px-[8%] mt-[2rem] sm:mt-[4rem] lg:mt-[7.438rem] min-h-[400px] lg:h-[484px] bg-white overflow-hidden flex flex-col lg:flex-row justify-between items-start gap-[2rem] lg:gap-0 mb-[3rem]">
                
               
                <div className="flex justify-start items-start flex-1 flex-col pr-0 lg:pr-[2rem] w-full lg:w-auto">
                    <div className="w-full lg:max-w-[80%] font-extrabold font-[Archivo] text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-left text-black leading-[1.2] tracking-[0.02em] mb-[1rem]">
                       Driver Reliability
                    </div>
                    
                    <div className="flex justify-start items-center w-full mb-[1rem]">
                        <img 
                          src="/Line 2.png" 
                          alt="Line 2" 
                          className="w-[6rem] sm:w-[8rem] lg:w-[9.0625rem]" 
                        />
                    </div>
                    
                    <div className="w-full lg:max-w-[80%] mt-[1rem]">
                        <span className="text-[1rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-medium text-black leading-[1.4] tracking-[0.05em]">Ensuring responsible driver behavior and a smoother ride experience by a solid driver feedback system for quality checks and improvements.</span>
                        <Buttons 
                          width="clamp(150px, 40vw, 400px)"
                          height="clamp(45px, 8vh, 85px)"
                          fontSize="clamp(0.875rem, 3vw, 2rem)"
                          className="font-[Archivo] font-semibold leading-[1.4] tracking-[0.05em] align-middle mt-[2rem] sm:mt-[3vh] lg:mt-[2.438rem] w-full sm:w-[60vw] md:w-[50vw] lg:w-[25rem] max-w-[400px]"
                          onClick={() => {}}
                        >
                          know more
                        </Buttons>
                    </div>
                </div>

              
                <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[32.0625rem] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[26.25rem] max-w-[600px] flex-shrink-0 mt-0 lg:mt-[2rem] mx-auto lg:mx-0">
                    <img 
                      src="/Group502.png" 
                      alt="QuickShaw Auto Service" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
         

            
        </div>
    )
}