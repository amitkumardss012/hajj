import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, BookOpen, HandHeart, MapPin, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import ServiceCard from '../components/home/ServiceCard';
import StatCounter from '../components/home/StatCounter';
import TestimonialCard from '../components/home/TestimonialCard';

const HomePage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1537086/pexels-photo-1537086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          backgroundPosition: "center 30%"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/50"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering Communities Through Faith &amp; Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Al Barakah Foundation provides spiritual guidance, charity services, and facilitates 
              Hajj &amp; Umrah journeys for Muslims worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate" className="btn btn-accent text-dark">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </Link>
              <Link to="/hajj-umrah" className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                Explore Our Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">How We Serve The Community</h3>
            <p className="text-gray-600 text-lg">
              Al Barakah Foundation provides a range of services designed to support the Muslim 
              community spiritually, educationally, and financially.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <ServiceCard 
              icon={<MapPin className="h-10 w-10 text-primary-500" />}
              title="Hajj & Umrah"
              description="Comprehensive packages and guidance for your sacred journey to the holy sites of Makkah and Madinah."
              link="/hajj-umrah"
            />
            <ServiceCard 
              icon={<HandHeart className="h-10 w-10 text-primary-500" />}
              title="Charity & Zakat"
              description="Distribute your Zakat and Sadaqah to those most in need through our transparent charity programs."
              link="/charity"
            />
            <ServiceCard 
              icon={<BookOpen className="h-10 w-10 text-primary-500" />}
              title="Islamic Education"
              description="Free Quran classes, Islamic studies, and educational programs for children and adults."
              link="/about"
            />
            <ServiceCard 
              icon={<Users className="h-10 w-10 text-primary-500" />}
              title="Community Support"
              description="Financial aid, food programs, and resources for vulnerable members of our community."
              link="/charity"
            />
            <ServiceCard 
              icon={<Calendar className="h-10 w-10 text-primary-500" />}
              title="Events & Programs"
              description="Regular events, workshops, and programs to strengthen our community bonds."
              link="/about"
            />
            <ServiceCard 
              icon={<Star className="h-10 w-10 text-primary-500" />}
              title="Guidance & Counseling"
              description="Spiritual and personal counseling services from qualified Islamic scholars."
              link="/contact"
            />
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-primary-500 mb-4">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">A Foundation Built on Faith & Compassion</h3>
              <p className="text-gray-700 mb-6">
                Al Barakah Foundation was established in 2010 with a mission to serve the Muslim community 
                through spiritual guidance, educational resources, and charitable initiatives.
              </p>
              <p className="text-gray-700 mb-8">
                Our team of dedicated scholars, volunteers, and staff work tirelessly to ensure that 
                we provide the highest quality of service in all our programs, from organizing Hajj 
                and Umrah trips to distributing zakat to those most in need.
              </p>
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img 
                src="https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Al Barakah Foundation Community" 
                className="rounded-2xl shadow-medium w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary-500 text-white p-6 rounded-2xl shadow-lg max-w-xs">
                <p className="font-heading text-xl mb-2">Our Mission</p>
                <p>To empower Muslims through faith, education, and compassionate service.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary-500 text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-accent-500 mb-4">Our Impact</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Making A Difference Together</h3>
            <p className="text-gray-100 text-lg">
              Through the generous support of our donors and the dedication of our team, 
              we've been able to make a significant impact in our community and beyond.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <StatCounter number={5000} label="Hajj & Umrah Pilgrims" />
            <StatCounter number={12000} label="Families Supported" />
            <StatCounter number={8} label="Countries Reached" />
            <StatCounter number={25} label="Active Programs" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-beige">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">What Our Community Says</h3>
            <p className="text-gray-600 text-lg">
              Hear from those who have experienced our services and programs firsthand.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <TestimonialCard 
              quote="Al Barakah Foundation made my Hajj journey truly special. Their guides were knowledgeable and the accommodations were excellent."
              name="Ahmed Hassan"
              location="Chicago, IL"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <TestimonialCard 
              quote="The educational programs have been transformative for my children. They've learned so much about their faith in a supportive environment."
              name="Fatima Khan"
              location="Toronto, Canada"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <TestimonialCard 
              quote="During a difficult time, Al Barakah's financial aid program helped my family get back on our feet. I'm forever grateful for their support."
              name="Omar Farooq"
              location="London, UK"
              image="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="bg-primary-500 text-white rounded-3xl p-12 text-center relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
              <p className="text-xl mb-8">
                Your support can change lives. Donate today to help us continue our mission of 
                serving the community through faith, education, and compassion.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/donate" className="btn bg-accent-500 text-dark hover:bg-accent-400">
                  <Heart className="h-5 w-5 mr-2" />
                  Donate Now
                </Link>
                <Link to="/contact" className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;