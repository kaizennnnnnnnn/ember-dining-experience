import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const categories = ["Predjela", "Glavna Jela", "Deserti", "Pića"] as const;

type MenuItem = { name: string; desc: string; price: string; badge?: string };

const menuData: Record<string, MenuItem[]> = {
  Predjela: [
    { name: "Tuna Tartare", desc: "Sveža žutoperajna tuna, avokado, susam, ponzu dresing", price: "€24" },
    { name: "Burrata Caprese", desc: "Nasleđeni paradajz, ulje bosiljka, odležao balzamik", price: "€18", badge: "vegetarijansko" },
    { name: "Foie Gras Terrine", desc: "Kompot od smokve, brioche tost, Sauternes žele", price: "€28" },
    { name: "Lobster Bisque", desc: "Krem od konjaka, ulje vlasca, gruyère kruto", price: "€22", badge: "preporuka kuvara" },
    { name: "Beef Carpaccio", desc: "Tartufirani ajoli, rukola, strugotine parmezana", price: "€21" },
  ],
  "Glavna Jela": [
    { name: "Wagyu File", desc: "Redukcija crvenog vina, strugotine tartufa, pire od pečenog belog luka", price: "€58", badge: "preporuka kuvara" },
    { name: "Pržene Kapice", desc: "Šafransko rizo, citrusni beurre blanc, mikro začini", price: "€32" },
    { name: "Jastog Kuvani u Puteru", desc: "Začinski puter, sezonsko povrće, pommes purée", price: "€45" },
    { name: "Pačja Prsa", desc: "Redukcija trešnje, fondant krompir, uvelo zelje", price: "€36" },
    { name: "Divlji Brancin", desc: "Pire od komorača, maslinova tapenade, cherry paradajz", price: "€34" },
    { name: "Rizo s Tartufom", desc: "Crni tartuf, odležan parmezan, divlje pečurke", price: "€28", badge: "vegetarijansko" },
  ],
  Deserti: [
    { name: "Čokoladna Sfera", desc: "Zlatni listić, središte od slanog karamela, krem od vanile", price: "€18", badge: "preporuka kuvara" },
    { name: "Crème Brûlée", desc: "Madagaskarska vanila, kora od karamelizovanog šećera", price: "€14" },
    { name: "Tiramisu", desc: "Savoiardi natopljeni espressom, mascarpone, kakao", price: "€15" },
    { name: "Panna Cotta", desc: "Kulis od jagoda, sveže bobice, menta", price: "€13", badge: "vegetarijansko" },
  ],
  Pića: [
    { name: "Ember Old Fashioned", desc: "Dimljeni burbon, demerara, Angostura, kora narandže", price: "€16" },
    { name: "French 75", desc: "Džin, šampanjac, limun, šećer", price: "€18" },
    { name: "Somelijerov Izbor Vina", desc: "Kurirana selekcija od pet jela", price: "€65" },
    { name: "Espresso Martini", desc: "Votka, svež espresso, liker od kafe, vanila", price: "€15" },
  ],
};

const badgeColors: Record<string, string> = {
  vegetarijansko: "bg-green-900/50 text-green-300",
  spicy: "bg-red-900/50 text-red-300",
  "preporuka kuvara": "bg-primary/20 text-primary",
};

const MenuSection = () => {
  const [active, setActive] = useState<string>("Predjela");

  return (
    <section id="menu" className="section-padding">
      <div className="section-container">
        <ScrollReveal className="text-center mb-12">
          <span className="badge-label mb-4 block">Naš Meni</span>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Istražite Meni</h2>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-lg text-sm font-body transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
              aria-selected={active === cat}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Menu Items */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-0"
            >
              {menuData[active].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex justify-between items-start py-6 border-b border-border last:border-b-0 gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                      {item.badge && (
                        <span className={`text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded-full ${badgeColors[item.badge] || "bg-muted text-muted-foreground"}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="price-text text-lg font-medium whitespace-nowrap">{item.price}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <ScrollReveal className="text-center mt-12">
          <button className="btn-outline">Preuzmite Kompletan Meni</button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MenuSection;
