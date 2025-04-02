import React from "react";
import { MapPin, Phone } from "lucide-react";
import MapBack from "../images/background/MapBack.webp";

const LocationSection = () => {
  return (
    <section className="py-20 px-4 bg-black" id="location">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl text-amber-100 font-bold text-center mb-12">
          Locate Us...
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" p-6 rounded-lg shadow-md h-full">
            <div className="flex items-start gap-4 mb-6">
              <MapPin size={58} className="text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-5xl mb-2 text-red-700">
                  Our Location
                </h3>
                <p className="text-gray-100 text-2xl">77/81 Reserve Rd,</p>
                <p className="text-gray-100 text-2xl">Artarmon NSW 2064</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={48} className="text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-5xl mb-2 text-red-700">
                  Contact Us
                </h3>
                <p className="text-gray-100 text-2xl">(02) 9438 4988</p>
                <p className="text-gray-100 text-2xl">
                  sparklingcarcare1@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg w-full h-full">
            <div className="aspect-video w-full h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4130.627978734494!2d151.1870256!3d-33.8158916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aed8a0f7fcb9%3A0x75b682048520f614!2sSparkling%20Car%20Care!5e0!3m2!1sen!2slk!4v1743506974028!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
