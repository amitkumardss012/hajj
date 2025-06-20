import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
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
      className="card group hover:translate-y-[-5px]"
      variants={cardVariant}
    >
      <div className="mb-6">{icon}</div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary-500 font-medium group-hover:text-primary-600"
      >
        Learn More
        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;