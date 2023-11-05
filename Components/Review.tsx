"use client"
// Import necessary modules and styles
import Image from 'next/image';

const CustomerReviewsSection = () => {
  return (
    <section id="section5" className="customer-reviews py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Customer Reviews</h2>

      <div className="review-container">
        <div className="review card animate-fade-in">
          <div className="card-inner">
            <div className="reviewer-info">
              <Image src="/testimonial-1.jpg" alt="User 1" width={80} height={80} className="rounded-full" />
              <p className="text-xl font-semibold mt-2">John Doe</p>
            </div>
            <div className="review-content">
              <p className="text-gray-700">Impressed with the seamless booking process and top-notch customer service. Will definitely rent from Car Hub again!</p>
            </div>
          </div>
        </div>

        <div className="review card animate-fade-in">
          <div className="card-inner">
            <div className="reviewer-info">
              <Image src="/testimonial-2.jpg" alt="User 2" width={80} height={80} className="rounded-full" />
              <p className="text-xl font-semibold mt-2">Jane Smith</p>
            </div>
            <div className="review-content">
              <p className="text-gray-700">Car Hub made our road trip unforgettable. The car was clean and well-maintained, and the staff was incredibly helpful.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add the style directly within the component */}
      <style jsx>{`
        .review-container {
          display: flex;
          justify-content: space-around;
          max-width: 800px;
          margin: 0 auto;
        }

        .card {
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: transform 0.5s;
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin: 0 8px;
        }

        .card:hover {
          transform: rotateY(180deg);
        }

        .card-inner {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.5s;
          background-color: #ffedc1;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .card:hover .card-inner {
          transform: rotateY(180deg);
        }

        .reviewer-info {
          text-align: center;
          padding: 20px;
        }

        .review-content {
          padding: 20px;
          border-top: 1px solid #e0e0e0;
          color: #000; /* Change text color when card is flipped */
        }

        .animate-fade-in {
          opacity: 0;
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CustomerReviewsSection;
