import React from "react";
import { MapPin, Phone } from "lucide-react";
import MapBack from "../images/background/MapBack.webp";

const LocationSection = () => {
  return (
    <section
      className="py-20 px-4 bg-black"
      id="location"
      // style={{
      //   backgroundImage: `url(${MapBack})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-amber-100 font-bold text-center mb-12">Locate Us...</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/45 p-6 rounded-lg shadow-md h-full">
            <div className="flex items-start gap-4 mb-6">
              <MapPin size={28} className="text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Our Location</h3>
                <p className="text-gray-100 text-lg">123 Detailing Street</p>
                <p className="text-gray-100 text-lg">Car City, ST 12345</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={28} className="text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Contact Us</h3>
                <p className="text-gray-100 text-lg">(555) 123-4567</p>
                <p className="text-gray-100 text-lg">info@premiumdetailing.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg w-full h-full">
            <div className="aspect-video w-full h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369674847443!3d40.71277447933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Street%2C%20New%20York%2C%20NY%2010006!5e0!3m2!1sen!2sus!4v1648482801382!5m2!1sen!2sus"
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