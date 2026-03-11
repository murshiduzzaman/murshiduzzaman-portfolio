import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Research", description: "Deep-dive into your brand, audience, and market to build a winning foundation." },
  { icon: Lightbulb, title: "Strategy", description: "Craft a data-driven marketing and creative strategy tailored to your goals." },
  { icon: Rocket, title: "Creative Production", description: "Design high-converting ads and content using cutting-edge AI tools." },
  { icon: TrendingUp, title: "Growth Optimization", description: "Analyze, test, and optimize for continuous performance improvement." },
];

const WorkProcess = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-secondary font-medium uppercase tracking-wider">Process</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mt-2">
            How I <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 text-center relative group hover-glow transition-all duration-300"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                {i + 1}
              </div>
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors">
                <step.icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
