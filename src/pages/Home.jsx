import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/defaultscroll">
        <button>Default Scroll</button>
      </Link>
      <Link to="/smoothscroll">
        <button>Smooth Scroll</button>
      </Link>
      <Link to="/parallaxscroll">
        <button>Parallax Scroll</button>
      </Link>
      <Link to="/revealscroll">
        <button>Reveal Scroll</button>
      </Link>
      <Link to="/stickytocscroll">
        <button>Sticky TOC Scroll</button>
      </Link>
      <Link to="/horizontalscroll">
        <button>Horizontal Scroll</button>
      </Link>
      <Link to="/scrollscrubscroll">
        <button>Scroll Scrub Scroll</button>
      </Link>
    </>
  );
}
