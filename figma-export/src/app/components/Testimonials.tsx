import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I used to spend my entire Sunday cleaning. Now I order a bathroom refresh and floor mop while I'm at brunch. Game changer.",
    name: "Sarah M.",
    building: "The Meridian, Austin",
    rating: 5,
  },
  {
    quote:
      "Having a dedicated cleaner in our building feels like living in a hotel. The convenience is unreal — and the prices are so reasonable.",
    name: "James K.",
    building: "Park & Main, Denver",
    rating: 5,
  },
  {
    quote:
      "I was skeptical at first, but after my first clothes folding order I was hooked. $12 to come home to a perfectly organized closet? Yes please.",
    name: "Priya R.",
    building: "The Lofts at 5th, Nashville",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#111211]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[#C8956C] tracking-[0.25em] uppercase mb-4"
            style={{ fontSize: "12px" }}
          >
            What Residents Say
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.2,
              fontWeight: 400,
            }}
          >
            The reviews speak
            <br />
            for themselves
          </motion.h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl p-7"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#C8956C] fill-[#C8956C]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-white/80 mb-6"
                style={{ fontSize: "15px", lineHeight: 1.7 }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p
                  className="text-white"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  {testimonial.name}
                </p>
                <p className="text-white/40" style={{ fontSize: "13px" }}>
                  {testimonial.building}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
