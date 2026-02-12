const ParallaxSection1 = () => {
  return (
    <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-10 bg-stone-700 relative py-8 sm:py-0">
      <div className="text-white text-sm sm:text-base text-center sm:text-left max-w-xs sm:max-w-none">
        Using loco scroll on the outer wrapper, causing the entire image
        (border+image) to drift at a different speed
      </div>
      {/* Normal scrolling image */}
      <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[520px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80"
          alt="Normal scroll"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Whole-element parallax: Entire frame (border + image) scrolls faster */}
      <div
        data-scroll
        data-scroll-speed="0.2"
        data-scroll-enable-touch-speed
        className="w-full sm:w-[300px] md:w-[400px] lg:w-[520px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px]"
      >
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80"
          alt="Parallax"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default ParallaxSection1;
