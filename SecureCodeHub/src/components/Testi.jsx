import React from 'react'

export default function Testi() {
  return (
    <div className="bg-black text-white font-sans">
      
    <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg p-6 shadow-lg">
            
            <div className="flex flex-col items-start mb-8">
                <h1 className="text-4xl font-bold mb-4">Hear From Our Successful Students</h1>
                <p className="text-gray-400 text-lg">Join our community of learners sharing their achievements and experiences. See how our courses influenced their careers.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                <div className="overflow-hidden rounded-lg">
                    <img src="https://res.cloudinary.com/dmuecdqxy/image/upload/v1725997399/b7ryf6fjuo7bhzi8krcw.jpg" alt="Scenic View" className="w-full h-auto"/>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg text-gray-300">
                    <p className="text-lg mb-4">SecuredCodeHub transformed my career, providing me with the necessary skills to succeed in the cybersecurity industry.</p>
                    <p className="font-bold text-white">John Doe</p>
                    <p className="text-sm text-gray-400">IT Specialist</p>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}
