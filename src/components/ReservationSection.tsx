import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ReservationSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Ime je obavezno";
    if (!form.get("email") || !/\S+@\S+\.\S+/.test(form.get("email") as string)) errs.email = "Potrebna validna email adresa";
    if (!form.get("phone")) errs.phone = "Telefon je obavezan";
    if (!form.get("date")) errs.date = "Datum je obavezan";
    if (!form.get("time")) errs.time = "Vreme je obavezno";
    if (!form.get("guests")) errs.guests = "Broj gostiju je obavezan";
    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const fields = [
    { name: "name", label: "Ime i Prezime", type: "text", placeholder: "Vaše ime" },
    { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
    { name: "phone", label: "Telefon", type: "tel", placeholder: "+381 ..." },
    { name: "date", label: "Datum", type: "date", placeholder: "" },
    { name: "time", label: "Vreme", type: "time", placeholder: "" },
    { name: "guests", label: "Broj Gostiju", type: "number", placeholder: "2" },
  ];

  return (
    <section id="reservations" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <ScrollReveal>
            <span className="badge-label mb-4 block">Rezervacije</span>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Rezervišite Vaš Sto
            </h2>
            <p className="body-text mb-10">
              Bilo da je u pitanju intimna večera za dvoje ili proslava sa prijateljima, svaki trenutak ćemo učiniti posebnim.
              Rezervišite sto i prepustite nam ostatak.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Pozovite nas</p>
                  <p className="text-foreground">+381 11 234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">reservations@maisonember.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Radno vreme</p>
                  <p className="text-foreground">Pon–Ned: 12:00 – 23:00</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-elevated p-8 md:p-10 text-center flex flex-col items-center justify-center min-h-[400px]"
                >
                  <CheckCircle className="text-primary mb-4" size={48} />
                  <h3 className="font-display text-2xl text-foreground mb-2">Hvala Vam!</h3>
                  <p className="body-text text-center">Potvrdiću vašu rezervaciju uskoro.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 text-sm">
                    Napravite Još Jednu Rezervaciju
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="card-elevated p-6 md:p-8 space-y-5 hover:transform-none"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {fields.map((f) => (
                      <div key={f.name} className={f.name === "name" ? "sm:col-span-2" : ""}>
                        <label htmlFor={f.name} className="block text-sm text-muted-foreground mb-1.5 font-body">
                          {f.label}
                        </label>
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type}
                          placeholder={f.placeholder}
                          className="input-field"
                          min={f.type === "number" ? 1 : undefined}
                          max={f.type === "number" ? 20 : undefined}
                        />
                        {errors[f.name] && (
                          <p className="text-destructive text-xs mt-1">{errors[f.name]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="requests" className="block text-sm text-muted-foreground mb-1.5 font-body">
                      Posebni Zahtevi
                    </label>
                    <textarea
                      id="requests"
                      name="requests"
                      rows={3}
                      placeholder="Alergije, proslave, preference sedenja..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-base py-3.5">
                    Rezervišite Sto
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Potvrdiću vašu rezervaciju u roku od 2 sata.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
