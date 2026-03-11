import { motion, useInView } from "framer-motion";
import { useRef, forwardRef } from "react";
import {
  MetaIcon, PhotoshopIcon, CanvaIcon, InstagramIcon, FacebookIcon,
  TikTokIcon, FigmaIcon, IllustratorIcon, LightroomIcon,
  GoogleAnalyticsIcon, MidjourneyIcon, GoogleAdsIcon, CapCutIcon, LinkedInIcon
} from "./BrandIcons";

const row1 = [
  { name: "Meta Ads", icon: MetaIcon },
  { name: "Midjourney", icon: MidjourneyIcon },
  { name: "Photoshop", icon: PhotoshopIcon },
  { name: "Canva", icon: CanvaIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Illustrator", icon: IllustratorIcon },
  { name: "Lightroom", icon: LightroomIcon },
];

const row2 = [
  { name: "Instagram", icon: InstagramIcon },
  { name: "Facebook Ads", icon: FacebookIcon },
  { name: "TikTok", icon: TikTokIcon },
  { name: "Google Ads", icon: GoogleAdsIcon },
  { name: "Google Analytics", icon: GoogleAnalyticsIcon },
  { name: "LinkedIn", icon: LinkedInIcon },
  { name: "CapCut", icon: CapCutIcon },
];

const SkillBadge = ({ skill }: { skill: { name: string; icon: React.ElementType } }) => (
  <div className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 hover-glow transition-all duration-300 hover:-translate-y-1 group flex-shrink-0">
    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
      <skill.icon size={20} className="text-secondary" />
    </div>
    <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
  </div>
);

const MarqueeRow = forwardRef<HTMLDivElement, { items: typeof row1; direction: "left" | "right" }>(
  ({ items, direction }, ref) => {
    const doubled = [...items, ...items];

    return (
      <div className="relative overflow-hidden py-2" ref={ref}>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4"
          animate={{
            x: direction === "left" ? [0, -50 * items.length] : [-50 * items.length, 0],
          }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {doubled.map((skill, i) => (
            <SkillBadge key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </motion.div>
      </div>
    );
  }
);

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-secondary font-medium uppercase tracking-wider">Skills</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mt-2">
            Tools & <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
