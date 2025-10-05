'use client'
import { useState } from 'react'
import ComplaintSuccess from './ComplaintSuccess'

export default function ComplaintSection({ rideData, onBack }) {
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

    const handleComplaintSelect = (complaint) => {
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
            // Here you would typically send the complaint to your backend
            console.log('Complaint submitted:', {
                rideId: rideData.id,
                type: selectedComplaint,
                message: complaintText,
                date: new Date().toISOString()
            })
            
            // Show success component
            setShowSuccess(true)
        }
    }

    const handleCloseSuccess = () => {
        setShowSuccess(false)
        // Reset form
        setSelectedComplaint('')
        setComplaintText('')
        setShowTextArea(false)
        // Go back to previous screen
        onBack()
    }

    return (
        <>
            {showSuccess ? (
                <ComplaintSuccess onClose={handleCloseSuccess} />
            ) : (
                <div className="w-full min-h-screen bg-white">
            {/* Header */}
            <div className="w-full bg-white px-[4%] py-[2rem]">
                <div className="max-w-[600px] mx-auto">
                    <div className="flex items-center justify-between mb-[1rem]">
                        <h2 className="text-[1.5rem] font-bold text-black font-Archivo">
                            Complaint Section
                        </h2>
                        <button 
                            onClick={onBack}
                            className="text-gray-500 hover:text-gray-700 text-[1.5rem]"
                        >
                            ×
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full px-[4%]">
                <div className="max-w-[600px] mx-auto">
                    
                    {/* Ride Details Card */}
                    <div className="bg-[rgba(254,248,231,1)] rounded-lg p-[1.5rem] mb-[2rem] border border-gray-200">
                        <div className="flex items-start gap-[1rem]">
                            {/* Driver Card Image */}
                            <div className="flex-shrink-0">
                                <img 
                                    src="/Group502.png" 
                                    alt="Driver Card"
                                    className="w-[120px] h-[80px] object-contain"
                                />
                            </div>
                            
                            {/* Ride Details */}
                            <div className="flex-1 grid grid-cols-2 gap-[1rem] text-[0.75rem]">
                                <div>
                                    <div className="font-semibold text-black mb-[0.25rem]">Driver Name:</div>
                                    <div className="text-gray-700 mb-[0.5rem]">{rideData.driver}</div>
                                    
                                    <div className="font-semibold text-black mb-[0.25rem]">Vehicle Number:</div>
                                    <div className="text-gray-700 mb-[0.5rem]">{rideData.vehicleNumber}</div>
                                    
                                    <div className="font-semibold text-black mb-[0.25rem]">Date:</div>
                                    <div className="text-gray-700">{rideData.fullDate}</div>
                                </div>
                                
                                <div>
                                    <div className="font-semibold text-black mb-[0.25rem]">Driver Mobile:</div>
                                    <div className="text-gray-700 mb-[0.5rem]">XXXXXX XXXXX</div>
                                    
                                    <div className="font-semibold text-black mb-[0.25rem]">Vehicle Name:</div>
                                    <div className="text-gray-700 mb-[0.5rem]">{rideData.vehicle}</div>
                                    
                                    <div className="font-semibold text-black mb-[0.25rem]">Ride ID:</div>
                                    <div className="text-gray-700">RIDE{rideData.id.toString().padStart(6, '0')}</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Rating Section */}
                        <div className="mt-[1rem] pt-[1rem] border-t border-gray-300">
                            <div className="flex items-center gap-[0.5rem]">
                                <span className="text-[0.75rem] font-semibold text-black">RATE DRIVE:</span>
                                <div className="flex gap-[0.25rem]">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <div key={star} className="w-[16px] h-[16px] border border-gray-400 rounded-sm"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Type of Complaint Section */}
                    <div className="bg-[rgba(254,248,231,1)] rounded-lg p-[1.5rem] border border-gray-200">
                        <h3 className="text-[1.125rem] font-bold text-black mb-[1.5rem]">Type of Complaint</h3>
                        
                        <div className="space-y-[0.75rem]">
                            {complaintTypes.map((complaint, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between py-[0.5rem]">
                                        <label 
                                            className="text-[0.875rem] text-black cursor-pointer flex-1"
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
                                            className="w-[16px] h-[16px] border-2 border-gray-400 rounded-sm 
                                                     checked:bg-yellow-500 checked:border-yellow-500
                                                     focus:outline-none cursor-pointer"
                                        />
                                    </div>
                                    
                                    {/* Complaint Text Area - appears below selected complaint */}
                                    {showTextArea && selectedComplaint === complaint && (
                                        <div className="mt-[1rem] ml-[1rem] p-[1rem] bg-white rounded-lg border border-gray-300">
                                            <label className="block text-[0.875rem] font-semibold text-black mb-[0.75rem]">
                                                Describe your complaint about "{complaint}":
                                            </label>
                                            <textarea
                                                value={complaintText}
                                                onChange={(e) => setComplaintText(e.target.value)}
                                                placeholder="Please provide details about your complaint..."
                                                className="w-full h-[120px] p-[0.75rem] border-2 border-gray-300 rounded-lg
                                                         resize-none focus:outline-none focus:border-yellow-500
                                                         text-[0.875rem] text-black placeholder-gray-500"
                                            />
                                            
                                            {/* Submit Button */}
                                            <div className="flex justify-end mt-[1rem]">
                                                <button
                                                    onClick={handleSubmit}
                                                    disabled={!complaintText.trim()}
                                                    className="bg-[#FFB800] hover:bg-[#E6A600] disabled:bg-gray-300 disabled:cursor-not-allowed
                                                             text-black font-bold text-[0.875rem] px-[2rem] py-[0.75rem] rounded-lg
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
            )}
        </>
    )
}