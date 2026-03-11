import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, BarChart3, Globe } from "lucide-react";

const stats = [
  { icon: Palette, value: "170+", label: "Creatives Designed" },
  { icon: BarChart3, value: "225+", label: "Campaigns Managed" },
  { icon: Globe, value: "5+", label: "Countries Served" },
];

const SocialProof = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 border-y border-border relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-10"
        >
          Trusted by growing brands worldwide
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <stat.icon size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-heading font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
