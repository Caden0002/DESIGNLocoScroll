const StickyTOC = ({ items, activeSection }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset from top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-24 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="text-sm font-semibold mb-3 text-stone-900">
        On this page
      </div>
      <nav className="text-sm space-y-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`block transition-opacity ${
              activeSection === item.id
                ? "opacity-100 font-medium text-stone-900"
                : "opacity-60 hover:opacity-100 text-stone-600"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default StickyTOC;
