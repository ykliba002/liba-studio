import { motion } from "framer-motion";

const rows = [
  { label: "Display", base: '13.6" Liquid Retina', pro: '14.2" Liquid Retina XDR', max: '16.2" Liquid Retina XDR' },
  { label: "Processor", base: "M-Series · 8-core CPU", pro: "M Pro · 12-core CPU", max: "M Max · 16-core CPU" },
  { label: "Memory", base: "16 GB Unified", pro: "32 GB Unified", max: "64 GB Unified" },
  { label: "Storage", base: "512 GB SSD", pro: "1 TB SSD", max: "2 TB SSD" },
  { label: "Battery", base: "Up to 18 hrs", pro: "Up to 22 hrs", max: "Up to 22 hrs" },
  { label: "Weight", base: "1.24 kg", pro: "1.55 kg", max: "2.16 kg" },
  { label: "Colors", base: "Silver · Space Gray", pro: "Silver · Space Black", max: "Silver · Space Black" },
];

const cols = [
  { id: "spec-base", title: "Base", subtitle: "Everyday excellence" },
  { id: "spec-pro", title: "Pro", subtitle: "Professional grade", highlight: true },
  { id: "spec-max", title: "Max", subtitle: "Studio class" },
];

export default function Specifications() {
  return (
    <section
      id="specs"
      data-testid="specs-section"
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#0071E3]/8 blur-[140px]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#0071E3] mb-5">
            Specifications
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1] text-balance text-gradient-silver">
            Engineered to the last micron.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl glass-strong overflow-hidden"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1.2fr_repeat(3,1fr)] md:grid-cols-[1.5fr_repeat(3,1fr)] border-b border-white/10">
            <div className="p-5 md:p-7 text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold">
              Model
            </div>
            {cols.map((c) => (
              <div
                key={c.id}
                data-testid={`${c.id}-col-header`}
                className={`p-5 md:p-7 text-center relative ${
                  c.highlight ? "bg-[#0071E3]/[0.05]" : ""
                }`}
              >
                {c.highlight && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-[#0071E3] font-semibold">
                    Recommended
                  </div>
                )}
                <p className="text-lg md:text-xl font-semibold text-white mt-2">
                  {c.title}
                </p>
                <p className="text-xs text-[#86868B] mt-0.5">{c.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((r, idx) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className={`grid grid-cols-[1.2fr_repeat(3,1fr)] md:grid-cols-[1.5fr_repeat(3,1fr)] ${
                idx !== rows.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
              data-testid={`spec-row-${r.label.toLowerCase()}`}
            >
              <div className="p-5 md:p-7 text-sm font-medium text-white/70">
                {r.label}
              </div>
              <div className="p-5 md:p-7 text-center text-xs md:text-sm text-white/80">
                {r.base}
              </div>
              <div className="p-5 md:p-7 text-center text-xs md:text-sm text-white font-medium bg-[#0071E3]/[0.04]">
                {r.pro}
              </div>
              <div className="p-5 md:p-7 text-center text-xs md:text-sm text-white/80">
                {r.max}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
