import { motion } from "framer-motion";
import { Cpu, Monitor, BatteryCharging, Feather } from "lucide-react";

const features = [
  {
    id: "feat-chip",
    icon: Cpu,
    title: "M-Series Chip",
    desc: "An aerospace-grade silicon engineered for cinematic workloads. Render 8K, train models, or score symphonies without breaking a sweat.",
    accent: "from-[#0071E3]/30 to-transparent",
  },
  {
    id: "feat-display",
    icon: Monitor,
    title: "Liquid Retina XDR",
    desc: "1,600 nits of sustained brilliance. A billion colors. ProMotion at 120Hz. The most luxurious canvas ever fitted to a laptop.",
    accent: "from-purple-500/25 to-transparent",
  },
  {
    id: "feat-battery",
    icon: BatteryCharging,
    title: "All-Day Battery",
    desc: "Up to 22 hours of uninterrupted flow. Unplug at sunrise, create until nightfall — without ever reaching for a charger.",
    accent: "from-emerald-400/25 to-transparent",
  },
  {
    id: "feat-design",
    icon: Feather,
    title: "Ultra-Light Aluminum",
    desc: "Milled from a single block of recycled aerospace aluminum. 1.55 kg of cinematic minimalism. Engineered to disappear in your hand.",
    accent: "from-amber-300/20 to-transparent",
  },
];

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      {/* Section glow */}
      <div className="pointer-events-none absolute top-1/3 left-0 h-[500px] w-[500px] rounded-full bg-[#0071E3]/8 blur-[160px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#0071E3] mb-5">
            Features
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1] text-balance">
            <span className="text-gradient-silver">
              Crafted to be remembered.
            </span>
          </h2>
          <p className="mt-6 text-lg text-[#86868B] max-w-xl leading-relaxed">
            Every component, every line, every gram considered. A laptop that
            performs like a workstation and feels like a piece of art.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                data-testid={f.id}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                className="group relative rounded-3xl p-8 md:p-10 glass-strong overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gradient-radial ${f.accent} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700`}
                  style={{
                    background: `radial-gradient(circle, ${
                      f.id === "feat-chip"
                        ? "rgba(0,113,227,0.35)"
                        : f.id === "feat-display"
                        ? "rgba(168,85,247,0.3)"
                        : f.id === "feat-battery"
                        ? "rgba(52,211,153,0.3)"
                        : "rgba(252,211,77,0.25)"
                    } 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div className="relative h-14 w-14 rounded-2xl flex items-center justify-center bg-white/[0.05] border border-white/10 backdrop-blur-xl">
                  <Icon size={22} className="text-white" strokeWidth={1.5} />
                </div>

                <h3 className="relative mt-7 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  {f.title}
                </h3>
                <p className="relative mt-4 text-[15px] leading-relaxed text-[#86868B] max-w-md">
                  {f.desc}
                </p>

                {/* Subtle bottom border accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0071E3]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
