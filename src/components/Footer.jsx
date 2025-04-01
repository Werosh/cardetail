import React from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top section with logo and quick links */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and company info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-2xl font-bold">
                <span className="text-red-600">PREMIUM</span> DETAILING
              </h1>
            </div>
            <p className="text-gray-400 mb-4">
              Premium automotive detailing services that deliver exceptional results for the most discerning car enthusiasts.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4 border-b-2 border-red-600 pb-2 inline-block">
              Our Services
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-red-600 transition-colors">
                <a href="#">Premium Detailing</a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="#">Ceramic Coating</a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="#">Paint Protection</a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="#">Interior Restoration</a>
              </li>
              <li className="hover:text-red-600 transition-colors">
                <a href="#">Wheel & Tire Care</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4 border-b-2 border-red-600 pb-2 inline-block">
              Contact Us
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-red-600 mr-2" size={18} />
                <span>123 Detailing Blvd, Luxury City, CA 90210</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-red-600 mr-2" size={18} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-red-600 mr-2" size={18} />
                <span>info@elitedetailing.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-red-600 mr-2" size={18} />
                <span>Mon-Fri: 8am-6pm | Sat: 9am-5pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright */}
      <div className="bg-zinc-900 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Elite Detailing. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer