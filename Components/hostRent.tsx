"use client"
import React from 'react';

const HostRent = () => {
  return (
    <div className="flex justify-center">
      <span className="mr-2">
        <button className="p-3 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:rotate-12 animate-pulse">
          RENT
        </button>
      </span>
      <span className="ml-2">
        <button className="p-3 bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out transform hover:-rotate-12 animate-pulse">
          HOST
        </button>
      </span>

      <style jsx>{`
        button {
          border-radius: 8px;
          cursor: pointer;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-pulse:hover {
          animation: pulse 1s ease infinite;
        }

        @keyframes rotate {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(12deg);
          }
        }

        .rotate:hover {
          animation: rotate 1s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default HostRent;
