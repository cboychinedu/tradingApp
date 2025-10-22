import React from 'react';

// NOTE: In a real React app, you'd typically import images directly, e.g.,
// import BinanceLogo from '../static/images/binance.png';
// For this conversion, we assume the 'images/' path is available or updated.

const PartnerCard = ({ partner }) => {
  return (
    <section className="flex items-center text-white bg-[#142a49] rounded-lg p-3 sm:p-4 md:p-5 flex-shrink-0">
      <img
        // Replaced Flask's url_for with a simple relative path
        src={partner.img}
        alt={partner.name}
        className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] mr-4 sm:mr-6 bg-black rounded-full object-contain"
      />
      <div className="text-[10px] sm:text-[11px] md:text-[12px] leading-normal">
        <p>{partner.name}</p>
        {/* The original text-gradient class needs to be defined in your global CSS */}
        <p className="text-gradient">{partner.desc}</p>
      </div>
    </section>
  );
};


// Exporting the Partner Card
export default PartnerCard;