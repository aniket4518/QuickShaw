'use client'
import Image from 'next/image'
 
 
export default function ComplaintSuccess({ onClose }: { onClose: () => void }) {
    return (
        <div className="w-full min-h-screen bg-white">
          
            
            
            
            <div className="w-full px-[4%] py-[2rem]">
                <div className="max-w-[600px] mx-auto text-center">
                    <h2 className="text-[1.5rem] font-bold text-black mb-[3rem] font-Archivo">
                        Complaint Section
                    </h2> 
                    <div className="flex items-center justify-center mb-[3rem]"> 
                        <div 
                            className="flex items-center justify-center rounded-full relative"
                            style={{
                                width: '280px',
                                height: '280px',
                                backgroundColor: 'rgba(255, 174, 0, 0.55)'
                            }}
                        >
                            {/* Inner Circle */}
                            <div 
                                className="flex items-center justify-center rounded-full"
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    backgroundColor: 'rgba(255, 174, 0, 1)'
                                }}
                            >
                                {/* Tick Image */}
                                <Image
                                    src="/tick.png"
                                    alt="Success Tick"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Success Message */}
                    <h3 className="text-[1.5rem] font-bold text-[#FFB800] mb-[1rem] font-Archivo">
                        Your complaint has been registered!!
                    </h3>
                    
                    <p className="text-gray-500 text-[1rem] mb-[3rem] leading-relaxed">
                        Our team has started working for it, will report back to you soon...
                    </p>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="bg-[#FFB800] hover:bg-[#E6A600] text-black font-bold 
                                 text-[1rem] px-[3rem] py-[0.875rem] rounded-lg
                                 transition-colors duration-300 font-Archivo"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}