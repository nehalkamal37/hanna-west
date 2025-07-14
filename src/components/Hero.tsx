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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-subtle" aria-hidden="true"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-pulse delay-1000" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground mb-6 animate-slide-up" aria-label="Company tagline">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Smart Solutions for Modern Business
          </div>

          {/* Main headline */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Smart Software.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Smarter Solutions.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Custom Software & Virtual Assistant Consulting to Power Your Business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" role="group" aria-label="Call to action buttons">
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold animate-glow focus:ring-4 focus:ring-primary/20"
              onClick={scrollToContact}
              aria-describedby="consultation-description"
            >
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-soft hover:shadow-strong focus:ring-4 focus:ring-primary/20"
              onClick={scrollToContact}
              aria-describedby="quote-description"
            >
              Get a Quote
            </Button>
          </div>

          {/* Hidden descriptions for screen readers */}
          <div className="sr-only">
            <p id="consultation-description">Schedule a consultation to discuss your software and virtual assistant needs</p>
            <p id="quote-description">Request a detailed quote for your project requirements</p>
          </div>

          {/* Stats or trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto text-center" role="region" aria-label="Company statistics">
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
      </div>
    </section>
  );
};

export default Hero;