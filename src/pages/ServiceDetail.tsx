import { useParams, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  Megaphone,
  PenTool,
  Sparkles,
  BarChart3,
  Check,
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
  Target,
  Clock,
  Shield,
  LineChart,
  Layers,
  Lightbulb,
  Repeat,
  Eye,
  MousePointerClick,
  Image,
  Palette,
  Bot,
  Workflow,
  Gauge,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

interface ServiceInfo {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  heroDescription: string;
  detailedDescription: string;
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string; icon: React.ElementType }[];
  benefits: { value: string; label: string }[];
  whyChoose: { icon: React.ElementType; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  ctaText: string;
}

const serviceData: Record<string, ServiceInfo> = {
  "social-media-marketing": {
    icon: Megaphone,
    title: "Social Media Marketing",
    subtitle: "Strategy • Growth • Engagement • Content",
    heroDescription:
      "I build comprehensive social media strategies that turn followers into customers. From content planning to community management, I handle every aspect of your social media presence to drive real business growth.",
    detailedDescription:
      "In today's digital landscape, a strong social media presence isn't optional — it's essential. I work with brands to craft data-driven social strategies that build communities, increase engagement, and convert audiences into loyal customers. Every post, story, and interaction is purposeful and aligned with your business goals.",
    features: [
      { title: "Social Media Strategy & Planning", description: "Custom roadmap tailored to your brand goals, audience, and industry trends." },
      { title: "Content Calendar Creation", description: "Organized, consistent content schedules that keep your brand top-of-mind." },
      { title: "Community Management", description: "Active engagement with your audience to build trust and foster brand loyalty." },
      { title: "Account Optimization", description: "Profile audits, bio optimization, and platform-specific best practices." },
      { title: "Analytics & Reporting", description: "Monthly performance reports with actionable insights to refine strategy." },
      { title: "Platform-Specific Strategies", description: "Tailored approaches for Instagram, Facebook, LinkedIn, TikTok, and more." },
    ],
    process: [
      { step: "01", title: "Discovery & Audit", description: "Deep dive into your brand, audience, competitors, and current social presence.", icon: Eye },
      { step: "02", title: "Strategy Development", description: "Create a custom social media roadmap with content pillars and growth tactics.", icon: Lightbulb },
      { step: "03", title: "Content Creation & Launch", description: "Produce and publish engaging content across all relevant platforms.", icon: Layers },
      { step: "04", title: "Optimize & Scale", description: "Analyze performance data, refine strategy, and scale what works.", icon: TrendingUp },
    ],
    benefits: [
      { value: "3x", label: "Avg. Engagement Increase" },
      { value: "50+", label: "Brands Managed" },
      { value: "10M+", label: "Impressions Generated" },
      { value: "98%", label: "Client Retention" },
    ],
    whyChoose: [
      { icon: Target, title: "Data-Driven Approach", description: "Every decision is backed by analytics and real performance data." },
      { icon: Clock, title: "Consistent Execution", description: "Reliable, on-time content delivery so you never miss a beat." },
      { icon: Users, title: "Community Building", description: "I don't just post — I build engaged communities around your brand." },
      { icon: Shield, title: "Brand Protection", description: "Consistent voice and messaging that strengthens your brand identity." },
    ],
    faq: [
      { question: "Which platforms do you manage?", answer: "I work across Instagram, Facebook, LinkedIn, TikTok, Twitter/X, and Pinterest — tailored to where your audience is most active." },
      { question: "How long before I see results?", answer: "Most clients see meaningful engagement growth within 30-60 days. Significant follower growth and conversions typically come within 90 days." },
      { question: "Do you create the content too?", answer: "Yes! I handle everything from content ideation and copywriting to graphic design and scheduling." },
      { question: "Can I approve content before it's posted?", answer: "Absolutely. You'll receive content for review and approval before anything goes live." },
    ],
    ctaText: "Ready to grow your social media presence? Let's build a strategy that drives real results.",
  },
  "facebook-ads": {
    icon: BarChart3,
    title: "Facebook Ads Management",
    subtitle: "Performance Ads • Targeting • Optimization • Scaling",
    heroDescription:
      "I create and manage high-performing Facebook & Instagram ad campaigns that deliver measurable ROI. From audience targeting to creative testing, every aspect is optimized for maximum results.",
    detailedDescription:
      "Paid advertising on Facebook and Instagram remains one of the most powerful ways to reach your ideal customers. I specialize in building campaigns that don't just generate clicks — they generate revenue. With meticulous audience research, creative testing, and ongoing optimization, every dollar of your ad spend works harder.",
    features: [
      { title: "Campaign Strategy & Setup", description: "Full-funnel campaign architecture designed to move prospects from awareness to purchase." },
      { title: "Audience Research & Targeting", description: "Precision targeting using custom audiences, lookalikes, and interest-based segments." },
      { title: "Ad Creative A/B Testing", description: "Systematic creative testing to find the highest-performing ads for your brand." },
      { title: "Budget Optimization & Scaling", description: "Strategic budget allocation and scaling strategies to maximize ROAS." },
      { title: "Conversion Tracking", description: "Pixel setup, event tracking, and attribution to measure real business impact." },
      { title: "Retargeting Campaigns", description: "Re-engage warm audiences with dynamic ads that bring them back to convert." },
    ],
    process: [
      { step: "01", title: "Account Audit & Research", description: "Analyze your current ad account, competitors, and market opportunity.", icon: LineChart },
      { step: "02", title: "Campaign Architecture", description: "Build a structured campaign funnel with proper audience segmentation.", icon: Layers },
      { step: "03", title: "Creative & Copy Production", description: "Design high-converting ad creatives and write persuasive ad copy.", icon: PenTool },
      { step: "04", title: "Launch, Test & Optimize", description: "Go live, run A/B tests, and continuously optimize for peak performance.", icon: Repeat },
    ],
    benefits: [
      { value: "4.1x", label: "Average ROAS" },
      { value: "$2M+", label: "Ad Spend Managed" },
      { value: "320+", label: "Leads Per Campaign" },
      { value: "40%", label: "Lower Cost Per Lead" },
    ],
    whyChoose: [
      { icon: TrendingUp, title: "ROI-Focused", description: "I optimize for revenue and profit, not vanity metrics." },
      { icon: MousePointerClick, title: "Conversion Optimized", description: "Every element is designed to maximize clicks, leads, and sales." },
      { icon: Gauge, title: "Transparent Reporting", description: "Clear, honest reports so you always know where your money goes." },
      { icon: Repeat, title: "Continuous Optimization", description: "Daily monitoring and weekly optimizations keep campaigns performing." },
    ],
    faq: [
      { question: "What's the minimum ad budget you work with?", answer: "I recommend a minimum of $500/month in ad spend to generate meaningful data and results, though $1,000+ is ideal for faster scaling." },
      { question: "How do you track conversions?", answer: "I set up Meta Pixel, Conversions API, and custom event tracking to accurately measure leads, purchases, and other key actions." },
      { question: "Can you manage Instagram ads too?", answer: "Yes! Facebook and Instagram ads are managed through the same platform (Meta Ads Manager), so both are included." },
      { question: "How often do you optimize campaigns?", answer: "I monitor campaigns daily and make strategic optimizations weekly — or more frequently during launch and testing phases." },
    ],
    ctaText: "Ready to get more leads and sales from Facebook Ads? Let's build campaigns that actually convert.",
  },
  "creative-ad-design": {
    icon: PenTool,
    title: "Creative Ad Design",
    subtitle: "High-Converting Creatives • Visual Systems • Brand Design",
    heroDescription:
      "I design scroll-stopping ad creatives that capture attention and drive action. Every visual is crafted with direct response principles to maximize your campaign performance.",
    detailedDescription:
      "In a feed full of noise, your ads need to stand out instantly. I combine design expertise with direct response marketing principles to create visuals that don't just look beautiful — they perform. From static ads to carousels and video thumbnails, every creative is engineered to stop the scroll and drive clicks.",
    features: [
      { title: "Static & Carousel Ad Design", description: "Eye-catching single-image and multi-slide ads optimized for engagement." },
      { title: "Product Showcase Creatives", description: "Lifestyle and product-focused visuals that highlight your offerings." },
      { title: "Video Ad Thumbnails", description: "Compelling thumbnails that boost video view rates and click-throughs." },
      { title: "Brand Visual Systems", description: "Consistent visual identity across all ad formats and platforms." },
      { title: "A/B Test Variants", description: "Multiple creative variations to test and find winning designs." },
      { title: "Platform-Optimized Formats", description: "Perfectly sized creatives for every platform — feed, stories, reels, and more." },
    ],
    process: [
      { step: "01", title: "Brief & Brand Review", description: "Understand your brand guidelines, campaign goals, and target audience.", icon: Eye },
      { step: "02", title: "Concept & Ideation", description: "Develop creative concepts and visual directions for approval.", icon: Lightbulb },
      { step: "03", title: "Design & Production", description: "Craft pixel-perfect creatives with attention to typography, color, and composition.", icon: Palette },
      { step: "04", title: "Deliver & Iterate", description: "Deliver finals, gather feedback, and create test variants for optimization.", icon: Repeat },
    ],
    benefits: [
      { value: "200+", label: "Ad Creatives Designed" },
      { value: "2.5x", label: "Avg. CTR Improvement" },
      { value: "48h", label: "Average Turnaround" },
      { value: "100%", label: "Satisfaction Rate" },
    ],
    whyChoose: [
      { icon: Image, title: "Scroll-Stopping Visuals", description: "Designs engineered to capture attention in under 3 seconds." },
      { icon: MousePointerClick, title: "Conversion-First Design", description: "Every element is placed to guide the viewer toward action." },
      { icon: Clock, title: "Fast Turnaround", description: "Get professional ad creatives delivered within 24-48 hours." },
      { icon: Layers, title: "Unlimited Revisions", description: "I iterate until you're 100% satisfied with every creative." },
    ],
    faq: [
      { question: "What formats do you deliver?", answer: "I deliver in all required formats — PNG, JPG, PSD, and platform-specific sizes for Facebook, Instagram, Google, LinkedIn, and more." },
      { question: "Can you match my existing brand style?", answer: "Absolutely. I study your brand guidelines and create designs that feel like a natural extension of your visual identity." },
      { question: "How many revisions are included?", answer: "I include unlimited revisions to ensure every creative meets your expectations perfectly." },
      { question: "Do you also write ad copy?", answer: "Yes, I can provide headline and body copy suggestions optimized for each creative format." },
    ],
    ctaText: "Need ad creatives that actually convert? Let's design visuals that stop the scroll and drive results.",
  },
  "ai-social-media-design": {
    icon: Sparkles,
    title: "AI Social Media Design",
    subtitle: "AI-Powered Production • Automation • Scalable Creatives",
    heroDescription:
      "Leveraging cutting-edge AI tools, I produce high-quality visual content at scale. This approach combines creative direction with AI-powered production for faster turnarounds and unique aesthetics.",
    detailedDescription:
      "AI is revolutionizing creative production, and I'm at the forefront. By combining expert creative direction with the latest AI tools, I help brands produce stunning visual content faster, cheaper, and at a scale that was previously impossible. The result? Unique, eye-catching designs that set your brand apart from the competition.",
    features: [
      { title: "AI-Powered Image Generation", description: "Create unique, on-brand visuals using state-of-the-art AI generation tools." },
      { title: "Automated Content Workflows", description: "Streamlined production pipelines that deliver content consistently and efficiently." },
      { title: "Scalable Creative Production", description: "Produce dozens of creative variations in a fraction of the traditional time." },
      { title: "Unique Visual Styles", description: "Develop distinctive aesthetics that make your brand instantly recognizable." },
      { title: "Rapid Iteration", description: "Test and refine visual concepts quickly to find what resonates with your audience." },
      { title: "Cost-Effective at Scale", description: "High-quality creative output without the overhead of traditional design workflows." },
    ],
    process: [
      { step: "01", title: "Creative Direction", description: "Define the visual style, mood, and brand aesthetic to guide AI production.", icon: Lightbulb },
      { step: "02", title: "AI Generation & Curation", description: "Generate and curate the best AI outputs, refining prompts for quality.", icon: Bot },
      { step: "03", title: "Post-Production & Polish", description: "Professionally edit, enhance, and brand each piece for platform readiness.", icon: Palette },
      { step: "04", title: "Deploy & Optimize", description: "Publish across platforms and track performance to inform future production.", icon: Workflow },
    ],
    benefits: [
      { value: "10x", label: "Faster Production" },
      { value: "500+", label: "AI Creatives Produced" },
      { value: "60%", label: "Cost Savings" },
      { value: "∞", label: "Creative Possibilities" },
    ],
    whyChoose: [
      { icon: Zap, title: "Lightning Fast", description: "Get weeks' worth of content produced in just days." },
      { icon: Sparkles, title: "Cutting-Edge Tech", description: "I use the latest AI tools and techniques for the best possible output." },
      { icon: Target, title: "Brand-Aligned", description: "AI-generated doesn't mean generic — every piece matches your brand identity." },
      { icon: TrendingUp, title: "Scalable Output", description: "Need 10 pieces or 100? AI production scales to meet any demand." },
    ],
    faq: [
      { question: "Which AI tools do you use?", answer: "I use a combination of industry-leading tools including Midjourney, DALL·E, Stable Diffusion, and custom workflows tailored to your needs." },
      { question: "Will the content look 'AI-generated'?", answer: "No. I apply professional post-production, editing, and branding to ensure every piece looks polished and intentional — not generic." },
      { question: "Can AI match my brand style?", answer: "Yes! Through careful prompt engineering and style references, I train the AI to produce content consistent with your brand aesthetic." },
      { question: "Is AI-generated content safe to use commercially?", answer: "Absolutely. I use commercially licensed tools and ensure all generated content is safe for business use." },
    ],
    ctaText: "Ready to unlock the power of AI for your brand's visuals? Let's create something extraordinary.",
  },
};

const SectionHeading = ({ label, title, gradient }: { label: string; title: string; gradient: string }) => (
  <div className="text-center mb-12">
    <span className="text-sm text-secondary font-medium uppercase tracking-wider">{label}</span>
    <h2 className="font-heading text-3xl lg:text-4xl font-bold mt-2">
      {title} <span className="text-gradient">{gradient}</span>
    </h2>
  </div>
);

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const whyRef = useRef(null);
  const faqRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/" className="text-secondary hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const otherServices = Object.entries(serviceData)
    .filter(([key]) => key !== slug)
    .map(([key, val]) => ({ slug: key, title: val.title, icon: val.icon, subtitle: val.subtitle }));

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="section-padding pt-32 pb-16 relative overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] -top-20 -left-20" style={{ background: "hsl(var(--primary))" }} />
          <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bottom-0 right-0" style={{ background: "hsl(var(--secondary))" }} />
          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={14} /> Back to Services
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Icon size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-heading text-3xl lg:text-5xl font-bold">{service.title}</h1>
                  <p className="text-secondary text-sm font-medium mt-1">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">{service.heroDescription}</p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Description + Features */}
        <section className="section-padding pt-8">
          <div className="container mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-6">
                  Why This <span className="text-gradient">Matters</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.detailedDescription}</p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all glow-primary"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
                {service.features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card rounded-xl p-5 hover-glow transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={13} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results / Benefits */}
        <section className="section-padding" ref={benefitsRef}>
          <div className="container mx-auto max-w-4xl">
            <SectionHeading label="Results" title="Proven" gradient="Performance" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {service.benefits.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  className="glass-card rounded-xl p-6 text-center hover-glow transition-all"
                >
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-gradient mb-2">{b.value}</div>
                  <div className="text-sm text-muted-foreground">{b.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding" ref={processRef}>
          <div className="container mx-auto max-w-4xl">
            <SectionHeading label="Process" title="How I" gradient="Work" />
            <div className="grid md:grid-cols-2 gap-6">
              {service.process.map((p, i) => {
                const StepIcon = p.icon;
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 30 }}
                    animate={processInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.15 }}
                    className="glass-card rounded-xl p-6 hover-glow transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 text-5xl font-heading font-bold text-foreground/5">{p.step}</div>
                    <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                      <StepIcon size={20} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="section-padding" ref={whyRef}>
          <div className="container mx-auto max-w-4xl">
            <SectionHeading label="Why Me" title="Why Choose" gradient="Me" />
            <div className="grid md:grid-cols-2 gap-6">
              {service.whyChoose.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={whyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 glass-card rounded-xl p-6 hover-glow transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0">
                      <ItemIcon size={18} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding" ref={faqRef}>
          <div className="container mx-auto max-w-3xl">
            <SectionHeading label="FAQ" title="Common" gradient="Questions" />
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl group"
                >
                  <summary className="cursor-pointer px-6 py-5 font-semibold text-sm list-none flex items-center justify-between">
                    {item.question}
                    <ArrowRight size={14} className="text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                    {item.answer}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10 lg:p-14 relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-[60px]" style={{ background: "hsl(var(--primary))" }} />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-15 blur-[60px]" style={{ background: "hsl(var(--secondary))" }} />
              <div className="relative z-10">
                <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                  Let's <span className="text-gradient">Work Together</span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{service.ctaText}</p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all glow-primary"
                >
                  Start a Project <Zap size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Services */}
        <section className="section-padding pt-0">
          <div className="container mx-auto max-w-4xl">
            <SectionHeading label="Explore" title="Other" gradient="Services" />
            <div className="grid md:grid-cols-3 gap-4">
              {otherServices.map((s) => {
                const OtherIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="glass-card rounded-xl p-6 hover-glow transition-all hover:-translate-y-1 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                      <OtherIcon size={18} className="text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{s.title}</h4>
                    <span className="text-xs text-muted-foreground group-hover:text-secondary transition-colors flex items-center gap-1">
                      Learn more <ArrowRight size={12} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServiceDetail;
