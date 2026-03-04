import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    price: "£100+",
    description: "Perfect for testing the waters with a single animation.",
    features: [
      "1 short-form animation",
      "1 round of revisions",
      "Delivered in 5 business days",
      "Optimised for one platform",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£500+",
    description: "For brands ready to scale with a batch of high-performing animations.",
    features: [
      "3 short-form animations",
      "Strategy session included",
      "2 rounds of revisions",
      "Multi-platform optimisation",
      "Performance recommendations",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "£1,000+",
    description: "Full-service creative partnership for serious growth.",
    features: [
      "5+ short-form animations",
      "Full creative strategy",
      "Unlimited revisions",
      "A/B testing variations",
      "Priority support",
      "Monthly performance review",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Pricing</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Choose a package that fits your needs. Every plan includes high-quality, conversion-focused animations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border"
                }`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.15em] mb-2 opacity-70">
                  {plan.name}
                </p>
                <p className="text-4xl font-bold mb-3">{plan.price}</p>
                <p className={`text-sm mb-8 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 opacity-70" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-opacity hover:opacity-90 ${
                    plan.highlighted
                      ? "bg-primary-foreground text-primary"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  Get Started
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
