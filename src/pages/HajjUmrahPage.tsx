import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Coffee, Home, Bus, Check, HelpCircle, Star } from 'lucide-react';

const HajjUmrahPage: React.FC = () => {
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

  const timelineItems = [
    {
      title: 'Application',
      description: 'Complete our simple online application form with your personal details.',
      icon: <Check className="h-6 w-6 text-white" />
    },
    {
      title: 'Documentation',
      description: 'Submit required documents including passport, photos, and medical forms.',
      icon: <Check className="h-6 w-6 text-white" />
    },
    {
      title: 'Payment',
      description: 'Secure your booking with a deposit and set up a payment plan if needed.',
      icon: <Check className="h-6 w-6 text-white" />
    },
    {
      title: 'Preparation',
      description: 'Attend our pre-departure orientation sessions and receive your travel package.',
      icon: <Check className="h-6 w-6 text-white" />
    },
    {
      title: 'Journey',
      description: 'Travel to Saudi Arabia with our experienced guides for your spiritual journey.',
      icon: <Check className="h-6 w-6 text-white" />
    }
  ];

  const faqItems = [
    {
      question: 'What is the difference between Hajj and Umrah?',
      answer: 'Hajj is the annual pilgrimage to Makkah that Muslims must perform once in their lifetime if they are physically and financially able. It takes place during specific days in the Islamic month of Dhul-Hijjah. Umrah is a shorter pilgrimage that can be performed at any time of the year.'
    },
    {
      question: 'How early should I book my Hajj package?',
      answer: 'We recommend booking your Hajj package at least 8-10 months in advance to ensure availability, as spots fill up quickly and visa processing takes time. For Umrah, 2-3 months advance booking is generally sufficient.'
    },
    {
      question: 'What documents do I need for Hajj or Umrah?',
      answer: 'You will need a valid passport with at least 6 months validity beyond your return date, passport-sized photographs, completed visa application forms, and proof of vaccination as required by Saudi authorities.'
    },
    {
      question: 'Do women need a Mahram to perform Hajj or Umrah?',
      answer: 'According to Saudi regulations, women under 45 years of age must be accompanied by a male Mahram (a relative whom she cannot marry) to obtain a Hajj or Umrah visa. Women over 45 may travel without a Mahram if they are traveling with an organized group.'
    },
    {
      question: 'What is included in your Hajj and Umrah packages?',
      answer: 'Our packages typically include flights, hotel accommodations, transportation within Saudi Arabia, visa processing, and guidance from experienced scholars. Specific inclusions vary by package type and are detailed in each package description.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2769931/pexels-photo-2769931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hajj &amp; Umrah Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Experience the journey of a lifetime with our comprehensive and spiritually enriching 
              Hajj and Umrah packages.
            </p>
            <Link to="/contact" className="btn btn-accent text-dark">
              Inquire Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hajj Packages Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Hajj Packages</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Complete Hajj Journey Packages</h3>
            <p className="text-gray-600 text-lg">
              Our Hajj packages are designed to provide a spiritually fulfilling experience with 
              comfort and comprehensive support.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Standard Hajj Package",
                duration: "18 Days",
                price: "$6,500",
                features: [
                  "3-star hotel accommodations",
                  "Economy class flights",
                  "Shared transportation",
                  "Daily meals (breakfast and dinner)",
                  "Guided spiritual sessions",
                  "Visa processing assistance"
                ],
                image: "https://images.pexels.com/photos/14755456/pexels-photo-14755456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                title: "Premium Hajj Package",
                duration: "21 Days",
                price: "$8,900",
                features: [
                  "4-star hotel accommodations",
                  "Economy class flights",
                  "Private transportation",
                  "Three meals daily",
                  "Daily spiritual guidance",
                  "Visa processing & support",
                  "Ziyarat tours included"
                ],
                image: "https://images.pexels.com/photos/12761344/pexels-photo-12761344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                title: "Executive Hajj Package",
                duration: "24 Days",
                price: "$12,500",
                features: [
                  "5-star hotel accommodations",
                  "Business class flight options",
                  "Private transportation",
                  "Luxury dining experience",
                  "VIP spiritual guidance",
                  "Priority visa processing",
                  "Extended Ziyarat tours",
                  "Closer accommodations to Haram"
                ],
                image: "https://images.pexels.com/photos/3029617/pexels-photo-3029617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }
            ].map((pkg, index) => (
              <motion.div 
                key={index}
                className="card border border-gray-100 overflow-hidden hover:shadow-medium transition-all"
                variants={fadeIn}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold">{pkg.title}</h4>
                    <div className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.duration}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary-500">{pkg.price}</span>
                    <span className="text-gray-500"> / person</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="block text-center w-full py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Umrah Packages Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Umrah Packages</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Year-Round Umrah Opportunities</h3>
            <p className="text-gray-600 text-lg">
              Perform the sacred pilgrimage of Umrah with our carefully crafted packages available throughout the year.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Basic Umrah Package",
                duration: "10 Days",
                price: "$2,200",
                features: [
                  "3-star hotel accommodations",
                  "Economy class flights",
                  "Shared transportation",
                  "Daily breakfast",
                  "Guided spiritual sessions",
                  "Visa processing assistance"
                ],
                image: "https://images.pexels.com/photos/789389/pexels-photo-789389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                title: "Standard Umrah Package",
                duration: "14 Days",
                price: "$3,500",
                features: [
                  "4-star hotel accommodations",
                  "Economy class flights",
                  "Private transportation",
                  "Daily breakfast and dinner",
                  "Daily spiritual guidance",
                  "Visa processing & support",
                  "Ziyarat tours included"
                ],
                image: "https://images.pexels.com/photos/9462371/pexels-photo-9462371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                title: "Premium Umrah Package",
                duration: "16 Days",
                price: "$4,900",
                features: [
                  "5-star hotel accommodations",
                  "Economy plus flight options",
                  "Private transportation",
                  "Three meals daily",
                  "VIP spiritual guidance",
                  "Priority visa processing",
                  "Extended Ziyarat tours",
                  "Closer accommodations to Haram"
                ],
                image: "https://images.pexels.com/photos/768097/pexels-photo-768097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }
            ].map((pkg, index) => (
              <motion.div 
                key={index}
                className="card border border-gray-100 overflow-hidden hover:shadow-medium transition-all"
                variants={fadeIn}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold">{pkg.title}</h4>
                    <div className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.duration}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary-500">{pkg.price}</span>
                    <span className="text-gray-500"> / person</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="block text-center w-full py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">What's Included</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Service Package</h3>
            <p className="text-gray-600 text-lg">
              Our Hajj and Umrah packages include everything you need for a spiritually fulfilling journey.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <MapPin className="h-10 w-10 text-primary-500" />,
                title: "Visa Processing",
                description: "Complete assistance with Saudi visa application and processing."
              },
              {
                icon: <Bus className="h-10 w-10 text-primary-500" />,
                title: "Transportation",
                description: "Comfortable transportation between all holy sites and accommodations."
              },
              {
                icon: <Home className="h-10 w-10 text-primary-500" />,
                title: "Accommodations",
                description: "Quality hotel stays in Makkah and Madinah with various comfort options."
              },
              {
                icon: <Coffee className="h-10 w-10 text-primary-500" />,
                title: "Meals & Refreshments",
                description: "Nutritious meals and refreshments throughout your journey."
              },
              {
                icon: <Calendar className="h-10 w-10 text-primary-500" />,
                title: "Guided Tours",
                description: "Educational Ziyarat tours of historical and religious sites."
              },
              {
                icon: <Star className="h-10 w-10 text-primary-500" />,
                title: "Spiritual Guidance",
                description: "Knowledgeable scholars providing religious instruction and guidance."
              },
              {
                icon: <Check className="h-10 w-10 text-primary-500" />,
                title: "Pre-Trip Orientation",
                description: "Comprehensive orientation sessions to prepare you for your journey."
              },
              {
                icon: <HelpCircle className="h-10 w-10 text-primary-500" />,
                title: "24/7 Support",
                description: "Round-the-clock assistance from our experienced team throughout your trip."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="card text-center"
                variants={fadeIn}
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Your Journey From Start to Finish</h3>
            <p className="text-gray-600 text-lg">
              We guide you through every step of the process to ensure a smooth and meaningful pilgrimage.
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-0">
              {timelineItems.map((item, index) => (
                <div key={index} className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 relative">
                    <div className={`bg-white p-6 rounded-2xl shadow-soft md:mx-6 ${index % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                      <h4 className="text-xl font-bold mb-2">{index + 1}. {item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <div className="bg-primary-500 rounded-full p-3 z-10">
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">FAQs</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h3>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our Hajj and Umrah services.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto divide-y divide-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {faqItems.map((faq, index) => (
              <motion.div 
                key={index}
                className="py-6"
                variants={fadeIn}
              >
                <h4 className="text-xl font-bold mb-3 flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-gray-600 pl-9">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <motion.div 
            className="bg-primary-500 text-white rounded-3xl p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Sacred Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your Hajj or Umrah plans and find the perfect package for your spiritual journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn bg-accent-500 text-dark hover:bg-accent-400">
                Contact Us
              </Link>
              <Link to="/about" className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HajjUmrahPage;