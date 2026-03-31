import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center ornament-pattern"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.17 0.05 40) 0%, oklch(0.27 0.07 42) 50%, oklch(0.21 0.06 38) 100%)",
      }}
    >
      <div className="absolute inset-0 ornament-dots opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(216,162,74,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body font-semibold tracking-[0.25em] uppercase text-sm mb-5"
            style={{ color: "oklch(0.73 0.12 65)" }}
          >
            ✦ Ancient Wisdom · Modern Nutrition ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="font-heading font-black text-4xl md:text-6xl xl:text-7xl leading-none mb-3 uppercase tracking-tight"
          >
            Pure Energy
            <br />
            <span className="text-gold-shimmer">From Ancient</span>
            <br />
            Grains
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-heading font-bold text-xl md:text-2xl uppercase tracking-widest mb-7"
            style={{ color: "oklch(0.73 0.12 65)" }}
          >
            Kola Channa Sattu
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="font-body text-base md:text-lg leading-relaxed max-w-md mb-10"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Roasted Bengal gram flour — a time-honoured superfood from India's
            heartland. Protein-dense, gut-friendly, and naturally energising.
            Fuel your day the traditional way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.78 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#shop"
              className="btn-gold text-center"
              data-ocid="hero.primary_button"
            >
              🛒 Get Your Pack
            </a>
            <a
              href="#benefits"
              className="btn-outline-gold text-center"
              data-ocid="hero.secondary_button"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex flex-wrap gap-4 mt-8 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {(
              [
                "22g|Protein / 100g",
                "Low|Glycemic Index",
                "100%|Natural",
              ] as const
            ).map((item) => {
              const [val, label] = item.split("|");
              return (
                <div key={label} className="text-center">
                  <div
                    className="font-heading font-black text-2xl"
                    style={{ color: "oklch(0.73 0.12 65)" }}
                  >
                    {val}
                  </div>
                  <div
                    className="text-xs tracking-wide uppercase mt-1 font-body"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.42, ease: "easeOut" }}
          className="relative flex justify-center items-end h-[320px] lg:h-[580px]"
        >
          <div
            className="absolute inset-6 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(216,162,74,0.08) 0%, transparent 70%)",
              border: "1px solid rgba(216,162,74,0.12)",
            }}
          />
          <div
            className="hero-product absolute left-4 md:left-8 bottom-0 w-40 md:w-64"
            style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))" }}
          >
            <img
              src="/assets/generated/sattu-product.dim_600x700.png"
              alt="Kola Channa Sattu product pack"
              className="w-full h-auto object-contain"
            />
          </div>
          <div
            className="hero-drink absolute right-4 md:right-8 bottom-10 w-32 md:w-56"
            style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
          >
            <img
              src="/assets/generated/sattu-drink.dim_600x700.png"
              alt="Sattu drink glass"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        <span className="text-xs tracking-widest uppercase font-body">
          Scroll
        </span>
        <div
          className="w-px h-10 animate-pulse"
          style={{
            background:
              "linear-gradient(to bottom, rgba(216,162,74,0.5), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
