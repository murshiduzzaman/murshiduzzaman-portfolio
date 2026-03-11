import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Loader2, CheckCircle, TrendingUp, Users, BarChart3, Zap, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);

const benefits = [
  { icon: TrendingUp, text: "Growth strategy roadmap" },
  { icon: Users, text: "Audience targeting tips" },
  { icon: BarChart3, text: "Content performance review" },
  { icon: Zap, text: "Quick-win recommendations" },
];

const FreeAudit = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError("");
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    toast.success("Audit request received! I'll review your page and get back to you soon.");
    setEmail("");
    setPageUrl("");
  };

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Info & Benefits */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Sparkles size={14} className="text-secondary" />
                  <span className="text-xs font-medium text-secondary uppercase tracking-wider">100% Free</span>
                </div>

                <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  Get Your Free
                  <br />
                  <span className="text-gradient">Growth Audit</span>
                </h3>

                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  I'll personally review your social media presence and deliver actionable insights to accelerate your growth — no strings attached.
                </p>

                {/* Benefits grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={benefit.text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <benefit.icon size={16} className="text-secondary" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-tight mt-1.5">
                        {benefit.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Trust indicator */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-background flex items-center justify-center"
                      >
                        <span className="text-[10px] font-bold text-foreground/70">
                          {["S", "A", "M", "R"][i - 1]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground font-semibold">50+</span> audits delivered this month
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-8 lg:p-12 bg-muted/30 border-t lg:border-t-0 lg:border-l border-border/50 flex items-center"
            >
              <div className="w-full">
                <h4 className="font-heading text-lg font-semibold mb-2">
                  Claim Your Free Audit
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill in the details below and I'll get back within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="you@example.com"
                      className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      maxLength={255}
                    />
                    {error && <p className="text-destructive text-xs mt-1.5">{error}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                      Social Media Page URL
                    </label>
                    <input
                      type="url"
                      value={pageUrl}
                      onChange={(e) => setPageUrl(e.target.value)}
                      placeholder="https://instagram.com/yourbrand"
                      className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      maxLength={500}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-primary-foreground font-semibold rounded-xl px-6 py-4 flex items-center justify-center gap-2.5 transition-all shadow-[var(--glow-primary)] hover:shadow-[0_0_40px_hsl(244_95%_69%/0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 text-sm"
                  >
                    {isSubmitting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        <CheckCircle size={18} />
                        Get My Free Audit
                        <ArrowRight size={16} />
                      </>
                    )}
                    {isSubmitting && "Submitting..."}
                  </button>

                  <p className="text-[11px] text-muted-foreground/60 text-center pt-1">
                    🔒 Your information is safe. No spam, ever.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeAudit;
