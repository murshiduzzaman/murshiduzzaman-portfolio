import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, Target, Lightbulb, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import caseStudyLeads from "@/assets/case-study-leads.jpg";
import caseStudySocialGrowth from "@/assets/case-study-social-growth.jpg";
import caseStudyAiCreatives from "@/assets/case-study-ai-creatives.jpg";
import caseStudyRestaurant from "@/assets/case-study-restaurant.jpg";

const caseStudiesData: Record<string, {
  title: string;
  image: string;
  tags: string[];
  overview: string;
  problem: string;
  strategy: string[];
  results: { label: string; value: string }[];
}> = {
  "ecommerce-brand-growth": {
    title: "E-commerce Brand Growth",
    image: caseStudyEcommerce,
    tags: ["Facebook Ads", "Ecommerce", "AI Creatives"],
    overview:
      "A growing e-commerce brand needed to scale their online sales while maintaining a healthy return on ad spend. I developed a full-funnel Facebook Ads strategy combined with AI-generated ad creatives to drive consistent revenue growth.",
    problem:
      "The brand was struggling with low conversion rates from their existing ad campaigns. Their creatives were underperforming, audience targeting was too broad, and there was no structured testing framework in place. They needed a strategic overhaul to turn ad spend into profitable revenue.",
    strategy: [
      "Conducted deep audience research to identify high-intent buyer segments",
      "Created AI-powered ad creatives with multiple variations for split testing",
      "Built a full-funnel campaign structure: awareness → consideration → conversion",
      "Implemented retargeting campaigns for cart abandoners and engaged users",
      "Set up conversion tracking and optimized for purchase events",
      "Scaled winning ad sets while maintaining ROAS targets",
    ],
    results: [
      { label: "Revenue Generated", value: "$12,000" },
      { label: "ROAS", value: "4.1x" },
      { label: "CTR", value: "3.8%" },
      { label: "Cost per Purchase", value: "$8.50" },
    ],
  },
  "lead-generation-campaign": {
    title: "Lead Generation Campaign",
    image: caseStudyLeads,
    tags: ["Facebook Ads", "Lead Gen"],
    overview:
      "A service-based business needed a steady flow of qualified leads at a low cost. I designed and managed a Facebook lead generation campaign that consistently delivered high-quality leads while keeping cost per lead under $2.",
    problem:
      "The client was relying solely on organic methods and referrals, which were inconsistent and unscalable. Previous ad attempts had resulted in high costs and low-quality leads that rarely converted into paying customers.",
    strategy: [
      "Developed targeted audience segments based on demographics and interests",
      "Created compelling ad copy focused on pain points and clear value propositions",
      "Designed optimized lead forms with qualifying questions to filter low-quality leads",
      "Built a landing page with strong social proof and clear CTA",
      "A/B tested ad creatives, copy, and audiences to find top performers",
      "Implemented automated follow-up sequences for captured leads",
    ],
    results: [
      { label: "Leads Generated", value: "320+" },
      { label: "Cost per Lead", value: "$1.20" },
      { label: "Lead Quality Rate", value: "72%" },
      { label: "CTR", value: "4.2%" },
    ],
  },
  "social-media-growth": {
    title: "Social Media Growth Strategy",
    image: caseStudySocialGrowth,
    tags: ["Instagram", "Content Strategy", "Organic Growth"],
    overview:
      "A lifestyle brand wanted to build a strong organic presence on Instagram without relying solely on paid ads. I crafted a content-first growth strategy using Reels, carousel posts, and community engagement tactics to grow their audience from 2K to 17K followers in 4 months.",
    problem:
      "The brand had a stagnant Instagram account with low engagement and inconsistent posting. Their content lacked a cohesive visual identity and failed to resonate with their target audience. They needed a strategy that would build genuine community and drive organic reach.",
    strategy: [
      "Audited existing content and identified top-performing post formats",
      "Developed a branded content calendar with 5 posts per week",
      "Created a Reels-first strategy leveraging trending audio and formats",
      "Implemented hashtag research and optimized captions for discoverability",
      "Built engagement loops through Stories, polls, and DM automation",
      "Collaborated with micro-influencers for cross-promotion",
    ],
    results: [
      { label: "Follower Growth", value: "15K+" },
      { label: "Engagement Rate", value: "6.8%" },
      { label: "Avg. Reel Views", value: "45K" },
      { label: "Profile Visits/Month", value: "12K+" },
    ],
  },
  "ai-creative-campaign": {
    title: "AI Creative Ad Campaign",
    image: caseStudyAiCreatives,
    tags: ["AI Design", "Ad Creatives", "A/B Testing"],
    overview:
      "A DTC brand needed to produce high volumes of ad creatives quickly without sacrificing quality. I built an AI-powered creative production workflow that generated 120+ unique ad variations, enabling rapid testing and a 2.4x improvement in click-through rates.",
    problem:
      "The brand's creative team was bottlenecked — producing only 3-4 ad variations per week. This limited their ability to test and iterate, resulting in creative fatigue and declining ad performance. They needed a scalable creative solution.",
    strategy: [
      "Set up AI design workflows using Midjourney and custom prompt templates",
      "Created a modular creative system: backgrounds, copy overlays, and CTAs",
      "Produced 120+ unique ad variations across multiple formats (static, carousel, video)",
      "Implemented structured A/B testing with creative performance scoring",
      "Identified winning visual patterns and scaled top performers",
      "Reduced creative production time from 2 days to 2 hours per batch",
    ],
    results: [
      { label: "Creatives Produced", value: "120+" },
      { label: "CTR Increase", value: "2.4x" },
      { label: "Creative Turnaround", value: "2 hrs" },
      { label: "Cost Savings", value: "65%" },
    ],
  },
  "restaurant-delivery-ads": {
    title: "Restaurant Delivery Campaign",
    image: caseStudyRestaurant,
    tags: ["Facebook Ads", "Local Business", "Food Delivery"],
    overview:
      "A local restaurant chain wanted to boost their online delivery orders through targeted Facebook advertising. I created geo-targeted ad campaigns with mouth-watering food photography and limited-time offers that drove 850+ orders in the first month.",
    problem:
      "The restaurant was losing market share to delivery apps and competitors with stronger online presence. Their previous marketing efforts were unfocused, targeting too wide an area with generic messaging that failed to drive urgency or conversions.",
    strategy: [
      "Mapped delivery zones and created hyper-local geo-targeted audiences",
      "Designed scroll-stopping food photography ads with offer overlays",
      "Built urgency-driven campaigns with limited-time discount codes",
      "Implemented Facebook pixel tracking for online order conversions",
      "Created lookalike audiences from existing customer data",
      "Optimized ad scheduling around peak ordering hours (lunch & dinner)",
    ],
    results: [
      { label: "Orders Generated", value: "850+" },
      { label: "Cost per Order", value: "$2.10" },
      { label: "Order Value Avg.", value: "$28.50" },
      { label: "ROAS", value: "5.2x" },
    ],
  },
};

const sectionIcons = [
  { icon: Lightbulb, label: "Overview" },
  { icon: Target, label: "Problem" },
  { icon: TrendingUp, label: "Strategy" },
  { icon: BarChart3, label: "Results" },
];

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = slug ? caseStudiesData[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Case study not found</h1>
          <Link to="/#case-studies" className="text-secondary hover:text-foreground transition-colors">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto max-w-4xl relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Case Studies
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full bg-primary/15 text-secondary border border-secondary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-heading text-3xl lg:text-5xl font-bold mb-6">{study.title}</h1>

            <div className="rounded-xl overflow-hidden mb-12">
              <img src={study.image} alt={study.title} className="w-full h-64 lg:h-80 object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding pt-0">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Overview */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Lightbulb size={18} className="text-secondary" />
              </div>
              <h2 className="font-heading text-2xl font-bold">Campaign Overview</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">{study.overview}</p>
          </motion.div>

          {/* Problem */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                <Target size={18} className="text-destructive" />
              </div>
              <h2 className="font-heading text-2xl font-bold">The Challenge</h2>
            </div>
            <div className="glass-card rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
            </div>
          </motion.div>

          {/* Strategy */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <TrendingUp size={18} className="text-secondary" />
              </div>
              <h2 className="font-heading text-2xl font-bold">Strategy</h2>
            </div>
            <div className="space-y-4">
              {study.strategy.map((step, i) => (
                <div key={i} className="flex items-start gap-4 glass-card rounded-lg p-4">
                  <span className="w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <BarChart3 size={18} className="text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold">Results</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {study.results.map((r) => (
                <div key={r.label} className="glass-card rounded-xl p-6 text-center hover-glow transition-all duration-300">
                  <div className="text-3xl font-heading font-bold text-gradient mb-2">{r.value}</div>
                  <div className="text-xs text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-10 lg:p-14 text-center"
          >
            <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-3">
              Want results like <span className="text-gradient">this?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let's build a marketing strategy that drives real, measurable growth for your brand.
            </p>
            <a
              href="https://wa.me/8801725129901?text=Hi%2C%20I%20want%20to%20start%20a%20campaign%20like%20your%20case%20study!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              Start Your Campaign
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default CaseStudyDetail;
