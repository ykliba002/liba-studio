import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1635657987517-c143fad8079c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwzfHxtYWNib29rJTIwc2NyZWVuJTIwY2xvc2UlMjB1cCUyMGRhcmt8ZW58MHx8fHwxNzgyNzYxMDY3fDA&ixlib=rb-4.1.0&q=85",
    caption: "Anodized aerospace finish",
  },
  {
    url: "https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxtYWNib29rJTIwcHJvJTIwZGFyayUyMHN0dWRpb3xlbnwwfHx8fDE3ODI3NjEwNjd8MA&ixlib=rb-4.1.0&q=85",
    caption: "Crafted from a single block",
  },
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwc2NyZWVuJTIwY2xvc2UlMjB1cCUyMGRhcmt8ZW58MHx8fHwxNzgyNzYxMDY3fDA&ixlib=rb-4.1.0&q=85",
    caption: "Backlit precision keyboard",
  },
  {
    url: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHw0fHxtYWNib29rJTIwc2NyZWVuJTIwY2xvc2UlMjB1cCUyMGRhcmt8ZW58MHx8fHwxNzgyNzYxMDY3fDA&ixlib=rb-4.1.0&q=85",
    caption: "Liquid Retina, billion colors",
  },
  {
    url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwyfHxtYWNib29rJTIwc2NyZWVuJTIwY2xvc2UlMjB1cCUyMGRhcmt8ZW58MHx8fHwxNzgyNzYxMDY3fDA&ixlib=rb-4.1.0&q=85",
    caption: "Sculpted silver silhouette",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % images.length);
  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[#0071E3] mb-5">
              Gallery
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1] text-balance text-gradient-silver max-w-2xl">
              Every angle, a sculpture.
            </h2>
          </div>
          <div className="flex items-center gap-3" data-testid="gallery-controls">
            <button
              onClick={prev}
              data-testid="gallery-prev"
              className="h-11 w-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center transition-colors duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              data-testid="gallery-next"
              className="h-11 w-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center transition-colors duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Hero carousel image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
          <div className="pointer-events-none absolute -inset-4 bg-gradient-to-r from-[#0071E3]/20 via-transparent to-purple-500/20 blur-3xl opacity-50" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
              data-testid={`gallery-active-image`}
            >
              <img
                src={images[active].url}
                alt={images[active].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2 font-medium">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </p>
                <p className="text-2xl md:text-4xl font-semibold tracking-tight text-white max-w-md">
                  {images[active].caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 grid grid-cols-5 gap-3 md:gap-4" data-testid="gallery-thumbnails">
          {images.map((img, i) => (
            <motion.button
              key={img.url}
              onClick={() => setActive(i)}
              data-testid={`gallery-thumb-${i}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`group relative aspect-[4/3] rounded-xl overflow-hidden border transition-all duration-500 ${
                i === active
                  ? "border-[#0071E3] shadow-[0_0_30px_rgba(0,113,227,0.3)]"
                  : "border-white/5 hover:border-white/20 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
