import React from 'react'

export default function Join_now() {
  return (
    <div className="bg-black">

<section className="flex items-center justify-center h-screen">
    <div className="flex flex-col md:flex-row items-center bg-gray-900 p-6 rounded-lg shadow-lg max-w-5xl">
        <div className="text-white md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Ready to Secure Your Future?</h1>
            <p className="text-lg mb-6">Join SecuredCodeHub and take the first step towards a promising cybersecurity career.</p>
            <div className="space-x-4">
                <a href="#" className="bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-700">Join Today</a>
                <a href="#" className="border-2 border-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-600">Learn More</a>
            </div>
        </div>
        <div className="md:w-1/2">
            <img src="https://res.cloudinary.com/dmuecdqxy/image/upload/v1725997399/sxakgnq4topvdel9hspo.jpg" alt="Cybersecurity Robot" className="rounded-lg shadow-lg"></img>
        </div>
    </div>
</section>


    </div>
  )
}
