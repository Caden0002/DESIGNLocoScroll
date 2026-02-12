import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import HorizontalContent from "../components/HorizontalContent";

export default function HorizontalScroll() {
  const locoRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current && contentRef.current) {
      // Detect if device is touch-enabled
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      locoRef.current = new LocomotiveScroll({
        lenisOptions: {
          orientation: "horizontal", // Horizontal scrolling
          lerp: 0.1,
          smoothWheel: true,
          smoothTouch: isTouchDevice,
          touchMultiplier: 2,
          wheelMultiplier: 1,
          wrapper: wrapperRef.current,
          content: contentRef.current,
        },
      });

      return () => {
        locoRef.current?.destroy?.();
        locoRef.current = null;
      };
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="overflow-hidden h-screen w-screen bg-stone-100"
    >
      <div ref={contentRef} className="horizontal-scroll-container">
        <HorizontalContent />
      </div>
    </div>
  );
}
