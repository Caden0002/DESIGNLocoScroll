import { Link } from "react-router-dom";

const scrollExamples = [
  {
    category: "Basic Scroll",
    items: [
      {
        title: "Default Scroll",
        path: "/defaultscroll",
        description: "Standard browser scroll behavior",
        color: "bg-stone-100 hover:bg-stone-200",
      },
      {
        title: "Smooth Scroll",
        path: "/smoothscroll",
        description: "Smooth scrolling with Locomotive Scroll",
        color: "bg-blue-100 hover:bg-blue-200",
      },
    ],
  },
  {
    category: "Parallax & Reveal",
    items: [
      {
        title: "Parallax Scroll",
        path: "/parallaxscroll",
        description: "Image parallax effects with different speeds",
        color: "bg-purple-100 hover:bg-purple-200",
      },
      {
        title: "Reveal Scroll",
        path: "/revealscroll",
        description: "Text fades in as you scroll",
        color: "bg-pink-100 hover:bg-pink-200",
      },
    ],
  },
  {
    category: "Horizontal Scroll",
    items: [
      {
        title: "Horizontal Scroll",
        path: "/horizontalscroll",
        description: "Full page horizontal scrolling",
        color: "bg-green-100 hover:bg-green-200",
      },
      {
        title: "Sticky Horizontal Scroll",
        path: "/stickyscroll",
        description: "Vertical scroll triggers horizontal text movement",
        color: "bg-emerald-100 hover:bg-emerald-200",
      },
    ],
  },
  {
    category: "Scroll Scrubbing",
    items: [
      {
        title: "Scroll Scrub (Line-by-Line)",
        path: "/scrollscrubscroll",
        description: "Each line fills independently with gradient",
        color: "bg-orange-100 hover:bg-orange-200",
      },
      {
        title: "Scroll Scrub 2",
        path: "/scrollscrubscroll2",
        description: "Alternative scroll scrubbing effect",
        color: "bg-yellow-100 hover:bg-yellow-200",
      },
      {
        title: "Scroll Scrub (Sequential)",
        path: "/scrollscrubscroll3",
        description: "Lines fill sequentially with stagger",
        color: "bg-amber-100 hover:bg-amber-200",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-stone-900 mb-4">
            Locomotive Scroll
          </h1>
          <p className="text-xl text-stone-600">
            A collection of scroll effects and animations
          </p>
        </header>

        {/* Scroll Examples Grid */}
        <div className="space-y-12">
          {scrollExamples.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-2xl font-semibold text-stone-800 mb-6">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Link key={itemIndex} to={item.path} className="block group">
                    <div
                      className={`${item.color} rounded-lg p-6 transition-all duration-200 transform group-hover:scale-105 shadow-sm group-hover:shadow-md`}
                    >
                      <h3 className="text-xl font-semibold text-stone-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-stone-600">
                        {item.description}
                      </p>
                      <div className="mt-4 text-sm font-medium text-stone-700 group-hover:translate-x-1 transition-transform inline-block">
                        View Demo →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
