import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Overview", href: "#hero", id: "nav-overview" },
  { label: "Features", href: "#features", id: "nav-features" },
  { label: "Performance", href: "#performance", id: "nav-performance" },
  { label: "Gallery", href: "#gallery", id: "nav-gallery" },
  { label: "Specs", href: "#specs", id: "nav-specs" },
  { label: "Pricing", href: "#pricing", id: "nav-pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <svg width="20" height="24" viewBox="0 0 48 56" fill="none" className="text-white transition-transform group-hover:scale-110">
            <path
              d="M33.1 29.6c-.1-7.4 6-11 6.3-11.2-3.4-5-8.8-5.7-10.7-5.8-4.5-.5-8.9 2.7-11.2 2.7-2.3 0-5.9-2.6-9.7-2.5-5 .1-9.6 2.9-12.2 7.4-5.2 9-1.3 22.3 3.7 29.6 2.5 3.6 5.4 7.6 9.2 7.4 3.7-.1 5.1-2.4 9.6-2.4 4.5 0 5.7 2.4 9.7 2.3 4-.1 6.5-3.6 8.9-7.3 2.8-4.2 4-8.3 4.1-8.5-.1 0-7.8-3-7.7-11.7zM26.5 7.7c2-2.4 3.3-5.8 3-9.2-2.8.1-6.2 1.9-8.3 4.3-1.8 2.1-3.4 5.6-3 8.9 3.1.2 6.3-1.6 8.3-4z"
              fill="currentColor"
              transform="translate(2 0)"
            />
          </svg>
          <span className="text-sm font-medium tracking-tight text-white/90">MacBook</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                data-testid={l.id}
                className="text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            data-testid="nav-buy-cta"
            className="text-[13px] font-medium px-4 py-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white transition-colors duration-300"
          >
            Buy
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
            data-testid="nav-mobile-menu"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    data-testid={`${l.id}-mobile`}
                    className="text-base font-medium text-white/80 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#pricing"
                  onClick={() => setMobileOpen(false)}
                  data-testid="nav-buy-cta-mobile"
                  className="inline-block text-sm font-medium px-5 py-2 rounded-full bg-[#0071E3] text-white"
                >
                  Buy
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
