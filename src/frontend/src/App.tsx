import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import CtaSection from "./components/CtaSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import UsesSection from "./components/UsesSection";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Benefits", href: "#benefits" },
  { label: "Uses", href: "#uses" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
];

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 },
    );
    for (const el of node.querySelectorAll(".reveal")) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useStickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

export default function App() {
  const scrolled = useStickyHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navigateTo = (href: string) => {
    closeMenu();
    // Small delay so menu can animate out before scrolling
    setTimeout(() => {
      window.location.hash = href;
    }, 50);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      <header
        data-ocid="header.panel"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "py-5"
        }`}
        style={{
          background: scrolled
            ? "oklch(0.20 0.06 40)"
            : "linear-gradient(180deg, rgba(20,10,6,0.72) 0%, transparent 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 group"
            data-ocid="header.link"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200"
              style={{
                background: "oklch(0.73 0.12 65)",
                boxShadow: "0 4px 16px rgba(216,162,74,0.4)",
              }}
            >
              🌾
            </div>
            <div className="leading-none">
              <span
                className="block text-xs font-body font-semibold tracking-[0.2em] uppercase"
                style={{ color: "oklch(0.80 0.10 68)" }}
              >
                Kola
              </span>
              <span className="block text-base font-heading font-bold text-white leading-tight">
                Channa Sattu
              </span>
            </div>
          </a>

          <nav
            className="hidden md:flex items-center gap-8"
            data-ocid="nav.panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-white/80 hover:text-white"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#shop"
              className="btn-gold hidden md:inline-flex"
              data-ocid="header.primary_button"
            >
              Order Now
            </a>

            {/* Hamburger button — mobile only */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
              style={{
                color: "oklch(0.73 0.12 65)",
                background: "rgba(216,162,74,0.12)",
              }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              data-ocid="header.toggle"
            >
              <span className="text-2xl leading-none select-none">
                {menuOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-12"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.17 0.05 40) 0%, oklch(0.22 0.07 42) 100%)",
            }}
            data-ocid="nav.panel"
          >
            <nav className="flex flex-col gap-6 flex-1 justify-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.25 }}
                >
                  <button
                    type="button"
                    className="font-heading font-black text-3xl uppercase tracking-tight hover:text-white transition-colors duration-200 block w-full text-left"
                    style={{ color: "rgba(255,255,255,0.82)" }}
                    onClick={() => navigateTo(link.href)}
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
            >
              <button
                type="button"
                className="btn-gold text-center text-lg w-full"
                onClick={() => navigateTo("#shop")}
                data-ocid="header.primary_button"
              >
                🛒 Order Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <HeroSection />
      <BenefitsSection />
      <UsesSection />
      <CtaSection />
      <AboutSection />
      <FooterSection navLinks={navLinks} />
    </div>
  );
}
