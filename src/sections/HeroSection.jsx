import { Mail } from "lucide-react";
import { DataWidget } from "../components/DataWidget";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 container ">
        <div className="flex flex-col items-center md:items-start text-center lg:text-left gap-10">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold ">
            Supercharge Your Business Growth with
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-violet-600 ml-3">
              Smarter AI
            </span>
          </h1>
          <p>
            Unlock the full potential of automation with our all-in-one AI SaaS
            platform—designed to streamline workflows, enhance decision-making,
            and drive real results.
          </p>
          <div className="border-2 rounded-full pl-4 pr-1 py-1 flex items-center gap-2 ">
            {" "}
            <Mail />
            <input
              className="focus:outline-hidden"
              type="email"
              name="email"
              id="email"
              placeholder="eldrian@ai.com"
            />
            <button className="primary-button lg:text-xs">Get Started</button>
          </div>
        </div>
        <div className="rounded-2xl max-sm:px-10 flex items-center">
          <img
            src="@/../public/ai.png"
            alt="ai"
            className="rounded-2xl border-2 container-glow"
          />
        </div>
      </div>
      <DataWidget />
    </section>
  );
};
