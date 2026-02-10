import Page1 from "./Page1";
import Page2 from "./Page2";

const HorizontalContent = () => {
  return (
    <>
      <section data-scroll-section className="horizontal-scroll-section">
        <div className="w-screen h-screen">
          <Page1 />
        </div>
      </section>
      <section data-scroll-section className="horizontal-scroll-section">
        <div className="w-screen h-screen">
          <Page2 />
        </div>
      </section>
    </>
  );
};

export default HorizontalContent;
