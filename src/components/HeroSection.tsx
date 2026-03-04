const HeroSection = ({ openCalendly }: { openCalendly?: () => void }) => {
  const scrollTo = (id: string) => {
    if (id === "book") {
      openCalendly?.();
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in">
          Performance Animation Studio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95] mb-8" style={{ animationDelay: "0.1s" }}>
          We Build Animations
          <br />
          That Convert
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          High-impact short-form animations for SaaS and e-commerce brands that drive measurable results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <button
            onClick={() => scrollTo("book")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a Call
          </button>
          <button
            onClick={() => scrollTo("work")}
            className="border border-border text-foreground px-8 py-4 rounded-md text-sm font-medium hover:bg-accent transition-colors"
          >
            View Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
