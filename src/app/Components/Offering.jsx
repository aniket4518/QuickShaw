 import Buttons from "./ui/Button";
export default function Offering(){
    return(
        <div className="w-full min-h-screen bg-white    overflow-x-hidden">
            {/* Making journeys comfortable heading */}
            <div 
                className="w-full max-w-none
                          mt-[2rem] sm:mt-[3rem] lg:mt-[4rem] xl:mt-[5rem]
                          ml-0 sm:ml-[3%] lg:ml-[5%] xl:ml-8%]
                          font-[Archivo] font-extrabold 
                          text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.75rem] xl:text-[4.25rem]
                          leading-[100%] tracking-[0%]
                          text-black
                          mb-[2rem] sm:mb-[3rem] lg:mb-[4rem]"
            >
              Making journeys comfortable
            </div>
            
            {/* Cards Container */}
            <div className="w-full bg-red-500 flex flex-row justify-between items-center gap-[0.5rem] sm:gap-[1rem] lg:gap-[1.375rem] min-h-[50vh] sm:min-h-[60vh] lg:min-h-[69.48vh] mt-[1.375rem]  px-[2%] sm:px-[4%] lg:px-[6%] xl:px-[8%]">
                
                {/* Card 1 */}
                <div className="w-[22%] sm:w-[23%] md:w-[22%] lg:w-[20%] xl:w-[22%]
                               h-[12rem] sm:h-[18rem] lg:h-[28.5625rem] 
                               bg-white rounded-lg shadow-lg flex flex-col justify-center items-center
                               border border-gray-200 hover:shadow-xl transition-shadow duration-300
                               max-w-[300px]">
                    {/* <div className="text-center h-full p-2 sm:p-4">
                        <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Card 1</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Content</p>
                    </div> */}
                </div>

                {/* Card 2 */}
                <div className="w-[22%] sm:w-[23%] md:w-[22%] lg:w-[20%] xl:w-[22%]
                               h-[12rem] sm:h-[18rem] lg:h-[28.5625rem] 
                               bg-white rounded-lg shadow-lg flex flex-col justify-center items-center
                               border border-gray-200 hover:shadow-xl transition-shadow duration-300
                               max-w-[300px]">
                    <div className="text-center p-2 sm:p-4">
                        <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Card 2</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Content</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-[22%] sm:w-[23%] md:w-[22%] lg:w-[20%] xl:w-[22%]
                               h-[12rem] sm:h-[18rem] lg:h-[28.5625rem] 
                               bg-white rounded-lg shadow-lg flex flex-col justify-center items-center
                               border border-gray-200 hover:shadow-xl transition-shadow duration-300
                               max-w-[300px]">
                    <div className="text-center p-2 sm:p-4">
                        <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Card 3</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Content</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="w-[22%] sm:w-[23%] md:w-[22%] lg:w-[20%] xl:w-[22%]
                               h-[12rem] sm:h-[18rem] lg:h-[28.5625rem] 
                               bg-white rounded-lg shadow-lg flex flex-col justify-center items-center
                               border border-gray-200 hover:shadow-xl transition-shadow duration-300
                               max-w-[300px]">
                    <div className="text-center p-2 sm:p-4">
                        <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Card 4</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Content</p>
                    </div>
                </div>
                

            </div>
               <div className="w-full px-[2%] sm:px-[4%] lg:px-[6%] xl:px-[8%] mt-[2rem] sm:mt-[4rem] lg:mt-[7.438rem] h-[484px] bg-white overflow-hidden flex justify-between items-start">
                
                {/* Left side content container */}
                <div className="flex justify-start items-start flex-1 flex-col pr-[2rem]">
                    <div className="w-full max-w-[80%] font-extrabold font-[Archivo] 
                                  text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]
                                  text-left text-black
                                  leading-[1.2] tracking-[0.02em] mb-[1rem]">
                        Scan & Onboard
                    </div>
                    
                    <div className="flex justify-start items-center w-full mb-[2vh]">
                        <img 
                          src="/Line 2.png" 
                          alt="Line 2" 
                          className="w-[9.0625rem] max-w-[7.552vw]" 
                        />
                    </div>
                    
                    <div className="w-full max-w-[80%] mt-[1rem]">
                        <span className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-medium text-black leading-[1.4] tracking-[0.05em]">Seeing an auto idle on the road, than no need to book online, just Scan QR placed in it and enjoy all benefits of QuickShaw!</span>
                        <Buttons 
                          width="clamp(200px, 50vw, 400px)"
                          height="clamp(50px, 10vh, 85px)"
                          fontSize="clamp(1rem, 4vw, 2rem)"
                          className="font-[Archivo] font-semibold leading-[1.4] tracking-[0.05em] align-middle mt-[3vh] sm:mt-[5vh] lg:mt-[2.438rem] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[25rem] max-w-[400px]"
                        >
                          Coming Soon
                        </Buttons>
                    </div>
                </div>

                {/* QuickShaw Auto Service Image - Responsive */}
                <div className="w-[45vw] sm:w-[40vw] md:w-[35vw] lg:w-[32.0625rem]
                              h-[20vh] sm:h-[22vh] md:h-[25vh] lg:h-[26.25rem]
                              min-w-[200px] max-w-[600px]
                              min-h-[150px] max-h-[500px]
                              flex-shrink-0 mt-[2rem]">
                    <img 
                      src="/Group 759.png" 
                      alt="QuickShaw Auto Service" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                </div>

               </div>

                {/* this is ensuring safety */}
               <div className="mt-[3rem] sm:mt-[5rem] lg:mt-[8.313rem] w-full h-[484px] bg-white overflow-hidden flex justify-between items-start  px-[2%] sm:px-[4%] lg:px-[6%] xl:px-[8%]">
                    
                    {/* SOS Image - Responsive */}
                    <div className="w-[45vw] sm:w-[40vw] md:w-[35vw] lg:w-[32.0625rem]
                                  h-[20vh] sm:h-[22vh] md:h-[25vh] lg:h-[26.25rem]
                                  min-w-[200px] max-w-[600px]
                                  min-h-[150px] max-h-[500px]
                                  flex-shrink-0 mt-[2rem]">
                      <img 
                        src="/sos.png" 
                        alt="SOS Emergency Service" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Ensuring Safety Text - Top Left of Parent */}
                    <div className="flex justify-start items-start flex-1 flex-col pr-[2rem]">
                        <div className="w-full max-w-[80%] font-extrabold font-[Archivo] 
                                      text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]
                                      text-left text-black
                                      leading-[1.2] tracking-[0.02em] ml-[10.375rem] mb-[1rem]">
                            Ensuring Safety
                        </div>
                        <div className="w-full max-w-[80%] ml-[10.375rem] mt-[2.5rem]">
                            <span className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-medium text-black leading-[1.4] tracking-[0.05em]">Full-time access to nearest emergency contact facilities like Police stations, proctor office, ambulance, & post-ride feedback facility for every driver.</span>
                            <Buttons 
                width="clamp(200px, 50vw, 400px)"
                height="clamp(50px, 10vh, 85px)"
                fontSize="clamp(1rem, 4vw, 2rem)"
                className="font-[Archivo] font-semibold leading-[1.4] tracking-[0.05em] align-middle mt-[3vh] sm:mt-[5vh] lg:mt-[2.438rem] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[25rem] max-w-[400px]"
              >
                know more
              </Buttons>
                        </div>
                        
                    </div>

               </div>

               {/* New Section - Same as Scan & Onboard */}
               <div className="w-full px-[2%] sm:px-[4%] lg:px-[6%] xl:px-[8%] mt-[2rem] sm:mt-[4rem] lg:mt-[7.438rem] h-[484px] bg-white overflow-hidden flex justify-between items-start">
                
                {/* Left side content container */}
                <div className="flex justify-start items-start flex-1 flex-col pr-[2rem]">
                    <div className="w-full max-w-[80%] font-extrabold font-[Archivo] 
                                  text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]
                                  text-left text-black
                                  leading-[1.2] tracking-[0.02em] mb-[1rem]">
                       Driver Reliability
                    </div>
                    
                    <div className="flex justify-start items-center w-full mb-[2vh]">
                        <img 
                          src="/Line 2.png" 
                          alt="Line 2" 
                          className="w-[9.0625rem] max-w-[7.552vw]" 
                        />
                    </div>
                    
                    <div className="w-full max-w-[80%] mt-[1rem]">
                        <span className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2rem] font-medium text-black leading-[1.4] tracking-[0.05em]">Ensuring responsible driver behavior and a smoother ride experience by a solid driver feedback system for quality checks and improvements.</span>
                        <Buttons 
                          width="clamp(200px, 50vw, 400px)"
                          height="clamp(50px, 10vh, 85px)"
                          fontSize="clamp(1rem, 4vw, 2rem)"
                          className="font-[Archivo] font-semibold leading-[1.4] tracking-[0.05em] align-middle mt-[3vh] sm:mt-[5vh] lg:mt-[2.438rem] w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[25rem] max-w-[400px]"
                        >
                          Coming Soon
                        </Buttons>
                    </div>
                </div>

                {/* QuickShaw Auto Service Image - Responsive */}
                <div className="w-[45vw] sm:w-[40vw] md:w-[35vw] lg:w-[32.0625rem]
                              h-[20vh] sm:h-[22vh] md:h-[25vh] lg:h-[26.25rem]
                              min-w-[200px] max-w-[600px]
                              min-h-[150px] max-h-[500px]
                              flex-shrink-0 mt-[2rem]">
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