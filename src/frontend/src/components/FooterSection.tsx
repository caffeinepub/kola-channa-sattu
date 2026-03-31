import { useReveal } from "../App";

interface NavLink {
  label: string;
  href: string;
}

const socialIcons = ["📘", "📸", "🐦", "▶️"];

export default function FooterSection({ navLinks }: { navLinks: NavLink[] }) {
  const ref = useReveal();
  return (
    <footer
      data-ocid="footer.panel"
      ref={ref}
      style={{
        background:
          "linear-gradient(160deg, oklch(0.17 0.05 40) 0%, oklch(0.13 0.04 38) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{
                  background: "oklch(0.73 0.12 65)",
                  boxShadow: "0 4px 16px rgba(216,162,74,0.35)",
                }}
              >
                🌾
              </div>
              <div>
                <span
                  className="block text-xs font-body tracking-[0.2em] uppercase"
                  style={{ color: "rgba(216,162,74,0.7)" }}
                >
                  Kola
                </span>
                <span className="block font-heading font-bold text-lg text-white">
                  Channa Sattu
                </span>
              </div>
            </div>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Ancient nutrition rediscovered. Pure roasted Bengal gram flour,
              crafted with tradition and delivered with care.
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <h4
              className="font-heading font-bold text-sm uppercase tracking-[0.2em] mb-5"
              style={{ color: "oklch(0.73 0.12 65)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-2">
            <h4
              className="font-heading font-bold text-sm uppercase tracking-[0.2em] mb-5"
              style={{ color: "oklch(0.73 0.12 65)" }}
            >
              Contact
            </h4>
            <div
              className="space-y-3 font-body text-sm"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              <p>📧 hello@kolachannasattu.in</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Bihar, India</p>
            </div>
            <div className="flex gap-3 mt-6">
              {socialIcons.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}
                  data-ocid="footer.button"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.73 0.12 65)";
                    e.currentTarget.style.background = "rgba(216,162,74,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-xs text-center md:text-left"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.30)",
          }}
        >
          <span>
            © {new Date().getFullYear()} Kola Channa Sattu. All rights reserved.
          </span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(216,162,74,0.55)" }}
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
