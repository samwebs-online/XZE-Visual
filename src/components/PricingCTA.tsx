import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PricingCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">
          Ready to Scale Your Animations?
        </h2>
        <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
          Get high-impact animations that drive measurable results for your brand.
        </p>
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
        >
          View Pricing
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default PricingCTA;
