import ScrollReveal from "./ScrollReveal";
import dishScallops from "@/assets/dish-scallops.jpg";
import dishWagyu from "@/assets/dish-wagyu.jpg";
import dishLobster from "@/assets/dish-lobster.jpg";
import dishChocolate from "@/assets/dish-chocolate.jpg";
import dishTuna from "@/assets/dish-tuna.jpg";
import dishDuck from "@/assets/dish-duck.jpg";

const dishes = [
  { img: dishScallops, name: "Pržene Kapice", desc: "Sa šafranskim risotom i citrusnim beurre blanc", price: "€32", badge: "Kuvarov Izbor" },
  { img: dishWagyu, name: "Wagyu File", desc: "Redukcija crvenog vina, strugotine tartufa, pečeni beli luk", price: "€58", badge: "Najpopularnije" },
  { img: dishLobster, name: "Jastog Kuvani u Puteru", desc: "Umak od začinskog putera, sezonsko povrće", price: "€45", badge: null },
  { img: dishDuck, name: "Pačja Prsa", desc: "Redukcija trešnje, fondant krompir, uvelo zelje", price: "€36", badge: null },
  { img: dishTuna, name: "Tuna Tartare", desc: "Avokado, susam, ponzu, mikrozelje", price: "€24", badge: "Kuvarov Izbor" },
  { img: dishChocolate, name: "Čokoladna Sfera", desc: "Zlatni listić, slani karamel, krem od vanile", price: "€18", badge: null },
];

const FeaturedDishes = () => (
  <section className="section-padding bg-muted/30">
    <div className="section-container">
      <ScrollReveal className="text-center mb-16">
        <span className="badge-label mb-4 block">Zaštitna Jela</span>
        <h2 className="text-4xl md:text-5xl font-light text-foreground">Pravljena sa Strašću</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((d, i) => (
          <ScrollReveal key={d.name} delay={i * 0.05}>
            <div className="card-elevated overflow-hidden group">
              <div className="overflow-hidden rounded-[0.75rem] m-4 mb-0 relative">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-64 object-cover transition-transform duration-300 ease-[var(--ease)] group-hover:scale-105 image-frame"
                  loading="lazy"
                />
                {d.badge && (
                  <span className="absolute top-3 left-3 badge-label bg-primary text-primary-foreground px-3 py-1 rounded-full text-[0.65rem]">
                    {d.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-foreground">{d.name}</h3>
                  <span className="price-text text-lg font-medium">{d.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedDishes;
