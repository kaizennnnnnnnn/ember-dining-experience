import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ReservationSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Name is required";
    if (!form.get("email") || !/\S+@\S+\.\S+/.test(form.get("email") as string)) errs.email = "Valid email required";
    if (!form.get("phone")) errs.phone = "Phone is required";
    if (!form.get("date")) errs.date = "Date is required";
    if (!form.get("time")) errs.time = "Time is required";
    if (!form.get("guests")) errs.guests = "Number of guests required";
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
    { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
    { name: "phone", label: "Phone", type: "tel", placeholder: "+381 ..." },
    { name: "date", label: "Date", type: "date", placeholder: "" },
    { name: "time", label: "Time", type: "time", placeholder: "" },
    { name: "guests", label: "Number of Guests", type: "number", placeholder: "2" },
  ];

  return (
    <section id="reservations" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <ScrollReveal>
            <span className="badge-label mb-4 block">Reservations</span>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Reserve Your Table
            </h2>
            <p className="body-text mb-10">
              Whether it's an intimate dinner for two or a celebration with friends, we'll make every moment special.
              Book your table and let us take care of the rest.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
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
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <p className="text-foreground">Mon–Sun: 12:00 – 23:00</p>
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
                  <h3 className="font-display text-2xl text-foreground mb-2">Thank You!</h3>
                  <p className="body-text text-center">We'll confirm your reservation shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 text-sm">
                    Make Another Reservation
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
                      Special Requests
                    </label>
                    <textarea
                      id="requests"
                      name="requests"
                      rows={3}
                      placeholder="Allergies, celebrations, seating preferences..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-base py-3.5">
                    Book Your Table
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll confirm your reservation within 2 hours.
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
