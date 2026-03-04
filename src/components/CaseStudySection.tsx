import { TrendingUp, Target, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Target,
    label: "Problem",
    title: "Low-performing creatives",
    description: "Our client was spending £50k/month on paid channels with a 0.8x ROAS. Their creatives weren't resonating with their target audience and CPAs were climbing.",
  },
  {
    icon: TrendingUp,
    label: "Solution",
    title: "Data-driven creative strategy",
    description: "We analysed top-performing competitor work, identified winning hooks and formats, and produced 12 new short-form animations optimised for Meta and TikTok.",
  },
  {
    icon: BarChart3,
    label: "Result",
    title: "3.2x ROAS in 30 days",
    description: "CPA dropped by 62%, ROAS increased from 0.8x to 3.2x, and the client scaled their paid media spend to £120k/month profitably within 60 days.",
  },
];

const CaseStudySection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Case Study</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 tracking-tight">
          From Underperforming to Scaling
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="bg-background border border-border rounded-lg p-8 relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <step.icon size={18} className="text-primary-foreground" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {step.label}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
