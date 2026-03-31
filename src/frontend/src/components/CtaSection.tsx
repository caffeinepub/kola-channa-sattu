import { useReveal } from "../App";

export default function CtaSection() {
  const ref = useReveal();
  return (
    <section
      id="shop"
      data-ocid="cta.section"
      ref={ref}
      className="relative py-16 md:py-24 ornament-pattern overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, oklch(0.17 0.05 40) 0%, oklch(0.24 0.07 42) 60%, oklch(0.19 0.06 38) 100%)",
      }}
    >
      <div className="absolute inset-0 ornament-dots opacity-35" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(216,162,74,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text first on mobile via order */}
        <div className="text-white order-first lg:order-last">
          <div
            className="reveal font-body font-bold text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: "oklch(0.73 0.12 65)" }}
          >
            ✦ Limited Stock Available ✦
          </div>
          <h2 className="reveal reveal-delay-1 font-heading font-black text-3xl md:text-5xl xl:text-6xl uppercase leading-none tracking-tight mb-6">
            Embrace the
            <br />
            <span className="text-gold-shimmer">Tradition.</span>
            <br />
            Order Today!
          </h2>
          <p
            className="reveal reveal-delay-2 font-body text-base leading-relaxed max-w-md mb-8"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Join thousands of health-conscious Indians who've rediscovered the
            power of sattu. Free shipping on orders above ₹499. 100% natural, no
            preservatives.
          </p>
          <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
            <a href="#shop" className="btn-gold" data-ocid="cta.primary_button">
              🛒 Buy Kola Channa Sattu
            </a>
          </div>
          <div
            className="reveal reveal-delay-4 flex flex-wrap items-center gap-6 mt-8 text-xs uppercase tracking-widest font-body"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            <span>✓ Free Shipping ₹499+</span>
            <span>✓ 100% Natural</span>
            <span>✓ Easy Returns</span>
          </div>
        </div>

        {/* Image last on mobile */}
        <div className="reveal flex justify-center order-last lg:order-first">
          <img
            src="/assets/generated/sattu-product.dim_600x700.png"
            alt="Kola Channa Sattu pack"
            className="w-56 md:w-80 hero-product"
            style={{ filter: "drop-shadow(0 24px 50px rgba(216,162,74,0.22))" }}
          />
        </div>
      </div>
    </section>
  );
}
