import { motion } from "framer-motion";
import { Users, Calendar, Wine, UtensilsCrossed } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import privateDining from "@/assets/private-dining.jpg";

const features = [
  {
    icon: Users,
    title: "Up to 20 Guests",
    description: "Intimate settings for small gatherings or larger celebrations",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Available for lunch, dinner, and special occasions",
  },
  {
    icon: Wine,
    title: "Wine Pairing",
    description: "Curated selections by our sommelier for every event",
  },
  {
    icon: UtensilsCrossed,
    title: "Custom Menu",
    description: "Bespoke dining experiences tailored to your preferences",
  },
];

const PrivateDiningSection = () => {
  const handleInquiry = () => {
    const el = document.querySelector("#reservations");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="private-dining" className="section-padding bg-muted/20 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden image-frame"
              >
                <img
                  src={privateDining}
                  alt="Private dining room at Maison Ember"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 card-elevated p-4 rounded-xl"
              >
                <p className="font-display text-lg text-foreground">Private Events</p>
                <p className="text-sm text-muted-foreground">Corporate dinners, celebrations & more</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <span className="badge-label mb-4 block">Private Dining</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Host Your
                <br />
                <span className="text-primary">Perfect Event</span>
              </h2>
              <p className="body-text mb-8">
                Whether it&apos;s an intimate dinner, a corporate gathering, or a special celebration,
                our private dining spaces offer an exclusive setting with personalized service and
                exceptional cuisine crafted to make your occasion unforgettable.
              </p>
            </ScrollReveal>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.1}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors duration-300">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleInquiry} className="btn-primary">
                  Inquire Now
                </button>
                <a
                  href="tel:+1234567890"
                  className="btn-outline text-center"
                >
                  Call to Discuss
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Our events team will respond within 24 hours
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateDiningSection;
