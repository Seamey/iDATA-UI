import React from 'react';
import Image from 'next/image';

export type TestimonialProps = {
  name: string;
  position: string;
  company: string;
  text: string;
  imageUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, position, company, text, imageUrl }) => {
  return (
    <div className="border border-gray-300 p-5 rounded-lg shadow-lg flex items-center">
      <Image width={1000} height={1000} src={imageUrl} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{position}, {company}</p>
        <p className="mt-2 text-gray-700">{text}</p>
      </div>
    </div>
  );
}

export default Testimonial;
