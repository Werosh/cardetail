import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SlidingGallery = () => {
  // Sample gallery images with random heights
  const rowOneImages = [
    {
      id: 1,
      url: "https://irp.cdn-website.com/443aa17f/dms3rep/multi/7+Tips+to+Giving+Your+Car+a+Professional+Detailing.jpg",
      alt: "Architecture project 1",
    },
    { id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOzjz7kgoz8Dq4LoaOQ6Rs3TSB5Hi0KK3XA&s", alt: "Interior design 1" },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiAjEL52-u_5dDcJ9zqsBcmw7lp_to4JD9Q&s",
      alt: "Landscape design 1",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0F7wmO20OznWU2l0P-xtc94UJPUw9-nd8A&s",
      alt: "Architecture project 2",
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0ZNHspCLYaemH3Bkd5oBv2oazYLiBRsn3A&s",
      alt: "Interior design 2",
    },
    {
      id: 6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-GOqFI2_knriHA8kZg-GokHsjQCta5cfIA&s",
      alt: "Landscape design 2",
    },
  ];

  const rowTwoImages = [
    {
      id: 7,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEllMW9MoqhNH1PUY4X2rn1ijgOKpYcLOng&s",
      alt: "Architecture project 3",
    },
    {
      id: 8,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3B3aWDsPNa0ne57Lc_GvRrHRgI5rynb1Fw&s",
      alt: "Interior design 3",
    },
    {
      id: 9,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTmr3_U7i1ksP__BQgrnW0ePOS1t51Omw4JAcPjEopdZIMmsIRYPfxwJjA3yWmvK2gbM&usqp=CAU",
      alt: "Landscape design 3",
    },
    {
      id: 10,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJXUAQaNj4I9HqZTJjhc6_Y4Hd8S945xguA&s",
      alt: "Architecture project 4",
    },
    {
      id: 11,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfMIS0gwZszm9kEXdSmfjnwWiCP4eUPcpYw&s",
      alt: "Interior design 4",
    },
    {
      id: 12,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jQQXIozIoDEzZzGwrS5SVJw2LH6l2EtJTw6TSF3OIjWBVG8nIxc5EpfqLNYzHEaUU1c&usqp=CAU",
      alt: "Landscape design 4",
    },
  ];
  
  const rowThreeImages = [
    {
      id: 13,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvzYQ6-tYSh6ce1MCqNmIeuliJ5z9ICKDTw&s",
      alt: "Architecture project 5",
    },
    {
      id: 14,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxm89YnTJ1E6Bp7H_NwzlHYa_KwmQUhvSPQ&s",
      alt: "Interior design 5",
    },
    {
      id: 15,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrwxvY4QgkvPOX9kIlW_u_A7e2Dz3LVMtqg&s",
      alt: "Landscape design 5",
    },
    {
      id: 16,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCT6wQO8z3juTv6hyb9N8vu6wb4s1EJZsJA&s",
      alt: "Architecture project 6",
    },
    {
      id: 17,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjVCFnkPjpTELrrwX6-eCCXpMB4DaxReviAJXIru1zbQOh92UudXMn3CXpi-_f-3MkKk&usqp=CAU",
      alt: "Interior design 6",
    },
    {
      id: 18,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfA1G-NGbxFIIzaogpgGxLHmkqwXtX0pG1A&s",
      alt: "Landscape design 6",
    },
  ];

  // Refs for the image rows
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  // Function to handle scrolling
  const scroll = (direction, rowRef) => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      const container = rowRef.current;
      
      // Calculate new scroll position
      const newScrollPosition = container.scrollLeft + scrollAmount;
      
      // For infinite scrolling, check if we're at the edges
      if (direction === 'right' && newScrollPosition + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0; // Reset to beginning when reaching the end
      } else if (direction === 'left' && newScrollPosition <= 0) {
        container.scrollLeft = container.scrollWidth; // Go to end when at beginning
      } else {
        container.scrollLeft = newScrollPosition;
      }
    }
  };

  return (
    <section className="bg-black">
      <div className="max-w-full">
        <h2 className="text-3xl font-bold text-center mb-6 mt-10 text-amber-50">Our Work</h2>

        {/* First row with manual navigation */}
        <div className="relative mb-6">
          <div 
            ref={row1Ref} 
            className="flex overflow-x-auto scrollbar-hide scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...rowOneImages, ...rowOneImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-64 h-64 object-cover"
                />
              </div>
            ))}
          </div>
          <button 
            onClick={() => scroll('left', row1Ref)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right', row1Ref)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Second row with manual navigation */}
        <div className="relative mb-6">
          <div 
            ref={row2Ref} 
            className="flex overflow-x-auto scrollbar-hide scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...rowTwoImages, ...rowTwoImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-64 h-64 object-cover"
                />
              </div>
            ))}
          </div>
          <button 
            onClick={() => scroll('left', row2Ref)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right', row2Ref)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Third row with manual navigation */}
        <div className="relative mb-6">
          <div 
            ref={row3Ref} 
            className="flex overflow-x-auto scrollbar-hide scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...rowThreeImages, ...rowThreeImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-64 h-64 object-cover"
                />
              </div>
            ))}
          </div>
          <button 
            onClick={() => scroll('left', row3Ref)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right', row3Ref)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for all browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SlidingGallery;