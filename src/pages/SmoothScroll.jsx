import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";

export default function SmoothScroll() {
  const locoRef = useRef(null);

  useEffect(() => {
    locoRef.current = new LocomotiveScroll({
      lenisOptions: {
        orientation: "vertical",
        lerp: 0.08, // lower = smoother / floatier
      },
    });

    return () => {
      locoRef.current?.destroy?.();
      locoRef.current = null;
    };
  }, []);

  return (
    <main>
      <Page1 />
      <Page2 />
    </main>
  );
}
