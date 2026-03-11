import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Clock, Loader2, CheckCircle, Phone, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { WhatsAppIcon, FacebookIcon, LinkedInIcon, UpworkIcon } from "./BrandIcons";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  details: z.string().trim().min(1, "Please describe your project").max(2000, "Message is too long"),
});

const contactMethods = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+880 1725 129901",
    description: "Quick response within 1 hour",
    url: "https://wa.me/8801725129901",
    color: "bg-green-500/15 text-green-400 border-green-500/20",
    hoverGlow: "hover:shadow-[0_0_25px_hsl(142_70%_45%/0.2)]",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "Murshiduzzaman DM",
    description: "Message me on Facebook",
    url: "https://www.facebook.com/murshiduzzamanDm/",
    color: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    hoverGlow: "hover:shadow-[0_0_25px_hsl(217_90%_60%/0.2)]",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    description: "Professional networking",
    url: "https://www.linkedin.com/in/md-murshiduzzaman-sarkar-05b5583a0",
    color: "bg-sky-500/15 text-sky-400 border-sky-500/20",
    hoverGlow: "hover:shadow-[0_0_25px_hsl(199_90%_50%/0.2)]",
  },
  {
    icon: UpworkIcon,
    label: "Upwork",
    value: "Hire on Upwork",
    description: "View my profile & reviews",
    url: "https://www.upwork.com/freelancers/~0145981f92b4eebb49?mp_source=share",
    color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    hoverGlow: "hover:shadow-[0_0_25px_hsl(160_80%_45%/0.2)]",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Build WhatsApp message with form data
    const message = encodeURIComponent(
      `Hi! I'm ${result.data.name}.\n\nEmail: ${result.data.email}\n\nProject Details:\n${result.data.details}`
    );
    window.open(`https://wa.me/8801725129901?text=${message}`, "_blank");

    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    toast.success("Redirecting to WhatsApp! I'll respond within 1 hour.");
    setForm({ name: "", email: "", details: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-secondary font-medium uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mt-2">
            Let's <span className="text-gradient">Grow Your Brand</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Ready to take your social media presence to the next level? Choose your preferred way to connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact method cards */}
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-center gap-4 glass-card rounded-xl p-4 border transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 ${method.hoverGlow}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${method.color}`}>
                  <method.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-heading font-semibold text-sm flex items-center gap-2">
                    {method.label}
                    <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-xs text-foreground/80 truncate">{method.value}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{method.description}</div>
                </div>
              </motion.a>
            ))}

            {/* Quick info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card rounded-xl p-5 space-y-4 mt-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock size={16} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-medium">Response Time</p>
                  <p className="text-[11px] text-muted-foreground">Usually within 1 hour</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={16} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-medium">Available Worldwide</p>
                  <p className="text-[11px] text-muted-foreground">Remote work, any timezone</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail size={16} className="text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-medium">Free Consultation</p>
                  <p className="text-[11px] text-muted-foreground">No obligation to start</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 lg:p-10 space-y-6 border border-border/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Send size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">Send a Message</h3>
                  <p className="text-xs text-muted-foreground">I'll respond via WhatsApp for fastest communication</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="John Doe"
                    maxLength={100}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="you@example.com"
                    maxLength={255}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Project Details *
                </label>
                <textarea
                  rows={5}
                  value={form.details}
                  onChange={(e) => {
                    setForm({ ...form, details: e.target.value });
                    if (errors.details) setErrors({ ...errors, details: "" });
                  }}
                  className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell me about your brand, goals, and what services you're interested in..."
                  maxLength={2000}
                />
                {errors.details && <p className="text-destructive text-xs mt-1">{errors.details}</p>}
                <p className="text-[11px] text-muted-foreground/50 text-right mt-1">
                  {form.details.length}/2000
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-primary-foreground font-semibold rounded-xl px-6 py-4 flex items-center justify-center gap-2.5 transition-all shadow-[var(--glow-primary)] hover:shadow-[0_0_40px_hsl(244_95%_69%/0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <WhatsAppIcon size={18} />
                    Send via WhatsApp
                    <Phone size={14} />
                  </>
                )}
              </button>

              <p className="text-[11px] text-muted-foreground/60 text-center">
                🔒 Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
