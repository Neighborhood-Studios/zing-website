import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SplitFeature() {
  return (
    <section className="py-24 md:py-32 bg-[#F2EFEA]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:pr-12"
          >
            <p
              className="text-[#C8956C] tracking-[0.25em] uppercase mb-4"
              style={{ fontSize: "12px" }}
            >
              The Zing Difference
            </p>
            <h2
              className="text-[#1A1F1C] mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Your cleaner knows
              <br />
              your building
            </h2>
            <p
              className="text-[#6B7370] mb-8"
              style={{ fontSize: "16px", lineHeight: 1.8 }}
            >
              Unlike gig-economy cleaning apps, Zing cleaners are full-time
              employees stationed in your building. They know the layout, they
              know the residents, and they take pride in maintaining the space
              you call home.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p
                  className="text-[#2C5F4B]"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "28px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  30min
                </p>
                <p
                  className="text-[#6B7370] mt-1.5"
                  style={{ fontSize: "13px" }}
                >
                  Avg. task time
                </p>
              </div>
              <div>
                <p
                  className="text-[#2C5F4B]"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "28px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  2hr
                </p>
                <p
                  className="text-[#6B7370] mt-1.5"
                  style={{ fontSize: "13px" }}
                >
                  Same-day booking
                </p>
              </div>
              <div>
                <p
                  className="text-[#2C5F4B]"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "28px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  98%
                </p>
                <p
                  className="text-[#6B7370] mt-1.5"
                  style={{ fontSize: "13px" }}
                >
                  Satisfaction rate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="./cleaner-hero.jpg"
                alt="Professional cleaner in modern apartment"
                className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
