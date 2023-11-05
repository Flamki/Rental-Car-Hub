"use client"
// Import necessary modules and styles
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const AboutUsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          } else {
            entry.target.classList.remove('animate-fade-in');
          }
        });
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="section4" className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
      <div className="container mx-auto flex items-center justify-between" ref={sectionRef}>
        <div className="about-us-section">
          <h2 className="text-5xl font-bold mb-4">About Us</h2>
          <div className="text">
            <p className="text-gray-200">
              Car Hub is more than just a rental service; we're your travel partner. With a diverse fleet and a commitment to exceptional service,
              we ensure your journey is memorable for all the right reasons. Our transparent pricing and easy booking process guarantee a hassle-free
              experience. Founded with a vision to revolutionize car rentals, Car Hub is your trusted name in transportation. Let's embark on your
              next adventure together.
            </p>
          </div>
        </div>
        <div className="image ml-8">
          <Image src="/pexels-photo-1213294.webp" alt="About Us Image" width={1000} height={950} className="rounded-md shadow-md" />
        </div>
      </div>

      {/* Add the style directly within the component */}
      <style jsx>{`
        /* Add these styles for the fade-in animation */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;
