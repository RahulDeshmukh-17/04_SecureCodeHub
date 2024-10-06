import React from 'react'

export default function Home() {
  return (
    <>
    <div className="bg-[#1F0C4E] text-white font-sans">

<nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8 h-36">
  <div className="text-2xl font-bold">SecuredCodeHub</div>
  <div className="space-x-8">
    <a href="#" className="hover:text-gray-300">Home</a>
    <a href="#" className="hover:text-gray-300">Courses</a>
    <a href="#" className="hover:text-gray-300">Testimonials</a>
    <a href="#" className="hover:text-gray-300">Contact Us</a>
  </div>
  <button className="bg-purple-500 text-white px-6 py-2 rounded-full">Join Now</button>
</nav>

<section className="max-w-7xl mx-auto flex flex-col items-center text-center px-8 py-12 lg:flex-row lg:text-left lg:px-16 lg:py-16">
  <div className="lg:w-1/2 space-y-4 lg:space-y-6">
    <h1 className="text-[8rem] lg:text-6xl font-bold">Master Cybersecurity & Ethical Hacking</h1>
    <p className="text-xl lg:text-2xl mb-6">Unlock your potential in cybersecurity with our comprehensive courses taught by industry experts. Start your journey today and become a certified ethical hacker.</p>

    <div className="space-x-4 mb-8">
      <button className="bg-purple-500 px-6 py-3 text-lg font-semibold rounded-full transition duration-300 hover:bg-purple-600">
        Join Today
      </button>
      <button className="border border-white px-6 py-3 text-lg font-semibold rounded-full transition duration-300 hover:border-purple-500 hover:text-purple-500">
        Join Now
      </button>
    </div>

    <div className="flex justify-center lg:justify-start space-x-8 mt-4 lg:mt-6 mb-10">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">10k+</h2>
        <p className="text-gray-300">students enrolled</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">500+</h2>
        <p className="text-gray-300">graduates</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">4.9</h2>
        <p className="text-gray-300">ratings</p>
      </div>
    </div>
  </div>

  <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12">
    <img src="https://res.cloudinary.com/dmuecdqxy/q_auto/v1725999318/static/securedcodehubjpeg_1725999315_35025.jpg" alt="Cybersecurity illustration" className="w-full h-auto object-contain lg:max-w-lg mt-10 lg:mt-0"></img>
  </div>

</section>
    </div>

    </>
  )
}
