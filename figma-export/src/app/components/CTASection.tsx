import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTASection() {
  return (
    <section id="get-started" className="py-24 md:py-32 bg-[#FAFAF7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#2C5F4B] rounded-3xl overflow-hidden"
        >
          {/* Background image (subtle) */}
          <div className="absolute inset-0 opacity-15">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1599412965471-e5f860059f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTg2MjQyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Apartment building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-20 md:py-28 px-8 max-w-2xl mx-auto">
            <p
              className="text-white/60 tracking-[0.25em] uppercase mb-5"
              style={{ fontSize: "12px" }}
            >
              Ready for a cleaner home?
            </p>
            <h2
              className="text-white mb-5"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Check if Zing is in
              <br />
              your building
            </h2>
            <p
              className="text-white/70 mb-10 max-w-md mx-auto"
              style={{ fontSize: "16px", lineHeight: 1.7 }}
            >
              Enter your address to see if Zing is available at your apartment
              complex. If not, request it — we're expanding fast.
            </p>

            {/* Email / Address input */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter your building address"
                className="flex-1 bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 rounded-full px-6 py-3.5 focus:outline-none focus:border-white/40 transition-colors"
                style={{ fontSize: "14.5px" }}
              />
              <button
                className="group bg-white text-[#2C5F4B] px-7 py-3.5 rounded-full hover:bg-[#C8956C] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shrink-0"
                style={{ fontSize: "14.5px", fontWeight: 500 }}
              >
                Get Started
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
