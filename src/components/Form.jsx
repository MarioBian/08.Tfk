import React from "react";

const Form = () => {
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
      >
        Options
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md bg-gray-800 shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Account
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Support
          </a>
          <button className="block w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-gray-700">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
