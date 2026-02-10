import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DefaultScroll from "./pages/DefaultScroll";
import SmoothScroll from "./pages/SmoothScroll";
import ParallaxScroll from "./pages/ParallaxScroll";
import RevealScroll from "./pages/RevealScroll";
import StickyTOCScroll from "./pages/StickyTOCScroll";
import HorizontalScroll from "./pages/HorizontalScroll";
import ScrollScrubScroll from "./pages/ScrollScrubScroll";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/defaultscroll" element={<DefaultScroll />} />
      <Route path="/smoothscroll" element={<SmoothScroll />} />
      <Route path="/parallaxscroll" element={<ParallaxScroll />} />
      <Route path="/revealscroll" element={<RevealScroll />} />
      <Route path="/stickytocscroll" element={<StickyTOCScroll />} />
      <Route path="/horizontalscroll" element={<HorizontalScroll />} />
      <Route path="/scrollscrubscroll" element={<ScrollScrubScroll />} />
    </Routes>
  );
}
