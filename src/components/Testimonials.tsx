import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Their software saved us hundreds of hours in manual work!",
      author: "Jane L.",
      role: "Clinic Manager",
      rating: 5
    },
    {
      quote: "HannaWest Solutions transformed our workflow. The virtual assistant integration was seamless.",
      author: "Michael R.",
      role: "Operations Director",
      rating: 5
    },
    {
      quote: "Professional, reliable, and delivered exactly what we needed. Highly recommend!",
      author: "Sarah K.",
      role: "Business Owner",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from businesses that trusted us with their digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 animate-slide-up border-0 bg-card/80 backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground font-medium mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <cite className="not-italic">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </cite>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center animate-slide-up">
          <p className="text-sm text-muted-foreground mb-4">Trusted by businesses across industries</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">Healthcare</div>
            <div className="w-px h-6 bg-border"></div>
            <div className="text-2xl font-bold text-muted-foreground">Finance</div>
            <div className="w-px h-6 bg-border"></div>
            <div className="text-2xl font-bold text-muted-foreground">Retail</div>
            <div className="w-px h-6 bg-border"></div>
            <div className="text-2xl font-bold text-muted-foreground">Technology</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;