import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, User, AtSign, Send, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactPage: React.FC = () => {
  // Form handling
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would normally send the data to your backend
    alert('Message sent! We will get back to you soon.');
    reset();
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-500 text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
        }}></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100">
              We're here to answer your questions and provide assistance. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div 
              className="card text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="bg-primary-50 p-4 inline-flex rounded-full mb-6 mx-auto">
                <Phone className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us directly</p>
              <a href="tel:+11234567890" className="text-primary-500 font-medium hover:underline">
                +1 (123) 456-7890
              </a>
            </motion.div>

            <motion.div 
              className="card text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-primary-50 p-4 inline-flex rounded-full mb-6 mx-auto">
                <Mail className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us an email</p>
              <a href="mailto:info@albarakah.org" className="text-primary-500 font-medium hover:underline">
                info@albarakah.org
              </a>
            </motion.div>

            <motion.div 
              className="card text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-primary-50 p-4 inline-flex rounded-full mb-6 mx-auto">
                <MapPin className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-2">Visit our office</p>
              <address className="text-primary-500 font-medium not-italic">
                123 Islamic Center Blvd,<br />
                Anytown, ST 12345
              </address>
            </motion.div>

            <motion.div 
              className="card text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-primary-50 p-4 inline-flex rounded-full mb-6 mx-auto">
                <MessageSquare className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media</h3>
              <p className="text-gray-600 mb-4">Connect with us</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div 
              className="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      className={`input pl-10 ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AtSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      className={`input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="john@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      className="input pl-10"
                      placeholder="+1 (123) 456-7890"
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className={`input ${errors.subject ? 'border-red-500' : ''}`}
                    {...register("subject", { required: "Please select a subject" })}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Hajj Inquiry">Hajj Inquiry</option>
                    <option value="Umrah Inquiry">Umrah Inquiry</option>
                    <option value="Charity & Donations">Charity & Donations</option>
                    <option value="General Question">General Question</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`input ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="How can we help you?"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div 
              className="h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1659090167059!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al Barakah Foundation Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">Office Hours</h2>
            <p className="text-gray-600 text-lg mb-8">
              Visit us during our business hours or schedule an appointment for personalized assistance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Weekdays</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Thursday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Friday:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">Weekends</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;