const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 
              className="text-2xl font-bold mb-4 cursor-pointer hover:text-primary-glow transition-colors duration-200"
              onClick={scrollToTop}
            >
              HannaWest Solutions
            </h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Smart Software & Virtual Assistant Consulting to power your business with innovative solutions.
            </p>
            <div className="text-sm text-background/60">
              <p>1337 Whitewater Rd</p>
              <p>Memphis, Tennessee 38117</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-primary-glow transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-background/80">
              <p>Phone: +1 (901) 697-0621</p>
              <p>Email: m.a.hannalla@gmail.com</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-background/60">Business Hours:</p>
              <p className="text-sm text-background/80">Mon-Fri: 9AM-6PM CST</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} HannaWest Solutions. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <button className="text-background/60 hover:text-background transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-background/60 hover:text-background transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;