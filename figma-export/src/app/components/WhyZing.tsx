import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Clock, ShieldCheck, Heart } from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Already in your building",
    description:
      "Our cleaners are full-time, dedicated staff placed right in your apartment complex. No strangers, no scheduling headaches.",
  },
  {
    icon: Clock,
    title: "Ready when you are",
    description:
      "Because we're on-site, turnaround is fast. Book a task and it can be done the same day — often within hours.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & vetted",
    description:
      "Every Zing cleaner is background-checked, trained, and part of your building's community. Real accountability.",
  },
  {
    icon: Heart,
    title: "No commitment",
    description:
      "No subscriptions. No contracts. Order a single task or five — it's entirely up to you, every single time.",
  },
];

export function WhyZing() {
  return (
    <section id="why-zing" className="py-24 md:py-32 bg-[#FAFAF7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="./cleaner-hero.jpg"
                alt="Happy resident relaxing in a clean apartment"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 right-4 md:-bottom-6 md:right-8 bg-white rounded-xl p-4 md:p-5 shadow-lg"
            >
              <p
                className="text-[#2C5F4B]"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "32px",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                4.9★
              </p>
              <p
                className="text-[#6B7370] mt-1"
                style={{ fontSize: "13px" }}
              >
                Average resident rating
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-[#C8956C] tracking-[0.25em] uppercase mb-4"
              style={{ fontSize: "12px" }}
            >
              Why Zing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#1A1F1C] mb-10"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Not another cleaning app.
              <br />
              A building amenity.
            </motion.h2>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#2C5F4B]/8 flex items-center justify-center mt-0.5">
                    <benefit.icon
                      size={18}
                      className="text-[#2C5F4B]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4
                      className="text-[#1A1F1C] mb-1"
                      style={{ fontSize: "16px", fontWeight: 500 }}
                    >
                      {benefit.title}
                    </h4>
                    <p
                      className="text-[#6B7370]"
                      style={{ fontSize: "14.5px", lineHeight: 1.65 }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
