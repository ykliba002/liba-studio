import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/landing/MagneticButton";

const HERO_IMG =
  "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxtYWNib29rJTIwcHJvJTIwZGFyayUyMHN0dWRpb3xlbnwwfHx8fDE3ODI3NjEwNjd8MA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="hero"
      ref={containerRef}
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-24 grain"
    >
      {/* Ambient glow backgrounds */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#0071E3]/15 blur-[140px] ambient-pulse" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-white/[0.04] blur-[120px]" />
        <div className="absolute top-20 right-10 h-[300px] w-[300px] rounded-full bg-[#0071E3]/10 blur-[100px]" />
      </div>

      {/* Subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Headline */}
      <motion.div
        style={{ y: titleY }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
          data-testid="hero-badge"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#0071E3] animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/70">
            New · M-Series · Built for the bold
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          data-testid="hero-headline"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-[-0.04em] leading-[0.95] text-balance"
        >
          <span className="text-gradient-silver">Power. Elegance.</span>
          <br />
          <span className="text-gradient-blue">Beyond Limits.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          data-testid="hero-subheadline"
          className="mt-8 max-w-2xl mx-auto text-base md:text-xl font-normal leading-relaxed text-[#86868B] text-balance"
        >
          Cinematic performance. A breathtaking Liquid Retina display. Crafted
          from a single block of aerospace‑grade aluminum. The MacBook redefines
          what a laptop can be.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            as="a"
            href="#pricing"
            data-testid="hero-buy-button"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors duration-300 shadow-[0_8px_40px_rgba(255,255,255,0.15)]"
          >
            <span>Buy Now</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </MagneticButton>

          <MagneticButton
            as="a"
            href="#features"
            data-testid="hero-explore-button"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 backdrop-blur-xl transition-colors duration-300"
          >
            Explore Features
          </MagneticButton>
        </motion.div>

        {/* Specs strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.25em] text-white/40 font-medium"
          data-testid="hero-specs-strip"
        >
          <span>From $1,299</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Free Delivery</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>22-hr Battery</span>
        </motion.div>
      </motion.div>

      {/* Floating MacBook image */}
      <motion.div
        style={{ y, scale, opacity }}
        className="relative z-[5] mt-16 w-full max-w-6xl px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
          className="floaty relative"
          data-testid="hero-macbook-image"
        >
          {/* Glow behind device */}
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-b from-[#0071E3]/30 via-transparent to-transparent blur-3xl opacity-60" />
          <div className="pointer-events-none absolute inset-x-20 -bottom-8 h-24 bg-[#0071E3]/30 blur-3xl rounded-full" />

          <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,113,227,0.25)]">
            <img
              src={HERO_IMG}
              alt="MacBook hero render"
              className="w-full h-auto object-cover aspect-[16/9]"
              loading="eager"
            />
            {/* Top fade overlay for cinematic feel */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
          </div>

          {/* Floating spec chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 2.8 }}
            className="hidden md:flex absolute -left-6 top-8 glass px-4 py-2.5 rounded-2xl text-xs font-medium gap-2 items-center"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            M3 Max · 16-core
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 3 }}
            className="hidden md:flex absolute -right-6 bottom-12 glass px-4 py-2.5 rounded-2xl text-xs font-medium gap-2 items-center"
          >
            <span className="h-2 w-2 rounded-full bg-[#0071E3]" />
            Liquid Retina XDR
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-white/40 flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
