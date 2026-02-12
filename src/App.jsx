import { Routes, Route } from "react-router-dom";
import ScrollIndicator from "./components/ScrollIndicator";
import Home from "./pages/Home";
import DefaultScroll from "./pages/DefaultScroll";
import SmoothScroll from "./pages/SmoothScroll";
import ParallaxScroll from "./pages/ParallaxScroll";
import RevealScroll from "./pages/RevealScroll";
import HorizontalScroll from "./pages/HorizontalScroll";
import StickyHorizontalScroll from "./pages/StickyHorizontalScroll";

import ScrollScrubScroll from "./pages/ScrollScrubScroll";
import ScrollScrubScroll3 from "./pages/ScrollScrubScroll3";
import ScrollScrubScroll2 from "./pages/ScrollScrubScroll2";

export default function App() {
  return (
    <>
      <ScrollIndicator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/defaultscroll" element={<DefaultScroll />} />
        <Route path="/smoothscroll" element={<SmoothScroll />} />
        <Route path="/parallaxscroll" element={<ParallaxScroll />} />
        <Route path="/revealscroll" element={<RevealScroll />} />
        <Route path="/horizontalscroll" element={<HorizontalScroll />} />

        <Route path="/stickyscroll" element={<StickyHorizontalScroll />} />

        <Route path="/scrollscrubscroll" element={<ScrollScrubScroll />} />
        <Route path="/scrollscrubscroll2" element={<ScrollScrubScroll2 />} />
        <Route path="/scrollscrubscroll3" element={<ScrollScrubScroll3 />} />
      </Routes>
    </>
  );
}
