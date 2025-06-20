import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, BookOpen, Landmark, Clock, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-500 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
        }}></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Al Barakah Foundation</h1>
            <p className="text-xl text-gray-100">
              Learn about our mission, vision, and the dedicated teams working to serve our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              className="bg-primary-50 p-8 rounded-2xl border border-primary-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="flex items-center mb-6">
                <Heart className="h-10 w-10 text-primary-500 mr-4" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Al Barakah Foundation is dedicated to empowering Muslim communities through 
                faith-based services, charitable initiatives, and educational programs.
              </p>
              <p className="text-gray-700">
                We strive to facilitate spiritual journeys through our Hajj and Umrah services, 
                provide support to those in need through our charitable programs, and foster 
                a deeper understanding of Islam through our educational resources.
              </p>
            </motion.div>

            <motion.div 
              className="bg-primary-50 p-8 rounded-2xl border border-primary-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-10 w-10 text-primary-500 mr-4" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We envision a world where Muslim communities are spiritually fulfilled, 
                socially empowered, and actively engaged in creating positive change.
              </p>
              <p className="text-gray-700">
                Through our work, we aim to build bridges of understanding, foster compassion, 
                and promote the values of Islam: peace, charity, and service to humanity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">A Journey of Faith &amp; Service</h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img 
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Al Barakah Foundation History" 
                className="rounded-2xl shadow-medium w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h4 className="text-2xl font-bold mb-6">Founded on Principles</h4>
              <p className="text-gray-700 mb-4">
                Al Barakah Foundation was established in 2010 by a group of dedicated Muslims who saw 
                the need for comprehensive community services that addressed both spiritual and practical needs.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small initiative to help local community members perform Hajj has grown 
                into a multi-faceted organization serving thousands of individuals across multiple countries.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've expanded our services to include charity programs, educational 
                initiatives, and community support services, all while maintaining our commitment to 
                excellence and Islamic values.
              </p>
              <p className="text-gray-700">
                Today, Al Barakah Foundation stands as a beacon of hope and support for Muslims around 
                the world, continuing our mission of service with the same passion and dedication that 
                inspired our founding.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Our Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Guided By Islamic Principles</h3>
            <p className="text-gray-600 text-lg">
              Our work is guided by core Islamic values that inform everything we do.
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
                icon: <Heart className="h-10 w-10 text-primary-500" />,
                title: "Compassion",
                description: "We approach all our work with genuine care and empathy for those we serve."
              },
              {
                icon: <Landmark className="h-10 w-10 text-primary-500" />,
                title: "Integrity",
                description: "We maintain the highest standards of honesty and transparency in all our operations."
              },
              {
                icon: <Users className="h-10 w-10 text-primary-500" />,
                title: "Community",
                description: "We believe in the power of community and work to strengthen bonds between Muslims."
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary-500" />,
                title: "Knowledge",
                description: "We value education and the pursuit of knowledge as a path to growth and understanding."
              },
              {
                icon: <Clock className="h-10 w-10 text-primary-500" />,
                title: "Excellence",
                description: "We strive for excellence in all our services, constantly seeking to improve and innovate."
              },
              {
                icon: <Award className="h-10 w-10 text-primary-500" />,
                title: "Accountability",
                description: "We hold ourselves accountable to our community, donors, and most importantly, to Allah (SWT)."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="card text-center"
                variants={fadeIn}
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Our Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Dedicated Team</h3>
            <p className="text-gray-600 text-lg">
              Our team of scholars, administrators, and volunteers work together to fulfill our mission.
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
                name: "Imam Abdullah Rahman",
                role: "Founder & Director",
                bio: "Imam Abdullah has over 20 years of experience in Islamic scholarship and community leadership.",
                image: "https://images.pexels.com/photos/8107799/pexels-photo-8107799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                name: "Dr. Aisha Malik",
                role: "Educational Director",
                bio: "Dr. Aisha oversees our educational programs and has a PhD in Islamic Education.",
                image: "https://images.pexels.com/photos/9615952/pexels-photo-9615952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                name: "Sheikh Omar Hassan",
                role: "Hajj & Umrah Director",
                bio: "Sheikh Omar has led over 50 Hajj and Umrah groups and ensures a spiritual journey for all pilgrims.",
                image: "https://images.pexels.com/photos/8446626/pexels-photo-8446626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                name: "Hana Zaidi",
                role: "Charity Programs Manager",
                bio: "Hana coordinates our charity initiatives and has a background in non-profit management.",
                image: "https://images.pexels.com/photos/7641955/pexels-photo-7641955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                name: "Mohammed Al-Farsi",
                role: "Financial Officer",
                bio: "Mohammed ensures transparency and effective management of all our financial resources.",
                image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                name: "Fatima Noor",
                role: "Community Outreach Coordinator",
                bio: "Fatima builds partnerships and manages our volunteer programs to extend our impact.",
                image: "https://images.pexels.com/photos/8368894/pexels-photo-8368894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="card overflow-hidden"
                variants={fadeIn}
              >
                <div className="h-64 overflow-hidden rounded-xl mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Certifications</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Credentials & Recognition</h3>
            <p className="text-gray-600 text-lg">
              Al Barakah Foundation is registered and recognized by several official bodies.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="card" variants={fadeIn}>
              <h4 className="text-xl font-bold mb-4">Official Registrations</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0">✓</span>
                  <span>Registered Non-Profit Organization (501(c)(3) Status)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0">✓</span>
                  <span>Licensed Hajj & Umrah Tour Operator</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0">✓</span>
                  <span>Accredited Islamic Educational Institution</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0">✓</span>
                  <span>Registered Charity Organization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div className="card" variants={fadeIn}>
              <h4 className="text-xl font-bold mb-4">Affiliations & Partnerships</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0">✓</span>
                  <span>Member of the National Council of Islamic Organizations</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0">✓</span>
                  <span>Partner with International Islamic Relief Organizations</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0">✓</span>
                  <span>Affiliated with Islamic Scholars Association</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0">✓</span>
                  <span>Collaborative Partner with Local Mosques and Islamic Centers</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;