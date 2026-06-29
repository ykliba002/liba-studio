import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Daniel Hayes",
    role: "Creative Director · A24",
    quote:
      "I've used every MacBook since the Titanium era. This one is different. It disappears in your hands, then unleashes a render farm when you sit down.",
    avatar:
      "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRhcmt8ZW58MHx8fHwxNzgyNzYxMDY3fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Mateo Russo",
    role: "Founder · Atlas Studio",
    quote:
      "The battery is the headline. I edited an entire 4K documentary on a flight to Tokyo and landed at 41%. It changed how I plan my days.",
    avatar:
      "https://images.pexels.com/photos/17685845/pexels-photo-17685845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Sienna Aboud",
    role: "Principal Engineer · Linear",
    quote:
      "Builds run cold and quiet. I can run a 70B model locally while I write. It feels less like a laptop and more like a creative co-pilot.",
    avatar:
      "https://images.pexels.com/photos/12396627/pexels-photo-12396627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      data-testid="testimonials-section"
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#0071E3]/8 blur-[160px]" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#0071E3] mb-5">
            Voices
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1] text-balance text-gradient-silver">
            Loved by those who shape the world.
          </h2>
        </motion.div>

        <div className="relative mt-16 min-h-[340px] md:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass-strong rounded-3xl p-10 md:p-14 max-w-3xl mx-auto"
              data-testid={`testimonial-card-${active}`}
            >
              <Quote
                size={36}
                className="absolute -top-5 left-10 text-[#0071E3] opacity-60"
                fill="#0071E3"
              />

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-300"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 text-balance">
                "{items[active].quote}"
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-white/15">
                  <img
                    src={items[active].avatar}
                    alt={items[active].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">
                    {items[active].name}
                  </p>
                  <p className="text-xs text-[#86868B]">{items[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-2" data-testid="testimonial-dots">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-testid={`testimonial-dot-${i}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
