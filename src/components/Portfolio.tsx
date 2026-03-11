import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const categories = ["All", "Social Media Ads", "Creative Posters", "AI Generated", "Campaigns"];

const projects = [
  { image: portfolio1, title: "Fashion Brand Ad Campaign", category: "Social Media Ads", description: "High-converting social media ad for fashion e-commerce brand.", slug: "fashion-brand-ad-campaign" },
  { image: portfolio2, title: "AI Tech Startup Creative", category: "AI Generated", description: "AI-powered creative design for tech startup launch.", slug: "ai-tech-startup-creative" },
  { image: portfolio3, title: "Food Brand Facebook Ads", category: "Social Media Ads", description: "Scroll-stopping ad creatives for food delivery brand.", slug: "food-brand-facebook-ads" },
  { image: portfolio4, title: "Campaign Analytics Dashboard", category: "Campaigns", description: "Marketing campaign performance visualization & reporting.", slug: "campaign-analytics-dashboard" },
  { image: portfolio5, title: "AI Beauty Brand Creative", category: "AI Generated", description: "AI-generated artistic creative for beauty brand social media.", slug: "ai-beauty-brand-creative" },
  { image: portfolio6, title: "Fitness Brand Carousel", category: "Creative Posters", description: "Dynamic carousel post design for fitness brand marketing.", slug: "fitness-brand-carousel" },
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-sm text-secondary font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mt-2">
            Selected <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-5 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-gradient-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link to={`/portfolio/${project.slug}`} className="block">
                  <div className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-secondary">{project.category}</span>
                      <h3 className="font-heading font-semibold mt-1">{project.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
