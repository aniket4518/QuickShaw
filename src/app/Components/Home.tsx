import Navbar from "./Navbar"
import Offering from "./Offering"
import Download from "./Download"
import Social from "./Social"
import Footer from "./Footer"
import Complaint from "./Complaint"
import Link from "next/link"
export default function Home() {
  return (
    <div className="w-full h-full">
       
      <div className="bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat w-full min-h-[103vh] flex flex-col justify-start items-center relative pb-[4vh]">
        {/* Main Heading */}
        <h1 className="text-black mt-[8vh] sm:mt-[10vh] lg:mt-[12vh] 
                       font-bold text-center leading-[90%] 
                       text-[clamp(2rem,8vw,6rem)]
                       max-w-[95%] sm:max-w-[90%] px-4">
          From IIT BHU to Bharat
        </h1>
        
        {/* Subtitle */}
        <p className="text-black text-center text-[clamp(1rem,3vw,2.25rem)] mt-[4vh] font-normal max-w-[80%]">
          Choose the most convenient and safe mode of commute
        </p>
        
        
        <div className="flex flex-col sm:flex-row items-center justify-center 
                        gap-[3vh] sm:gap-[4vh] lg:gap-[5vh] 
                        mt-[5vh] w-[95%] max-w-[60rem] relative">
    
          {/* From Input Box */}
          <div className="relative w-full sm:w-1/2 max-w-[26.875rem]">
            <input 
              className="w-full 
                         h-[8vh] sm:h-[10vh] lg:h-[12vh] min-h-[60px] max-h-[120px]
                         border border-gray-300 rounded-lg 
                         text-[clamp(0.8rem,2.5vw,1.5rem)]
                         placeholder-gray-500 
                         pl-[5vw] sm:pl-[4vw] lg:pl-[3vw] 
                         pr-[4vw] sm:pr-[3vw] lg:pr-[2.5vw]
                         text-black bg-white" 
              style={{ 
                boxShadow: '0rem 0.125rem 0.9375rem 0rem #00000040',
                borderWidth: '0.04875rem'
              }}
              type="text" 
              placeholder="Enter pickup point" 
            />
            {/* From Icon */}
            <div className="absolute left-[2vw] sm:left-[1.5vw] lg:left-[1.2vw] top-1/2 transform -translate-y-1/2">
              <div className="w-[2vw] h-[2vw] sm:w-[1.5vw] sm:h-[1.5vw] lg:w-[1.2vw] lg:h-[1.2vw] min-w-[12px] min-h-[12px] max-w-[20px] max-h-[20px] bg-[url('/from.png')] bg-contain bg-center bg-no-repeat"></div>
            </div>
            {/* White Circle at Right End */}
            <div className="hidden sm:block absolute right-[8px] sm:right-[10px] top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] bg-white border-2 border-black rounded-full"></div>
            </div>
          </div>
          
          {/* Dotted Line - Hidden on Mobile, Visible on Desktop */}
          <div className="hidden sm:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
            <div className="w-[2vh] lg:w-[10vh] h-[2px] border-t-2 border-black border-dotted"></div>
          </div>
          
          {/* To Input Box */}
          <div className="relative w-full sm:w-1/2 max-w-[26.875rem]">
            <input 
              className="w-full 
                         h-[8vh] sm:h-[10vh] lg:h-[12vh] min-h-[60px] max-h-[120px]
                         border border-gray-300 rounded-lg 
                         text-[clamp(0.8rem,2.5vw,1.5rem)]
                         placeholder-gray-500 
                         pl-[5vw] sm:pl-[4vw] lg:pl-[3.5vw]
                         pr-[2vw] sm:pr-[3vw] lg:pr-[2.5vw] 
                         text-black bg-white" 
              style={{ 
                boxShadow: '0rem 0.125rem 0.9375rem 0rem #00000040',
                borderWidth: '0.04875rem'
              }}
              type="text" 
              placeholder="Enter drop point" 

            />
            {/* Black Circle at Left End */}
            <div className="hidden sm:block absolute left-[10px] sm:left-[8px] top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] bg-black rounded-full"></div>
            </div>
             
            {/* To Icon */}
            <div className="absolute left-[2vw] sm:left-[1.5vw] lg:left-[1.2vw] top-1/2 transform -translate-y-1/2">
              <div className="w-[2vw] h-[2vw] sm:w-[1.5vw] sm:h-[1.5vw] lg:w-[1.2vw] lg:h-[1.2vw] min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] bg-[url('/to.png')] bg-contain bg-center bg-no-repeat pl-8"></div>
            </div>
          </div>
        </div>

         <Link href="/ride"> 
        <button 
          className="h-[12vh] sm:h-[14vh] lg:h-[16vh] min-h-[80px] max-h-[140px]
                     w-[90%] max-w-[56.9375rem] 
                     sm:w-[70%] 
                     md:w-[65%] 
                     lg:w-[60%] 
                     xl:w-[56.9375rem]
                     bg-[rgba(252,182,7,1)] hover:bg-yellow-500 
                     text-black font-bold 
                     text-[clamp(1rem,3vw,2.5rem)]
                     rounded-2xl mt-[6vh] 
                     transition-colors duration-200 
                     shadow-[0rem_0.125rem_0.5rem_0rem_#00000040]
                     cursor-pointer"
        >
          Ride now
        </button>
        </Link>
      </div>
      <Offering/>
      <Download/>
      <Social/>
      <Complaint/>
      <Footer/>
    </div>
  )
}
