export default function Download(){
    return(
        <div 
            className="w-full mt-[4rem] sm:mt-[5rem] lg:mt-[6.25rem] min-h-[80vh] px-[4%] py-[2rem]" 
            style={{backgroundColor: 'rgba(255, 249, 225, 1)'}}
        > 
           
            <div className="flex flex-col justify-center items-center mb-[3rem] sm:mb-[4rem] lg:mb-[6rem]"> 
                <span className="font-bold text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] text-black font-[Archivo] tracking-[0.05em] text-center">
                    Download the mobile-app
                </span>
            </div>

           
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[3rem] sm:gap-[4rem] lg:gap-[6rem] xl:gap-[8rem] relative">
           
                <div className="flex flex-col items-center text-center">
                    <img 
                        src="/dowloadapp.png" 
                        alt="Download Rider App" 
                        className="w-[120px] sm:w-[140px] lg:w-[150px] xl:w-[160px] h-auto object-contain mb-[1rem]"
                    />
                    <div className="text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-medium text-black text-center max-w-[200px] sm:max-w-[250px]">
                        QuickShaw: 3-wheeler ride booking
                    </div>
                </div>

                {/* Separator Line */}
                <div className="hidden lg:block">
                    <img 
                        src="/line1.png" 
                        alt="separator" 
                        className="h-[120px] sm:h-[140px] lg:h-[160px] xl:h-[176px] w-auto object-contain"
                    />
                </div>

                {/* Driver App */}
                <div className="flex flex-col items-center text-center">
                    <img 
                        src="/logo3.png" 
                        alt="Download Driver App" 
                        className="w-[120px] sm:w-[140px] lg:w-[150px] xl:w-[160px] h-auto object-contain mb-[1rem]"
                    />
                    <div className="text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-medium text-black text-center max-w-[200px] sm:max-w-[250px]">
                        QuickShaw: Driver
                    </div>
                </div>

            </div>
        </div>
    )
}