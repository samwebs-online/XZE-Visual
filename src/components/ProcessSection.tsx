import { Lightbulb, Film, FlaskConical } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Strategy",
    description: "Deep-dive into your brand, audience, and competitors. We identify winning angles and script high-converting hooks.",
  },
  {
    icon: Film,
    step: "02",
    title: "Creative Production",
    description: "Our team produces scroll-stopping short-form animations — filmed, edited, and optimised for every platform.",
  },
  {
    icon: FlaskConical,
    step: "03",
    title: "Performance Testing",
    description: "We A/B test creative variations, analyse performance data, and iterate to maximise your ROAS continuously.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">How We Work</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 tracking-tight">
          Our Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.step} className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-bold text-border group-hover:text-foreground transition-colors duration-300">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <step.icon size={18} className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
