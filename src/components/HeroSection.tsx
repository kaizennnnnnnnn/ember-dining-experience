import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="Maison Ember restaurant interior" className="w-full h-full object-cover image-frame" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      </div>

      {/* Content */}
      <div className="section-container text-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="badge-label inline-block mb-6 border border-foreground/30 px-4 py-1.5 rounded-full">
            Award-Winning Cuisine
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 leading-[1.1]"
        >
          An Unforgettable
          <br />
          Culinary Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="body-text mx-auto text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl"
        >
          At Maison Ember, every dish is a story, and every evening is a celebration of flavour and warmth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={() => scrollTo("#reservations")} className="btn-primary text-base px-8 py-4">
            Reserve Your Table
          </button>
          <button onClick={() => scrollTo("#menu")} className="btn-outline text-base px-8 py-4">
            Explore The Menu
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
