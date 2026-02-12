import { useEffect, useRef, useState } from "react";

// Component to render text with word-by-word color scrubbing
// eslint-disable-next-line react/prop-types
const ScrubbingText = ({ text = "", className = "" }) => {
  const wordsRef = useRef([]);
  const [wordColors, setWordColors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const viewportTop = window.innerHeight * 0.3; // Trigger point (30% from top)
      const newColors = {};

      wordsRef.current.forEach((wordEl, index) => {
        if (!wordEl) return;

        const rect = wordEl.getBoundingClientRect();
        const wordTop = rect.top;

        // Word turns black when it passes the trigger point
        // Reverses to grey when scrolling back up
        const colorClass =
          wordTop < viewportTop ? "text-black" : "text-stone-400";

        newColors[index] = colorClass;
      });

      setWordColors(newColors);
    };

    const rafHandle = () => {
      handleScroll();
      requestAnimationFrame(rafHandle);
    };

    const rafId = requestAnimationFrame(rafHandle);
    handleScroll(); // Initial call

    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!text) return null;
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => (wordsRef.current[index] = el)}
          className={`transition-colors duration-100 ${
            wordColors[index] || "text-stone-400"
          }`}
        >
          {word}
          {index < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
};

const ScrollScrubContent = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-[300vh] py-12 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="space-y-8 md:space-y-16">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8">
              <ScrubbingText text="Scroll Scrubbing Text" />
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-12">
              <ScrubbingText text="Watch each word turn black as you scroll, grey when scrolling up" />
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              <ScrubbingText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            </p>

            <p className="text-xl leading-relaxed">
              <ScrubbingText text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollScrubContent;
