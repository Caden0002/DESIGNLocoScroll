import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import ParallaxSection1 from "../components/ParallaxSection1";
import ParallaxSection2 from "../components/ParallaxSection2";

export default function ParallaxScroll() {
  const locoRef = useRef(null);

  useEffect(() => {
    locoRef.current = new LocomotiveScroll({
      lenisOptions: {
        orientation: "vertical",
        lerp: 0.08,
      },
    });

    return () => {
      locoRef.current?.destroy?.();
      locoRef.current = null;
    };
  }, []);

  return (
    <main>
      <ParallaxSection1 />
      <ParallaxSection2 />
    </main>
  );
}
