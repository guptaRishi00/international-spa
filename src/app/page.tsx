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

const CONTACT_NUMBER = "918296962786";
const DISPLAY_PHONE = "+91 82969 62786";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Sunday the Spa, I would like to book a session.",
);
const WHATSAPP_URL = `https://wa.me/${CONTACT_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FloatingCTA = () => {
  // Ensure these constants are defined in your file or passed as props
  const CONTACT_NUMBER = "918296962786";
  const WHATSAPP_URL = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(
    "Hello Sunday the Spa, I would like to book a session.",
  )}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100]">
      {/* Call Button */}
      <motion.a
        href={`tel:+${CONTACT_NUMBER}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="bg-white text-emerald-950 p-4 rounded-full shadow-2xl border border-emerald-100 flex items-center justify-center"
      >
        <Phone size={24} />
      </motion.a>

      {/* Real WhatsApp Button */}
      <div className="relative group">
        <motion.button
          onClick={() => window.open(WHATSAPP_URL, "_blank")}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.554 4.197 1.606 6.023L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.631 0 12.026-5.391 12.03-12.024a11.812 11.812 0 00-3.517-8.482z" />
          </svg>
        </motion.button>
        {/* Custom Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-emerald-950 text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Us
        </span>
      </div>
    </div>
  );
};

// --- Sophisticated Background Elements ---
const AmbientBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-100/30 blur-[120px]" />
    <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-amber-100/20 blur-[100px]" />
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-[0.03] contrast-150" />
  </div>
);

// --- Refined Section Heading ---
// Update this component in your src/app/page.tsx
const SectionHeading = ({
  sub,
  title,
  description,
  align = "center",
  isLight = false,
}: any) => (
  <div
    className={`mb-20 ${align === "center" ? "text-center" : "text-left"
      } max-w-3xl ${align === "center" ? "mx-auto" : ""}`}
  >
    <motion.span
      initial={{ opacity: 0, letterSpacing: "0.1em" }}
      whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
      className={`${isLight ? "text-amber-200" : "text-emerald-800"} font-semibold uppercase text-[10px] mb-4 block`}
    >
      {sub}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`text-5xl md:text-6xl font-serif ${isLight ? "text-white" : "text-emerald-950"} mb-6 leading-[1.1]`}
    >
      {title}
    </motion.h2>
    {description && (
      <p
        className={`${isLight ? "text-stone-300" : "text-stone-500"} font-light text-lg italic`}
      >
        {description}
      </p>
    )}
    <div
      className={`h-[1px] w-24 bg-amber-400/50 mt-8 ${align === "center" ? "mx-auto" : ""
        }`}
    />
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Updated details for calling
  const phoneNumber = "918296962786";
  const displayPhone = "+91 82969 62786";
  const callUrl = `tel:+${phoneNumber}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? "py-4" : "py-8"
        }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex justify-between items-center rounded-full transition-all duration-500 px-8 ${scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg border border-white/20 py-3"
            : "py-0"
            }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`text-2xl font-serif tracking-tighter font-bold ${scrolled ? "text-emerald-950" : "text-white"
                }`}
            >
              SUNDAY The Spa
            </span>
            {/* <div
              className={`w-[1px] h-4 ${
                scrolled ? "bg-emerald-900/20" : "bg-white/20"
              }`}
            /> */}
            {/* <span
              className={`text-[10px] uppercase tracking-[0.3em] font-medium ${
                scrolled ? "text-emerald-800" : "text-stone-200"
              }`}
            >
              The Spa
            </span> */}
          </div>

          <div className="hidden md:flex items-center gap-12">
            {/* Number Display */}

            {/* Call Us Button */}
            <a
              href={callUrl}
              className="bg-emerald-950 text-amber-200 cursor-pointer px-8 py-3 rounded-full text-[12px] uppercase font-bold tracking-widest flex items-center gap-2 hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-950/10"
            >
              <Phone size={14} />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// src/app/page.tsx

const BookingPopup = ({
  isOpen,
  onClose,
  tracking,
}: {
  isOpen: boolean;
  onClose: () => void;
  tracking: any;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwauNJApMDduZWEBzATK2WWRgfkWFK3kedFlYdY3NhKtSmNOdeiR2NHQDHlBY3Y0ORxWw/exec";
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setIsSuccess(true);
      form.reset();
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Submission Error:", error);
      alert(
        "There was an issue sending your inquiry. Please contact us via WhatsApp directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-emerald-950/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden shadow-2xl p-8 md:p-12 max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-stone-400 hover:text-emerald-950 transition-colors"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif text-emerald-950">
                  Request Sent
                </h3>
                <p className="text-stone-500">
                  Thank you for choosing Sunday the Spa. Our concierge will
                  reach out to you within 15 minutes to confirm your slot.
                </p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <h3 className="text-3xl font-serif text-emerald-950">
                    Book Massage Starting at ₹1,799
                  </h3>
                  <div className="h-[1px] w-12 bg-amber-400/50 mt-3" />
                </div>

                {/* Hidden Tracking Fields */}
                <input type="hidden" name="gclid" value={tracking.gclid} />
                <input
                  type="hidden"
                  name="utm_source"
                  value={tracking.utm_source}
                />
                <input
                  type="hidden"
                  name="utm_medium"
                  value={tracking.utm_medium}
                />
                <input
                  type="hidden"
                  name="utm_campaign"
                  value={tracking.utm_campaign}
                />
                <input
                  type="hidden"
                  name="utm_term"
                  value={tracking.utm_term}
                />
                <input
                  type="hidden"
                  name="utm_content"
                  value={tracking.utm_content}
                />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 placeholder:text-stone-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 placeholder:text-stone-300"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                      Preferred Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 cursor-pointer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                      Preferred Time
                    </label>
                    <input
                      name="time"
                      type="time"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                    Preferred Ritual
                  </label>
                  <select
                    name="ritual"
                    required
                    className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 cursor-pointer"
                  >
                    <option value="">Select an experience</option>
                    <optgroup label="Standard Services">
                      <option value="Sukoon Swedish (₹1799)">
                        Sukoon Swedish (₹1799)
                      </option>
                      <option value="Fiza Aromatherapy (₹2700)">
                        Fiza Aromatherapy (₹2700)
                      </option>
                      <option value="Mukammal Balinese (₹2800)">
                        Mukammal Balinese (₹2800)
                      </option>
                      <option value="Rooh Deep Tissue (₹2800)">
                        Rooh Deep Tissue (₹2800)
                      </option>
                      <option value="Sifar Thai Yoga (₹3200)">
                        Sifar Thai Yoga (₹3200)
                      </option>
                    </optgroup>
                    <optgroup label="Premium KAMA Ayurveda">
                      <option value="KAMA Sukoon Swedish (₹3000)">
                        KAMA Sukoon Swedish (₹3000)
                      </option>
                      <option value="KAMA Rooh Deep Tissue (₹3000)">
                        KAMA Rooh Deep Tissue (₹3000)
                      </option>
                      <option value="KAMA Mukammal Balinese (₹3000)">
                        KAMA Mukammal Balinese (₹3000)
                      </option>
                      <option value="KAMA Fiza Aromatherapy (₹3200)">
                        KAMA Fiza Aromatherapy (₹3200)
                      </option>
                    </optgroup>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full bg-emerald-950 text-amber-200 font-bold py-5 rounded-full mt-6 shadow-xl shadow-emerald-900/10 hover:bg-emerald-900 transition flex items-center justify-center gap-3 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-amber-200 border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <>
                      Send Inquiry <ArrowRight size={18} />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-[10px] text-stone-400 uppercase tracking-widest">
                  Immediate confirmation within 15 minutes
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = ({ onBookClick }: { onBookClick: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section
      id="home"
      className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-emerald-950"
    >
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        {/* Increased overlay darkness to 80% to make white text stand out */}
        <div className="absolute inset-0 bg-emerald-950/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070"
          className="w-full h-full object-cover scale-110 opacity-40" // Reduced image opacity from 70 to 40
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
            5000+ Happy Clients
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">
            Premium Spa & Massage <br />
            <span className="italic font-light text-amber-100 text-4xl md:text-7xl block mt-4">
              Starting at ₹1799
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <button
              onClick={onBookClick}
              className="group relative px-10 py-5 bg-amber-400 text-emerald-950 font-bold rounded-full overflow-hidden transition-all"
            >
              <span className="relative z-10">Book a treatment</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
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

const ServiceCard = ({
  title,
  category,
  price,
  duration,
  description,
  image,
  delay,
}: any) => {
  const whatsappUrl = `https://wa.me/918296962786?text=${encodeURIComponent(
    `Hello Sunday the Spa, I would like to book a ${title} session.`,
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex flex-col h-full hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500"
    >
      {/* 1. Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-amber-200 text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {category}
        </div>
      </div>

      {/* 2. Details */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif text-emerald-950 leading-tight flex-grow pr-4">
            {title}
          </h3>
          <div className="text-right">
            <p className="text-emerald-900 font-bold text-lg">₹{price}</p>
            <p className="text-[10px] text-stone-400 uppercase font-bold tracking-tighter">
              {duration}
            </p>
          </div>
        </div>

        <p className="text-stone-500 font-light text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        {/* 3. Book Now Button (WhatsApp Redirect) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-950 text-amber-200 text-center py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 group/btn"
        >
          <MessageCircle
            size={16}
            className="group-hover/btn:scale-110 transition-transform"
          />
          Book Now
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const standardServices = [
    {
      title: "Sukoon (Swedish Massage)",
      category: "Standard",
      duration: "45m / 1h / 1.5h",
      price: "1,800",
      description:
        "A relaxing Swedish massage designed to release muscle tension and promote overall relaxation.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
    },
    {
      title: "Fiza (Aromatherapy)",
      category: "Standard",
      duration: "1h / 1.5h",
      price: "2,700",
      description:
        "A soothing massage using essential oils to calm the mind and reduce stress levels.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    },
    {
      title: "Mukammal (Balinese Massage)",
      category: "Standard",
      duration: "1h / 1.5h",
      price: "2,800",
      description:
        "A deep, rhythmic Balinese massage that improves circulation and relieves body fatigue.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800",
    },
    {
      title: "Rooh (Deep Tissue Massage)",
      category: "Standard",
      duration: "1h / 1.5h",
      price: "2,800",
      description:
        "A targeted deep tissue massage focused on relieving chronic muscle pain and stiffness.",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800",
    },
    {
      title: "Sifar (Thai Yoga Massage)",
      category: "Standard",
      duration: "1h / 1.5h",
      price: "3,200",
      description:
        "Traditional Thai yoga massage combining assisted stretches and energy flow techniques.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800",
    },
  ];

  const premiumServices = [
    {
      title: "KAMA Sukoon (Swedish)",
      category: "Premium KAMA",
      duration: "1h / 1.5h",
      price: "3,000",
      description:
        "Premium Swedish massage using KAMA Ayurveda's signature therapeutic oils.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800",
    },
    {
      title: "KAMA Rooh (Deep Tissue)",
      category: "Premium KAMA",
      duration: "1h / 1.5h",
      price: "3,000",
      description:
        "Intensive muscle recovery treatment utilizing high-potency KAMA Ayurvedic extracts.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
    },
    {
      title: "KAMA Mukammal (Balinese)",
      category: "Premium KAMA",
      duration: "1h / 1.5h",
      price: "3,000",
      description:
        "Rhythmic Balinese ritual enhanced by the healing power of KAMA Ayurveda botanicals.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    },
    {
      title: "KAMA Fiza (Aromatherapy)",
      category: "Premium KAMA",
      duration: "1h / 1.5h",
      price: "3,200",
      description:
        "Luxury aromatherapy session with rare essential oil blends from KAMA Ayurveda.",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800",
    },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section 1: Standard Services */}
        <div className="mb-24">
          <SectionHeading
            align="left"
            sub="Essential Rituals"
            title="Massage & Therapy Services (Standard)"
            description="Our foundational treatments designed to balance the mind and restore the body."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* Section 2: Premium KAMA Services */}
        <div className="pt-24 border-t border-stone-100">
          <SectionHeading
            align="left"
            sub="Luxury Ayurveda"
            title="KAMA Ayurveda Body Treatments (Premium)"
            description="Elevated experiences using world-class botanical products for deep healing."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// src/app/page.tsx

const Footer = () => {
  const phoneNumber = "918296962786";
  const displayPhone = "+91 82969 62786";
  // Create a call URL using the tel: protocol
  const callUrl = `tel:+${phoneNumber}`;

  return (
    <footer className="bg-emerald-950 text-stone-300 py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <h2 className="text-4xl font-serif text-white mb-8 max-w-sm">
              Ready to begin your journey to serenity?
            </h2>
            <div className="flex flex-wrap gap-4">
              {/* Primary Call Action */}
              <a
                href={callUrl}
                className="bg-amber-400 text-emerald-950 px-8 py-4 rounded-full font-bold text-sm hover:bg-white transition-colors flex items-center gap-2"
              >
                <Phone size={18} />
                Call to Book
              </a>
              <div className="flex gap-2">
                <button className="p-4 border border-white/20 rounded-full hover:bg-white/5 transition">
                  <Instagram size={20} />
                </button>
                <button className="p-4 border border-white/20 rounded-full hover:bg-white/5 transition">
                  <Facebook size={20} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              H.S.R Layout
            </h4>
            <p className="text-sm leading-relaxed opacity-70">
              No. 14, 13th Cross,
              <br />
              9th Main Road, Sector 6,
              <br />
              H.S.R Layout, Bengaluru,
              <br />
              Karnataka - 560102
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Contact Us
            </h4>
            {/* Updated Clickable Phone Number to redirect to call */}
            <a href={callUrl} className="group block">
              <p className="text-lg text-amber-200 mb-2 group-hover:text-white transition-colors">
                {displayPhone}
              </p>
              <p className="text-[10px] text-amber-200/50 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Available for Calls
              </p>
            </a>
            <p className="text-sm opacity-70 underline cursor-pointer hover:text-white transition lowercase mt-6">
              sundaythespa@inaelite.in
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.1em] opacity-40">
          <p>© 2026 SUNDAY THE SPA. ALL RIGHTS RESERVED.</p>
          <p>H.S.R Layout | Bengaluru</p>
        </div>
      </div>
    </footer>
  );
};

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
              isLight={true} // This fixes the title color to white
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
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
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
                    className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? "w-8 bg-amber-400" : "w-2 bg-stone-200"
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

const BookingSection = ({ tracking }: { tracking: any }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Updated details for display
  const DISPLAY_PHONE = "+91 82969 62786";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwauNJApMDduZWEBzATK2WWRgfkWFK3kedFlYdY3NhKtSmNOdeiR2NHQDHlBY3Y0ORxWw/exec";
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setIsSuccess(true);
      form.reset();

      setTimeout(() => setIsSuccess(false), 10000);
    } catch (error) {
      console.error("Submission Error:", error);
      alert(
        "There was an issue sending your inquiry. Please contact us via WhatsApp or Phone directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
                For immediate bookings at our H.S.R Layout sanctuary, our
                concierge is available at{" "}
                <span className="text-amber-200">{DISPLAY_PHONE}</span>.
              </p>
            </div>
          </div>

          {/* Right Side: Elegant Form / Success State */}
          <div className="lg:w-1/2 bg-white p-12 lg:p-20 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 size={40} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif text-emerald-950 mb-2">
                      Request Sent
                    </h3>
                    <p className="text-stone-500 font-light">
                      Thank you for choosing Sunday the Spa. Our concierge will
                      reach out to you within 15 minutes to confirm your slot.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-emerald-900 font-bold text-xs uppercase tracking-widest underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-8"
                  onSubmit={handleSubmit}
                >
                  {/* Updated Form Header */}
                  <div className="mb-4">
                    <h3 className="text-3xl font-serif text-emerald-950">
                      Book Massage Starting at ₹1,799
                    </h3>
                    <div className="h-[1px] w-12 bg-amber-400/50 mt-3" />
                  </div>

                  {/* Hidden Tracking Fields */}
                  <input type="hidden" name="gclid" value={tracking.gclid} />
                  <input
                    type="hidden"
                    name="utm_source"
                    value={tracking.utm_source}
                  />
                  <input
                    type="hidden"
                    name="utm_medium"
                    value={tracking.utm_medium}
                  />
                  <input
                    type="hidden"
                    name="utm_campaign"
                    value={tracking.utm_campaign}
                  />
                  <input
                    type="hidden"
                    name="utm_term"
                    value={tracking.utm_term}
                  />
                  <input
                    type="hidden"
                    name="utm_content"
                    value={tracking.utm_content}
                  />

                  {/* Row 1: Name & Phone */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 placeholder:text-stone-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 placeholder:text-stone-300"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  {/* Row 2: Date & Time */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                        Preferred Date
                      </label>
                      <input
                        name="date"
                        type="date"
                        required
                        className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 cursor-pointer"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                        Preferred Time
                      </label>
                      <input
                        name="time"
                        type="time"
                        required
                        className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selection */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                      Preferred Ritual
                    </label>
                    <select
                      name="ritual"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 cursor-pointer"
                    >
                      <option value="">Select an experience</option>
                      <optgroup label="Standard Services">
                        <option value="Sukoon Swedish (₹1799)">
                          Sukoon Swedish (₹1799)
                        </option>
                        <option value="Fiza Aromatherapy (₹2700)">
                          Fiza Aromatherapy (₹2700)
                        </option>
                        <option value="Mukammal Balinese (₹2800)">
                          Mukammal Balinese (₹2800)
                        </option>
                        <option value="Rooh Deep Tissue (₹2800)">
                          Rooh Deep Tissue (₹2800)
                        </option>
                        <option value="Sifar Thai Yoga (₹3200)">
                          Sifar Thai Yoga (₹3200)
                        </option>
                      </optgroup>
                      <optgroup label="Premium KAMA Ayurveda">
                        <option value="KAMA Sukoon Swedish (₹3000)">
                          KAMA Sukoon Swedish (₹3000)
                        </option>
                        <option value="KAMA Rooh Deep Tissue (₹3000)">
                          KAMA Rooh Deep Tissue (₹3000)
                        </option>
                        <option value="KAMA Mukammal Balinese (₹3000)">
                          KAMA Mukammal Balinese (₹3000)
                        </option>
                        <option value="KAMA Fiza Aromatherapy (₹3200)">
                          KAMA Fiza Aromatherapy (₹3200)
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full bg-emerald-950 text-amber-200 font-bold py-5 rounded-full mt-6 shadow-xl shadow-emerald-900/10 hover:bg-emerald-900 transition flex items-center justify-center gap-3 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-amber-200 border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        Send Inquiry <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-[10px] text-stone-400 uppercase tracking-widest">
                    Immediate confirmation within 15 minutes
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
// --- Brands Carousel Section ---
const Brands = () => {
  const brandLogos = [
    {
      name: "Casmara",
      url: "/casmara.png",
    },
    {
      name: "Kama",
      url: "/kama.svg",
    },
    {
      name: "Kama Ayurveda",
      url: "/rica.png",
    },
    {
      name: "Babor",
      url: "/nasha.png",
    },
    {
      name: "Elemis",
      url: "ola.avif",
    },
  ];

  // Duplicate the list for seamless looping
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="py-24 bg-white border-y border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <SectionHeading
          sub="Trusted Partners"
          title="Brands"
          description="We exclusively use world-class botanical products for all our treatments."
        />
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-20 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((brand, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center w-48"
            >
              <img
                src={brand.url}
                alt={brand.name}
                className="h-8 md:h-12 w-auto object-contain transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </motion.div>

        {/* Soft Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

// --- Membership Packages Section ---
const Memberships = () => {
  const tiers = [
    {
      name: "Bronze",
      price: "5,000",
      validity: "6 Months",
      sessions: "4 Sessions",
      types: ["Aroma", "Swedish"],
      description:
        "Invigorate in our private retreat, designed to help you escape the daily hustle.",
      color: "border-orange-200 bg-orange-50/30",
      accent: "text-orange-800",
    },
    {
      name: "Silver",
      price: "6,000",
      validity: "6 Months",
      sessions: "4 Sessions",
      types: ["Aroma", "Swedish", "Balinese"],
      description:
        "The ultimate weekend experience created with treasures from around the world.",
      color: "border-stone-200 bg-stone-50/50",
      accent: "text-stone-600",
    },
    {
      name: "Gold",
      price: "10,000",
      validity: "1 Year",
      sessions: "7 Sessions",
      types: ["Aroma", "Swedish", "Balinese", "Deep Tissue"],
      description:
        "An unparalleled luxury experience that creates a category of its own.",
      color: "border-amber-200 bg-amber-50/30",
      accent: "text-amber-700",
      popular: true,
    },
    {
      name: "Platinum",
      price: "15,000",
      validity: "1 Year",
      sessions: "12 Sessions",
      types: [
        "Aroma",
        "Swedish",
        "Balinese",
        "Deep Tissue",
        "Thai Yoga",
        "Poultice",
      ],
      description:
        "The peak of pampering. Enjoy a complete suite of several soothing treatments.",
      color: "border-emerald-200 bg-emerald-50/50",
      accent: "text-emerald-800",
    },
  ];

  return (
    <section id="memberships" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          sub="Exclusive Benefits"
          title="Membership Tiers"
          description="Invest in your long-term well-being with our curated membership programs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border-2 ${tier.color} flex flex-col justify-between hover:shadow-xl transition-all duration-500`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-emerald-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Requested
                </div>
              )}

              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${tier.accent}`}
                >
                  {tier.name}
                </span>
                <div className="mt-4 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-stone-400 text-sm">₹</span>
                    <span className="text-4xl font-serif text-emerald-950">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-400 font-bold uppercase mt-1">
                    + 18% GST Extra
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-emerald-900/40" />
                    <span className="text-sm text-stone-600">
                      {tier.validity} Validity
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles size={16} className="text-emerald-900/40" />
                    <span className="text-sm font-bold text-emerald-900">
                      {tier.sessions}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-stone-200/50">
                    <p className="text-[10px] uppercase font-bold text-stone-400 tracking-wider mb-2">
                      Included Massages:
                    </p>
                    <p className="text-xs leading-relaxed text-stone-500 italic">
                      {tier.types.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-stone-400 leading-relaxed mb-6 italic">
                  "{tier.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Location & Map Section ---
const LocationSection = () => {
  const mapAddress =
    "Sunday the Spa, No. 14, 13th Cross, 9th Main Road, Sector 6, H.S.R Layout, Bengaluru";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    mapAddress,
  )}`;

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Map Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-3/5 aspect-video bg-emerald-900/10 rounded-[3rem] overflow-hidden relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000"
              alt="Map Location"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 transition-opacity duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-4 border border-emerald-900/5">
                <div className="w-12 h-12 bg-emerald-950 rounded-full flex items-center justify-center text-amber-400">
                  <MapPin size={24} />
                </div>
                <div className="text-center">
                  <p className="text-emerald-950 font-bold text-sm">
                    Find Us in Sector 6
                  </p>
                  <p className="text-stone-500 text-[10px] uppercase tracking-widest mt-1">
                    H.S.R Layout, Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text & Action */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div className="space-y-4">
              <span className="text-emerald-800 font-bold uppercase text-[10px] tracking-[0.3em]">
                The Sanctuary
              </span>
              <h2 className="text-4xl font-serif text-emerald-950">
                Visit our H.S.R Layout Branch
              </h2>
              <p className="text-stone-500 font-light leading-relaxed">
                Located in the heart of Sector 6, our sanctuary provides a quiet
                escape from the city's energy. Ample parking and a serene
                environment await you.
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white border border-stone-200 px-8 py-4 rounded-full text-emerald-950 font-bold text-xs uppercase tracking-widest hover:bg-emerald-950 hover:text-white transition-all shadow-sm"
            >
              Get Directions <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Instagram Reels Section ---
// --- Instagram Grid Component ---
const InstagramReelsGrid = () => {
  const [playingId, setPlayingId] = useState<any>(null);

  const reels = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
      views: "12.4k",
      link: "/one.mp4",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800",
      views: "8.9k",
      link: "/two.mp4",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800",
      views: "15.1k",
      link: "/three.mp4",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
      views: "10.2k",
      link: "/four.mp4",
    },
  ];

  return (
    <section className="py-32 bg-[#fdfcfb]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-emerald-800 font-bold uppercase tracking-widest text-xs mb-2">
              On Instagram
            </p>
            <h2 className="text-4xl font-serif text-stone-900">
              The Social Journal
            </h2>
            <p className="text-stone-600 mt-4">
              Moments of stillness captured at our H.S.R Layout sanctuary.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mb-10 px-6 py-2 border border-emerald-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-950 text-emerald-900 transition-all"
          >
            Follow @sundaythespa
          </a>
        </div>

        {/* Carousel on mobile, Grid on desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar max-w-6xl mx-auto">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              onClick={() => setPlayingId(reel.id)}
              className="relative min-w-[80vw] sm:min-w-[40vw] md:min-w-0 aspect-[9/16] bg-stone-200 overflow-hidden group cursor-pointer snap-center rounded-2xl md:rounded-none"
              whileHover={{ scale: 0.98 }}
            >
              {playingId === reel.id ? (
                <video
                  src={reel.link}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  playsInline
                  controls={false}
                />
              ) : (
                <>
                  <img
                    src={reel.thumbnail}
                    alt="Reel thumbnail"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Reels Icon */}
                  <div className="absolute top-4 right-4 text-white drop-shadow-md z-10">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M10 9l5 3-5 3V9z" />
                    </svg>
                  </div>

                  {/* Views */}
                  <div className="absolute bottom-4 left-4 text-white text-xs font-bold flex items-center gap-1 drop-shadow-md z-10">
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {reel.views}
                  </div>

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PromoPopup = ({
  isOpen,
  onClose,
  tracking,
}: {
  isOpen: boolean;
  onClose: () => void;
  tracking: any;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwauNJApMDduZWEBzATK2WWRgfkWFK3kedFlYdY3NhKtSmNOdeiR2NHQDHlBY3Y0ORxWw/exec";
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setIsSuccess(true);
      form.reset();
      // Close automatically after success
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Submission Error:", error);
      alert(
        "There was an issue sending your inquiry. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="no-scrollbar relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl p-8 md:p-12 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-stone-400 hover:text-emerald-950 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif text-emerald-950">
                  Request Sent
                </h3>
                <p className="text-stone-500">
                  Our concierge will reach out to you within 15 minutes to
                  confirm your slot.
                </p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-3xl font-serif text-emerald-950">
                    Book Massage Starting at ₹1,799
                  </h3>
                  <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mt-2">
                    Today only - Limited Slots Available
                  </p>
                </div>

                {/* Hidden Tracking Fields (Same as BookingSection) */}
                <input type="hidden" name="gclid" value={tracking.gclid} />
                <input
                  type="hidden"
                  name="utm_source"
                  value={tracking.utm_source}
                />
                <input
                  type="hidden"
                  name="utm_medium"
                  value={tracking.utm_medium}
                />
                <input
                  type="hidden"
                  name="utm_campaign"
                  value={tracking.utm_campaign}
                />
                <input
                  type="hidden"
                  name="utm_term"
                  value={tracking.utm_term}
                />
                <input
                  type="hidden"
                  name="utm_content"
                  value={tracking.utm_content}
                />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                      Preferred Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                      Preferred Time
                    </label>
                    <input
                      name="time"
                      type="time"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                    Preferred Ritual
                  </label>
                  <select
                    name="ritual"
                    required
                    className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950"
                  >
                    <option value="">Select an experience</option>
                    <optgroup label="Standard Services">
                      <option value="Sukoon Swedish (₹1799)">
                        Sukoon Swedish (₹1799)
                      </option>
                      <option value="Fiza Aromatherapy (₹2700)">
                        Fiza Aromatherapy (₹2700)
                      </option>
                      <option value="Mukammal Balinese (₹2800)">
                        Mukammal Balinese (₹2800)
                      </option>
                      <option value="Rooh Deep Tissue (₹2800)">
                        Rooh Deep Tissue (₹2800)
                      </option>
                      <option value="Sifar Thai Yoga (₹3200)">
                        Sifar Thai Yoga (₹3200)
                      </option>
                    </optgroup>
                    <optgroup label="Premium KAMA Ayurveda">
                      <option value="KAMA Sukoon Swedish (₹3000)">
                        KAMA Sukoon Swedish (₹3000)
                      </option>
                      <option value="KAMA Rooh Deep Tissue (₹3000)">
                        KAMA Rooh Deep Tissue (₹3000)
                      </option>
                      <option value="KAMA Mukammal Balinese (₹3000)">
                        KAMA Mukammal Balinese (₹3000)
                      </option>
                      <option value="KAMA Fiza Aromatherapy (₹3200)">
                        KAMA Fiza Aromatherapy (₹3200)
                      </option>
                    </optgroup>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-emerald-950 text-amber-200 font-bold py-5 rounded-full shadow-xl hover:bg-emerald-900 transition flex items-center justify-center gap-3"
                >
                  {isSubmitting ? "Processing..." : "Claim Offer Now"}{" "}
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  const [showPromo, setShowPromo] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [trackingData, setTrackingData] = useState({
    gclid: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  useEffect(() => {
    // Show PromoPopup after 2 seconds
    const timer = setTimeout(() => setShowPromo(true), 2000);

    // Tracking logic
    const params = new URLSearchParams(window.location.search);
    const trackingFields = [
      "gclid",
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];
    let updatedData: any = {};
    trackingFields.forEach((field) => {
      const value =
        params.get(field) || localStorage.getItem(`track_${field}`) || "";
      if (value) {
        localStorage.setItem(`track_${field}`, value);
        updatedData[field] = value;
      }
    });
    setTrackingData((prev) => ({ ...prev, ...updatedData }));

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#fdfcfb] selection:bg-emerald-200">
      {/* Both popups are included here */}
      <PromoPopup
        isOpen={showPromo}
        onClose={() => setShowPromo(false)}
        tracking={trackingData}
      />
      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tracking={trackingData}
      />

      <AmbientBackground />
      <Navbar />
      <FloatingCTA />

      {/* Pass the booking trigger to the Hero button */}
      <Hero onBookClick={() => setIsBookingOpen(true)} />

      <div className="relative z-10 bg-white">
        <Services />
        <Memberships />
      </div>

      <Brands />
      <div className="relative z-10 bg-[#fdfcfb]">
        <Philosophy />

        <InstagramReelsGrid />

        <Testimonials />
        <BookingSection tracking={trackingData} />
        <LocationSection />
        <Footer />
      </div>
    </main>
  );
}
