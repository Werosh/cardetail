import React from 'react';
import { motion } from 'framer-motion';

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Exterior Detailing",
      description: "Our exterior detailing service goes beyond a simple car wash. We meticulously clean, restore, and protect your vehicle's exterior surfaces. This includes clay bar treatment to remove embedded contaminants, hand polishing to restore shine, paint protection application, wheel and tire cleaning, and trim restoration. Experience the difference as your vehicle shines like never before.",
      imageUrl: "https://dpkoly04s20lw.cloudfront.net/resources/services/Exterior%20Car%20Detailing,%20Polishing%20_%20Cleaning-min.jpg",
      imagePosition: "left"
    },
    {
      id: 2,
      title: "Interior Detailing",
      description: "Transform your vehicle's cabin with our comprehensive interior detailing service. We thoroughly clean and sanitize all surfaces, including hard-to-reach areas, using premium products. Our service includes vacuuming and steam cleaning upholstery, leather conditioning, dashboard and console detailing, glass cleaning, and odor elimination treatments. Enjoy that new car feeling again with our meticulous interior care.",
      imageUrl: "https://surfnshine.com/wp-content/uploads/2023/10/interior-detailing.jpg",
      imagePosition: "right"
    },
    {
      id: 3,
      title: "Machine Cut & Polish",
      description: "Restore your vehicle's paintwork to showroom condition with our professional machine cut and polish service. Our skilled technicians use advanced dual-action polishers and premium compounds to remove swirl marks, scratches, oxidation, and water spots. This multi-stage process enhances your paint's depth and gloss, revealing its true brilliance. Perfect for vehicles with dull or damaged paintwork.",
      imageUrl: "https://cdn.shopify.com/s/files/1/0797/2968/8869/files/a5.jpg?v=1692785397&width=1620&height=1080",
      imagePosition: "left"
    },
    {
      id: 4,
      title: "Ceramic Coating",
      description: "Our ceramic coating service provides long-lasting protection and enhanced gloss to your vehicle's paintwork. This advanced nanotechnology forms a chemical bond with your car's paint, creating a hydrophobic, UV-resistant shield that lasts for years. Benefits include superior protection against environmental contaminants, easier cleaning, enhanced gloss, and increased resale value. Experience the ultimate in paint protection technology.",
      imageUrl: "https://autoimage.capitalone.com/cms/Auto/assets/images/1398-hero-what-is-ceramic-coating.jpg",
      imagePosition: "right"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-96 bg-black overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Premium Detailing Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200"
            >
              Experience automotive perfection with our professional detailing services.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Our <span className="text-blue-600">Expert</span> Services
        </motion.h2>

        <div className="space-y-24">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col ${service.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-1"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </motion.div>

              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h3>
                <div className="w-20 h-1 bg-blue-600"></div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#0f0c29] to-[#24243e] via-[#302b63]py-16 mt-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your premium detailing service today and experience the difference our professional care makes.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Book Your Appointment
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicePage;