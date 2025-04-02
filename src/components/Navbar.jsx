import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Droplets, Car, Star, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div
        className={`max-w-7xl mx-auto px-6  rounded-4xl font-sans ${
          scrolled ? "bg-black" : "bg-black/60"
        }`}
      >
        <div className="flex justify-between items-center h-24">
          {/* Logo with dramatic animated effect */}
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Droplets size={36} className="text-blue-600" />
              </motion.div>
              <motion.div
                className="absolute -right-2 -top-1"
                animate={{
                  y: [0, -8, 0],
                  x: [0, 2, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Car size={30} className="text-blue-100" />
              </motion.div>
              <motion.div
                className="absolute -right-4 -top-4"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  rotate: [0, 180, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} className="text-yellow-400" />
              </motion.div>
            </div>
            <div className="ml-3">
              <motion.span
                className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#A1FFCE] to-[#FAFFD1]"
                animate={{
                  textShadow: [
                    "0px 0px 0px rgba(0,0,0,0)",
                    "0px 0px 10px rgba(59,130,246,0.5)",
                    "0px 0px 0px rgba(0,0,0,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Sparkling Car Care
              </motion.span>
            </div>
          </motion.a>

          {/* Desktop Navigation with shine effect */}
          <div className=" hidden md:flex md:items-center md:space-x-8 xl:items-center bg-gray-600/70 p-5 rounded-bl-4xl rounded-tr-4xl shadow-lg text-amber-50 font-semibold">
            <NavLink href="/" text="Home" />
            <NavLink href="/services" text="Services" />
            <NavLink href="/packages" text="Packages" />
            <NavLink href="/contact" text="Contact" />
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8 xl:items-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative ml-6 px-8 py-3 font-semibold rounded-br-3xl rounded-tl-3xl text-white overflow-hidden"
              style={{
                background: "linear-gradient(45deg, #3b82f6, #1d4ed8, #3b82f6)",
                backgroundSize: "200% 200%",
                animation: "gradientBg 3s ease infinite",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%", opacity: 0.3 }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                style={{ filter: "blur(8px)" }}
              />
              <span className="relative flex items-center ">
                BOOK NOW
                <Star className="ml-2 h-4 w-4" />
              </span>
            </motion.a>
          </div>

          {/* Mobile menu button with pulse effect */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-full bg-blue-600 text-white shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(37, 99, 235, 0)",
                "0px 0px 15px rgba(37, 99, 235, 0.7)",
                "0px 0px 0px rgba(37, 99, 235, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu with dramatic reveal */}
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="px-4 py-6 space-y-3 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600 rounded-b-3xl shadow-xl font-sans">
            <MobileNavLink
              href="/"
              text="Home"
              icon={<Home className="w-5 h-5" />}
            />
            <MobileNavLink
              href="/services"
              text="Services"
              icon={<Tool className="w-5 h-5" />}
            />
            <MobileNavLink
              href="/packages"
              text="Packages"
              icon={<Package className="w-5 h-5" />}
            />
            <MobileNavLink
              href="/contact"
              text="Contact"
              icon={<Mail className="w-5 h-5" />}
            />
            <motion.a
              href="/booking"
              whileHover={{ scale: 1.05, x: 5 }}
              className="block w-full text-center px-6 py-4 mt-6 font-bold rounded-xl text-blue-900 bg-gradient-to-r from-yellow-300 to-yellow-400 shadow-lg"
            >
              <span className="flex items-center justify-center">
                <Star className="mr-2 h-5 w-5" />
                BOOK YOUR PREMIUM DETAIL
                <Star className="ml-2 h-5 w-5" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      )}
      <style jsx global>{`
        @keyframes gradientBg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.nav>
  );
};

// Desktop navigation link with shine effect
const NavLink = ({ href, text }) => {
  return (
    <motion.a
      href={href}
      className="relative  text-lg overflow-hidden"
      whileHover={{ scale: 1.1 }}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

// Mobile navigation link with icons
const MobileNavLink = ({ href, text, icon }) => {
  return (
    <motion.a
      href={href}
      className="flex items-center px-4 py-3 rounded-xl font-bold text-white bg-blue-900 bg-opacity-30 hover:bg-opacity-50"
      whileHover={{ x: 8, backgroundColor: "rgba(30, 58, 138, 0.5)" }}
    >
      {icon}
      <span className="ml-3">{text}</span>
    </motion.a>
  );
};

const Home = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const Tool = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const Package = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m16.5 9.4-9-5.19" />
    <path d="m21 16-9 5.19" />
    <path d="M12 4V2" />
    <path d="M12 22v-2" />
    <path d="M3 16V8a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16z" />
  </svg>
);

const Mail = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default Navbar;
