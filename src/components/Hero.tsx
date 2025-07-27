import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-subtle" aria-hidden="true"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full blur-xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000" aria-hidden="true"></div>

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground mb-6 animate-slide-up">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          Smart Solutions for Modern Business
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
        >
          Smart Software.{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Smarter Solutions.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Custom Software & Virtual Assistant Consulting to Power Your Business.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full max-w-md mx-auto"
          role="group"
          aria-label="Call to action buttons"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto group bg-gradient-primary hover:shadow-glow transition-all duration-300 px-6 py-4 text-base font-semibold animate-glow focus:ring-4 focus:ring-primary/20"
            onClick={scrollToContact}
            aria-describedby="consultation-description"
          >
            Request a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-6 py-4 text-base font-semibold shadow-soft hover:shadow-strong focus:ring-4 focus:ring-primary/20"
            onClick={scrollToContact}
            aria-describedby="quote-description"
          >
            Get a Quote
          </Button>
        </div>

        {/* Screen Reader Text */}
        <div className="sr-only">
          <p id="consultation-description">Schedule a consultation to discuss your software and virtual assistant needs</p>
          <p id="quote-description">Request a detailed quote for your project requirements</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto text-center" role="region" aria-label="Company statistics">
          <div className="animate-slide-up">
            <div className="text-2xl font-bold text-primary" aria-label="100 plus projects delivered">100+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="animate-slide-up delay-200">
            <div className="text-2xl font-bold text-primary" aria-label="24/7 support available">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="animate-slide-up delay-300">
            <div className="text-2xl font-bold text-primary" aria-label="HIPAA compliant solutions">HIPAA</div>
            <div className="text-sm text-muted-foreground">Compliant Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
