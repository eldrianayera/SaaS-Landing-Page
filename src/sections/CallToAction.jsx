export const CallToAction = () => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h2 className="section-header max-w-xs container">
          Let{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent font-extrabold text-5xl">
            AI
          </span>{" "}
          Do the Heavy Lifting
        </h2>
        <p className="max-w-xl container">
          Transform how you work—unlock smarter, faster, and more efficient
          operations with our powerful AI solutions.
        </p>
        <button className="primary-button w-fit mx-auto mt-3">Get In Touch</button>
      </div>
    </section>
  );
};
