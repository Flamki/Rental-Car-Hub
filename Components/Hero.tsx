"use client"
import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-5 pb-32 md:gap-28 lg:py-10 xl:flex-row">
      <div className="hero-content flex-1 p-8">
        <h1 className="font-bold text-2xl lg:text-5xl">Explore the World with Our Premium Cars</h1>
        <p className="text-base mt-1 text-gray-500 xl:max-w-[520px]">Experience the thrill of driving in luxury and comfort.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="input-item">
            <label htmlFor="location" className="block mb-2 text-sm">Location</label>
            <input type="text" id="location" placeholder="Enter Location" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="input-item">
            <label htmlFor="pickup-date" className="block mb-2 text-sm">Pickup Date</label>
            <input type="date" id="pickup-date" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="input-item">
            <label htmlFor="return-date" className="block mb-2 text-sm">Return Date</label>
            <input type="date" id="return-date" className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>
        <div className="flex w-full gap-3 mt-6 sm:flex-row">
          <Button type="button" title="Book Now" variant="btn_green" />
        </div>
      </div>

      <div className="relative flex-1 items-start mt-10">
        <Image src="/about.png" alt="image" width={10000} height={10000} objectFit="cover" mt-10 />
      </div>

      <style jsx>{`
        .btn_green {
          background-color: #2ecc71;
          color: white;
          padding: 15px 30px;
          font-size: 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          box-shadow: 0px 8px 15px rgba(46, 204, 113, 0.3);
        }

        .btn_green:hover {
          background-color: #27ae60;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Hero;
