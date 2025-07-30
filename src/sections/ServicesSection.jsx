import { Brain, CpuIcon, LucideBuilding2 } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Brain />,
      title: "Workflow Automation",
      desc: "Automate repetitive tasks and streamline operations to save time and boost productivity.",
    },
    {
      icon: <CpuIcon />,
      title: "Seamless Integration",
      desc: "Connect effortlessly with your favorite tools—no complex setup required.",
    },
    {
      icon: <LucideBuilding2 />,
      title: "Scalable Infrastructure",
      desc: "Scale with confidence on a fast, secure, and enterprise-ready platform.",
    },
  ];
  return (
    <section id="services">
      <div className="flex flex-col gap-4">
        <h2 className="section-header">Our AI Services</h2>
        <p className="max-w-xl mx-auto">
          We offer powerful AI tools that help you work faster. Our services are
          built to support your growth every step of the way.
        </p>
        <div className="flex flex-col md:flex-row mt-12 gap-6">
          {services.map((service, key) => {
            return (
              <div
                key={key}
                className="flex flex-col items-start text-left p-4 w-full container-glow-sm rounded-xl card-hover hover:border-2"
              >
                {service.icon}
                <h4 className="font-bold text-lg mt-5 mb-3">{service.title}</h4>
                <p className="text-sm">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
