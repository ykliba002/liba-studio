import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { toast } from "sonner";
import MagneticButton from "@/components/landing/MagneticButton";

const tiers = [
  {
    id: "tier-base",
    name: "Base",
    tagline: "Everyday excellence",
    price: 1299,
    features: [
      'M-Series · 8-core CPU',
      '13.6" Liquid Retina',
      "16 GB unified memory",
      "512 GB SSD storage",
      "Up to 18 hr battery",
      "Free engraving",
    ],
    highlight: false,
    cta: "Buy Base",
  },
  {
    id: "tier-pro",
    name: "Pro",
    tagline: "Most loved · for makers",
    price: 1999,
    features: [
      "M Pro · 12-core CPU",
      '14.2" Liquid Retina XDR',
      "32 GB unified memory",
      "1 TB SSD storage",
      "Up to 22 hr battery",
      "Priority delivery",
      "AppleCare+ included",
    ],
    highlight: true,
    cta: "Buy Pro",
  },
  {
    id: "tier-max",
    name: "Max",
    tagline: "Studio class",
    price: 2499,
    features: [
      "M Max · 16-core CPU",
      '16.2" Liquid Retina XDR',
      "64 GB unified memory",
      "2 TB SSD storage",
      "Up to 22 hr battery",
      "Concierge setup",
      "AppleCare+ Pro",
    ],
    highlight: false,
    cta: "Buy Max",
  },
];

export default function Pricing() {
  const onBuy = (tierName) => {
    toast.success(`${tierName} added to your bag`, {
      description: "Checkout will be available soon.",
    });
  };

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#0071E3]/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#0071E3] mb-5">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1] text-balance text-gradient-silver">
            Choose your masterpiece.
          </h2>
          <p className="mt-6 text-lg text-[#86868B] leading-relaxed">
            Three configurations. Zero compromises. All include free delivery
            and a 14-day return window.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                tier.highlight
                  ? "bg-gradient-to-b from-[#0a0a0a] to-[#111] border border-[#0071E3]/40 shadow-[0_0_60px_rgba(0,113,227,0.2)] md:scale-[1.03]"
                  : "glass-strong"
              }`}
              data-testid={tier.id}
            >
              {tier.highlight && (
                <>
                  <div className="absolute -inset-px rounded-3xl pointer-events-none bg-gradient-to-b from-[#0071E3]/40 to-transparent opacity-50 -z-0" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0071E3] text-white text-[10px] uppercase tracking-[0.2em] font-semibold">
                    <Sparkles size={12} />
                    Recommended
                  </div>
                </>
              )}

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.25em] text-[#86868B] font-semibold">
                  {tier.tagline}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">
                  {tier.name}
                </h3>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight text-white tabular-nums">
                    ${tier.price.toLocaleString()}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#86868B]">
                  or from ${Math.round(tier.price / 12)}/mo for 12 mo.
                </p>
              </div>

              <ul className="relative mt-8 space-y-3.5 flex-1">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        tier.highlight ? "text-[#0071E3]" : "text-white/60"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                onClick={() => onBuy(tier.name)}
                data-testid={`${tier.id}-buy-button`}
                className={`relative mt-10 w-full py-3.5 rounded-full font-medium text-sm transition-colors duration-300 ${
                  tier.highlight
                    ? "bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-[0_8px_40px_rgba(0,113,227,0.4)]"
                    : "bg-white text-black hover:bg-white/90"
                }`}
                strength={14}
              >
                {tier.cta}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
