import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Target, Palette, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: TrendingUp, label: "Social Media Growth", slug: "social-media-marketing" },
  { icon: Target, label: "Paid Ads", slug: "facebook-ads" },
  { icon: Palette, label: "Creative Strategy", slug: "creative-ad-design" },
  { icon: Sparkles, label: "AI Generated Content", slug: "ai-social-media-design" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stats side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "76+", label: "Projects Done" },
                { value: "110+", label: "Happy Clients" },
                { value: "3+", label: "Years Experience" },
                { value: "96%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-xl p-6 text-center hover-glow transition-all">
                  <div className="text-3xl font-heading font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm text-secondary font-medium uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mt-2 mb-6">
              I Help Brands <span className="text-gradient">Grow Faster</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Md. Murshiduzzaman Sarker — a Social Media Marketer & AI Social
              Media Designer based in Bangladesh, working with clients globally. I
              help brands grow faster using strategic social media marketing,
              high-converting ad creatives, and AI-powered design systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a deep understanding of social platforms, paid advertising, and
              creative production, I craft strategies and visuals that don't just
              look great — they drive real business results.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, slug }, i) => (
                <Link
                  to={`/services/${slug}`}
                  key={i}
                  className="flex items-center gap-3 glass-card rounded-lg px-4 py-3 hover-glow transition-all hover:-translate-y-0.5 group"
                >
                  <Icon size={18} className="text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
