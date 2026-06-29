import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, Github, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const linkGroups = [
  {
    title: "Shop",
    links: [
      { label: "MacBook Base", href: "#pricing" },
      { label: "MacBook Pro", href: "#pricing" },
      { label: "MacBook Max", href: "#pricing" },
      { label: "Accessories", href: "#" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Features", href: "#features" },
      { label: "Performance", href: "#performance" },
      { label: "Gallery", href: "#gallery" },
      { label: "Specs", href: "#specs" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "AppleCare+", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Repair", href: "#" },
      { label: "Trade-In", href: "#" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("You're on the list", {
        description: "We'll keep you posted on the next launch.",
      });
      setEmail("");
    } catch (err) {
      const detail =
        err?.response?.data?.detail || "Please enter a valid email.";
      toast.error("Subscription failed", { description: String(detail) });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer
      data-testid="footer"
      className="relative bg-[#070707] border-t border-white/[0.06] pt-20 md:pt-28 pb-10 px-6 md:px-12 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[80%] bg-[#0071E3]/5 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Newsletter band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-16 border-b border-white/[0.06]"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient-silver max-w-md">
              Be first to know when the next one drops.
            </h3>
            <p className="mt-3 text-sm text-[#86868B] max-w-md">
              Quarterly. No spam. Just craftsmanship updates and early-access
              invitations.
            </p>
          </div>

          <form
            onSubmit={submit}
            data-testid="newsletter-form"
            className="flex items-center gap-2 w-full"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                data-testid="newsletter-input"
                className="w-full h-14 px-5 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#0071E3] focus:bg-white/[0.06] transition-colors duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              data-testid="newsletter-submit-button"
              className="h-14 px-6 md:px-7 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2 transition-colors duration-300"
            >
              {submitting ? (
                "Joining…"
              ) : (
                <>
                  Subscribe <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Link grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <svg width="18" height="22" viewBox="0 0 48 56" fill="none" className="text-white">
                <path
                  d="M33.1 29.6c-.1-7.4 6-11 6.3-11.2-3.4-5-8.8-5.7-10.7-5.8-4.5-.5-8.9 2.7-11.2 2.7-2.3 0-5.9-2.6-9.7-2.5-5 .1-9.6 2.9-12.2 7.4-5.2 9-1.3 22.3 3.7 29.6 2.5 3.6 5.4 7.6 9.2 7.4 3.7-.1 5.1-2.4 9.6-2.4 4.5 0 5.7 2.4 9.7 2.3 4-.1 6.5-3.6 8.9-7.3 2.8-4.2 4-8.3 4.1-8.5-.1 0-7.8-3-7.7-11.7zM26.5 7.7c2-2.4 3.3-5.8 3-9.2-2.8.1-6.2 1.9-8.3 4.3-1.8 2.1-3.4 5.6-3 8.9 3.1.2 6.3-1.6 8.3-4z"
                  fill="currentColor"
                  transform="translate(2 0)"
                />
              </svg>
              <span className="text-sm font-medium">MacBook</span>
            </div>
            <p className="mt-4 text-sm text-[#86868B] leading-relaxed max-w-xs">
              Cinematic performance, sculpted in aluminum. Designed in
              California.
            </p>
          </div>

          {linkGroups.map((g) => (
            <div key={g.title}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold mb-5">
                {g.title}
              </p>
              <ul className="space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} MacBook concept landing — a creative
            tribute. Not affiliated with Apple Inc.
          </p>
          <div className="flex items-center gap-3" data-testid="social-icons">
            {[
              { Icon: Twitter, label: "twitter" },
              { Icon: Instagram, label: "instagram" },
              { Icon: Youtube, label: "youtube" },
              { Icon: Github, label: "github" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                data-testid={`social-${label}`}
                aria-label={label}
                className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors duration-300"
              >
                <Icon size={15} className="text-white/80" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
