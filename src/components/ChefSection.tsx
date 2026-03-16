import ScrollReveal from "./ScrollReveal";
import chefPortrait from "@/assets/chef-portrait.jpg";
import { Award, ChefHat, Heart, Users } from "lucide-react";

const points = [
  { icon: ChefHat, title: "Iskusni Kuvari", desc: "Više od 20 godina kulinarske veštine" },
  { icon: Award, title: "Premium Sastojci", desc: "Nabavljeni od pouzdanih lokalnih farmi" },
  { icon: Heart, title: "Prijatna Atmosfera", desc: "Toplina u svakom kutku" },
  { icon: Users, title: "Odličan Servis", desc: "Posvećen, pažljiv, lični" },
];

const ChefSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <ScrollReveal>
            <span className="badge-label mb-4 block">Zašto Mi</span>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Upoznajte Kuvara Aleksandra Ilića
            </h2>
            <p className="body-text mb-10">
              Sa dve decenije iskustva u Michelin-starred kuhinjama širom Francuske i Italije,
              kuvar Aleksandar donosi filozofiju jednostavnosti i poštovanja prema sastojcima.
              Svako jelo u Maison Ember-u odraz je njegovog putovanja — ukorenjeno u tradiciji,
              uglađeno inovacijom.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6">
            {points.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="flex flex-col gap-2">
                  <p.icon className="text-primary" size={22} />
                  <h3 className="font-display text-lg text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Image */}
        <ScrollReveal className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={chefPortrait}
              alt="Kuvar Aleksandar Ilić, glavni kuvar u Maison Ember-u"
              className="w-full h-[400px] lg:h-[560px] object-cover image-frame"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ChefSection;
