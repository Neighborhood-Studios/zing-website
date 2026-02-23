import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video - swap the src to your own video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="./cleaner-hero.jpg"
      >
        <source src="./hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111211]/70 via-[#111211]/50 to-[#111211]/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto pt-16 md:pt-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#C8956C] tracking-[0.3em] uppercase mb-4 md:mb-6"
          style={{ fontSize: "11px", letterSpacing: "0.3em" }}
        >
          Cleaning, reimagined
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white mb-4 md:mb-6"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            lineHeight: 1.1,
            fontWeight: 400,
          }}
        >
          A cleaner apartment,
          <br />
          on your terms
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 max-w-xl mx-auto mb-8 md:mb-10 px-2 sm:px-0"
          style={{ fontSize: "clamp(15px, 2.5vw, 18px)", lineHeight: 1.7 }}
        >
          Zing places dedicated cleaners right in your building. Order
          bite-sized cleaning tasks whenever you need them — no commitments, no
          subscriptions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#get-started"
            className="group bg-white text-[#1A1F1C] px-8 py-4 rounded-full hover:bg-[#C8956C] hover:text-white transition-all duration-300 flex items-center gap-2"
            style={{ fontSize: "15px", letterSpacing: "0.05em" }}
          >
            Get Started
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#how-it-works"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-2 px-6 py-4"
            style={{ fontSize: "15px", letterSpacing: "0.05em" }}
          >
            See how it works
          </a>
        </motion.div>

        {/* Price teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 md:mt-16 flex items-center justify-center gap-4 sm:gap-8 flex-wrap"
        >
          <div className="text-white/40" style={{ fontSize: "13px", letterSpacing: "0.1em" }}>
            <span className="text-white/70">Bathrooms</span> from $23
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="text-white/40" style={{ fontSize: "13px", letterSpacing: "0.1em" }}>
            <span className="text-white/70">Floors</span> from $14
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="text-white/40" style={{ fontSize: "13px", letterSpacing: "0.1em" }}>
            <span className="text-white/70">Laundry</span> from $12
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
