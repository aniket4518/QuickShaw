'use client'
import { useState } from 'react'
import ComplaintSection from './ComplaintSection'

export default function ComplaintForm({ onClose }:any) {
    type Ride = {
        id: number
        from: string
        to: string
        driver: string
        vehicle: string
        vehicleNumber: string
        fare: string
        time: string
        date: string
        fullDate: string
        sharedBy: string
        rating: string
    }

    const [selectedRide, setSelectedRide] = useState<Ride | null>(null)
    const [showComplaintSection, setShowComplaintSection] = useState(false)

    const rides: Ride[] = [
        {
            id: 1,
            from: "Aryabhatta Hostel, IIT BHU, Varanasi",
            to: "Swatantrata Bhawan, BHU, Varanasi",
            driver: "Gopal Gupta",
            vehicle: "E-Auto",
            vehicleNumber: "UP 65BQ 1462",
            fare: "₹35",
            time: "12:30 pm",
            date: "Friday",
            fullDate: "24-09-25",
            sharedBy: "3 users",
            rating: "90.01"
        },
        {
            id: 2,
            from: "Institute Gate, BHU, Varanasi",
            to: "Kashi Vishwanath Temple, Varanasi",
            driver: "Suresh Kumar",
            vehicle: "E-Auto",
            vehicleNumber: "UP 65AX 2020",
            fare: "₹35",
            time: "01:15 pm",
            date: "Friday",
            fullDate: "24-09-25",
            sharedBy: "2 users",
            rating: "88.50"
        }
    ]

    const handleRaiseComplaint = (rideId: number) => {
        const ride = rides.find(r => r.id === rideId)
        if (!ride) return

        setSelectedRide(ride)
        setShowComplaintSection(true)
    }

    const handleBackToRides = () => {
        setShowComplaintSection(false)
        setSelectedRide(null)
    }

    // Show complaint section if a ride is selected
    if (showComplaintSection && selectedRide) {
        return <ComplaintSection rideData={selectedRide} onBack={handleBackToRides} />
    }

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Header */}
            <div className="w-full bg-white px-[4%] py-[2rem]">
                <div className="max-w-[900px] mx-auto">
                    <div className="flex items-center justify-between mb-[1rem]">
                        <h2 className="text-[1.875rem] font-bold text-black font-Archivo">
                            Raise a complaint
                        </h2>
                        <button 
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-[1.5rem]"
                        >
                            ×
                        </button>
                    </div>
                    <p className="text-[0.9375rem] text-gray-700">
                        Rides you completed by you today
                    </p>
                </div>
            </div>

          
            <div className="w-full px-[4%]">
                <div className="max-w-[900px] mx-auto"> 
                         <div className="space-y-[1.5rem]">
                        {rides.map((ride) => (
                            <div key={ride.id} className="bg-[rgba(254,248,231,1)] rounded-lg p-[1.5rem] border-2 border-blue-500">
                                
                               
                                <div className="grid grid-cols-2 gap-[2rem] mb-[1rem]">
                                    <div className="flex items-center">
                                        <span className="text-[1rem] font-semibold text-black mr-[1rem]">From:</span>
                                        <div className="flex items-center">
                                            <svg className="w-[16px] h-[16px] text-black mr-[0.5rem]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-[0.875rem] text-gray-700">{ride.from}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-[1rem] font-semibold text-black mr-[1rem]">To:</span>
                                        <div className="flex items-center">
                                            <svg className="w-[16px] h-[16px] text-black mr-[0.5rem]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-[0.875rem] text-gray-700">{ride.to}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Row - Vehicle, Driver, Vehicle Number, Fare */}
                                <div className="grid grid-cols-4 gap-[1rem] items-center mb-[1rem]">
                                    {/* Vehicle with Auto Image */}
                                    <div className="flex items-center">
                                        <img 
                                            src="/goldenauto.png" 
                                            alt="Auto"
                                            className="w-[60px] h-[45px] object-contain mr-[0.75rem]"
                                        />
                                        <div>
                                            <div className="text-[0.875rem] font-semibold text-black mb-[0.25rem]">Vehicle:</div>
                                            <div className="bg-[#FFE5A3] border-[2.5px] border-[#FCB607] text-black text-[0.75rem] font-bold px-[0.75rem] py-[0.25rem] rounded">
                                                {ride.vehicle}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Driver Name */}
                                    <div>
                                        <div className="text-[0.875rem] font-semibold text-black mb-[0.25rem]">Driver name:</div>
                                        <div className="text-[0.875rem] text-gray-700">{ride.driver}</div>
                                    </div>

                                    {/* Vehicle Number */}
                                    <div>
                                        <div className="text-[0.875rem] font-semibold text-black mb-[0.25rem]">Vehicle number:</div>
                                        <div className="text-[0.875rem] text-gray-700">{ride.vehicleNumber}</div>
                                    </div> 
                                    <div>
                                        <div className="text-[0.875rem] font-semibold text-black mb-[0.25rem]">Fare amount paid:</div>
                                        <div className="text-[0.875rem] text-gray-700">{ride.fare}</div>
                                    </div>
                                </div>

                                 
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-[2rem]">
                                        <div>
                                            <span className="text-[0.875rem] font-semibold text-black">Ride shared by: </span>
                                            <span className="text-[0.875rem] text-gray-700">{ride.sharedBy}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-[16px] h-[16px] text-gray-600 mr-[0.25rem]" fill="currentColor" viewBox="0 0 20 20">
                                                <circle cx="10" cy="10" r="2" />
                                            </svg>
                                            <span className="text-[0.875rem] text-gray-700">
                                                {ride.time} | {ride.date} | {ride.fullDate}
                                            </span>
                                        </div>
                                    </div>
                                    
                                     
                                    <button
                                        onClick={() => handleRaiseComplaint(ride.id)}
                                        className="bg-[#FFB800] hover:bg-[#E6A600] text-black font-bold text-[0.875rem]
                                                 px-[1.5rem] py-[0.75rem] rounded
                                                 transition-colors duration-300"
                                    >
                                        Raise a complaint
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}