import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10"></div>
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8 animate-fade-in">
          <img
            src="/my_image.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center max-w-3xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
            Hello, I'm <span className="text-primary">Adithya Gonepally</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Fresh Graduate | Computer Science Major | Frontend Developer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-6" onClick={scrollToContact}>
              Contact Me
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
            <a href="Resume.pdf" download>
              <Button variant="secondary" className="px-8 py-6">
                <FileText className="mr-2" size={20} />
                Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
