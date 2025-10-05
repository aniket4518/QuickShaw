"use client"
import { useState } from 'react'

export default function Ride(){
    const [passengerCount, setPassengerCount] = useState(1)
    const [selectedMode, setSelectedMode] = useState<'e-auto' | 'rickshaw' | null>(null)

    const incrementPassenger = () => {
        if (passengerCount < 4) {
            setPassengerCount(passengerCount + 1)
        }
    }

    const decrementPassenger = () => {
        if (passengerCount > 1) {
            setPassengerCount(passengerCount - 1)
        }
    }

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Main Content Container */}
            <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                
                {/* Desktop Horizontal Layout */}
                <div className="hidden lg:flex gap-3 xl:gap-8">
                    
                    {/* Left Column - Ride Details */}
                    <div className="w-[350px] flex-shrink-0">
                        <div className="mb-8">
                            <h2 className="text-[28px] xl:text-[32px] font-bold text-black mb-5">Ride details</h2>
                            
                            {/* Pickup Location */}
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-4 h-4 bg-black rounded-full mt-1.5 flex-shrink-0"></div>
                                <div className="flex-1">
                                    <p className="text-[15px] text-black leading-tight">Aryabhatta Hostel, IIT BHU, V...</p>
                                </div>
                            </div>

                            {/* Vertical dotted line */}
                            <div className="ml-2 border-l-2 border-dotted border-gray-400 h-4"></div>

                            {/* Drop Location */}
                            <div className="flex items-start gap-3 mb-5">
                                <div className="w-4 h-4 border-2 border-black bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                                <div className="flex-1">
                                    <p className="text-[15px] text-black leading-tight">Varanasi Junction, Cant, Vara...</p>
                                </div>
                            </div>

                            {/* Schedule & For Me Buttons */}
                            <div className="flex flex-wrap gap-3 mt-4">
                                <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-full text-black text-sm font-medium hover:bg-gray-200 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    Schedule
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-full text-black text-sm font-medium hover:bg-gray-200 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    For me
                                </button>
                            </div>
                        </div>
                    </div>

                     
                    <div className="w-1/3 flex-shrink-0">
                        {/* Add People Section */}
                        <div className="mb-8">
                            <h2 className="text-[28px] xl:text-[32px] font-bold text-black mb-5">Add people</h2>
                            
                            <div className="bg-white border border-gray-200 rounded-xl p-4">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-base text-black font-normal">Add 1 more passenger...</p>
                                    </div>

                                    {/* Passenger Counter */}
                                    <div className="flex items-center justify-center gap-3">
                                        <button 
                                            onClick={decrementPassenger}
                                            disabled={passengerCount <= 1}
                                            className="w-10 h-10 bg-white border-2 border-gray-300 disabled:border-gray-200 disabled:text-gray-300 rounded-md flex items-center justify-center text-2xl font-normal text-black hover:bg-gray-50 transition-colors"
                                        >
                                            −
                                        </button>
                                        <div className="w-12 h-10 bg-white border-2 border-gray-300 rounded-md flex items-center justify-center">
                                            <span className="text-lg font-medium text-black">{passengerCount}</span>
                                        </div>
                                        <button 
                                            onClick={incrementPassenger}
                                            disabled={passengerCount >= 4}
                                            className="w-10 h-10 bg-white border-2 border-gray-300 disabled:border-gray-200 disabled:text-gray-300 rounded-md flex items-center justify-center text-2xl font-normal text-black hover:bg-gray-50 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Carbon Emission Message */}
                                <div className="mt-3 text-xs text-gray-600">
                                    Add 1 more passenger to save 65 gm carbon emissions through your journey.
                                </div>
                            </div>
                        </div>

                        {/* Select Mode Section */}
                        <div className="mb-6">
                            <h2 className="text-[28px] xl:text-[32px] font-bold text-black mb-5">Select mode</h2>
                            
                            <div className="space-y-3">
                                {/* E-Auto Option */}
                                <div 
                                    onClick={() => setSelectedMode('e-auto')}
                                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                        selectedMode === 'e-auto' 
                                            ? 'border-black bg-gray-50' 
                                            : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                       
                                        <div className="w-[50px] h-[50px] bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                            <img src="/goldenauto.png" alt="E-Auto" className="w-full h-full object-contain p-2" />
                                        </div>
                                        <div>
                                            <h3 className="text-[16px] font-semibold text-black mb-0.5">E-Auto</h3>
                                            <p className="text-[12px] text-gray-600">Arrives in 3 mins | 👤</p>
                                        </div>
                                    </div>
                                    <div className="text-[18px] font-bold text-black">₹10/-</div>
                                </div>

                                {/* Rickshaw Option */}
                                <div 
                                    onClick={() => setSelectedMode('rickshaw')}
                                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                        selectedMode === 'rickshaw' 
                                            ? 'border-black bg-gray-50' 
                                            : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Rickshaw Icon */}
                                        <div className="w-[50px] h-[50px] bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                            <img src="/goldenauto.png" alt="Rickshaw" className="w-full h-full object-contain p-2" />
                                        </div>
                                        <div>
                                            <h3 className="text-[16px] font-semibold text-black mb-0.5">Rickshaw</h3>
                                            <p className="text-[12px] text-gray-600">Arrives in 4 mins | 👤</p>
                                        </div>
                                    </div>
                                    <div className="text-[18px] font-bold text-black">₹15/-</div>
                                </div>
                            </div>
                        </div>

                        {/* Book Button */}
                        <button 
                            disabled={!selectedMode}
                            className={`w-full py-4 rounded-xl text-lg font-semibold transition-all ${
                                selectedMode 
                                    ? 'bg-[#3D2F1F] hover:bg-[#2D1F0F] text-white cursor-pointer shadow-md' 
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                        >
                            {selectedMode ? `Book ${selectedMode === 'e-auto' ? 'E-Auto' : 'Rickshaw'}` : 'Book E-Auto'}
                        </button>
                    </div>

                    {/* Right Column - Map */}
                    <div className="w-1/3 flex-shrink-0">
                        <div className="w-full h-[500px] xl:h-[600px] bg-gray-100 rounded-xl overflow-hidden shadow-md sticky top-6">
                            <img 
                                src="/map.png" 
                                alt="Route Map" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Vertical Layout */}
                <div className="lg:hidden">
                    {/* Ride Details Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-5">Ride details</h2>
                        
                        {/* Pickup Location */}
                        <div className="flex items-start gap-1 mb-3">
                            <div className="w-4 h-4 bg-black rounded-full mt-1.5 flex-shrink-0"></div>
                            <div className="flex-1">
                                <p className="text-sm sm:text-[15px] text-black leading-tight">Aryabhatta Hostel, IIT BHU, V...</p>
                            </div>
                        </div>

                        {/* Vertical dotted line */}
                        <div className="ml-2 border-l-2 border-dotted border-gray-400 h-4"></div>

                        {/* Drop Location */}
                        <div className="flex items-start gap-3 mb-5">
                            <div className="w-4 h-4 border-2 border-black bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                            <div className="flex-1">
                                <p className="text-sm sm:text-[15px] text-black leading-tight">Varanasi Junction, Cant, Vara...</p>
                            </div>
                        </div>

                        {/* Schedule & For Me Buttons */}
                        <div className="flex flex-wrap gap-3 mt-4">
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-full text-black text-sm font-medium hover:bg-gray-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                Schedule
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-full text-black text-sm font-medium hover:bg-gray-200 transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                For me
                            </button>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mb-8 w-full">
                        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] bg-gray-100 rounded-xl overflow-hidden shadow-md">
                            <img 
                                src="/map.png" 
                                alt="Route Map" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Add People Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-5">Add people</h2>
                        
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm sm:text-base text-black font-normal">Add 1 more passenger...</p>
                                </div>

                                {/* Passenger Counter */}
                                <div className="flex items-center gap-3">
                                    <button 
                                        onClick={decrementPassenger}
                                        disabled={passengerCount <= 1}
                                        className="w-10 h-10 bg-white border-2 border-gray-300 disabled:border-gray-200 disabled:text-gray-300 rounded-md flex items-center justify-center text-2xl font-normal text-black hover:bg-gray-50 transition-colors"
                                    >
                                        −
                                    </button>
                                    <div className="w-12 h-10 bg-white border-2 border-gray-300 rounded-md flex items-center justify-center">
                                        <span className="text-lg font-medium text-black">{passengerCount}</span>
                                    </div>
                                    <button 
                                        onClick={incrementPassenger}
                                        disabled={passengerCount >= 4}
                                        className="w-10 h-10 bg-white border-2 border-gray-300 disabled:border-gray-200 disabled:text-gray-300 rounded-md flex items-center justify-center text-2xl font-normal text-black hover:bg-gray-50 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Carbon Emission Message */}
                            <div className="mt-3 text-xs sm:text-sm text-gray-600">
                                Add 1 more passenger to save 65 gm carbon emissions through your journey.
                            </div>
                        </div>
                    </div>

                    {/* Select Mode Section */}
                    <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-5">Select mode</h2>
                        
                        <div className="space-y-3">
                            {/* E-Auto Option */}
                            <div 
                                onClick={() => setSelectedMode('e-auto')}
                                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                    selectedMode === 'e-auto' 
                                        ? 'border-black bg-gray-50' 
                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                }`}
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    {/* E-Auto Icon */}
                                    <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <img src="/goldenauto.png" alt="E-Auto" className="w-full h-full object-contain p-2" />
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-[18px] font-semibold text-black mb-0.5">E-Auto</h3>
                                        <p className="text-xs sm:text-[13px] text-gray-600">Arrives in 3 mins | 👤</p>
                                    </div>
                                </div>
                                <div className="text-lg sm:text-[20px] font-bold text-black">₹10/-</div>
                            </div>

                            {/* Rickshaw Option */}
                            <div 
                                onClick={() => setSelectedMode('rickshaw')}
                                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                    selectedMode === 'rickshaw' 
                                        ? 'border-black bg-gray-50' 
                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                }`}
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    {/* Rickshaw Icon */}
                                    <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-gradient-to-br from-green-300 to-green-400 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <img src="/goldenauto.png" alt="Rickshaw" className="w-full h-full object-contain p-2" />
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-[18px] font-semibold text-black mb-0.5">Rickshaw</h3>
                                        <p className="text-xs sm:text-[13px] text-gray-600">Arrives in 4 mins | 👤</p>
                                    </div>
                                </div>
                                <div className="text-lg sm:text-[20px] font-bold text-black">₹15/-</div>
                            </div>
                        </div>
                    </div>

                    {/* Book Button */}
                    <button 
                        disabled={!selectedMode}
                        className={`w-full py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all ${
                            selectedMode 
                                ? 'bg-[#3D2F1F] hover:bg-[#2D1F0F] text-white cursor-pointer shadow-md' 
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        {selectedMode ? `Book ${selectedMode === 'e-auto' ? 'E-Auto' : 'Rickshaw'}` : 'Book E-Auto'}
                    </button>
                </div>
            </div>
        </div>
    )
}
