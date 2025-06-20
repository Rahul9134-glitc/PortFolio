import React from "react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-amber-400 mb-8">
          Contact Us
        </h1>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/Rahul9134-glitc" target="_blank" rel="noreferrer">
            <i className="fab fa-github text-2xl hover:text-white"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100042418248602" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook text-2xl hover:text-pink-500"></i>
          </a>
          <a href="https://www.linkedin.com/in/rahul-vishwakarma-a74957360/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin text-2xl hover:text-blue-500"></i>
          </a>
        </div>

      </div>
    </div>
  );
}
