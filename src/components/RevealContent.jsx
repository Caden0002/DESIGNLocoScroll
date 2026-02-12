const RevealContent = () => {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-24">
      {/* Hero Section */}
      <header className="mb-12 sm:mb-16 md:mb-20 text-center">
        <h1 className="reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-16 sm:mt-24 md:mt-32 lg:mt-48 mb-4 sm:mb-6">
          Lorem Ipsum Dolor
        </h1>
        <p className="reveal text-lg sm:text-xl text-stone-600">
          Sit amet consectetur adipiscing elit
        </p>
      </header>

      {/* Article Content */}
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        <section>
          <h2 className="reveal text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-800 mb-4 sm:mb-6">
            Lorem Ipsum Dolor Sit
          </h2>
          <p className="reveal text-base sm:text-lg text-stone-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </section>

        <section>
          <h2 className="reveal text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-800 mb-4 sm:mb-6">
            Consectetur Adipiscing
          </h2>
          <p className="reveal text-base sm:text-lg text-stone-700 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto.
          </p>
          <p className="reveal text-base sm:text-lg text-stone-700 leading-relaxed mt-4 sm:mt-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </section>

        <section>
          <h2 className="reveal text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-800 mb-4 sm:mb-6">
            Sed Do Eiusmod Tempor
          </h2>
          <p className="reveal text-base sm:text-lg text-stone-700 leading-relaxed">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur.
          </p>
          <p className="reveal text-base sm:text-lg text-stone-700 leading-relaxed mt-4 sm:mt-6">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
        </section>

        <section>
          <h2 className="reveal text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-800 mb-4 sm:mb-6">
            Incididunt Ut Labore
          </h2>
          <p className="reveal text-base sm:text-lg text-stone-700 leading-relaxed">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus.
          </p>
          <p className="reveal text-base sm:text-lg text-stone-700 leading-relaxed mt-4 sm:mt-6">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus.
          </p>
        </section>

        {/* Closing */}
        <footer className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-stone-200">
          <p className="reveal text-center text-sm sm:text-base text-stone-500">
            Ut enim ad minima veniam, quis nostrum
          </p>
        </footer>
      </div>
    </article>
  );
};

export default RevealContent;
