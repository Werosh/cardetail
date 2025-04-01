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
import AboutUsSection from "../components/AboutUsSection";

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

 

  return (
    <div className="min-h-screen bg-gray-900 font-[Inter]">
      {/* Hero Section */}
      <section className="relative h-screen bg-black font-[Inter]">
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
            <h1 className="text-5xl xl:text-9xl lg:text-7xl md:text-7xl font-bold mb-4 ">
            Sparkling Car Care
            </h1>
            <p className="text-2xl font-[Inter]  mb-8 max-w-2xl  py-2  bg-gradient-to-b from-transparent to-[#6441A5] rounded-bl-[80px] rounded-br-[80px]  px-5">
              Professional detailing services that bring your vehicle back to
              showroom condition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <motion.a
                href="tel:+61294384988"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-8 rounded-lg"
              >
                <Phone size={20} />
                CALL NOW
              </motion.a>

              <motion.a
                href="/contact"
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


      <AboutUsSection/>






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
