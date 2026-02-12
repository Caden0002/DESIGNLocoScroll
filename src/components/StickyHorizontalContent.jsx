import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Page1 from "./Page1";
import Page2 from "./Page2";

export default function StickyHorizontalContent() {
  const scrollRef = useRef(null);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const locoScrollRef = useRef(null);
  const travelRef = useRef(0);

  const text = "Horizontal Scroll";

  // 1) Initialize Locomotive Scroll
  useEffect(() => {
    if (!scrollRef.current) return;

    locoScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    const updateScroll = () => {
      if (
        locoScrollRef.current &&
        typeof locoScrollRef.current.update === "function"
      ) {
        locoScrollRef.current.update();
      }
    };

    updateScroll();
    const updateTimer = setTimeout(updateScroll, 100);
    const updateTimer2 = setTimeout(updateScroll, 500);

    return () => {
      clearTimeout(updateTimer);
      clearTimeout(updateTimer2);
      locoScrollRef.current?.destroy();
      locoScrollRef.current = null;
    };
  }, []);

  // 2) Measure how far the text needs to travel
  useEffect(() => {
    const measure = () => {
      if (!wrapperRef.current || !textRef.current) return;

      const wrapperW = wrapperRef.current.clientWidth;
      const textW = textRef.current.scrollWidth;

      travelRef.current = Math.max(0, textW - wrapperW);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // 3) Convert Locomotive progress → horizontal translateX
  useEffect(() => {
    const stickyElement = document.querySelector("[data-scroll-css-progress]");
    if (!stickyElement || !textRef.current) return;

    const updateHorizontalScroll = () => {
      const progress = parseFloat(
        getComputedStyle(stickyElement).getPropertyValue("--progress") || "0"
      );

      const x = progress * travelRef.current;
      textRef.current.style.transform = `translateX(${-x}px)`;
    };

    const rafHandle = () => {
      updateHorizontalScroll();
      requestAnimationFrame(rafHandle);
    };

    const rafId = requestAnimationFrame(rafHandle);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="bg-stone-50">
      <Page1 />

      {/* The pinned “stage” */}
      <div
        data-scroll
        data-scroll-css-progress
        data-scroll-offset="100%, 100%"
        className="relative h-[300vh]"
      >
        <div
          ref={wrapperRef}
          className="sticky top-0 h-screen overflow-hidden flex items-end"
        >
          <div
            ref={textRef}
            className="whitespace-nowrap will-change-transform"
          >
            <span className="font-bold text-black px-4 md:px-8 inline-block sticky-horizontal-text">
              {text}
            </span>
          </div>
        </div>
      </div>

      <Page2 />
    </div>
  );
}
