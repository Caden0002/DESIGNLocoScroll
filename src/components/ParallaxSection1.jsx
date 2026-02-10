const ParallaxSection1 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gap-12 px-10 bg-stone-700 relative">
      <div className="text-white">
        Using loco scroll on the outer wrapper, causing the entire image
        (border+image) to drift at a different speed
      </div>
      {/* Normal scrolling image */}
      <div className="w-[520px] h-[360px] ">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80"
          alt="Normal scroll"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Whole-element parallax: Entire frame (border + image) scrolls faster */}
      <div
        data-scroll
        data-scroll-speed="0.2"
        data-scroll-enable-touch-speed
        className="w-[520px] h-[360px] "
      >
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80"
          alt="Parallax"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ParallaxSection1;
