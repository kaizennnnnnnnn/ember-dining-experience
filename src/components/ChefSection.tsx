import ScrollReveal from "./ScrollReveal";
import chefPortrait from "@/assets/chef-portrait.jpg";
import { Award, ChefHat, Heart, Users } from "lucide-react";

const points = [
  { icon: ChefHat, title: "Experienced Chefs", desc: "Over 20 years of culinary mastery" },
  { icon: Award, title: "Premium Ingredients", desc: "Sourced from trusted local farms" },
  { icon: Heart, title: "Cozy Atmosphere", desc: "Warmth in every corner" },
  { icon: Users, title: "Outstanding Service", desc: "Dedicated, attentive, personal" },
];

const ChefSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <ScrollReveal>
            <span className="badge-label mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Meet Chef Aleksandar Ilić
            </h2>
            <p className="body-text mb-10">
              With two decades of experience in Michelin-starred kitchens across France and Italy,
              Chef Aleksandar brings a philosophy of simplicity and respect for ingredients.
              Every dish at Maison Ember is a reflection of his journey — rooted in tradition,
              refined by innovation.
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
              alt="Chef Aleksandar Ilić, head chef at Maison Ember"
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
