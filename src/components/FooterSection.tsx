import { Instagram, Facebook, Twitter } from "lucide-react";

const links = ["Početna", "O Nama", "Meni", "Galerija", "Rezervacije", "Kontakt"];

const FooterSection = () => {
  const scrollTo = (id: string) => {
    const map: Record<string, string> = {
      "Početna": "#hero", "O Nama": "#about", "Meni": "#menu",
      "Galerija": "#gallery", "Rezervacije": "#reservations", "Kontakt": "#contact",
    };
    document.querySelector(map[id] || "#hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & desc */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl text-foreground mb-3">Maison Ember</h3>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Beogradska premijerna destinacija za finu kuhinju. Nagrađivana kuhinja, elegantna atmosfera
              i nezaboravna kulinarska iskustva od 2015.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Social media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Navigacija</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => scrollTo(l)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Kralja Petra 74</p>
              <p>11000 Beograd, Srbija</p>
              <p className="mt-3">+381 11 234 5678</p>
              <p>info@maisonember.com</p>
              <p className="mt-3">Pon–Ned: 12:00 – 23:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maison Ember. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
