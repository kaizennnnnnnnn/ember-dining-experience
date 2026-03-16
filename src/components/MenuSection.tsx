import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const categories = ["Starters", "Main Courses", "Desserts", "Drinks"] as const;

type MenuItem = { name: string; desc: string; price: string; badge?: string };

const menuData: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Tuna Tartare", desc: "Fresh yellowfin tuna, avocado, sesame, ponzu dressing", price: "€24" },
    { name: "Burrata Caprese", desc: "Heirloom tomatoes, basil oil, aged balsamic", price: "€18", badge: "vegetarian" },
    { name: "Foie Gras Terrine", desc: "Fig compote, brioche toast, Sauternes jelly", price: "€28" },
    { name: "Lobster Bisque", desc: "Cognac cream, chive oil, gruyère crouton", price: "€22", badge: "chef recommendation" },
    { name: "Beef Carpaccio", desc: "Truffle aioli, rocket, parmesan shavings", price: "€21" },
  ],
  "Main Courses": [
    { name: "Wagyu Tenderloin", desc: "Red wine reduction, truffle shavings, roasted garlic mash", price: "€58", badge: "chef recommendation" },
    { name: "Seared Scallops", desc: "Saffron risotto, citrus beurre blanc, micro herbs", price: "€32" },
    { name: "Butter-Poached Lobster", desc: "Herb butter, seasonal vegetables, pommes purée", price: "€45" },
    { name: "Duck Breast", desc: "Cherry reduction, fondant potato, wilted greens", price: "€36" },
    { name: "Wild Sea Bass", desc: "Fennel purée, olive tapenade, cherry tomatoes", price: "€34" },
    { name: "Truffle Risotto", desc: "Black truffle, aged parmesan, wild mushrooms", price: "€28", badge: "vegetarian" },
  ],
  Desserts: [
    { name: "Chocolate Sphere", desc: "Gold leaf, salted caramel centre, vanilla crème", price: "€18", badge: "chef recommendation" },
    { name: "Crème Brûlée", desc: "Madagascar vanilla, caramelized sugar crust", price: "€14" },
    { name: "Tiramisu", desc: "Espresso-soaked savoiardi, mascarpone, cocoa", price: "€15" },
    { name: "Panna Cotta", desc: "Strawberry coulis, fresh berries, mint", price: "€13", badge: "vegetarian" },
  ],
  Drinks: [
    { name: "Ember Old Fashioned", desc: "Smoked bourbon, demerara, Angostura, orange peel", price: "€16" },
    { name: "French 75", desc: "Gin, champagne, lemon, sugar", price: "€18" },
    { name: "Sommelier's Wine Pairing", desc: "Five-course curated selection", price: "€65" },
    { name: "Espresso Martini", desc: "Vodka, fresh espresso, coffee liqueur, vanilla", price: "€15" },
  ],
};

const badgeColors: Record<string, string> = {
  vegetarian: "bg-green-900/50 text-green-300",
  spicy: "bg-red-900/50 text-red-300",
  "chef recommendation": "bg-primary/20 text-primary",
};

const MenuSection = () => {
  const [active, setActive] = useState<string>("Starters");

  return (
    <section id="menu" className="section-padding">
      <div className="section-container">
        <ScrollReveal className="text-center mb-12">
          <span className="badge-label mb-4 block">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Explore The Menu</h2>
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
          <button className="btn-outline">Download Full Menu</button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MenuSection;
