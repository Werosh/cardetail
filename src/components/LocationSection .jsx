import React from "react";
import { MapPin, Phone } from "lucide-react";
import MapBack from "../images/background/MapBack.webp";

const LocationSection = () => {
  return (
    <section
      className="py-20 px-4 bg-gray-100"
      id="location"
      style={{
        backgroundImage: `url(${MapBack})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Locate Us...</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <MapPin size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Our Location</h3>
                <p className="text-gray-600">123 Detailing Street</p>
                <p className="text-gray-600">Car City, ST 12345</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Contact Us</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-gray-600">info@premiumdetailing.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md h-64">
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
    </section>
  );
};

export default LocationSection;
