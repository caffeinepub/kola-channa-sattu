export default function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-16 md:py-24"
      style={{ background: "oklch(0.97 0.01 78)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          className="font-body font-bold text-sm tracking-[0.3em] uppercase mb-3"
          style={{ color: "oklch(0.73 0.12 65)" }}
        >
          ✦ Our Story ✦
        </div>
        <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tight text-espresso mb-6">
          About Us
        </h2>
        <p className="font-body text-lg leading-relaxed mb-6 text-muted-foreground">
          Kola Channa Sattu was born from a deep respect for India's culinary
          heritage. For centuries, sattu has been the staple drink of Bihar,
          Uttar Pradesh, and Rajasthan — sustaining farmers, wrestlers, and
          travellers through long, demanding days.
        </p>
        <p className="font-body leading-relaxed mb-10 text-muted-foreground">
          We source only the finest Bengal gram, roast it traditionally in iron
          karahi, and grind it to a fine, aromatic flour — preserving every bit
          of its natural nutrition. No chemicals. No additives. Just pure,
          honest sattu.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "🌿 100% Organic",
            "🏺 Traditional Process",
            "🇮🇳 Made in India",
            "❤️ No Additives",
          ].map((item) => (
            <span
              key={item}
              className="font-body font-semibold text-sm text-espresso uppercase tracking-wide"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
