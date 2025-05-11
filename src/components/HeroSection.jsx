import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-28 md:pt-0"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Dhakshna
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Moorthy M
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I’m a passionate Web Developer specializing in building responsive, user-friendly websites and applications using HTML, CSS, JavaScript, and React js. 
            With experience in integrating APIs and working with modern CMS platforms, I focus on delivering clean, accessible, and high-performing digital experiences. 
            I thrive on solving problems through code and staying up-to-date with the latest front-end technologies.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/profile-image.jpg"
            alt="Dhakshna Moorthy"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg animate-fade-in-delay-5"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
