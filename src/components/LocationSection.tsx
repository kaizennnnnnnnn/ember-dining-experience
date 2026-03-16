import { MapPin, Phone, Mail, Clock, Car, TreePine, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const info = [
  { icon: MapPin, label: "Address", value: "Kralja Petra 74, 11000 Beograd" },
  { icon: Phone, label: "Phone", value: "+381 11 234 5678" },
  { icon: Mail, label: "Email", value: "info@maisonember.com" },
];

const hours = [
  { day: "Monday – Friday", time: "12:00 – 23:00" },
  { day: "Saturday", time: "11:00 – 00:00" },
  { day: "Sunday", time: "11:00 – 22:00" },
];

const extras = [
  { icon: Users, text: "Private events available" },
  { icon: Car, text: "Parking nearby" },
  { icon: TreePine, text: "Outdoor seating" },
];

const LocationSection = () => (
  <section id="contact" className="section-padding bg-muted/30">
    <div className="section-container">
      <ScrollReveal className="text-center mb-16">
        <span className="badge-label mb-4 block">Find Us</span>
        <h2 className="text-4xl md:text-5xl font-light text-foreground">Location & Contact</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Map placeholder */}
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden bg-muted h-80 lg:h-full min-h-[320px] flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="text-primary mx-auto mb-3" size={36} />
              <p className="text-foreground font-display text-lg mb-2">Kralja Petra 74</p>
              <p className="text-muted-foreground text-sm mb-4">11000 Beograd, Serbia</p>
              <a
                href="https://maps.google.com/?q=Kralja+Petra+74+Beograd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs px-4 py-2"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact details */}
        <div>
          <ScrollReveal>
            <div className="space-y-6 mb-10">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <item.icon className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-display text-xl text-foreground mb-4">Opening Hours</h3>
            <div className="space-y-3 mb-10">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm text-foreground">{h.day}</span>
                  <span className="price-text text-sm">{h.time}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap gap-4">
              {extras.map((e) => (
                <div key={e.text} className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                  <e.icon className="text-primary" size={14} />
                  <span className="text-sm text-foreground">{e.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
