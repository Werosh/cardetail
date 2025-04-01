import React from "react";

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
      id: 7,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvzYQ6-tYSh6ce1MCqNmIeuliJ5z9ICKDTw&s",
      alt: "Architecture project 3",
    },
    {
      id: 8,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxm89YnTJ1E6Bp7H_NwzlHYa_KwmQUhvSPQ&s",
      alt: "Interior design 3",
    },
    {
      id: 9,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrwxvY4QgkvPOX9kIlW_u_A7e2Dz3LVMtqg&s",
      alt: "Landscape design 3",
    },
    {
      id: 10,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCT6wQO8z3juTv6hyb9N8vu6wb4s1EJZsJA&s",
      alt: "Architecture project 4",
    },
    {
      id: 11,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjVCFnkPjpTELrrwX6-eCCXpMB4DaxReviAJXIru1zbQOh92UudXMn3CXpi-_f-3MkKk&usqp=CAU",
      alt: "Interior design 4",
    },
    {
      id: 12,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfA1G-NGbxFIIzaogpgGxLHmkqwXtX0pG1A&s",
      alt: "Landscape design 4",
    },
  ];

  return (
    <section className="overflow-hidden bg-black">
      <div className="max-w-full">
        <h2 className="text-3xl font-bold text-center mb-6 mt-10 text-amber-50">Our Work</h2>

        {/* First row sliding left to right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left">
            {/* Double the images to create seamless loop */}
            {[...rowOneImages, ...rowOneImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-64 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row sliding right to left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-right">
            {/* Double the images to create seamless loop */}
            {[...rowTwoImages, ...rowTwoImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-64 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Third row sliding left to right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left">
            {/* Double the images to create seamless loop */}
            {[...rowThreeImages, ...rowThreeImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-64 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }

        .animate-slide-right {
          animation: slide-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SlidingGallery;