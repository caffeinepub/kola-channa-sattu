import { useReveal } from "../App";

const steps = [
  {
    num: "01",
    title: "Measure Your Sattu",
    desc: "Take 2–3 tablespoons of Kola Channa Sattu powder into a tall glass.",
  },
  {
    num: "02",
    title: "Add Liquid",
    desc: "Pour in 200ml of cold water or chilled milk. Stir or shake vigorously for 30 seconds.",
  },
  {
    num: "03",
    title: "Season & Enjoy",
    desc: "Add a squeeze of fresh lemon, a pinch of rock salt, and roasted cumin. Drink fresh!",
  },
];

export default function UsesSection() {
  const ref = useReveal();
  return (
    <section
      id="uses"
      data-ocid="uses.section"
      ref={ref}
      className="py-16 md:py-24 ornament-dots"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.90 0.04 70) 0%, oklch(0.86 0.05 66) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="reveal font-body font-bold text-sm tracking-[0.3em] uppercase mb-2"
            style={{ color: "oklch(0.50 0.10 50)" }}
          >
            ✦ Simple Preparation ✦
          </div>
          <h2 className="reveal reveal-delay-1 font-heading font-black text-4xl md:text-5xl uppercase tracking-tight text-espresso">
            How To Use
          </h2>
          <p
            className="reveal reveal-delay-2 font-heading font-semibold text-xl md:text-2xl mt-3 max-w-2xl mx-auto"
            style={{ color: "oklch(0.35 0.06 45)" }}
          >
            Prepare Your Perfect Sattu Drink
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${i + 1} flex gap-6 rounded-2xl p-6`}
                style={{
                  background: "rgba(255,255,255,0.62)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 8px 32px rgba(42,22,14,0.08)",
                }}
                data-ocid={`uses.item.${i + 1}`}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-heading font-black text-white text-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.22 0.06 40), oklch(0.30 0.07 42))",
                    boxShadow: "0 4px 16px rgba(216,162,74,0.3)",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg uppercase tracking-wide text-espresso mb-2">
                    {step.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div
              className="reveal reveal-delay-3 rounded-2xl p-8 text-white"
              style={{
                background:
                  "linear-gradient(145deg, oklch(0.22 0.06 40), oklch(0.30 0.08 44))",
                boxShadow: "0 20px 60px rgba(42,22,14,0.35)",
              }}
            >
              <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote
                className="font-heading italic text-lg leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                "Kola Channa Sattu has completely transformed my morning
                routine. One glass keeps me full and energised till noon —
                absolutely incredible!"
              </blockquote>
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold"
                  style={{
                    background: "oklch(0.73 0.12 65)",
                    color: "oklch(0.22 0.06 40)",
                  }}
                >
                  P
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-white">
                    Priya Sharma
                  </div>
                  <div
                    className="font-body text-xs"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Verified Customer · Mumbai
                  </div>
                </div>
              </div>
              <div
                className="mt-6 pt-6 grid grid-cols-2 gap-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
              >
                {(
                  [
                    "20g|Protein",
                    "8g|Fiber",
                    "55|GI Score",
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
                        className="text-xs uppercase tracking-wider mt-0.5 font-body"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
