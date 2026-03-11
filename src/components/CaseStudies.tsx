import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import caseStudyLeads from "@/assets/case-study-leads.jpg";
import caseStudySocialGrowth from "@/assets/case-study-social-growth.jpg";
import caseStudyAiCreatives from "@/assets/case-study-ai-creatives.jpg";
import caseStudyRestaurant from "@/assets/case-study-restaurant.jpg";
import caseStudyAppDownloads from "@/assets/case-study-app-downloads.jpg";

const caseStudies = [
  {
    slug: "ecommerce-brand-growth",
    title: "E-commerce Brand Growth",
    image: caseStudyEcommerce,
    tags: ["Facebook Ads", "Ecommerce", "AI Creatives"],
    metrics: [
      { label: "Revenue Generated", value: "$12,000" },
      { label: "ROAS", value: "4.1x" },
    ],
    strategy: "Creative Ads + Facebook Campaign",
  },
  {
    slug: "lead-generation-campaign",
    title: "Lead Generation Campaign",
    image: caseStudyLeads,
    tags: ["Facebook Ads", "Lead Gen"],
    metrics: [
      { label: "Cost per Lead", value: "$1.20" },
      { label: "Leads Generated", value: "320+" },
    ],
    strategy: "Facebook Ads + Landing Page Optimization",
  },
  {
    slug: "social-media-growth",
    title: "Social Media Growth Strategy",
    image: caseStudySocialGrowth,
    tags: ["Instagram", "Content Strategy", "Organic Growth"],
    metrics: [
      { label: "Follower Growth", value: "15K+" },
      { label: "Engagement Rate", value: "6.8%" },
    ],
    strategy: "Content Calendar + Reels Strategy",
  },
  {
    slug: "ai-creative-campaign",
    title: "AI Creative Ad Campaign",
    image: caseStudyAiCreatives,
    tags: ["AI Design", "Ad Creatives", "A/B Testing"],
    metrics: [
      { label: "Creatives Produced", value: "120+" },
      { label: "CTR Increase", value: "2.4x" },
    ],
    strategy: "AI-Powered Design + Split Testing",
  },
  {
    slug: "restaurant-delivery-ads",
    title: "Restaurant Delivery Campaign",
    image: caseStudyRestaurant,
    tags: ["Facebook Ads", "Local Business", "Food Delivery"],
    metrics: [
      { label: "Orders Generated", value: "850+" },
      { label: "Cost per Order", value: "$2.10" },
    ],
    strategy: "Geo-Targeted Ads + Offer Campaigns",
  },
  {
    slug: "app-download-campaign",
    title: "App Download Campaign",
    image: caseStudyAppDownloads,
    tags: ["Facebook Ads", "App Install", "Mobile Marketing"],
    metrics: [
      { label: "App Installs", value: "5,200+" },
      { label: "Cost per Install", value: "$0.85" },
    ],
    strategy: "App Install Ads + Lookalike Audiences",
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-sm text-secondary font-medium uppercase tracking-wider">
            Results
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mt-2">
            Case <span className="text-gradient">Studies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(244_95%_69%/0.25)] transition-all duration-300"
            >
              {/* Preview Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full bg-primary/15 text-secondary border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-heading text-xl font-semibold mb-6">
                  {cs.title}
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-muted rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-heading font-bold text-gradient">
                        {m.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Strategy */}
                <div className="mb-6">
                  <span className="text-xs text-muted-foreground">Strategy</span>
                  <p className="text-sm font-medium mt-0.5">{cs.strategy}</p>
                </div>

                {/* CTA */}
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-foreground transition-colors group/link"
                >
                  View Case Study
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
