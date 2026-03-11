import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import testimonialDavid from "@/assets/testimonial-david.png";
import testimonialSarah from "@/assets/testimonial-sarah.png";
import testimonialElena from "@/assets/testimonial-elena.png";
import testimonialMarcus from "@/assets/testimonial-marcus.png";

const CtaBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[120px] -top-20 -left-20"
        style={{ background: "hsl(var(--primary))" }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[100px] -bottom-20 -right-20"
        style={{ background: "hsl(var(--secondary))" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-10 lg:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Inner glow accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles size={24} className="text-primary-foreground" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-heading text-3xl lg:text-4xl font-bold mb-4"
          >
            Ready to <span className="text-gradient">Scale Your Brand?</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed"
          >
            Let's turn your marketing into a growth engine. Get started with a free strategy consultation today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#start-project"
              className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold rounded-xl px-8 py-3.5 glow-primary hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              Start Your Project
              <Zap size={16} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="https://wa.me/8801725129901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-card border border-border/50 font-semibold rounded-xl px-8 py-3.5 hover-glow hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon size={16} className="text-secondary" /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center gap-6 mt-8 pt-6 border-t border-border/30"
          >
            {/* Client avatars + social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[testimonialDavid, testimonialSarah, testimonialElena, testimonialMarcus].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Client"
                    className="w-9 h-9 rounded-full border-2 border-card object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Trusted by <span className="text-foreground font-medium">110+ happy clients</span>
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              {[
                { value: "50+", label: "Projects" },
                { value: "24h", label: "Response" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-sm font-bold text-gradient font-heading">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
