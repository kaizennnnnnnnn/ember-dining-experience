import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Private Dining", href: "#private-dining" },
  { label: "Reservations", href: "#reservations" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16 md:h-20">
          <a href="#hero" onClick={() => handleClick("#hero")} className="font-display text-2xl md:text-3xl text-foreground tracking-tight">
            Maison Ember
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <button onClick={() => handleClick(l.href)} className="nav-link pb-1">
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => handleClick("#reservations")} className="btn-primary text-xs">
                Reserve a Table
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex items-center justify-center"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{ open: { transition: { staggerChildren: 0.05 } }, closed: {} }}
              className="flex flex-col items-center gap-8"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 12 } }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => handleClick(l.href)}
                    className="font-display text-3xl text-foreground"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 12 } }}
                transition={{ duration: 0.3 }}
              >
                <button onClick={() => handleClick("#reservations")} className="btn-primary mt-4">
                  Reserve a Table
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
