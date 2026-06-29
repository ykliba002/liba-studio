import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

const PERF_IMG =
  "https://images.unsplash.com/photo-1650661926447-9efb2610f64c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwcHJvJTIwZGFyayUyMHN0dWRpb3xlbnwwfHx8fDE3ODI3NjEwNjd8MA&ixlib=rb-4.1.0&q=85";

function CountUp({ to, suffix = "", duration = 2 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, mv]);

  const display =
    to % 1 === 0 ? Math.round(val).toLocaleString() : val.toFixed(1);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function StatBar({ label, value, suffix, target, color = "#0071E3", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-sm font-medium text-white/70">{label}</span>
        <span className="text-3xl md:text-4xl font-semibold tracking-tight text-white tabular-nums">
          {inView ? <CountUp to={value} suffix={suffix} /> : `0${suffix}`}
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${target}%` } : { width: 0 }}
          transition={{
            duration: 1.6,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
            boxShadow: `0 0 20px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function Performance() {
  return (
    <section
      id="performance"
      data-testid="performance-section"
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-[#0071E3]/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-[#0071E3]/30 to-transparent blur-3xl opacity-50" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,113,227,0.2)]">
            <img
              src={PERF_IMG}
              alt="MacBook performance"
              className="w-full h-auto aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          {/* Floating stat badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-6 -right-6 md:-right-10 glass-strong rounded-2xl px-6 py-4 max-w-[220px]"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium">
              Geekbench 6
            </p>
            <p className="mt-1 text-3xl font-bold text-white tabular-nums">
              <CountUp to={3892} />
            </p>
            <p className="mt-0.5 text-xs text-[#86868B]">Single-core score</p>
          </motion.div>
        </motion.div>

        {/* Right: stats */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#0071E3] mb-5">
              Performance
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02] text-balance">
              <span className="text-gradient-silver">Pixar-grade speed.</span>
              <br />
              <span className="text-white/70">Whisper-quiet.</span>
            </h2>
            <p className="mt-6 text-lg text-[#86868B] max-w-md leading-relaxed">
              The next-gen unified memory architecture and neural engine
              accelerate every workload — from real-time 8K editing to
              on-device generative AI.
            </p>
          </motion.div>

          <div className="mt-12 space-y-8" data-testid="performance-stats">
            <StatBar label="CPU Performance" value={42} suffix="%" target={88} color="#0071E3" delay={0} />
            <StatBar label="GPU Power" value={60} suffix="%" target={94} color="#A855F7" delay={0.15} />
            <StatBar label="Battery Life" value={22} suffix=" hrs" target={92} color="#34D399" delay={0.3} />
            <StatBar label="Neural Engine" value={38} suffix=" TOPS" target={82} color="#FBBF24" delay={0.45} />
          </div>
        </div>
      </div>
    </section>
  );
}
