import React from "react";
import { Car, Droplets, Award, MapPin, Clock, CreditCard } from "lucide-react";

const AboutUsSection = () => {
  return (
    <div className="w-full bg-black py-16 font-sans relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-40">
        <img
          src="https://www.autotrainingcentre.com/wp-content/uploads/2014/02/Automotive-training.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-gray-200 text-sm uppercase tracking-wider mb-2">
            Sparkling Car Care
          </h2>
          <h1 className="text-4xl font-light text-gray-200 mb-6">
            ABOUT OUR DETAILING SERVICES
          </h1>
          <div className="w-20 h-1 bg-gray-300 mx-auto mb-8"></div>
        </div>

        {/* Content - Now right-aligned */}
        <div className="flex justify-end">
          {/* Right Content */}
          <div className="w-full md:w-1/2 bg-black/30 bg-opacity-70 p-6 rounded-lg">
            <p className="text-xl text-gray-200 leading-relaxed">
              At Sparkling Car Care, we're passionate about bringing out the best
              in every vehicle. We're a locally run car detailing business
              dedicated to restoring and protecting your car—inside and out—with
              meticulous care and attention to detail. Whether it's a deep
              interior clean, flawless exterior finish, or specialised services
              like paint correction and odour removal, we treat every vehicle as
              if it were our own. Our goal is simple: to make your car look, feel,
              and smell its absolute best, every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="/services">
                <button className="border border-gray-700 text-gray-300 hover:text-black cursor-pointer hover:bg-gray-100 py-3 px-6 rounded transition duration-300">
                  OUR SERVICES
                </button>
              </a>
              <a href="/contact">
                <button className="border border-gray-700 text-gray-300 hover:text-black cursor-pointer hover:bg-gray-100 py-3 px-6 rounded transition duration-300">
                  CONTACT US
                </button>
              </a>
              <a href="/packages">
                <button className="border border-gray-700 text-gray-300 hover:text-black cursor-pointer hover:bg-gray-100 py-3 px-6 rounded transition duration-300">
                  PACKAGES
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;