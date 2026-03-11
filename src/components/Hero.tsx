import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, TrendingUp, Zap, BarChart3, Rocket, Sparkles } from "lucide-react";
import { FacebookIcon, LinkedInIcon, InstagramIcon } from "./BrandIcons";
import heroVisual from "@/assets/hero-visual.png";

const useCountUp = (end: number, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let startTime: number;
    let raf: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, startCounting]);
  return count;
};

const floatingStats = [
  { icon: Sparkles, label: "AI-Powered", x: "78%", y: "15%" },
  { icon: BarChart3, label: "320+ Leads", x: "72%", y: "82%" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const projectCount = useCountUp(50, 2000, statsInView);
  const roasCount = useCountUp(41, 2000, statsInView);
  const satisfactionCount = useCountUp(98, 2000, statsInView);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden animated-grid"
    >
      {/* Gradient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "hsl(244 95% 69%)",
          top: "10%",
          left: "10%",
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: "hsl(186 100% 50%)",
          bottom: "20%",
          right: "15%",
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      {/* Extra accent orb */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
        style={{
          background: "hsl(280 80% 60%)",
          top: "50%",
          right: "30%",
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * -15}px)`,
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? 6 : i % 3 === 1 ? 4 : 3,
            height: i % 3 === 0 ? 6 : i % 3 === 1 ? 4 : 3,
            background:
              i % 3 === 0
                ? "hsl(244 95% 69%)"
                : i % 3 === 1
                ? "hsl(186 100% 50%)"
                : "hsl(280 80% 60%)",
            top: `${10 + i * 10}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.7, 0.2],
            x: mousePos.x * (15 + i * 5),
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating stat badges */}
      {floatingStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.2, type: "spring", stiffness: 200 }}
          className="absolute hidden lg:flex items-center gap-2 glass-card px-3 py-2 rounded-full z-20"
          style={{
            left: stat.x,
            top: stat.y,
            transform: `translate(${mousePos.x * (10 + i * 8)}px, ${mousePos.y * (10 + i * 8)}px)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
            <stat.icon size={13} className="text-secondary" />
          </div>
          <span className="text-xs font-semibold text-foreground/90 pr-1">{stat.label}</span>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for freelance projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6 font-sans"
            >
              <span className="block">
                I Turn{" "}
                <span className="text-gradient relative">
                  Attention
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  />
                </span>
              </span>
              <span className="block mt-1">
                Into{" "}
                <span className="text-gradient relative">
                  Growth.
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
                  />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              Social Media Marketing & AI-Powered Creative Design that helps
              brands{" "}
              <span className="text-foreground font-medium">scale faster</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group relative bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all glow-primary overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <Zap size={16} className="group-hover:rotate-12 transition-transform" />
                </span>
              </a>
              <a
                href="#portfolio"
                className="glass-card px-8 py-3.5 rounded-xl font-semibold text-foreground hover-glow transition-all hover:scale-[1.03] active:scale-[0.98] border border-border/50"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-3 mt-8"
            >
              <span className="text-xs text-muted-foreground tracking-wider uppercase mr-1">Follow</span>
              <a
                href="https://www.facebook.com/murshiduzzamanDm/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl border border-border/50 bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-murshiduzzaman-sarkar-05b5583a0"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl border border-border/50 bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href="https://www.instagram.com/murshiduzzamandm/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl border border-border/50 bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <InstagramIcon size={16} />
              </a>
            </motion.div>
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10 pt-8 border-t border-border/30"
            >
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-xl font-bold text-gradient font-heading">{projectCount}+</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gradient font-heading">{(roasCount / 10).toFixed(1)}x</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Avg. ROAS</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gradient font-heading">{satisfactionCount}%</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Satisfaction</div>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground mt-3 tracking-wide">
                ✦ Trusted by growing brands worldwide
              </p>
            </motion.div>
          </div>

          {/* Right - hero visual (KEPT SAME) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div
              className="relative"
              style={{
                transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {/* Glow behind image */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-2xl opacity-60" />
              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-[2px] rounded-2xl z-10"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src={heroVisual}
                alt="Social media marketing creative showcase"
                className="w-full rounded-2xl relative z-20"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-border/50 z-20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
