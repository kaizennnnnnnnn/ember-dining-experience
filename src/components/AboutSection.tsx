import ScrollReveal from "./ScrollReveal";
import aboutImg from "@/assets/about-chef.jpg";
import { Leaf, Sparkles, Wine } from "lucide-react";

const highlights = [
  { icon: Leaf, title: "Sveži Sastojci", desc: "Lokalno nabavljeni, sezonski inspirisani" },
  { icon: Sparkles, title: "Izuzetan Servis", desc: "Pažljiv, topao, nezaboravan" },
  { icon: Wine, title: "Elegantna Atmosfera", desc: "Uglađena atmosfera, svaki detalj" },
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
              alt="Kuvar priprema jelo u Maison Ember-u"
              className="w-full h-[400px] lg:h-[560px] object-cover image-frame"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* Text */}
        <div>
          <ScrollReveal>
            <span className="badge-label mb-4 block">Naša Priča</span>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Mesto Gde Ukus Sreće Atmosferu
            </h2>
            <p className="body-text mb-6">
              Smešten u srcu Beograda, Maison Ember je više od restorana — to je doživljaj.
              Naša kuhinja slavi bogatstvo mediteranskih tradicija, preoblikovanih modernim tehnikama
              i nepokolebivom posvećenošću najfinijim sastojcima.
            </p>
            <p className="body-text mb-10">
              Svaka večer u Maison Ember-u odvija se poput pažljivo složene simfonije — od toplog sjaja
              sveća do poslednje note deserta. Pozivamo vas da usporite, uživate i stvorite uspomene
              koje ostaju dugo posle poslednjeg obroka.
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
