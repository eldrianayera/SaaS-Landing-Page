import { cn } from "../lib/utils";

export const DataWidget = () => {
  const data = [
    {
      number: "500K+",
      description: "Automated Tasks",
    },
    {
      number: "1,200+",
      description: "Active Business Users",
    },
    {
      number: "99.9%",
      description: "System Uptime Guarantee",
    },
    {
      number: "3x",
      description: "Faster Execution",
    },
  ];
  return (
    <div
      className={cn(
        "grid grid-cols-2 py-6 mt-15 border-2 border-foreground rounded-3xl max-w-2xl mx-auto gap-3 container-glow",
        "md:py-4 opacity-0 animate-fade-in-3",
        "lg:grid-cols-4 divide-x divide-primary lg:py-4"
      )}
    >
      {data.map((data, key) => {
        return (
          <div key={key} className="flex flex-col justify-center items-center">
            <h3 className="lg:text-3xl md:text-3xl text-3xl font-bold">
              {data.number}
            </h3>
            <p className="text-xs text">{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};
