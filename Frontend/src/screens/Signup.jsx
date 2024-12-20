import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (e.type === 'submit') {
      console.log(formData);
    }
  };

  return (
   <>
     <div className="flex flex-col gap-20 items-center justify-center min-h-screen ">
     <div className='text-3xl font-montserrat font-bold text-pinkButton text-center'>Join us today and start your journey!</div>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleChange} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              
              />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
              />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-pinkButton rounded-md hover:bg-pink-500 focus:outline-none focus:ring focus:ring-indigo-200"
            >
            Sign Up
          </button>
        </form>
      </div>
    </div>
             </>
  );
}
export default Signup;
