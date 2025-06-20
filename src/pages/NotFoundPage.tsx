import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pattern-bg">
      <div className="container-custom text-center py-16">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-500">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mt-4 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="btn btn-primary inline-flex items-center"
        >
          <Home className="h-5 w-5 mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;