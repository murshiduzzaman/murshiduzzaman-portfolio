import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Megaphone, PenTool, Sparkles, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Strategy, growth systems, and account optimization to build engaged communities and drive conversions.",
    tags: ["Strategy", "Growth", "Content"],
    slug: "social-media-marketing",
    metric: { value: "3x", label: "Engagement" },
    accent: "from-primary to-primary/60",
  },
  {
    icon: BarChart3,
    title: "Facebook Ads Management",
    description: "Performance ads, optimization, and creative testing to maximize ROAS and minimize ad spend waste.",
    tags: ["Performance Ads", "Optimization"],
    slug: "facebook-ads",
    metric: { value: "4.1x", label: "Avg ROAS" },
    accent: "from-secondary to-secondary/60",
  },
  {
    icon: PenTool,
    title: "Creative Ad Design",
    description: "High-converting ads, product creatives, and scroll-stopping visuals that capture attention instantly.",
    tags: ["Ad Creatives", "Product Design", "Visuals"],
    slug: "creative-ad-design",
    metric: { value: "2.5x", label: "CTR Boost" },
    accent: "from-primary to-secondary",
  },
  {
    icon: Sparkles,
    title: "AI Social Media Design",
    description: "AI-powered creative production, automated content systems, and scalable creative assets for rapid growth.",
    tags: ["AI Production", "Automation", "Scale"],
    slug: "ai-social-media-design",
    metric: { value: "10x", label: "Faster" },
    accent: "from-secondary to-primary",
  },
];

const ServiceCard = ({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <Link to={`/services/${service.slug}`} className="block">
        <div className="relative glass-card rounded-2xl p-8 lg:p-9 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(244_95%_69%/0.15)]">
          {/* Animated corner accent */}
          <motion.div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.accent} rounded-bl-[80px] opacity-0 transition-opacity duration-500`}
            style={{ opacity: hovered ? 0.08 : 0 }}
          />

          {/* Animated top border */}
          <motion.div
            className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r ${service.accent}`}
            initial={{ width: "0%" }}
            animate={{ width: hovered ? "100%" : "0%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          <div className="flex items-start justify-between mb-6">
            {/* Icon */}
            <motion.div
              animate={{
                rotate: hovered ? 6 : 0,
                scale: hovered ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center relative"
            >
              <service.icon size={24} className="text-primary-foreground" />
              {/* Icon glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
            </motion.div>

            {/* Metric badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              className="flex flex-col items-end"
            >
              <span className="text-xl font-heading font-bold text-gradient">{service.metric.value}</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{service.metric.label}</span>
            </motion.div>
          </div>

          <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
            {service.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                className="text-[11px] px-3 py-1.5 rounded-full bg-muted/80 text-muted-foreground border border-border/30 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-secondary group-hover:text-foreground transition-colors">
            <span>Explore Service</span>
            <motion.div
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight size={14} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      {/* Background decorations */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-[120px] top-20 -left-40"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-secondary font-medium uppercase tracking-wider">
            What I Do
          </span>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mt-2 mb-4">
            Services That <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            From strategy to execution — everything your brand needs to dominate social media.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
