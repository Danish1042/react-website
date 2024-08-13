// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gray-900 p-4 rounded shadow text-yellow-500">
      {/* <h2 className="text-xl font-bold mb-4">Contact Us</h2> */}
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input type="text" id="username" name="username" placeholder='Jane' className="w-full px-3 py-2 rounded-md bg-gray-800 text-yellow-300 focus:outline-none focus:bg-gray-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input type="email" id="email" name="email" placeholder='jane@example.com' className="w-full px-3 py-2 rounded-md bg-gray-800 text-yellow-300 focus:outline-none focus:bg-gray-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows="1" placeholder='Type your message here...' className="w-full px-3 py-2 rounded-md bg-gray-800 text-yellow-300 focus:outline-none focus:bg-gray-700"></textarea>
        </div>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-md focus:outline-none">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
