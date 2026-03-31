import { useReveal } from "../App";

const benefits = [
  {
    num: "01",
    icon: "💪",
    title: "High Protein",
    desc: "Packed with 20–22g of plant-based protein per 100g, Kola Channa Sattu supports muscle repair and keeps you strong and energized throughout your day.",
  },
  {
    num: "02",
    icon: "🌾",
    title: "Rich in Fiber",
    desc: "High soluble and insoluble fiber aids digestion, promotes gut health, and keeps you feeling full naturally — curbing hunger between meals.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Instant Energy",
    desc: "Low glycemic index carbs provide slow, steady energy release with no spikes or crashes. Ideal for athletes, students, and busy professionals.",
  },
];

export default function BenefitsSection() {
  const ref = useReveal();
  return (
    <section
      id="benefits"
      data-ocid="benefits.section"
      ref={ref}
      className="py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.95 0.02 78) 0%, oklch(0.98 0.01 80) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="reveal font-body font-bold text-sm tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.73 0.12 65)" }}
          >
            ✦ Why Choose Sattu ✦
          </div>
          <h2 className="reveal reveal-delay-1 font-heading font-black text-4xl md:text-5xl uppercase tracking-tight mb-4 text-espresso">
            Benefits
          </h2>
          <p className="reveal reveal-delay-2 font-body max-w-xl mx-auto text-muted-foreground">
            A powerhouse of nutrients in every sip. Kola Channa Sattu has
            fuelled generations with its unmatched nutritional profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.num}
              className={`benefit-card reveal reveal-delay-${i + 1} bg-card rounded-2xl p-8`}
              style={{ boxShadow: "0 8px 32px rgba(42,22,14,0.10)" }}
              data-ocid={`benefits.item.${i + 1}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-heading font-black text-5xl"
                  style={{ color: "oklch(0.91 0.03 75)" }}
                >
                  {b.num}
                </span>
                <div
                  className="card-icon w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.22 0.06 40), oklch(0.30 0.07 42))",
                    boxShadow: "0 4px 16px rgba(216,162,74,0.3)",
                  }}
                >
                  {b.icon}
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide mb-3 text-espresso">
                {b.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
