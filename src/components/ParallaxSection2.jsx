const ParallaxSection2 = () => {
  return (
    <section className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-10 bg-stone-700 py-8 sm:py-0">
      <div className="text-white text-sm sm:text-base text-center sm:text-left max-w-xs sm:max-w-none">
        The container scrolls normally, but the image inside shifts at a
        different speed. It feels like you're looking through a window.
      </div>
      {/* Window Parallax: Frame stays, image moves */}
      <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[520px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[360px] overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80"
          alt="Parallax"
          data-scroll
          data-scroll-speed="-0.2"
          data-scroll-enable-touch-speed
          className="w-full h-[140%] object-cover"
        />
      </div>
    </section>
  );
};

export default ParallaxSection2;
