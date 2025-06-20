import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Coins, Users, BookOpen, Cookie, HandHeart, Banknote, CreditCard, CalendarClock, ArrowRight } from 'lucide-react';

const DonatePage: React.FC = () => {
  // State for donation amount and type
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<string>('general');
  const [donationFrequency, setDonationFrequency] = useState<string>('one-time');

  // Handle predefined amount selection
  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setDonationAmount('custom');
  };

  // Handle donation type selection
  const handleDonationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDonationType(e.target.value);
  };

  // Handle donation frequency selection
  const handleFrequencyChange = (frequency: string) => {
    setDonationFrequency(frequency);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    
    // Here you would typically integrate with a payment processor
    console.log({
      amount,
      type: donationType,
      frequency: donationFrequency
    });
    
    alert('Thank you for your generous donation!');
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Donate Today</h1>
            <p className="text-xl text-gray-100 mb-8">
              Your generosity powers our mission to serve communities through faith-based initiatives, 
              charity, and educational programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Donation Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="card shadow-medium">
                <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
                <form onSubmit={handleSubmit}>
                  {/* Donation Frequency */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className={`py-3 px-4 rounded-xl border-2 transition-all ${
                          donationFrequency === 'one-time'
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-primary-200'
                        }`}
                        onClick={() => handleFrequencyChange('one-time')}
                      >
                        <div className="flex items-center justify-center">
                          <Banknote className="h-5 w-5 mr-2" />
                          <span>One-time</span>
                        </div>
                      </button>
                      <button
                        type="button"
                        className={`py-3 px-4 rounded-xl border-2 transition-all ${
                          donationFrequency === 'monthly'
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-primary-200'
                        }`}
                        onClick={() => handleFrequencyChange('monthly')}
                      >
                        <div className="flex items-center justify-center">
                          <CalendarClock className="h-5 w-5 mr-2" />
                          <span>Monthly</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Donation Amount */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Amount
                    </label>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {['25', '50', '100', '250', '500', '1000'].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-3 px-4 rounded-xl border-2 transition-all ${
                            donationAmount === amount
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-gray-200 hover:border-primary-200'
                          }`}
                          onClick={() => handleAmountSelect(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        className={`input pl-8 ${
                          donationAmount === 'custom'
                            ? 'border-primary-500'
                            : 'border-gray-200'
                        }`}
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Donation Type */}
                  <div className="mb-8">
                    <label htmlFor="donationType" className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Type
                    </label>
                    <select
                      id="donationType"
                      className="input"
                      value={donationType}
                      onChange={handleDonationTypeChange}
                    >
                      <option value="general">General Donation</option>
                      <option value="zakat">Zakat</option>
                      <option value="sadaqah">Sadaqah</option>
                      <option value="hajj">Sponsor a Hajj</option>
                      <option value="orphan">Orphan Sponsorship</option>
                      <option value="education">Islamic Education</option>
                      <option value="food">Food & Water Programs</option>
                      <option value="disaster">Disaster Relief</option>
                    </select>
                  </div>

                  {/* Payment Section (Placeholder) */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4">Payment Information</h3>
                    <div className="p-4 bg-gray-50 rounded-xl text-center">
                      <p className="text-gray-600">
                        In a live implementation, this would integrate with a secure payment processor.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        We support all major credit cards, PayPal, and bank transfers.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Complete Donation
                  </button>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    All donations are secure and encrypted. By donating, you agree to our Terms of Service.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Donation Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Your Impact</h2>
                  <p className="text-gray-600 mb-6">
                    Your donation directly supports our programs and initiatives that help thousands 
                    of individuals and families in need. Here's how your contribution makes a difference:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <Coins className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold">$25</p>
                        <p className="text-gray-600">Provides food for a family for one week</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <Coins className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold">$50</p>
                        <p className="text-gray-600">Sponsors an orphan's education for one month</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <Coins className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold">$100</p>
                        <p className="text-gray-600">Provides clean water to a community</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <Coins className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold">$250</p>
                        <p className="text-gray-600">Supports emergency medical care for those in need</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <Coins className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold">$500</p>
                        <p className="text-gray-600">Helps fund our Islamic education programs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <Coins className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold">$1,000+</p>
                        <p className="text-gray-600">Contributes significantly to our Hajj sponsorship program</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card bg-primary-50 border border-primary-100">
                  <h3 className="text-xl font-bold mb-4">Why Donate to Al Barakah?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">100% of designated donations go directly to the causes you select</p>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Transparent reporting and updates on all projects</p>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Tax-deductible donations (501(c)(3) registered charity)</p>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Local and international programs with direct impact</p>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Focus on sustainable, long-term solutions</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Other Ways to Give</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <CreditCard className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold">Checks & Bank Transfers</p>
                        <p className="text-gray-600">Mail checks to our office or contact us for bank details</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <Users className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold">Corporate Matching</p>
                        <p className="text-gray-600">Many employers match charitable donations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-50 p-2 rounded-full mr-4 mt-1">
                        <HandHeart className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold">Planned Giving</p>
                        <p className="text-gray-600">Include Al Barakah in your will or estate planning</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-primary-500 mb-4">Donation Categories</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Support Programs That Matter To You</h3>
            <p className="text-gray-600 text-lg">
              Choose specific programs to support based on your interests and priorities.
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
                title: "Zakat",
                icon: <Coins className="h-10 w-10 text-primary-500" />,
                description: "Support the obligatory Islamic almsgiving that purifies wealth and helps those in need.",
                image: "https://images.pexels.com/photos/36466/doughnuts-money-donate-donuts.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                title: "Sadaqah",
                icon: <Heart className="h-10 w-10 text-primary-500" />,
                description: "Voluntary charity that brings blessings to both the giver and recipient.",
                image: "https://images.pexels.com/photos/7108372/pexels-photo-7108372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                title: "Sponsor a Hajj",
                icon: <HandHeart className="h-10 w-10 text-primary-500" />,
                description: "Help someone fulfill their religious obligation by sponsoring their pilgrimage.",
                image: "https://images.pexels.com/photos/3720166/pexels-photo-3720166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                title: "Orphan Sponsorship",
                icon: <Users className="h-10 w-10 text-primary-500" />,
                description: "Provide comprehensive support for orphaned children including education and healthcare.",
                image: "https://images.pexels.com/photos/8356764/pexels-photo-8356764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                title: "Islamic Education",
                icon: <BookOpen className="h-10 w-10 text-primary-500" />,
                description: "Support our educational programs that teach the Quran and Islamic studies.",
                image: "https://images.pexels.com/photos/8363764/pexels-photo-8363764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              {
                title: "Food & Water Programs",
                icon: <Cookie className="h-10 w-10 text-primary-500" />,
                description: "Help provide nutritious food and clean water to communities facing scarcity.",
                image: "https://images.pexels.com/photos/7108378/pexels-photo-7108378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="card overflow-hidden group"
                variants={fadeIn}
              >
                <div className="h-48 overflow-hidden mb-6">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h4 className="text-xl font-bold ml-3">{category.title}</h4>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <button 
                  className="btn btn-primary w-full"
                  onClick={() => {
                    setDonationType(category.title.toLowerCase().replace(/\s+/g, '-'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Donate to {category.title}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Zakat Calculator */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto bg-primary-50 rounded-2xl border border-primary-100 p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="flex items-center mb-6">
              <Coins className="h-10 w-10 text-primary-500 mr-3" />
              <h2 className="text-3xl font-bold">Zakat Calculator</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Zakat is an obligatory act of worship that requires Muslims to give 2.5% of their 
              wealth to those in need. Use our simplified calculator to estimate your Zakat.
            </p>
            
            <div className="p-6 bg-white rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">Simplified Zakat Calculation</h3>
              <p className="text-gray-600 mb-6">
                For a detailed calculation, please consult with an Islamic scholar. This is a basic estimator.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Value of Gold, Silver & Cash
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      placeholder="Enter value"
                      className="input pl-8"
                      disabled
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Value of Investments & Business Assets
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      placeholder="Enter value"
                      className="input pl-8"
                      disabled
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Debts & Liabilities
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      placeholder="Enter value"
                      className="input pl-8"
                      disabled
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Estimated Zakat (2.5%):</span>
                    <span className="text-xl font-bold text-primary-500">$0.00</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-4">
                  For a more accurate calculation, please contact our office to speak with a Zakat specialist.
                </p>
                <button className="btn btn-primary w-full" disabled>
                  Calculate Zakat
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Ready to fulfill your Zakat obligation? We ensure your Zakat reaches those who need it most.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setDonationType('zakat');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Heart className="h-5 w-5 mr-2" />
                Pay Your Zakat
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section pattern-bg">
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
              Find answers to common questions about donations and our charitable programs.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto divide-y divide-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                question: "Is my donation tax-deductible?",
                answer: "Yes, Al Barakah Foundation is a registered 501(c)(3) non-profit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that can be used for tax purposes."
              },
              {
                question: "How is my donation used?",
                answer: "Donations are used to fund our various programs including Hajj & Umrah sponsorship, charity initiatives, Islamic education, orphan support, food and water programs, and disaster relief. When you designate a specific program, 100% of your donation goes to that cause."
              },
              {
                question: "Can I specify how my donation is used?",
                answer: "Yes, you can select a specific program or cause when making your donation. If you have a particular project in mind that isn't listed, please contact us directly."
              },
              {
                question: "Do you accept non-monetary donations?",
                answer: "Yes, we accept in-kind donations such as clothing, food, and other essential items. Please contact our office to arrange drop-off or pick-up of these items."
              },
              {
                question: "How secure is my online donation?",
                answer: "We use industry-standard encryption and security measures to protect your personal and financial information. Our payment processing is handled by trusted third-party providers with robust security protocols."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="py-6"
                variants={fadeIn}
              >
                <h4 className="text-xl font-bold mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DonatePage;