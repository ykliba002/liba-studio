import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          {/* Ambient glow */}
          <div className="absolute h-[400px] w-[400px] rounded-full bg-[#0071E3]/20 blur-[120px] ambient-pulse" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Apple-style logo mark */}
            <svg
              width="48"
              height="56"
              viewBox="0 0 48 56"
              fill="none"
              className="text-white"
              aria-hidden="true"
            >
              <path
                d="M33.1 29.6c-.1-7.4 6-11 6.3-11.2-3.4-5-8.8-5.7-10.7-5.8-4.5-.5-8.9 2.7-11.2 2.7-2.3 0-5.9-2.6-9.7-2.5-5 .1-9.6 2.9-12.2 7.4-5.2 9-1.3 22.3 3.7 29.6 2.5 3.6 5.4 7.6 9.2 7.4 3.7-.1 5.1-2.4 9.6-2.4 4.5 0 5.7 2.4 9.7 2.3 4-.1 6.5-3.6 8.9-7.3 2.8-4.2 4-8.3 4.1-8.5-.1 0-7.8-3-7.7-11.7zM26.5 7.7c2-2.4 3.3-5.8 3-9.2-2.8.1-6.2 1.9-8.3 4.3-1.8 2.1-3.4 5.6-3 8.9 3.1.2 6.3-1.6 8.3-4z"
                fill="currentColor"
                transform="translate(2 0)"
              />
            </svg>

            {/* Loading text */}
            <div className="flex items-center gap-1">
              <span className="text-xs uppercase tracking-[0.4em] shimmer-text font-medium">
                Loading
              </span>
            </div>

            {/* Progress line */}
            <div className="h-[1px] w-48 overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
