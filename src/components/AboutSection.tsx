import ScrollReveal from "./ScrollReveal";
import aboutImg from "@/assets/about-chef.jpg";
import { Leaf, Sparkles, Wine } from "lucide-react";

const highlights = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced, seasonally inspired" },
  { icon: Sparkles, title: "Exceptional Service", desc: "Attentive, warm, unforgettable" },
  { icon: Wine, title: "Elegant Ambience", desc: "Refined atmosphere, every detail" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={aboutImg}
              alt="Chef preparing a dish at Maison Ember"
              className="w-full h-[400px] lg:h-[560px] object-cover image-frame"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* Text */}
        <div>
          <ScrollReveal>
            <span className="badge-label mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              A Place Where Flavour Meets Atmosphere
            </h2>
            <p className="body-text mb-6">
              Nestled in the heart of Belgrade, Maison Ember is more than a restaurant — it's an experience.
              Our kitchen celebrates the richness of Mediterranean traditions, reimagined with modern technique
              and an unwavering commitment to the finest ingredients.
            </p>
            <p className="body-text mb-10">
              Every evening at Maison Ember unfolds like a carefully composed symphony — from the warm glow
              of candlelight to the final note of dessert. We invite you to slow down, savour, and create
              memories that linger long after the last course.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1}>
                <div className="flex flex-col items-start gap-2">
                  <h.icon className="text-primary" size={24} />
                  <h3 className="font-display text-lg text-foreground">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
