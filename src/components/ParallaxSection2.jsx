const ParallaxSection2 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gap-12 px-10 bg-stone-700">
      <div className="text-white">
        The container scrolls normally, but the image inside shifts at a
        different speed. It feels like you’re looking through a window.
      </div>
      {/* Window Parallax: Frame stays, image moves */}
      <div className="w-[520px] h-[360px] overflow-hidden ">
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
