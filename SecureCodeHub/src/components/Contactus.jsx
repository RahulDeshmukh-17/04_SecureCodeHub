import React from 'react'

export default function Contactus() {
  return (
    <div className="bg-gray-900 text-white">
    <section className="flex flex-col lg:flex-row items-start justify-center lg:justify-between py-20 px-10 lg:px-40 bg-black">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="mb-6">Reach out for further inquiries or assistance.</p>
            <ul className="space-y-4">
                <li className="flex items-center">
                    <svg className="w-6 h-6 mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 12a1 1 0 00-.73.29L5.3 18.3c-.37.37-.3.97.13 1.3.43.33 1.07.25 1.42-.13L12 13.41l5.15 6.06c.35.39 1 .47 1.42.14.43-.34.5-.93.13-1.3l-6-6.01A1 1 0 0012 12z" />
                    </svg>
                    contact@securedcodehub.com
                </li>
                <li className="flex items-center">
                    <svg className="w-6 h-6 mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21 15.87l-5.6-3.2v-3.4L21 6.27c.72-.42.72-1.45 0-1.87l-9-5.14c-.72-.42-1.64 0-1.64.87v14.8c0 .88.92 1.3 1.64.87l9-5.14c.72-.42.72-1.45 0-1.87zM3 9.27v5.46c0 .88.92 1.3 1.64.87l5.6-3.2v-3.4L4.64 8.4C3.92 8 3 8.42 3 9.27z" />
                    </svg>
                    +1-800-555-0199
                </li>
                <li className="flex items-center">
                    <svg className="w-6 h-6 mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2.04A9.96 9.96 0 002.04 12C2.04 17.5 6.5 22 12 22s9.96-4.5 9.96-9.96A9.96 9.96 0 0012 2.04zm0 18.18c-4.51 0-8.18-3.67-8.18-8.18S7.49 3.86 12 3.86s8.18 3.67 8.18 8.18-3.67 8.18-8.18 8.18zm.82-10.25c0 .64-.52 1.16-1.16 1.16s-1.16-.52-1.16-1.16v-1.3c0-.64.52-1.16 1.16-1.16s1.16.52 1.16 1.16v1.3z" />
                    </svg>
                    123 Cyber Lane, Tech City, 12345
                </li>
            </ul>
        </div>

        <div className="lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
            <form action="#" method="POST">
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-semibold">First Name</label>
                    <input type="text" id="firstName" name="firstName"
                        className="w-full mt-1 p-3 border border-gray-700 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                    <input type="email" id="email" name="email"
                        className="w-full mt-1 p-3 border border-gray-700 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold">Message</label>
                    <textarea id="message" name="message"
                        className="w-full mt-1 p-3 border border-gray-700 rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        rows="4"></textarea>
                </div>
                <div className="flex items-center mb-4">
                    <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-purple-600"/>
                    <label htmlFor="terms" className="ml-2 text-sm">I accept the terms</label>
                </div>
                <button type="submit"
                    className="w-full py-3 px-6 bg-purple-700 hover:bg-purple-800 rounded-lg text-white font-bold transition">
                    Join Today
                </button>
            </form>
        </div>
    </section>
    </div>
  )
}
