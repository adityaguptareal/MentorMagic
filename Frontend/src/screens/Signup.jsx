import React from 'react'

function Signup() {
   return (
      <div>
         <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
               <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  Responsive Form
               </h2>
               <form>
                  <div className="mb-4">
                     <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                     >
                        Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pinkButton"
                        placeholder="Enter your name"
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                     >
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pinkButton "
                        placeholder="Enter your email"
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                     >
                        Message
                     </label>
                     <textarea
                        id="message"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pinkButton"
                        rows="4"
                        placeholder="Enter your message"
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-pinkButton text-white py-2 rounded-md hover:bg-pink-500 transition"
                  >
                     Submit
                  </button>
               </form>
            </div>
         </div>
         );
         ;
      </div>
   )
}

export default Signup
