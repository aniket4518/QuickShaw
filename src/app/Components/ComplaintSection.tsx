'use client'
import { useState } from 'react'
import ComplaintSuccess from './ComplaintSuccess'

interface ComplaintSectionProps {
    rideData: {
        id: number
        driver: string
        vehicleNumber: string
        fullDate: string
        vehicle: string
    }
    onBack: () => void
}

export default function ComplaintSection({ rideData, onBack }: ComplaintSectionProps) {
    const [selectedComplaint, setSelectedComplaint] = useState('')
    const [complaintText, setComplaintText] = useState('')
    const [showTextArea, setShowTextArea] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const complaintTypes = [
        'Inappropriate behaviour',
        'Over pricing',
        'Bad vehicle condition',
        'Felt unsecure during the ride',
        'Overspeeding or inappropriate driving',
        'Taking unknown & remote routes',
        'Overcharging & uncomfortable ride',
        'Any other complaint'
    ]

    interface ComplaintSelectHandler {
        (complaint: string): void
    }

    const handleComplaintSelect: ComplaintSelectHandler = (complaint: string) => {
        if (selectedComplaint === complaint) {
            // If clicking the same complaint, toggle it off
            setSelectedComplaint('')
            setShowTextArea(false)
            setComplaintText('')
        } else {
            // If clicking a different complaint, select it
            setSelectedComplaint(complaint)
            setShowTextArea(true)
        }
    }

    const handleSubmit = () => {
        if (selectedComplaint && complaintText.trim()) {
             
            
             
            setShowSuccess(true)
        }
    }

    const handleCloseSuccess = () => {
        setShowSuccess(false)
         
        setSelectedComplaint('')
        setComplaintText('')
        setShowTextArea(false)
       
        onBack()
    }

    return (
        <>
            {showSuccess ? (
                <ComplaintSuccess onClose={handleCloseSuccess} />
            ) : (
                <div className="w-full min-h-screen bg-white flex justify-center py-8">
                    <div className="w-[92%] max-w-[760px] rounded-md p-6 bg-[#FEF8E7]">
                        {/* Header */}
                        <div className="w-full   px-4 py-4">
                            <div className="max-w-[680px] mx-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-[1.6rem] font-bold text-black font-Archivo">
                                        Complaint Section
                                    </h2>
                                    <button 
                                        onClick={onBack}
                                        className="text-gray-500 hover:text-gray-700 text-[1.6rem]"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="w-full px-4">
                            <div className="max-w-[680px] mx-auto">
                                {/* Driver Card (matches mock) */}
                                <div className="relative overflow-hidden rounded-lg p-6 mb-6 border border-[#F0DFAE] bg-white">
                                    
                                    <div className="absolute left-0 top-0 w-full h-[72px] -z-10">
                                        <img src="/Rectangle 710.png" alt="curve" className="w-full h-full object-cover"/>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        
                                        <div className="w-[120px] h-[120px] bg-[#efefef] rounded-sm flex-shrink-0" />

                                        <div className="flex-1 text-[0.95rem]">
                                            <div className="flex items-start justify-between">
                                                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                                                    <div className="font-semibold text-black">Driver Name</div>
                                                    <div className="text-gray-700">: {rideData.driver}</div>

                                                    <div className="font-semibold text-black">Vehicle Number</div>
                                                    <div className="text-gray-700">: {rideData.vehicleNumber}</div>

                                                    <div className="font-semibold text-black">DRS</div>
                                                    <div className="text-gray-700">: xxxxxx xxxxx</div>
                                                </div>

                                                {/* logo on the top-right */}
                                                <div className="ml-6 flex items-start">
                                                    <img src="/logo.png" alt="logo" className="w-[140px] h-auto object-contain" />
                                                </div>
                                            </div>

                                            <div className="mt-6 text-[0.95rem]">Valid upto : xx xx xxxx</div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="bg-[#FFF7E0] rounded-lg p-6 border border-[#F0DFAE]">
                                    <h3 className="text-[1.125rem] font-bold text-black mb-6">Type of Complaint</h3>

                                    <div className="space-y-3">
                                        {complaintTypes.map((complaint, index) => (
                                            <div key={index}>
                                                <div className="flex items-center justify-between py-3">
                                                    <label 
                                                        className="text-[0.95rem] text-black cursor-pointer flex-1"
                                                        htmlFor={`complaint-${index}`}
                                                    >
                                                        {complaint}
                                                    </label>
                                                    <input
                                                        id={`complaint-${index}`}
                                                        type="radio"
                                                        name="complaintType"
                                                        value={complaint}
                                                        checked={selectedComplaint === complaint}
                                                        onChange={() => handleComplaintSelect(complaint)}
                                                        className="w-[18px] h-[18px] border-2 border-gray-400 rounded-sm 
                                                                 checked:bg-yellow-500 checked:border-yellow-500
                                                                 focus:outline-none cursor-pointer"
                                                    />
                                                </div>

                                                {showTextArea && selectedComplaint === complaint && (
                                                    <div className="mt-3 ml-4 p-4 bg-white rounded-lg border border-gray-300">
                                                        <label className="block text-[0.95rem] font-semibold text-black mb-3">
                                                            Describe your complaint about "{complaint}":
                                                        </label>
                                                        <textarea
                                                            value={complaintText}
                                                            onChange={(e) => setComplaintText(e.target.value)}
                                                            placeholder="Please provide details about your complaint..."
                                                            className="w-full h-[120px] p-3 border-2 border-gray-300 rounded-lg
                                                                     resize-none focus:outline-none focus:border-yellow-500
                                                                     text-[0.95rem] text-black placeholder-gray-500"
                                                        />

                                                        <div className="flex justify-end mt-4">
                                                            <button
                                                                onClick={handleSubmit}
                                                                disabled={!complaintText.trim()}
                                                                className="bg-[#FFB800] hover:bg-[#E6A600] disabled:bg-gray-300 disabled:cursor-not-allowed
                                                                         text-black font-bold text-[0.95rem] px-6 py-3 rounded-lg
                                                                         transition-colors duration-300"
                                                            >
                                                                Submit Complaint
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}