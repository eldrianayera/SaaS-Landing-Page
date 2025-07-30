import { Star } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 container ">
        <div className="rounded-2xl max-sm:px-10 flex items-center card-hover">
          <img
            src="/robot.png"
            alt="ai"
            className="rounded-2xl border-2 container-glow overflow-hidden aspect-[4.5/3]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="section-header">About Our AI</h2>
          <p className="text-left">
            Our AI is built to think like your smartest team member—analyzing
            data, learning patterns, and automating decisions with speed and
            precision.{" "}
          </p>
          <div className="flex flex-row gap-3 mt-3 justify-between text-left">
            <div className="flex flex-col rounded-xl p-3 border-2 w-full card-hover">
              <Star className="w-5" />
              <h4 className="font-bold mt-3">Mission</h4>
              <p>
                To empower businesses with intelligent, accessible AI that
                simplifies work.
              </p>
            </div>
            <div className="flex flex-col rounded-xl p-3 border-2 w-full card-hover">
              <Star className="w-5" />
              <h4 className="font-bold mt-3">Vision</h4>
              <p>To be the leading AI platform trusted by teams worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
