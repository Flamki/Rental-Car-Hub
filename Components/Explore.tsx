// Import necessary modules and styles
import React from 'react';
import Image from 'next/image';

const Section3: React.FC = () => {
  return (
    <section id="section3" className="car-deals py-16 text-center">
      <h2 className="text-3xl font-semibold mb-8 animate__animated animate__fadeIn">Explore our Top Deals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <CarCard
          imageSrc="/wagonrwagonrrightfrontthreequarter.jpg"
          alt="Car 1"
          title="wagonr"
          description="Description of Car Model 1."
        />
        <CarCard
          imageSrc="/citycityrightfrontthreequarter.jpg"
          alt="Car 2"
          title="Car honda city"
          description="Description of Car Model 2."
        />
        <CarCard
          imageSrc="/ertigaertigarightfrontthreequarter.jpg"
          alt="Car 3"
          title="ertiga"
          description="Description of Car Model 3."
        />
        <CarCard
          imageSrc="/nexonnexonrightfrontthreequarter.jpg"
          alt="Car 4"
          title="tata nexon"
          description="Description of Car Model 4."
        />
        <CarCard
          imageSrc="/endeavourendeavourrightfrontthreequarter.jpg"
          alt="Car 5"
          title="endeavour"
          description="Description of Car Model 5."
        />
        <CarCard
          imageSrc="/fortunerfortunerrightfrontthreequarter.jpg"
          alt="Car 6"
          title="fortuner"
          description="Description of Car Model 6."
        />
        <CarCard
          imageSrc="/thartharrightfrontthreequarter.jpg"
          alt="Car 7"
          title="mahindra thar"
          description="Description of Car Model 7."
        />
        <CarCard
          imageSrc="/rapidrapidrightfrontthreequarter.jpg"
          alt="Car 8"
          title="skoda rapid"
          description="Description of Car Model 8."
        />
      </div>
    </section>
  );
};

// CarCard component to represent each car in the list
const CarCard: React.FC<{ imageSrc: string; alt: string; title: string; description: string }> = ({
  imageSrc,
  alt,
  title,
  description,
}) => {
  return (
    <div className="car bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:rotate-3 hover:animate-bounce">
      <Image src={imageSrc} alt={alt} width={300} height={200} objectFit="cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Section3;
