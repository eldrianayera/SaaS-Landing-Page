import { CheckCircle2 } from "lucide-react";

export const PricingSection = () => {
  const pricing = [
    {
      name: "Starter",
      price: "$79/mo",
      benefit: [
        "Up to 5,000 automated tasks",
        "Basic AI insights",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$279/mo",
      benefit: [
        "Up to 50,000 automated tasks",
        "Advanced AI insights",
        "Priority email & chat support",
        "Integrations with popular tools",
      ],
    },
    {
      name: "Enterprise",
      price: "$399/mo",
      benefit: [
        "Unlimited automated tasks",
        "Full AI analytics suite",
        "Dedicated account manager",
        "24/7 premium support",
        "Custom integrations",
      ],
    },
  ];
  return (
    <section id="pricing">
      <div className="flex flex-col gap-4">
        <h2 className="section-header">Simple, Transparent Pricing</h2>
        <p className="max-w-xl container">
          Choose the plan that fits your needs and scale effortlessly with
          flexible AI-powered solutions designed for every business size.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-15 gap-8">
          {pricing.map((plan, key) => {
            return (
              <div
                key={key}
                className="relative flex flex-col text-left border-4 pl-5 pt-5 pr-9 pb-8 rounded-3xl w-full card-hover"
              >
                <h4 className="font-bold mb-3">{plan.name}</h4>
                <h3 className="text-2xl mb-7">{plan.price}</h3>
                <div className="mb-15">
                  {plan.benefit.map((benefit, key) => {
                    return (
                      <div key={key} className="flex gap-3 mb-3 text-sm">
                        <CheckCircle2 className="text-green-500" />
                        <p>{benefit}</p>
                      </div>
                    );
                  })}
                </div>
                <button className="absolute bottom-5 primary-button left-1/2 -translate-x-1/2">
                  Choose Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
