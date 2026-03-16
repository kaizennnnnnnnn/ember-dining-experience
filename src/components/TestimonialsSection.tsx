import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Ana Petrović",
    text: "Atmosfera je jednostavno čarobna. Od trenutka kada uđete, osećate se kao da ste negde daleko. Hrana... izuzetna. Obavezna poseta za svaku posebnu priliku.",
    rating: 5,
  },
  {
    name: "Marko Nikolić",
    text: "Proslavljali smo godišnjicu ovde i sve je bilo savršeno — od vina do poslednjeg deserta. Osoblje nas je nateralo da se osećamo kao royalty.",
    rating: 5,
  },
  {
    name: "Elena Jovanović",
    text: "Wagyu file je otkrovenje. Jela sam u finim restoranima širom Evrope, i Maison Ember stoji uz bok najboljima.",
    rating: 5,
  },
  {
    name: "Stefan Đorđević",
    text: "Besprekoran servis, zapanjujući enterijer i hrana koja priča priču. Ovako treba da izgleda fine dining. Vraćamo se svaki mesec.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <ScrollReveal className="text-center mb-16">
          <span className="badge-label mb-4 block">Utisci Gostiju</span>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Šta Naši Gosti Kažu</h2>
        </ScrollReveal>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.05}>
              <div className="card-elevated p-6 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed flex-1 mb-4">"{t.text}"</p>
                <p className="font-display text-lg text-foreground">{t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="card-elevated p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{testimonials[current].text}"</p>
                <p className="font-display text-lg text-foreground">{testimonials[current].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full bg-muted text-foreground/60 hover:text-foreground transition-colors" aria-label="Prethodni">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-muted text-foreground/60 hover:text-foreground transition-colors" aria-label="Sledeći">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
