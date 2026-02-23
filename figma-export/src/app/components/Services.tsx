import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Zing Bathroom Clean",
    price: 23,
    description:
      "Toilet, sink, mirror, shower/tub — scrubbed and gleaming. The task you dread most, done in 30 minutes.",
    image:
      "https://images.unsplash.com/photo-1655201403932-437c04a8aabd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGJhdGhyb29tJTIwd2hpdGUlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTg2NDk1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Vacuum & Floor Magic",
    price: 14,
    description:
      "Vacuuming plus a fresh mop across all hard floors. Walk barefoot with confidence again.",
    image:
      "https://images.unsplash.com/photo-1762501748150-7fd88647fc2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWN1dW0lMjBjbGVhbmluZyUyMGNhcnBldCUyMGZsb29yJTIwaG9tZXxlbnwxfHx8fDE3NzE4Njc5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Quick Tidy Up",
    price: 16,
    description:
      "A rapid declutter and surface wipe to reset your space. Perfect before guests arrive.",
    image:
      "https://images.unsplash.com/photo-1769184618473-58c1f0e294f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWR5JTIwb3JnYW5pemVkJTIwbGl2aW5nJTIwcm9vbSUyMG1pbmltYWx8ZW58MXx8fHwxNzcxODY3OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Trash & Recycling Run",
    price: 8,
    description:
      "We gather, sort, and take out all your trash and recycling. One less errand on your list.",
    image:
      "https://images.unsplash.com/photo-1605933353319-31ea576f2d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFzaCUyMGJhZ3MlMjByZWN5Y2xpbmclMjBiaW5zJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3MTg2Nzk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Balcony Cleaning",
    price: 18,
    description:
      "Sweep, wipe, and freshen up your outdoor space so it's ready for morning coffee or evening drinks.",
    image:
      "https://images.unsplash.com/photo-1756655705824-9171bf37775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGFwYXJ0bWVudCUyMGJhbGNvbnklMjBwbGFudHMlMjBvdXRkb29yfGVufDF8fHx8MTc3MTg2Nzk4OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Interior Window Cleaning",
    price: 20,
    description:
      "Streak-free interior windows that let the light pour in. You'll notice the difference instantly.",
    image:
      "https://images.unsplash.com/photo-1602613100439-193a1ab4f5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHdpbmRvdyUyMGludGVyaW9yJTIwc3VubGlnaHR8ZW58MXx8fHwxNzcxODY3OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Watering Plants",
    price: 6,
    description:
      "We water and mist all your indoor plants while you're away or just too busy. Green thumb, outsourced.",
    image:
      "https://images.unsplash.com/photo-1758273705890-204fdc2518fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmluZyUyMGluZG9vciUyMGhvdXNlcGxhbnRzJTIwZ3JlZW58ZW58MXx8fHwxNzcxODY3OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Couch & Throw Pillow Refresh",
    price: 10,
    description:
      "Cushions fluffed, throws folded, crumbs vacuumed. Your living room will feel brand new.",
    image:
      "https://images.unsplash.com/photo-1768332574559-009402477cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY291Y2glMjB0aHJvdyUyMHBpbGxvd3MlMjBsaXZpbmclMjByb29tJTIwc3R5bGVkfGVufDF8fHx8MTc3MTg2Nzk5MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Bed Linen Refresh",
    price: 14,
    description:
      "Fresh sheets, tucked corners, fluffed pillows. Climb into a perfectly made bed tonight.",
    image:
      "https://images.unsplash.com/photo-1762199904138-d163fe89540a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHdoaXRlJTIwYmVkJTIwbGluZW4lMjBzaGVldHMlMjBiZWRyb29tfGVufDF8fHx8MTc3MTg2Nzk5MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Dish Washing",
    price: 10,
    description:
      "Sink full of dishes? We'll wash, dry, and put them away. Come home to a clean kitchen.",
    image:
      "https://images.unsplash.com/photo-1596958837479-7fba2070a2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXNoaW5nJTIwZGlzaGVzJTIwa2l0Y2hlbiUyMHNpbmslMjBjbGVhbnxlbnwxfHx8fDE3NzE4Njc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Kitchen Countertop & Stovetop Shine",
    price: 18,
    description:
      "Counters, stovetop, and sink — all wiped, polished, and ready for your next creation.",
    image:
      "https://images.unsplash.com/photo-1554190797-85a5ca43f7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGtpdGNoZW4lMjBjb3VudGVyJTIwd2hpdGUlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTg2NDk1OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Microwave & Fridge Deep Clean",
    price: 22,
    description:
      "Interior shelves wiped, stains removed, and everything organized. A fresh start for your food storage.",
    image:
      "https://images.unsplash.com/photo-1737363625921-dd9e02b4c067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwcmVmcmlnZXJhdG9yJTIwb3JnYW5pemVkJTIwY2xlYW4lMjBmb29kfGVufDF8fHx8MTc3MTg2Nzk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Zing Oven Clean",
    price: 25,
    description:
      "Grease, grime, and baked-on residue — gone. A deep clean that restores your oven to like-new condition.",
    image:
      "https://images.unsplash.com/photo-1707255280298-e540809f4c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG92ZW4lMjBpbnRlcmlvciUyMGtpdGNoZW4lMjBhcHBsaWFuY2V8ZW58MXx8fHwxNzcxODY3OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Wine & Coffee Spill Treatment",
    price: 15,
    description:
      "Spot treatment for fresh or set-in stains on carpets and upholstery. Quick response, lasting results.",
    image:
      "https://images.unsplash.com/photo-1719408586812-84e0ef004e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3aW5lJTIwc3BpbGwlMjBjYXJwZXQlMjBzdGFpbiUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzE4Njc5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Zing Laundry Service",
    price: 20,
    description:
      "We wash, dry, and fold your laundry start to finish. Drop off a basket and we handle the rest.",
    image:
      "https://images.unsplash.com/photo-1724847885015-be191f1a47ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwYmFza2V0JTIwZnJlc2glMjB0b3dlbHMlMjB3aGl0ZXxlbnwxfHx8fDE3NzE4Njc5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Clothes Folding",
    price: 12,
    description:
      "Laundry sitting in a pile? We'll fold and organize it neatly. You've already done the hard part.",
    image:
      "https://images.unsplash.com/photo-1596433904747-e8b061219a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWF0bHklMjBmb2xkZWQlMjBjbG90aGVzJTIwbGF1bmRyeSUyMG1pbmltYWx8ZW58MXx8fHwxNzcxODY0OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Put Away Groceries",
    price: 10,
    description:
      "Bags on the counter? We'll sort, shelve, and organize everything in your fridge and pantry.",
    image:
      "https://images.unsplash.com/photo-1766686039986-ca29c580ef3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwYmFncyUyMHBhcGVyJTIwa2l0Y2hlbiUyMGNvdW50ZXJ8ZW58MXx8fHwxNzcxODY3OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const CARD_WIDTH = 280;
const CARD_GAP = 20;

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-500 shrink-0"
      style={{ width: CARD_WIDTH }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Price badge */}
        <div
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5"
          style={{ fontSize: "14px" }}
        >
          <span className="text-[#2C5F4B]" style={{ fontWeight: 600 }}>
            ${service.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-[#1A1F1C] mb-2"
          style={{ fontSize: "17px", fontWeight: 500 }}
        >
          {service.title}
        </h3>
        <p
          className="text-[#6B7370] mb-4"
          style={{ fontSize: "14px", lineHeight: 1.6 }}
        >
          {service.description}
        </p>
        <a
          href="#get-started"
          className="inline-flex items-center gap-1.5 text-[#2C5F4B] hover:text-[#C8956C] transition-colors"
          style={{
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          Book now
          <ArrowRight
            size={13}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}

export function Services() {
  const totalWidth = services.length * (CARD_WIDTH + CARD_GAP);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F2EFEA]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[#C8956C] tracking-[0.25em] uppercase mb-4"
            style={{ fontSize: "12px" }}
          >
            Services &amp; Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1F1C] mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.2,
              fontWeight: 400,
            }}
          >
            Pay only for what you need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B7370]"
            style={{ fontSize: "16px", lineHeight: 1.7 }}
          >
            No packages. No upsells. Just transparent, individual prices for
            every task. Mix and match to build your perfect clean.
          </motion.p>
        </div>
      </div>

      {/* Marquee carousel — full width, overflows viewport */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
      `}</style>

      <div className="overflow-hidden">
        <div
          className="flex hover:[animation-play-state:paused]"
          style={{
            gap: CARD_GAP,
            animation: `marquee-scroll ${services.length * 4}s linear infinite`,
            width: totalWidth * 2 + CARD_GAP,
          }}
        >
          {/* First set */}
          {services.map((service) => (
            <ServiceCard key={`a-${service.title}`} service={service} />
          ))}
          {/* Duplicated set for seamless loop */}
          {services.map((service) => (
            <ServiceCard key={`b-${service.title}`} service={service} />
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#6B7370] mt-12"
          style={{ fontSize: "14px" }}
        >
          17 à la carte tasks and counting — new services added regularly.
        </motion.p>
      </div>
    </section>
  );
}