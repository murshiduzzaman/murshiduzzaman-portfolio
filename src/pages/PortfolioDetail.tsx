import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Star, TrendingUp, Users, Eye, Target, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/BrandIcons";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioData: Record<string, {
  title: string;
  category: string;
  image: string;
  heroDescription: string;
  client: string;
  industry: string;
  duration: string;
  platform: string;
  challenge: string;
  solution: string;
  approach: string[];
  results: { label: string; value: string; icon: React.ElementType }[];
  deliverables: string[];
  testimonial: { text: string; author: string; role: string };
  tools: string[];
  relatedSlugs: string[];
}> = {
  "fashion-brand-ad-campaign": {
    title: "Fashion Brand Ad Campaign",
    category: "Social Media Ads",
    image: portfolio1,
    heroDescription: "A high-converting Facebook & Instagram ad campaign designed to drive online sales for a premium fashion e-commerce brand.",
    client: "Luxe Apparel Co.",
    industry: "Fashion & E-commerce",
    duration: "3 Months",
    platform: "Facebook & Instagram",
    challenge: "The brand was struggling with low ROAS on their existing ad campaigns. Their creatives weren't resonating with their target audience, and their cost per acquisition was unsustainably high at $45 per customer.",
    solution: "I redesigned their entire ad creative strategy using scroll-stopping visuals, lifestyle photography, and compelling copy. We implemented a full-funnel approach with awareness, consideration, and conversion campaigns.",
    approach: [
      "Audited existing ad account and identified performance gaps",
      "Created 30+ ad creative variations for A/B testing",
      "Built custom and lookalike audiences based on purchase data",
      "Implemented retargeting funnels with dynamic product ads",
      "Optimized landing pages for mobile conversion",
    ],
    results: [
      { label: "ROAS Achieved", value: "4.8x", icon: TrendingUp },
      { label: "Revenue Generated", value: "$38K", icon: Target },
      { label: "Cost per Acquisition", value: "$12", icon: Zap },
      { label: "Ad Impressions", value: "1.2M", icon: Eye },
    ],
    deliverables: ["30+ Ad Creatives", "Audience Strategy", "Campaign Setup", "Weekly Reports", "Landing Page Design"],
    testimonial: {
      text: "Murshiduzzaman completely transformed our ad performance. Our ROAS went from 1.2x to 4.8x in just 3 months. The creative quality and strategic thinking were exceptional.",
      author: "Sarah Chen",
      role: "Marketing Director, Luxe Apparel Co.",
    },
    tools: ["Meta Ads Manager", "Photoshop", "Canva", "Google Analytics"],
    relatedSlugs: ["food-brand-facebook-ads", "ai-beauty-brand-creative"],
  },
  "ai-tech-startup-creative": {
    title: "AI Tech Startup Creative",
    category: "AI Generated",
    image: portfolio2,
    heroDescription: "AI-powered creative design system for a cutting-edge tech startup's product launch across all digital channels.",
    client: "NeuralFlow AI",
    industry: "Technology / SaaS",
    duration: "2 Months",
    platform: "Multi-platform",
    challenge: "As a new AI startup, they needed a complete visual identity and marketing creative system that communicated innovation and trust while standing out in the crowded tech space.",
    solution: "Leveraging AI design tools alongside traditional design, I created a comprehensive creative package including social media content, ad creatives, and pitch deck visuals that positioned them as industry leaders.",
    approach: [
      "Developed brand visual language using AI-assisted design",
      "Created a scalable design system for consistent output",
      "Produced 50+ social media templates for ongoing content",
      "Designed launch campaign creatives for Product Hunt",
      "Built animated social media content for higher engagement",
    ],
    results: [
      { label: "Social Reach", value: "500K+", icon: Users },
      { label: "Engagement Rate", value: "8.2%", icon: TrendingUp },
      { label: "Creatives Produced", value: "120+", icon: Target },
      { label: "Design Time Saved", value: "60%", icon: Zap },
    ],
    deliverables: ["Brand Guidelines", "50+ Templates", "Ad Creatives", "Animated Content", "Pitch Deck Design"],
    testimonial: {
      text: "The AI-powered approach to our creatives was brilliant. We got 10x the output at a fraction of the cost, and every piece looked premium and on-brand.",
      author: "Alex Rivera",
      role: "Co-founder, NeuralFlow AI",
    },
    tools: ["Midjourney", "Photoshop", "Figma", "Canva"],
    relatedSlugs: ["ai-beauty-brand-creative", "campaign-analytics-dashboard"],
  },
  "food-brand-facebook-ads": {
    title: "Food Brand Facebook Ads",
    category: "Social Media Ads",
    image: portfolio3,
    heroDescription: "Scroll-stopping ad creative campaign that drove a 340% increase in online orders for a popular food delivery brand.",
    client: "TastyBites Delivery",
    industry: "Food & Beverage",
    duration: "4 Months",
    platform: "Facebook & Instagram",
    challenge: "The food delivery brand was competing against major platforms like UberEats and DoorDash in their local market, with a limited budget and no brand awareness among their target demographic.",
    solution: "I created mouth-watering ad creatives with strong CTAs, implemented geo-targeted campaigns, and built a systematic A/B testing framework that continuously improved performance.",
    approach: [
      "Produced professional food photography-style ad creatives",
      "Set up geo-targeted campaigns within 10-mile delivery radius",
      "Created time-based ad scheduling for peak order hours",
      "Built first-time customer offer funnels with promo codes",
      "Implemented review-based social proof in ad creatives",
    ],
    results: [
      { label: "Orders Generated", value: "2,400+", icon: Target },
      { label: "Cost per Order", value: "$1.80", icon: Zap },
      { label: "Revenue Growth", value: "340%", icon: TrendingUp },
      { label: "New Customers", value: "1,800+", icon: Users },
    ],
    deliverables: ["40+ Ad Creatives", "Geo-Targeting Setup", "Promo Campaign", "Monthly Reports", "Review Strategy"],
    testimonial: {
      text: "Our orders tripled in the first month! The ad creatives were so appetizing that our engagement rates were off the charts. Best marketing investment we've ever made.",
      author: "Marco DiSilva",
      role: "Owner, TastyBites Delivery",
    },
    tools: ["Meta Ads Manager", "Canva", "Photoshop", "Google Analytics"],
    relatedSlugs: ["fashion-brand-ad-campaign", "fitness-brand-carousel"],
  },
  "campaign-analytics-dashboard": {
    title: "Campaign Analytics Dashboard",
    category: "Campaigns",
    image: portfolio4,
    heroDescription: "End-to-end campaign management and analytics reporting system that helped a marketing agency scale their operations.",
    client: "GrowthPulse Agency",
    industry: "Marketing Agency",
    duration: "6 Months (Ongoing)",
    platform: "Multi-platform",
    challenge: "The agency was managing 20+ client accounts without a standardized reporting system, leading to inefficient workflows and clients questioning the value of their ad spend.",
    solution: "I built a comprehensive campaign management system with automated reporting, clear KPI tracking, and visual dashboards that made performance transparent and actionable for every client.",
    approach: [
      "Audited all 20+ client accounts for performance benchmarks",
      "Created standardized reporting templates with visual dashboards",
      "Set up automated weekly and monthly performance reports",
      "Implemented cross-campaign optimization strategies",
      "Trained team on data-driven decision making frameworks",
    ],
    results: [
      { label: "Avg Client ROAS", value: "3.6x", icon: TrendingUp },
      { label: "Reporting Time", value: "-80%", icon: Zap },
      { label: "Client Retention", value: "95%", icon: Users },
      { label: "Accounts Managed", value: "25+", icon: Target },
    ],
    deliverables: ["Dashboard Templates", "Automated Reports", "KPI Frameworks", "Team Training", "SOP Documentation"],
    testimonial: {
      text: "Our client retention jumped to 95% after implementing the reporting system. Clients can finally see the value we deliver, and our team saves 10+ hours per week on reporting.",
      author: "Jessica Park",
      role: "Operations Director, GrowthPulse Agency",
    },
    tools: ["Google Analytics", "Meta Ads Manager", "Google Ads", "Figma"],
    relatedSlugs: ["ai-tech-startup-creative", "fashion-brand-ad-campaign"],
  },
  "ai-beauty-brand-creative": {
    title: "AI Beauty Brand Creative",
    category: "AI Generated",
    image: portfolio5,
    heroDescription: "AI-generated artistic social media content that elevated a beauty brand's Instagram presence and drove organic growth.",
    client: "Glow Essence Beauty",
    industry: "Beauty & Cosmetics",
    duration: "3 Months",
    platform: "Instagram & Pinterest",
    challenge: "The beauty brand's Instagram content looked generic and failed to stand out in the highly visual beauty market. Their engagement rate was below 1% and follower growth had stagnated.",
    solution: "Using AI-powered creative tools combined with expert design direction, I created a distinctive visual style that made their content instantly recognizable and share-worthy.",
    approach: [
      "Developed a unique AI-assisted visual aesthetic for the brand",
      "Created 60+ pieces of content including Reels and carousel posts",
      "Implemented a strategic content calendar with trending formats",
      "Designed highlight covers and story templates for brand consistency",
      "Built influencer collaboration creative packages",
    ],
    results: [
      { label: "Follower Growth", value: "22K+", icon: Users },
      { label: "Engagement Rate", value: "7.4%", icon: TrendingUp },
      { label: "Content Pieces", value: "60+", icon: Target },
      { label: "Saves & Shares", value: "15K+", icon: Eye },
    ],
    deliverables: ["60+ Content Pieces", "Brand Style Guide", "Story Templates", "Reels Strategy", "Content Calendar"],
    testimonial: {
      text: "Our Instagram completely transformed! The AI-generated visuals are stunning and our audience loves them. We went from 3K to 25K followers in just 3 months.",
      author: "Elena Moreau",
      role: "Founder, Glow Essence Beauty",
    },
    tools: ["Midjourney", "Photoshop", "Lightroom", "Canva"],
    relatedSlugs: ["ai-tech-startup-creative", "fitness-brand-carousel"],
  },
  "fitness-brand-carousel": {
    title: "Fitness Brand Carousel",
    category: "Creative Posters",
    image: portfolio6,
    heroDescription: "Dynamic carousel post designs and marketing creatives that helped a fitness brand build an engaged community and drive membership sign-ups.",
    client: "IronCore Fitness",
    industry: "Health & Fitness",
    duration: "2 Months",
    platform: "Instagram & Facebook",
    challenge: "The fitness brand had great trainers and programs but their social media content wasn't converting followers into paying members. Their visual branding was inconsistent and forgettable.",
    solution: "I designed a bold, energetic visual system with carousel posts that educated, motivated, and converted. Each post was designed to be saved and shared, maximizing organic reach.",
    approach: [
      "Created a bold typographic design system for fitness content",
      "Designed 40+ carousel posts with educational fitness content",
      "Built swipe-worthy transformation and tip-based carousels",
      "Designed promotional creatives for membership campaigns",
      "Developed a consistent posting schedule with content themes",
    ],
    results: [
      { label: "Membership Sign-ups", value: "180+", icon: Users },
      { label: "Post Saves", value: "8.5K+", icon: Target },
      { label: "Reach Increase", value: "5x", icon: Eye },
      { label: "Engagement Rate", value: "9.1%", icon: TrendingUp },
    ],
    deliverables: ["40+ Carousel Posts", "Brand Kit", "Promo Creatives", "Story Templates", "Content Strategy"],
    testimonial: {
      text: "The carousel designs were a game-changer. Our posts started getting saved and shared like never before, and we saw a direct impact on gym memberships. Incredible work!",
      author: "David Thompson",
      role: "Owner, IronCore Fitness",
    },
    tools: ["Photoshop", "Illustrator", "Canva", "CapCut"],
    relatedSlugs: ["ai-beauty-brand-creative", "food-brand-facebook-ads"],
  },
};

const allSlugs = Object.keys(portfolioData);

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? portfolioData[slug] : null;

  if (!project) {
    return (
      <PageTransition>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/#portfolio" className="text-secondary hover:underline">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </PageTransition>
    );
  }

  const currentIndex = allSlugs.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-8 blur-[150px] -top-40 left-1/2 -translate-x-1/2"
            style={{ background: "hsl(var(--primary))" }}
          />

          <div className="container mx-auto max-w-5xl relative z-10 px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link
                to="/#portfolio"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={14} /> Back to Portfolio
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <span className="text-xs text-secondary font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  {project.category}
                </span>
                <h1 className="font-heading text-3xl lg:text-5xl font-bold mt-4 mb-4">{project.title}</h1>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.heroDescription}</p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Client", value: project.client },
                    { label: "Industry", value: project.industry },
                    { label: "Duration", value: project.duration },
                    { label: "Platform", value: project.platform },
                  ].map((info) => (
                    <div key={info.label} className="glass-card rounded-lg p-3">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{info.label}</div>
                      <div className="text-sm font-semibold mt-0.5">{info.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold">
                Project <span className="text-gradient">Results</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {project.results.map((result, i) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover:-translate-y-1 transition-transform"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <result.icon size={20} className="text-secondary" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-heading font-bold text-gradient">{result.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <Target size={20} className="text-destructive" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">The Challenge</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <CheckCircle size={20} className="text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">The Solution</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl lg:text-3xl font-bold text-center mb-10"
            >
              My <span className="text-gradient">Approach</span>
            </motion.h2>

            <div className="max-w-2xl mx-auto space-y-4">
              {project.approach.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 glass-card rounded-xl p-5"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-sm text-foreground/90 pt-1">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables & Tools */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-xl font-bold mb-6">Deliverables</h3>
                <div className="flex flex-wrap gap-3">
                  {project.deliverables.map((d) => (
                    <span
                      key={d}
                      className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl glass-card border border-border/30"
                    >
                      <CheckCircle size={14} className="text-secondary" />
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-heading text-xl font-bold mb-6">Tools Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm px-4 py-2.5 rounded-xl bg-primary/10 text-secondary border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-secondary fill-secondary" />
                ))}
              </div>
              <blockquote className="text-lg font-medium leading-relaxed mb-6 italic">
                "{project.testimonial.text}"
              </blockquote>
              <div className="text-sm font-semibold">{project.testimonial.author}</div>
              <div className="text-xs text-muted-foreground mt-1">{project.testimonial.role}</div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                Want Results Like <span className="text-gradient">These?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Let's discuss how I can create a similar success story for your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/8801725129901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold rounded-xl px-8 py-3.5 glow-primary hover:scale-[1.03] active:scale-[0.98] transition-all"
                >
                  <WhatsAppIcon size={18} /> Let's Talk
                </a>
                <Link
                  to="/#portfolio"
                  className="inline-flex items-center gap-2 glass-card border border-border/50 font-semibold rounded-xl px-8 py-3.5 hover-glow transition-all"
                >
                  View More Work <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-10">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex justify-between items-center">
              {prevSlug ? (
                <Link
                  to={`/portfolio/${prevSlug}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={14} /> Previous Project
                </Link>
              ) : <div />}
              {nextSlug ? (
                <Link
                  to={`/portfolio/${nextSlug}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Next Project <ArrowRight size={14} />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </PageTransition>
  );
};

export default PortfolioDetail;
