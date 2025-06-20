import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Github() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/Rahul9134-glitc")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-gray-700 text-white">

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-10 bg-gray-600">
        {data.avatar_url && (
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg mb-6"
          />
        )}
        <h2 className="text-xl md:text-2xl font-semibold mt-4">GitHub Profile:</h2>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline mt-1 text-sm md:text-base"
        >
          {data.html_url}
        </a>
      </div>
      <div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center py-10 px-6">
        <div className="w-full max-w-xl space-y-4">
          <h1 className="text-xl md:text-2xl border p-3 rounded-2xl">
            <span className="text-amber-200">Username:</span> {data.login}
          </h1>
          <h1 className="text-xl md:text-2xl border p-3 rounded-2xl">
            Name: {data.name || "Not Provided"}
          </h1>

          {data.bio && (
            <div className="border p-4 rounded-2xl mt-6">
              <h1 className="text-xl md:text-2xl">
                <span className="font-bold">BIO:</span> {data.bio}
              </h1>
            </div>
          )}

          {/* Social Links */}
          <div className="flex gap-6 mt-8 justify-center">
            <Link to="/instagram" className="text-white hover:text-pink-500 text-2xl">
              <i className="fa-brands fa-square-instagram"></i>
            </Link>
            <Link to="/linkedin" className="text-white hover:text-blue-500 text-2xl">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
