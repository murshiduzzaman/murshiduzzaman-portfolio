import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import { FacebookIcon, LinkedInIcon, UpworkIcon, WhatsAppIcon, InstagramIcon } from "./BrandIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "Facebook", url: "https://www.facebook.com/murshiduzzamanDm/", icon: FacebookIcon, color: "hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/md-murshiduzzaman-sarkar-05b5583a0", icon: LinkedInIcon, color: "hover:bg-sky-500/20 hover:border-sky-500/30 hover:text-sky-400" },
  { label: "Upwork", url: "https://www.upwork.com/freelancers/~0145981f92b4eebb49?mp_source=share", icon: UpworkIcon, color: "hover:bg-emerald-500/20 hover:border-emerald-500/30 hover:text-emerald-400" },
  { label: "WhatsApp", url: "https://wa.me/8801725129901", icon: WhatsAppIcon, color: "hover:bg-green-500/20 hover:border-green-500/30 hover:text-green-400" },
  { label: "Instagram", url: "https://www.instagram.com/murshiduzzamandm/", icon: InstagramIcon, color: "hover:bg-pink-500/20 hover:border-pink-500/30 hover:text-pink-400" },
];

const stats = [
  { value: "50+", label: "Projects Done" },
  { value: "110+", label: "Happy Clients" },
  { value: "4.1x", label: "Avg ROAS" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + "#" + id);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-5 blur-[150px] bottom-0 left-1/2 -translate-x-1/2"
        style={{ background: "hsl(var(--primary))" }}
      />

      {/* Top CTA strip */}
      <div className="relative border-t border-border/50">
        <div className="container mx-auto px-4 py-10">
          <div className="glass-card rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--secondary)), hsl(var(--primary)), transparent)" }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-xl lg:text-2xl font-bold">
                Ready to grow your brand<span className="text-gradient">?</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Let's create something extraordinary together.</p>
            </div>
            <a
              href="mailto:murshiduzzmansarker18@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold rounded-xl px-8 py-3.5 shadow-[0_0_25px_hsl(244_95%_69%/0.3)] hover:shadow-[0_0_40px_hsl(244_95%_69%/0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all flex-shrink-0"
            >
              <ArrowUpRight size={18} />
              Send an Email
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 pb-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block group" onClick={scrollToTop}>
              <span className="font-heading text-2xl font-bold text-gradient">Murshiduzzaman.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs">
              Social Media Marketer & Designer helping brands scale through creative strategy, performance ads, and AI-powered design.
            </p>

            {/* Mini stats */}
            <div className="flex gap-6 mt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg font-heading font-bold text-gradient">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-heading font-semibold text-sm mb-5 text-foreground">Navigate</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) =>
                link.href === "/" ? (
                  <Link
                    key={link.label}
                    to="/"
                    className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleHashClick(e, link.href)}
                    className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="font-heading font-semibold text-sm mb-5 text-foreground">Services</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Social Media Marketing", href: "/services/social-media-marketing" },
                { label: "Facebook Ads", href: "/services/facebook-ads" },
                { label: "Creative Ad Design", href: "/services/creative-ad-design" },
                { label: "AI Social Design", href: "/services/ai-social-media-design" },
              ].map((service) => (
                <Link
                  key={service.label}
                  to={service.href}
                  className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {service.label}
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="font-heading font-semibold text-sm mb-5 text-foreground">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className={`w-11 h-11 rounded-xl border border-border/50 bg-muted/30 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${s.color}`}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-xs text-muted-foreground">
                <span className="text-secondary">✦</span> Available for freelance projects
              </p>
              <p className="text-xs text-muted-foreground mt-1.5">
                <span className="text-secondary">✦</span> Response within 1 hour
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Md. Murshiduzzaman Sarker. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart size={12} className="text-secondary fill-secondary mx-0.5" /> for brands that want to grow
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full border border-border/50 bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/10 transition-all"
            aria-label="Back to top"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
