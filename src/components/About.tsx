import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Award, Clock, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Memphis Based",
      description: "Proudly serving businesses from our Tennessee headquarters"
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Specialized in cutting-edge software and consulting"
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "Consistent, on-time project completion"
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom-built for your specific business needs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About HannaWest Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main content */}
            <div className="animate-slide-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Headquartered in <span className="text-primary font-semibold">Memphis, TN</span>, 
                  HannaWest Solutions helps businesses streamline operations through cutting-edge 
                  software and expert virtual assistant consulting.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Whether you're building a custom tool or looking to scale with remote support, 
                  our team delivers <span className="text-primary font-semibold">tailored, scalable solutions</span> 
                  that grow with your business.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We combine technical expertise with business acumen to create solutions that 
                  don't just work – they transform how you operate.
                </p>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={highlight.title} 
                  className="group hover:shadow-soft transition-all duration-300 animate-slide-up border-0 bg-gradient-subtle"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <highlight.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission statement */}
          <div className="mt-16 text-center animate-slide-up">
            <Card className="bg-gradient-primary/5 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  To empower businesses with innovative technology solutions and strategic virtual assistance, 
                  enabling them to focus on what they do best while we handle the technical complexities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;