import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Megaphone,
  BarChart3,
  PenTool,
  Sparkles,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Rocket,
  Zap,
  Send,
} from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { toast } from "sonner";

const projectTypes = [
  { id: "smm", icon: Megaphone, label: "Social Media Marketing", desc: "Strategy & growth" },
  { id: "ads", icon: BarChart3, label: "Facebook Ads", desc: "Paid campaigns" },
  { id: "design", icon: PenTool, label: "Creative Ad Design", desc: "Visual creatives" },
  { id: "ai", icon: Sparkles, label: "AI Social Design", desc: "AI-powered content" },
  { id: "full", icon: Layers, label: "Full Strategy", desc: "Everything included" },
];

const budgetOptions = [
  { id: "starter", range: "$100 – $300", label: "Starter", emoji: "🌱" },
  { id: "growth", range: "$300 – $1,000", label: "Growth", emoji: "🚀" },
  { id: "scale", range: "$1,000 – $5,000", label: "Scale", emoji: "⚡" },
  { id: "enterprise", range: "$5,000+", label: "Enterprise", emoji: "🏆" },
];

const timelineOptions = [
  { id: "asap", label: "ASAP", desc: "Start immediately" },
  { id: "week", label: "This Week", desc: "Within 7 days" },
  { id: "month", label: "This Month", desc: "Within 30 days" },
  { id: "flexible", label: "Flexible", desc: "No rush" },
];

// Floating particle component
const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-secondary/20 pointer-events-none"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 4 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

// Orbiting ring
const OrbitRing = ({ size, duration, opacity }: { size: number; duration: number; opacity: number }) => (
  <motion.div
    className="absolute left-1/2 top-1/2 rounded-full border border-primary/10 pointer-events-none"
    style={{
      width: size,
      height: size,
      marginLeft: -size / 2,
      marginTop: -size / 2,
      opacity,
    }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  >
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-secondary/40"
      style={{ top: -4, left: "50%", marginLeft: -4 }}
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
);

const StartProjectForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [step, setStep] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const totalSteps = 3;
  const progress = ((step + 1) / totalSteps) * 100;

  const canProceed = () => {
    if (step === 0) return selectedType !== null;
    if (step === 1) return selectedBudget !== null;
    if (step === 2) return selectedTimeline !== null;
    return false;
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      const type = projectTypes.find((t) => t.id === selectedType)?.label || "";
      const budget = budgetOptions.find((b) => b.id === selectedBudget)?.range || "";
      const timeline = timelineOptions.find((t) => t.id === selectedTimeline)?.label || "";
      const message = encodeURIComponent(
        `Hi! I'd like to start a project.\n\n📋 Service: ${type}\n💰 Budget: ${budget}\n⏰ Timeline: ${timeline}\n\nLooking forward to working together!`
      );
      window.open(`https://wa.me/8801725129901?text=${message}`, "_blank");
      setIsComplete(true);
      toast.success("Opening WhatsApp! Let's get started 🚀");
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const resetForm = () => {
    setStep(0);
    setSelectedType(null);
    setSelectedBudget(null);
    setSelectedTimeline(null);
    setIsComplete(false);
  };

  const stepVariants = {
    enter: { opacity: 0, x: 60, filter: "blur(4px)" },
    center: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: -60, filter: "blur(4px)" },
  };

  const stepLabels = ["Service", "Budget", "Timeline"];

  return (
    <section id="start-project" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-8 blur-[160px] top-0 left-1/2 -translate-x-1/2"
        style={{ background: "hsl(var(--primary))" }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-6 blur-[120px] bottom-0 right-0"
        style={{ background: "hsl(var(--secondary))" }}
      />

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={6} />
      <FloatingParticle delay={1.5} x="85%" y="15%" size={4} />
      <FloatingParticle delay={0.8} x="75%" y="70%" size={8} />
      <FloatingParticle delay={2} x="15%" y="75%" size={5} />
      <FloatingParticle delay={1} x="50%" y="85%" size={3} />
      <FloatingParticle delay={0.5} x="90%" y="50%" size={6} />

      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Header with creative animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 relative"
        >
          {/* Orbiting rings around icon */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            <OrbitRing size={80} duration={8} opacity={0.3} />
            <OrbitRing size={120} duration={12} opacity={0.15} />
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-[0_0_40px_hsl(244_95%_69%/0.4)]">
                <Rocket size={28} className="text-primary-foreground" />
              </div>
            </motion.div>
          </div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-block text-sm text-secondary font-medium uppercase tracking-wider px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4"
          >
            ✦ Start in 60 Seconds
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="font-heading text-3xl lg:text-5xl font-bold mt-2 mb-3"
          >
            Launch Your{" "}
            <motion.span
              className="text-gradient inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Project
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-md mx-auto text-sm"
          >
            Pick your options below and I'll have a custom plan ready for you.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.3, type: "spring", damping: 20 }}
          className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden border border-border/50"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--secondary)), hsl(var(--primary)), transparent)",
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--secondary)), transparent)",
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Step indicator with dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {stepLabels.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: step === i ? 1 : 0.8,
                    backgroundColor: step >= i ? "hsl(var(--secondary))" : "hsl(var(--muted))",
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors"
                >
                  <motion.div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                    animate={{
                      backgroundColor: step >= i ? "hsl(var(--primary))" : "hsl(var(--muted))",
                      color: step >= i ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {step > i ? <CheckCircle size={14} /> : i + 1}
                  </motion.div>
                  <span className={`text-xs font-medium hidden sm:inline ${step >= i ? "text-foreground" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                </motion.div>
                {i < stepLabels.length - 1 && (
                  <motion.div
                    className="w-8 h-0.5 rounded-full"
                    animate={{
                      backgroundColor: step > i ? "hsl(var(--secondary))" : "hsl(var(--border))",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Progress bar with glow */}
          <div className="relative h-1 bg-muted rounded-full overflow-hidden mb-8">
            <motion.div
              className="h-full bg-gradient-primary rounded-full relative"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary"
                animate={{ boxShadow: ["0 0 10px hsl(var(--secondary))", "0 0 25px hsl(var(--secondary))", "0 0 10px hsl(var(--secondary))"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Success state */}
          {isComplete ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-secondary/5"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <CheckCircle size={48} className="text-secondary" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-2xl font-bold mb-2"
              >
                You're All Set! 🎉
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto"
              >
                I'll review your project details and send you a custom strategy within 24 hours.
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={resetForm}
                className="text-sm text-secondary hover:text-foreground transition-colors"
              >
                Submit another project →
              </motion.button>
            </motion.div>
          ) : (
            <>
              {/* Step content */}
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      What do you need? <span className="text-secondary">✦</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">Select the service that fits your goals</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {projectTypes.map((type, i) => (
                        <motion.button
                          key={type.id}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: i * 0.06, type: "spring", stiffness: 300 }}
                          onClick={() => setSelectedType(type.id)}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center gap-4 rounded-xl p-4 text-left transition-all duration-300 border ${
                            selectedType === type.id
                              ? "bg-primary/10 border-primary/40 shadow-[0_0_25px_hsl(244_95%_69%/0.2)]"
                              : "bg-muted/30 border-border/30 hover:border-border hover:bg-muted/50"
                          }`}
                        >
                          <motion.div
                            animate={{
                              rotate: selectedType === type.id ? [0, -10, 10, 0] : 0,
                              scale: selectedType === type.id ? 1.1 : 1,
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                              selectedType === type.id
                                ? "bg-gradient-primary shadow-[0_0_15px_hsl(244_95%_69%/0.3)]"
                                : "bg-muted"
                            }`}
                          >
                            <type.icon
                              size={20}
                              className={
                                selectedType === type.id
                                  ? "text-primary-foreground"
                                  : "text-muted-foreground"
                              }
                            />
                          </motion.div>
                          <div>
                            <div className="font-semibold text-sm">{type.label}</div>
                            <div className="text-[11px] text-muted-foreground">{type.desc}</div>
                          </div>
                          {selectedType === type.id && (
                            <motion.div
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="ml-auto"
                            >
                              <CheckCircle size={18} className="text-secondary" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step-1"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      What's your budget? <span className="text-secondary">💰</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">Choose a range that works for you</p>
                    <div className="grid grid-cols-2 gap-3">
                      {budgetOptions.map((budget, i) => (
                        <motion.button
                          key={budget.id}
                          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
                          whileHover={{ scale: 1.04, y: -3 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => setSelectedBudget(budget.id)}
                          className={`rounded-xl p-5 text-center transition-all duration-300 border ${
                            selectedBudget === budget.id
                              ? "bg-primary/10 border-primary/40 shadow-[0_0_25px_hsl(244_95%_69%/0.2)]"
                              : "bg-muted/30 border-border/30 hover:border-border hover:bg-muted/50"
                          }`}
                        >
                          <motion.div
                            className="text-3xl mb-2"
                            animate={selectedBudget === budget.id ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
                            transition={{ duration: 0.5 }}
                          >
                            {budget.emoji}
                          </motion.div>
                          <div className="font-semibold text-sm">{budget.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">{budget.range}</div>
                          {selectedBudget === budget.id && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-2">
                              <CheckCircle size={16} className="text-secondary mx-auto" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <h3 className="font-heading text-lg font-semibold mb-1">
                      When do you want to start? <span className="text-secondary">⏰</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">Pick your preferred timeline</p>
                    <div className="grid grid-cols-2 gap-3">
                      {timelineOptions.map((tl, i) => (
                        <motion.button
                          key={tl.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
                          whileHover={{ scale: 1.04, y: -3 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => setSelectedTimeline(tl.id)}
                          className={`rounded-xl p-5 text-center transition-all duration-300 border ${
                            selectedTimeline === tl.id
                              ? "bg-primary/10 border-primary/40 shadow-[0_0_25px_hsl(244_95%_69%/0.2)]"
                              : "bg-muted/30 border-border/30 hover:border-border hover:bg-muted/50"
                          }`}
                        >
                          <div className="font-semibold text-sm">{tl.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">{tl.desc}</div>
                          {selectedTimeline === tl.id && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-2">
                              <CheckCircle size={16} className="text-secondary mx-auto" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>

                    {/* Summary preview */}
                    {selectedTimeline && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        className="mt-6 bg-muted/30 rounded-xl p-4 border border-border/30 overflow-hidden"
                      >
                        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">Your Project Summary</div>
                        <div className="flex flex-wrap gap-2">
                          {[
                            projectTypes.find((t) => t.id === selectedType)?.label,
                            budgetOptions.find((b) => b.id === selectedBudget)?.range,
                            timelineOptions.find((t) => t.id === selectedTimeline)?.label,
                          ].map((item, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-secondary border border-primary/20"
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
                <motion.button
                  onClick={handleBack}
                  disabled={step === 0}
                  whileHover={{ x: step > 0 ? -3 : 0 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ArrowLeft size={14} /> Back
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  whileHover={{ scale: canProceed() ? 1.05 : 1 }}
                  whileTap={{ scale: canProceed() ? 0.95 : 1 }}
                  className={`flex items-center gap-2 font-semibold rounded-xl px-7 py-3.5 transition-all disabled:opacity-40 disabled:pointer-events-none relative overflow-hidden ${
                    step === totalSteps - 1
                      ? "bg-gradient-primary text-primary-foreground shadow-[0_0_30px_hsl(244_95%_69%/0.4)]"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {/* Button shimmer */}
                  {canProceed() && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {step === totalSteps - 1 ? (
                      <>
                        <WhatsAppIcon size={16} /> Send via WhatsApp
                      </>
                    ) : (
                      <>
                        Next <ArrowRight size={14} />
                      </>
                    )}
                  </span>
                </motion.button>
              </div>
            </>
          )}
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          {[
            { icon: Zap, text: "Free consultation" },
            { icon: Send, text: "24h response" },
            { icon: CheckCircle, text: "No commitment" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-1.5 text-[11px] text-muted-foreground"
            >
              <item.icon size={12} className="text-secondary" />
              {item.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StartProjectForm;
