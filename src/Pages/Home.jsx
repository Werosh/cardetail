import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Star,
  MapPin,
  ChevronRight,
  Car,
  Droplets,
  CheckCircle,
  ArrowRight,
  SprayCan,
} from "lucide-react";

import BackIMg from "../images/background/background.webp";
import ServiceBackground from "../images/background/service_back.webp";
import ReviewBack from "../images/background/review_back.jpg";

import ReviewsSection from "../components/ReviewsSection";
import SlidingGallery from "../components/SlidingGallery";
import LocationSection from "../components/LocationSection ";

const Home = () => {
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "John D.",
      rating: 5,
      text: "My car looks brand new! Professional service and attention to detail.",
    },
    {
      id: 2,
      name: "Sarah M.",
      rating: 5,
      text: "Best detailing service in town. Worth every penny!",
    },
    {
      id: 3,
      name: "Mike T.",
      rating: 4,
      text: "Great work, very thorough and reasonably priced.",
    },
  ];

  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      url: "https://ncwashdetail.com/wp-content/uploads/2024/03/Auto-Detailing-Products.jpg",
      alt: "Before and after car detail",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxueXCp4KOQpeLMFR_O5c-CH2lbRURq6ORa-QoCwsdcYX_ldRvQsP6dpKcgx81HCoOj9w&usqp=CAU",
      alt: "Interior detailing",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyApR6dOXZVPEWHr8uegpQqJFYX-d9PLRVaw&s",
      alt: "Exterior polishing",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-[Poppins]">
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-black/50 z-10">
          <img
            src={BackIMg}
            alt="Luxury car being detailed"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl xl:text-8xl lg:text-7xl md:text-7xl font-bold mb-4 ">
              Premium Car Detailing
            </h1>
            <p className="text-xl  mb-8 max-w-2xl  py-2  bg-gradient-to-b from-transparent to-[#6441A5] rounded-bl-[80px] rounded-br-[80px]  px-5">
              Professional detailing services that bring your vehicle back to
              showroom condition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-8 rounded-lg"
              >
                <Phone size={20} />
                CALL NOW
              </motion.a>

              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1488CC] to-[#2B32B2] text-white font-bold py-3 px-8 rounded-lg"
              >
                <Calendar size={20} />
                BOOK NOW
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight size={30} className="text-white transform rotate-90" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white "
        style={{
          backgroundImage: `url(${ServiceBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 ">
            <h4 className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Expert Car Care Solutions
            </h4>
            <div className="flex justify-center mb-4 items-center text-center">
              <h2 className="text-4xl font-bold mb-4 text-black bg-gradient-to-b from-[#f8b500] to-transparent rounded-tr-4xl rounded-tl-4xl px-8 py-8">
                Premium Detailing Services
              </h2>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            {/* <p className="text-gray-800 max-w-2xl mx-auto font-semibold backdrop-blur-xl py-9 rounded-3xl">
              We deliver exceptional results using only professional-grade
              products and techniques to restore and protect your vehicle's
              appearance.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 p-10 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Car size={48} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Exterior Detailing</h3>
              <ul className="text-gray-600 text-left space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">Premium hand wash and dry</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Clay bar treatment for smooth-as-glass finish
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Ceramic coating or carnauba wax protection
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Wheel and tire detailing package
                  </span>
                </li>
              </ul>
              {/* <a
                href="/exterior-detailing"
                className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn More <ArrowRight size={16} className="inline ml-1" />
              </a> */}
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 p-10 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Droplets size={48} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interior Detailing</h3>
              <ul className="text-gray-600 text-left space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Deep steam cleaning for all surfaces
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Leather treatment and conditioning
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Stain removal and odor elimination
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    UV protection for dashboard and trim
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/60 p-10 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <SprayCan size={48} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Paint Correction</h3>
              <ul className="text-gray-600 text-left space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Multi-stage machine polishing
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Swirl, scratch, and oxidation removal
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Paint enhancement and restoration
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-black">
                    Long-term ceramic coating options
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}

      <ReviewsSection reviews={reviews} ReviewBack={ReviewBack} />

      {/* Gallery Section */}
      <SlidingGallery />

      {/* Location Section */}
      <LocationSection />
    </div>
  );
};

export default Home;
