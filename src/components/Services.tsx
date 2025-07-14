import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Bot, Smartphone, Zap, Shield, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom business applications tailored to your needs",
      features: [
        "Custom business applications (web & mobile)",
        "API integrations & automation",
        "HIPAA-compliant solutions"
      ]
    },
    {
      icon: Bot,
      title: "Virtual Assistant Consultancy",
      description: "Expert guidance for scaling with remote support",
      features: [
        "Staffing and process setup",
        "Workflow optimization",
        "Remote assistant integration"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance solutions"
    },
    {
      icon: Users,
      title: "Team Integration",
      description: "Seamless integration of virtual teams and tools"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to transform your business operations
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-strong transition-all duration-300 animate-slide-up border-0 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-soft transition-all duration-300 animate-slide-up text-center border-0 bg-card/60 backdrop-blur-sm"
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;