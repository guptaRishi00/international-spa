"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Star,
  Clock,
  ShieldCheck,
  MapPin,
  Menu,
  X,
  CheckCircle2,
  Sparkles,
  Droplets,
  Heart,
  ArrowRight,
  ChevronRight,
  Instagram,
  Facebook,
  PlayCircle,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

// --- Sophisticated Background Elements ---
const AmbientBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-100/30 blur-[120px]" />
    <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-amber-100/20 blur-[100px]" />
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-[0.03] contrast-150" />
  </div>
);

// --- Refined Section Heading ---
const SectionHeading = ({ sub, title, description, align = "center" }: any) => (
  <div
    className={`mb-20 ${
      align === "center" ? "text-center" : "text-left"
    } max-w-3xl ${align === "center" ? "mx-auto" : ""}`}
  >
    <motion.span
      initial={{ opacity: 0, letterSpacing: "0.1em" }}
      whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
      className="text-emerald-800 font-semibold uppercase text-[10px] mb-4 block"
    >
      {sub}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-serif text-emerald-950 mb-6 leading-[1.1]"
    >
      {title}
    </motion.h2>
    {description && (
      <p className="text-stone-500 font-light text-lg italic">{description}</p>
    )}
    <div
      className={`h-[1px] w-24 bg-amber-400/50 mt-8 ${
        align === "center" ? "mx-auto" : ""
      }`}
    />
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex justify-between items-center rounded-full transition-all duration-500 px-8 ${
            scrolled
              ? "bg-white/70 backdrop-blur-xl shadow-lg border border-white/20 py-3"
              : "py-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`text-2xl font-serif tracking-tighter font-bold ${
                scrolled ? "text-emerald-950" : "text-white"
              }`}
            >
              EVA
            </span>
            <div
              className={`w-[1px] h-4 ${
                scrolled ? "bg-emerald-900/20" : "bg-white/20"
              }`}
            />
            <span
              className={`text-[10px] uppercase tracking-[0.3em] font-medium ${
                scrolled ? "text-emerald-800" : "text-stone-200"
              }`}
            >
              International Spa
            </span>
          </div>

          <div
            className={`hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.2em] font-bold ${
              scrolled ? "text-emerald-950" : "text-white/90"
            }`}
          >
            <button className="bg-emerald-950 text-amber-200 cursor-pointer px-8 py-3 rounded-full text-[18px] hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-950/10">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section
      id="home"
      className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-emerald-950"
    >
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-transparent to-emerald-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070"
          className="w-full h-full object-cover scale-110 opacity-70"
          alt="Luxury Spa"
        />
      </motion.div>

      <div className="container mx-auto px-6 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-amber-200 text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
            Koramangala's Premier Sanctuary
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-tight">
            The Art of <br />
            <span className="italic font-light text-amber-100">Stillness</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <button className="group relative px-10 py-5 bg-amber-400 text-emerald-950 font-bold rounded-full overflow-hidden transition-all">
              <span className="relative z-10">Explore Rituals</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="flex items-center gap-4 text-white group">
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition">
                <PlayCircle strokeWidth={1} />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">
                The Experience
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-400/50 to-transparent" />
      </div>
    </section>
  );
};

const ExperienceCard = ({ title, category, price, image, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className="group cursor-pointer"
  >
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-emerald-950/0 transition-colors duration-500" />
      <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-white text-xs font-medium mb-1 uppercase tracking-tighter">
          Starting at ₹{price}
        </p>
        <button className="text-amber-200 text-[10px] font-bold uppercase flex items-center gap-2">
          Book Now <ChevronRight size={14} />
        </button>
      </div>
    </div>
    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-2 block">
      {category}
    </span>
    <h3 className="text-2xl font-serif text-emerald-950">{title}</h3>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-32 relative">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <SectionHeading
          align="left"
          sub="Curated Therapies"
          title="Elevate Your Well-being"
          description="A collection of rituals designed to balance the mind and restore the body's natural rhythm."
        />
        <button className="mb-12 border-b border-emerald-900/20 pb-2 text-sm font-bold text-emerald-900 hover:text-amber-600 transition">
          View Menu
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <ExperienceCard
          title="Royal Thai Stretch"
          category="Flexibility"
          price="2,199"
          image="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800"
          delay={0.1}
        />
        <ExperienceCard
          title="Ethereal Aromatherapy"
          category="Relaxation"
          price="2,499"
          image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800"
          delay={0.2}
        />
        <ExperienceCard
          title="Deep Tissue Release"
          category="Recovery"
          price="2,899"
          image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800"
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-emerald-950 text-stone-300 py-24">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
          <h2 className="text-4xl font-serif text-white mb-8 max-w-sm">
            Ready to begin your journey to serenity?
          </h2>
          <div className="flex gap-4">
            <button className="bg-amber-400 text-emerald-950 px-8 py-4 rounded-full font-bold text-sm">
              Schedule Appointment
            </button>
            <button className="p-4 border border-white/20 rounded-full hover:bg-white/5 transition">
              <Instagram size={20} />
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
            The Sanctuary
          </h4>
          <p className="text-sm leading-relaxed opacity-70">
            No. 72, 1st Floor, 6th Cross Road,
            <br />
            Koramangala 5th Block, Bengaluru
            <br />
            Karnataka 560095
          </p>
        </div>
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Contact
          </h4>
          <p className="text-lg text-amber-200 mb-2">+91 88846 66814</p>
          <p className="text-sm opacity-70 underline cursor-pointer hover:text-white transition">
            hello@evaspa.in
          </p>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.1em] opacity-40">
        <p>© 2026 EVA INTERNATIONAL SPA. ALL RIGHTS RESERVED.</p>
        <p>Crafted for Excellence</p>
      </div>
    </div>
  </footer>
);

// --- 1. Philosophy / Sensory Section ---
const Philosophy = () => {
  return (
    <section className="py-32 bg-emerald-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800"
                className="w-full h-full object-cover opacity-80"
                alt="Philosophy"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-amber-400/30 rounded-2xl " />

            <div className="absolute z-20 -bottom-10 -left-10 bg-amber-400 p-8 rounded-2xl hidden md:block">
              <p className="text-emerald-950 font-serif text-3xl italic">
                "Healing begins the moment you step inside."
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <SectionHeading
              align="left"
              sub="Our Philosophy"
              title="A Sanctuary for the Five Senses"
            />

            <div className="grid gap-8">
              {[
                {
                  title: "Sound",
                  desc: "Curated binaural beats and nature soundscapes to lower cortisol.",
                  icon: "01",
                },
                {
                  title: "Scent",
                  desc: "Hand-blended oils using sustainable botanical extracts.",
                  icon: "02",
                },
                {
                  title: "Touch",
                  desc: "Therapists trained in ancient anatomical pressure techniques.",
                  icon: "03",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 border-b border-white/10 pb-8"
                >
                  <span className="text-amber-400 font-serif text-xl opacity-50">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-amber-100">
                      {item.title}
                    </h4>
                    <p className="text-stone-400 font-light leading-relaxed">
                      {item.desc}
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
};

// --- 2. Signature Rituals (Packages) ---
const SignatureRituals = () => {
  const rituals = [
    {
      name: "The Koramangala Escape",
      duration: "3 Hours",
      features: ["Full Body Scrub", "Aromatherapy", "Rejuvenating Facial"],
      price: "5,999",
      accent: "bg-emerald-900",
    },
    {
      name: "Soul of Siam Ritual",
      duration: "4 Hours",
      features: ["Thai Herbal Compress", "Deep Tissue", "Foot Reflexology"],
      price: "7,499",
      accent: "bg-amber-700",
    },
  ];

  return (
    <section id="rituals" className="py-32 bg-stone-50">
      <div className="container mx-auto px-6">
        <SectionHeading
          sub="Curated Experiences"
          title="Signature Rituals"
          description="Half-day immersive journeys designed for total transformation."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rituals.map((ritual, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] p-12 shadow-sm border border-stone-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div
                    className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${ritual.accent}`}
                  >
                    Most Loved
                  </div>
                  <span className="text-stone-400 text-sm italic">
                    {ritual.duration}
                  </span>
                </div>
                <h3 className="text-4xl font-serif text-emerald-950 mb-6">
                  {ritual.name}
                </h3>
                <ul className="space-y-4 mb-12">
                  {ritual.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-stone-600"
                    >
                      <CheckCircle2 size={16} className="text-amber-500" />
                      <span className="text-sm font-light">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-stone-50">
                <div>
                  <p className="text-[10px] text-stone-400 uppercase font-bold tracking-tighter">
                    Investment
                  </p>
                  <p className="text-2xl font-serif text-emerald-950">
                    ₹{ritual.price}
                  </p>
                </div>
                <button className="bg-emerald-950 text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-amber-500 transition-colors">
                  Inquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 3. Testimonials (The Guest Journal) ---
const testimonialsData = [
  {
    quote:
      "The attention to detail at EVA is unparalleled. From the temperature of the herbal tea to the precision of the therapy, it is the only place in Bengaluru where I can truly disconnect.",
    author: "Priya Sharma",
    role: "Creative Director, Mumbai",
  },
  {
    quote:
      "As someone who travels for work constantly, I've seen spas globally. EVA's signature Thai ritual is world-class. The therapists are incredibly skilled and intuitive.",
    author: "Vikram Mehta",
    role: "Tech Consultant, Bengaluru",
  },
  {
    quote:
      "A true hidden gem in Koramangala. The ambiance is so calming that you forget the city noise the moment you walk in. Highly recommend the Aromatherapy sessions.",
    author: "Ananya Iyer",
    role: "Wellness Blogger",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Variants for the slide animation
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-32 bg-[#fdfcfb] relative overflow-hidden">
      {/* Background Text Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-serif text-stone-100/50 -z-0 select-none pointer-events-none">
        Serenity
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading sub="Testimonials" title="Words from the Serene" />

          <div className="relative min-h-[400px] flex flex-col justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="px-6 md:px-12 py-20 bg-white shadow-xl rounded-[3rem] border border-stone-50"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-emerald-950 shadow-lg">
                  <Heart fill="currentColor" size={20} />
                </div>

                <p className="text-2xl md:text-3xl font-serif text-emerald-900 leading-relaxed italic mb-10">
                  "{testimonialsData[index].quote}"
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h5 className="font-bold text-emerald-950 tracking-widest uppercase text-xs">
                    {testimonialsData[index].author}
                  </h5>
                  <p className="text-stone-400 text-[10px] mt-1 uppercase tracking-widest">
                    {testimonialsData[index].role}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="mt-16 flex justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevStep}
                className="w-14 h-14 rounded-full border border-emerald-900/10 flex items-center justify-center hover:bg-emerald-950 hover:text-white transition-all group"
              >
                <ChevronRight
                  size={24}
                  className="rotate-180 text-emerald-900 group-hover:text-white"
                />
              </motion.button>

              <div className="flex items-center gap-2">
                {testimonialsData.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      index === i ? "w-8 bg-amber-400" : "w-2 bg-stone-200"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextStep}
                className="w-14 h-14 rounded-full border border-emerald-900/10 flex items-center justify-center hover:bg-emerald-950 hover:text-white transition-all group"
              >
                <ChevronRight
                  size={24}
                  className="text-emerald-900 group-hover:text-white"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-emerald-950 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side: Imagery & Vibe */}
          <div className="lg:w-1/2 relative p-12 lg:p-20 flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1000"
                className="w-full h-full object-cover opacity-30 grayscale"
                alt="Spa Atmosphere"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
            </div>

            <div className="relative z-10">
              <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Reservations
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Secure your <br />
                <span className="italic text-amber-100">moment of pause</span>
              </h2>
              <p className="text-emerald-100/60 font-light text-lg max-w-sm">
                For immediate bookings or special requests, our concierge is
                available via WhatsApp or Phone.
              </p>
            </div>
          </div>

          {/* Right Side: Elegant Form */}
          <div className="lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 placeholder:text-stone-300"
                    placeholder="E.g. Julianne Moore"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 placeholder:text-stone-300"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                  Preferred Ritual
                </label>
                <select className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 cursor-pointer">
                  <option>Select an experience</option>
                  <option>Royal Thai Stretch</option>
                  <option>Ethereal Aromatherapy</option>
                  <option>Deep Tissue Release</option>
                  <option>Signature Package</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-950 text-amber-200 font-bold py-5 rounded-full mt-6 shadow-xl shadow-emerald-900/10 hover:bg-emerald-900 transition flex items-center justify-center gap-3"
              >
                Send Inquiry <ArrowRight size={18} />
              </motion.button>
              <p className="text-center text-[10px] text-stone-400 uppercase tracking-widest">
                Response time: &lt; 15 minutes
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="bg-[#fdfcfb] selection:bg-emerald-200">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-[#fdfcfb]">
        {/* Features icons from previous turn */}
        <Philosophy /> {/* NEW */}
        <Services />
        <SignatureRituals /> {/* NEW */}
        <Testimonials /> {/* NEW */}
        <BookingSection />
        <Footer />
      </div>
    </main>
  );
}
