import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, location, image }) => {
  // Animation variant
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="card relative"
      variants={cardVariant}
    >
      <Quote className="h-10 w-10 text-primary-200 absolute top-6 right-6" />
      <p className="text-gray-700 mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;