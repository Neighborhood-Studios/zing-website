import { motion } from "motion/react";
import { Smartphone, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Choose your tasks",
    description:
      "Browse our menu of bite-sized cleaning services and pick exactly what you need — from a bathroom refresh to freshly folded clothes.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Pick your time",
    description:
      "Select a time that works for you. Our cleaners are already in your building, so availability is flexible and fast.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Enjoy the clean",
    description:
      "Your dedicated building cleaner handles the rest. Come home to a spotless space — every single time.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#FAFAF7]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[#C8956C] tracking-[0.25em] uppercase mb-4"
            style={{ fontSize: "12px" }}
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1F1C]"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.2,
              fontWeight: 400,
            }}
          >
            Cleaning so simple,
            <br />
            it feels like magic
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Icon container */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2C5F4B]/8 mb-6">
                <step.icon size={24} className="text-[#2C5F4B]" strokeWidth={1.5} />
              </div>

              {/* Step number */}
              <p
                className="text-[#C8956C] tracking-[0.2em] mb-3"
                style={{ fontSize: "12px" }}
              >
                STEP {step.number}
              </p>

              {/* Title */}
              <h3
                className="text-[#1A1F1C] mb-3"
                style={{ fontSize: "20px", fontWeight: 500 }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#6B7370] max-w-xs mx-auto"
                style={{ fontSize: "15px", lineHeight: 1.7 }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
