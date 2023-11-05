// Import necessary modules and styles
import React from 'react';
import Image from 'next/image';

const Steps: React.FC = () => {
  return (
    <section id="section2" className="steptobook bg-gray-100 mx-4 lg:mx-auto py-8 lg:py-12">
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-b">Rent with Three Easy Steps</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 py-5">
          <div className="feature col">
            <div className="locationicon">
              {/* ... (same as before) */}
            </div>
            <h3 className="text-xl font-semibold">Choose A Location</h3>
            <p>Discover a world of possibilities with our carefully curated rental car locations. From vibrant city centers to tranquil getaways, choose the backdrop for your next memorable journey.</p>
          </div>
          <div className="feature col">
            <div className="pickupdateicon">
              {/* ... (same as before) */}
            </div>
            <h3 className="text-xl font-semibold">Pick A Date</h3>
            <p>Select the dates that suit your itinerary best. Our flexible calendar ensures you find the perfect timeframe for your travel plans. Get ready to hit the road on your terms.</p>
          </div>
          <div className="feature col">
            <div className="bookicon">
              {/* ... (same as before) */}
            </div>
            <h3 className="text-xl font-semibold">Book A Car</h3>
            <p>Reserve your preferred vehicle hassle-free. Our intuitive booking system ensures a seamless experience. Lock in your choice and get set for an unforgettable travel adventure.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
