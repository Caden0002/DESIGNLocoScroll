import { useEffect, useState } from "react";
import StickyTOC from "./StickyTOC";

const StickyTOCContent = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "setup", "gotchas", "implementation", "best-practices"];
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "setup", label: "Setup" },
    { id: "gotchas", label: "Gotchas" },
    { id: "implementation", label: "Implementation" },
    { id: "best-practices", label: "Best Practices" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
        {/* Article */}
        <article className="prose prose-stone max-w-none">
          <h1 id="intro" className="text-5xl font-bold mb-6">
            Sticky Sidebar + TOC
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed mb-8">
            A blog/article layout where the main content scrolls normally while
            a sidebar with Table of Contents stays visible and highlights the
            current section as you scroll.
          </p>

          <h2 id="setup" className="text-3xl font-semibold mt-12 mb-6">
            Setup
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            The core implementation uses CSS <code className="bg-stone-100 px-2 py-1 rounded">position: sticky</code> to
            keep the sidebar visible. The sidebar contains a navigation menu that
            links to different sections of the article.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            Each section has an <code className="bg-stone-100 px-2 py-1 rounded">id</code> attribute that corresponds to
            the TOC links. As you scroll, JavaScript detects which section is
            currently in view and highlights the corresponding TOC item.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            The layout uses CSS Grid with two columns on desktop: the article
            takes up most of the space, while the sidebar is fixed at 280px width.
            On mobile, the sidebar is hidden or collapsed.
          </p>

          <h2 id="gotchas" className="text-3xl font-semibold mt-12 mb-6">
            Gotchas
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            The #1 gotcha with sticky positioning is that it breaks if any parent
            container has:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-stone-700 mb-4 ml-4">
            <li><code className="bg-stone-100 px-2 py-1 rounded">overflow: hidden/auto/scroll</code></li>
            <li><code className="bg-stone-100 px-2 py-1 rounded">transform: translate(...)</code></li>
            <li>Sometimes <code className="bg-stone-100 px-2 py-1 rounded">filter</code> or <code className="bg-stone-100 px-2 py-1 rounded">perspective</code></li>
          </ul>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            This is especially important when using smooth scroll libraries like
            Locomotive Scroll or Lenis. Make sure the sticky element's parent
            containers don't have these properties.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            The solution is to structure your DOM so that the sticky element is
            a direct child of a container that doesn't have these problematic
            properties. In this example, the sticky sidebar is inside the grid
            container, which works perfectly with Locomotive Scroll v5.
          </p>

          <h2 id="implementation" className="text-3xl font-semibold mt-12 mb-6">
            Implementation
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            The sticky sidebar uses <code className="bg-stone-100 px-2 py-1 rounded">position: sticky</code> with{" "}
            <code className="bg-stone-100 px-2 py-1 rounded">top: 24px</code>. This means the sidebar will stick 24px
            from the top of the viewport once you scroll past its initial
            position.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            The active section highlighting is handled by a scroll event listener
            that checks which section is currently in view based on scroll
            position. The corresponding TOC link gets an active class applied.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            For smooth scrolling to anchors, you can use native browser behavior
            or enhance it with your smooth scroll library. Locomotive Scroll v5
            handles anchor scrolling automatically when you use regular anchor
            links.
          </p>

          <h2 id="best-practices" className="text-3xl font-semibold mt-12 mb-6">
            Best Practices
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            Keep the TOC concise and only include major headings (h2, h3). Too
            many items can make the sidebar cluttered and hard to navigate.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            On mobile devices, consider hiding the sidebar or converting it to a
            dropdown menu. The sticky behavior can be problematic on smaller
            screens where space is limited.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            Use smooth scrolling for anchor links to create a better user
            experience. The scroll animation should be subtle (around 600ms) to
            feel natural.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Make sure the active section highlighting is visible but not
            distracting. A subtle background color or border works well. The
            inactive items should still be readable but clearly secondary.
          </p>
        </article>

        {/* Sticky TOC Sidebar */}
        <aside className="hidden lg:block">
          <StickyTOC items={tocItems} activeSection={activeSection} />
        </aside>
      </div>
    </main>
  );
};

export default StickyTOCContent;
