import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import testimonialDavid from "@/assets/testimonial-david.png";
import testimonialSarah from "@/assets/testimonial-sarah.png";
import testimonialElena from "@/assets/testimonial-elena.png";
import testimonialMarcus from "@/assets/testimonial-marcus.png";

const testimonials = [
  {
    badge: "✨ Standout Visual Identity",
    name: "David Chen",
    role: "Creative Director, BuzzMedia",
    text: "We wanted something completely different to break through the feed, and the custom pop-art comic illustrations delivered were incredible. The vibrant vector shapes and halftone dotted patterns gave our brand an unforgettable, edgy look that our audience instantly connected with.",
    avatar: "DC",
    photo: testimonialDavid,
    link: { label: "View Illustration Gallery", href: "#portfolio" },
  },
  {
    badge: "📈 Tripled Organic Reach",
    name: "Sarah J.",
    role: "Founder, TechWear Apparel",
    text: "Murshid completely overhauled our social strategy. He doesn't just post pretty pictures; he analyzes the data and builds campaigns that actually convert. Our organic reach tripled in just two months, and our follower retention is higher than ever.",
    avatar: "SJ",
    photo: testimonialSarah,
    link: { label: "Read Full Case Study", href: "#case-studies" },
  },
  {
    badge: "⭐ Top-Tier Reliability",
    name: "Elena R.",
    role: "Marketing Manager, FitLife",
    text: "Finding reliable, proactive talent is tough, but working together was a breeze from day one. From rewriting our project scope to delivering top-tier AI graphics and managing our campaigns flawlessly, the professionalism is unmatched. Highly recommend to anyone looking to scale.",
    avatar: "ER",
    photo: testimonialElena,
    link: { label: "See Campaign Results", href: "#case-studies" },
  },
  {
    badge: "💰 2x Ad Conversions",
    name: "Marcus T.",
    role: "CEO, Elevate E-commerce",
    text: "It's rare to find someone who understands both the analytical side of Meta ads and the creative side of modern AI design. The cohesive aesthetics built for us stopped the scroll, and the targeted marketing strategy turned those views into actual sales.",
    avatar: "MT",
    photo: testimonialMarcus,
    link: { label: "Read Full Case Study", href: "#case-studies" },
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-secondary font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mt-2">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current + "-badge"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <span className="inline-block bg-primary/10 border border-primary/20 text-sm font-medium px-4 py-1.5 rounded-full text-foreground">
                {t.badge}
              </span>
            </motion.div>
          </AnimatePresence>

          <Quote size={36} className="text-primary/20 mx-auto mb-5" />

          <AnimatePresence mode="wait">
            <motion.p
              key={current + "-text"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="text-lg leading-relaxed text-muted-foreground mb-8"
            >
              "{t.text}"
            </motion.p>
          </AnimatePresence>

          {/* Client info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current + "-info"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="font-heading font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>

              {/* Bottom link */}
              <a
                href={t.link.href}
                className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-secondary/80 font-medium transition-colors group"
              >
                {t.link.label}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover-glow transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover-glow transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
