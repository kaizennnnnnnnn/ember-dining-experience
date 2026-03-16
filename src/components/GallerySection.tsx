import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import galleryBar from "@/assets/gallery-bar.jpg";
import galleryCocktail from "@/assets/gallery-cocktail.jpg";
import galleryTable from "@/assets/gallery-table.jpg";
import galleryPrivate from "@/assets/gallery-private.jpg";
import galleryServing from "@/assets/gallery-serving.jpg";
import galleryDessert from "@/assets/gallery-dessert.jpg";
import dishScallops from "@/assets/dish-scallops.jpg";
import dishWagyu from "@/assets/dish-wagyu.jpg";

const images = [
  { src: galleryBar, alt: "Wine bar area", span: "col-span-2 row-span-1" },
  { src: galleryCocktail, alt: "Signature cocktail", span: "col-span-1 row-span-2" },
  { src: galleryTable, alt: "Table setting detail", span: "col-span-1 row-span-1" },
  { src: dishScallops, alt: "Seared scallops", span: "col-span-1 row-span-1" },
  { src: galleryPrivate, alt: "Private dining room", span: "col-span-1 row-span-1" },
  { src: galleryServing, alt: "Dish being served", span: "col-span-1 row-span-1" },
  { src: galleryDessert, alt: "Dessert preparation", span: "col-span-1 row-span-1" },
  { src: dishWagyu, alt: "Wagyu tenderloin", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="section-container">
        <ScrollReveal className="text-center mb-16">
          <span className="badge-label mb-4 block">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">A Glimpse Inside</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.03} className={`${i === 0 ? "md:col-span-2" : ""} ${i === 1 ? "md:row-span-2" : ""}`}>
              <button
                onClick={() => setSelected(i)}
                className="w-full h-full overflow-hidden rounded-xl group relative block"
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover image-frame transition-transform duration-300 ease-[var(--ease)] group-hover:scale-105 ${
                    i === 1 ? "h-full min-h-[300px] md:min-h-[400px]" : "h-48 md:h-56"
                  } ${i === 0 ? "md:h-56" : ""}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl image-frame"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
