import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import StartProjectForm from "@/components/StartProjectForm";
import FreeAudit from "@/components/FreeAudit";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <ScrollReveal direction="up" delay={0.1}>
          <SocialProof />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.1}>
          <About />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <Services />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.1}>
          <Portfolio />
        </ScrollReveal>
        <ScrollReveal direction="none" delay={0.1}>
          <CtaBanner />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <CaseStudies />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.15}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <FreeAudit />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.1}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}>
          <WorkProcess />
        </ScrollReveal>
        <ScrollReveal direction="none" delay={0.1}>
          <StartProjectForm />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <Contact />
        </ScrollReveal>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </PageTransition>
  );
};

export default Index;
