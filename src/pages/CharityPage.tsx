import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Coins, BookOpen, Users, Cookie, Droplets, Home, HelpingHand, ArrowRight } from 'lucide-react';

const CharityPage: React.FC = () => {
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

  // Charity programs
  const charityPrograms = [
    {
      title: "Zakat Distribution",
      icon: <Coins className="h-12 w-12 text-primary-500" />,
      description: "We ensure your Zakat reaches those most in need, including the poor, widows, orphans, and those in debt.",
      benefits: [
        "100% of your Zakat goes to eligible recipients",
        "Transparent distribution with regular reports",
        "Focused on sustainable impact"
      ],
      image: "https://images.pexels.com/photos/6647026/pexels-photo-6647026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Monthly Financial Aid",
      icon: <HelpingHand className="h-12 w-12 text-primary-500" />,
      description: "Support for families struggling with basic needs through monthly stipends and essential supplies.",
      benefits: [
        "Regular support for vulnerable families",
        "Financial counseling and budgeting help",
        "Path to self-sufficiency"
      ],
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Islamic Education",
      icon: <BookOpen className="h-12 w-12 text-primary-500" />,
      description: "Free Quran classes, Islamic studies, and educational programs for children and adults in underserved communities.",
      benefits: [
        "Qualified teachers and modern curriculum",
        "Age-appropriate learning materials",
        "Online and in-person options"
      ],
      image: "https://images.pexels.com/photos/7108298/pexels-photo-7108298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Orphan Sponsorship",
      icon: <Users className="h-12 w-12 text-primary-500" />,
      description: "Comprehensive support for orphans including education, healthcare, clothing, and emotional support.",
      benefits: [
        "Monthly sponsorship starting at $50",
        "Regular updates on your sponsored child",
        "Focus on long-term development"
      ],
      image: "https://images.pexels.com/photos/7108339/pexels-photo-7108339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Food & Water Programs",
      icon: <Cookie className="h-12 w-12 text-primary-500" />,
      description: "Distribution of food packages and clean water to communities facing scarcity and food insecurity.",
      benefits: [
        "Emergency food relief during crises",
        "Monthly food packages for families",
        "Clean water projects in water-scarce areas"
      ],
      image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Disaster Relief",
      icon: <Home className="h-12 w-12 text-primary-500" />,
      description: "Rapid response aid to communities affected by natural disasters, conflicts, and humanitarian crises.",
      benefits: [
        "Immediate emergency supplies",
        "Temporary shelter and medical care",
        "Long-term rebuilding assistance"
      ],
      image: "https://images.pexels.com/photos/6994985/pexels-photo-6994985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6646765/pexels-photo-6646765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Charity Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Making a difference in the lives of those in need through faith-based charitable initiatives.
            </p>
            <Link to="/donate" className="btn btn-accent text-dark">
              <Heart className="h-5 w-5 mr-2" />
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Our Approach</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Charity with Dignity and Impact</h3>
            <p className="text-gray-600 text-lg">
              Al Barakah Foundation's charity programs are designed to provide immediate relief 
              while fostering long-term sustainability and self-sufficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h4 className="text-2xl font-bold mb-6">Our Commitment to Excellence</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                    <Heart className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">100% Donation Policy</h5>
                    <p className="text-gray-600">
                      Every penny of your designated donations goes directly to the cause you select. 
                      Administrative costs are covered separately.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                    <Users className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Local & Global Reach</h5>
                    <p className="text-gray-600">
                      We serve communities both locally and internationally, focusing on areas with the greatest need.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                    <Droplets className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Sustainable Solutions</h5>
                    <p className="text-gray-600">
                      Beyond immediate aid, we focus on education, skills training, and infrastructure to create lasting change.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Transparent Reporting</h5>
                    <p className="text-gray-600">
                      Regular updates on all projects, with detailed financial reports available to donors.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img 
                src="https://images.pexels.com/photos/6646944/pexels-photo-6646944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Charity Work" 
                className="rounded-2xl shadow-medium w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent-500 text-dark p-6 rounded-2xl shadow-lg max-w-xs">
                <p className="font-heading text-xl mb-2">Our Impact</p>
                <p>Over 12,000 families supported across 8 countries in the last year alone.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Charity Programs Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Our Programs</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">How We Serve Communities</h3>
            <p className="text-gray-600 text-lg">
              Al Barakah Foundation offers a range of charity programs designed to address various needs in our communities.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {charityPrograms.map((program, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="rounded-2xl shadow-medium w-full h-auto object-cover"
                  />
                </div>
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    {program.icon}
                    <h4 className="text-2xl font-bold ml-4">{program.title}</h4>
                  </div>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  <h5 className="font-bold mb-4">Program Benefits:</h5>
                  <ul className="space-y-2 mb-6">
                    {program.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <ArrowRight className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-4">
                    <Link to="/donate" className="btn btn-primary">
                      <Heart className="h-5 w-5 mr-2" />
                      Support This Cause
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Impact Stories</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Lives Transformed Through Your Support</h3>
            <p className="text-gray-600 text-lg">
              Hear from those whose lives have been touched by Al Barakah Foundation's charity programs.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                story: "The monthly financial aid helped me support my three children after losing my husband. Now my oldest has graduated and is helping support our family.",
                name: "Amina K.",
                location: "Jordan",
                image: "https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                story: "The educational scholarship changed my life. I was able to complete my degree in medicine and now I volunteer at the same charity that helped me.",
                name: "Mohammed R.",
                location: "Pakistan",
                image: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                story: "After the earthquake destroyed our home, Al Barakah provided emergency shelter and helped us rebuild. We will forever be grateful for their support.",
                name: "Ali and Fatima S.",
                location: "Turkey",
                image: "https://images.pexels.com/photos/3933627/pexels-photo-3933627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="card"
                variants={fadeIn}
              >
                <div className="h-20 w-20 rounded-full overflow-hidden mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.story}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">How You Can Help</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h3>
            <p className="text-gray-600 text-lg">
              There are many ways you can contribute to our mission of service and charity.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Make a Donation",
                icon: <Heart className="h-10 w-10 text-primary-500" />,
                description: "Your financial contributions, large or small, help fund our programs and reach those in need.",
                action: "Donate Now",
                link: "/donate"
              },
              {
                title: "Volunteer Your Time",
                icon: <Users className="h-10 w-10 text-primary-500" />,
                description: "Join our team of dedicated volunteers to help with local programs, events, and fundraising.",
                action: "Learn More",
                link: "/contact"
              },
              {
                title: "Sponsor a Program",
                icon: <HelpingHand className="h-10 w-10 text-primary-500" />,
                description: "Businesses and organizations can sponsor specific programs or events to make a larger impact.",
                action: "Contact Us",
                link: "/contact"
              },
              {
                title: "Start a Fundraiser",
                icon: <Coins className="h-10 w-10 text-primary-500" />,
                description: "Organize your own fundraising event or online campaign to support our charitable initiatives.",
                action: "Get Started",
                link: "/contact"
              },
              {
                title: "Spread Awareness",
                icon: <BookOpen className="h-10 w-10 text-primary-500" />,
                description: "Share our mission with your friends, family, and social networks to help us reach more people.",
                action: "Share Now",
                link: "/contact"
              },
              {
                title: "Contribute Skills",
                icon: <Droplets className="h-10 w-10 text-primary-500" />,
                description: "Offer your professional expertise in areas like healthcare, education, or business consulting.",
                action: "Contact Us",
                link: "/contact"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="card"
                variants={fadeIn}
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <Link 
                  to={item.link} 
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600"
                >
                  {item.action}
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="bg-primary-500 text-white rounded-3xl p-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your support can change lives. Donate today to help us continue our mission of 
              serving communities through faith, compassion, and practical assistance.
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CharityPage;