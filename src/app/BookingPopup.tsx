"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

interface BookingPopupProps {
    isOpen: boolean;
    onClose: () => void;
    tracking: {
        gclid: string;
        utm_source: string;
        utm_medium: string;
        utm_campaign: string;
        utm_term: string;
        utm_content: string;
    };
}

const BookingPopup = ({ isOpen, onClose, tracking }: BookingPopupProps) => {
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
                            aria-label="Close booking form"
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
                                        <label htmlFor="booking-name" className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                                            Full Name
                                        </label>
                                        <input
                                            id="booking-name"
                                            name="name"
                                            type="text"
                                            required
                                            className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 placeholder:text-stone-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="booking-phone" className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                                            Phone Number
                                        </label>
                                        <input
                                            id="booking-phone"
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
                                        <label htmlFor="popup-date" className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                                            Preferred Date
                                        </label>
                                        <input
                                            name="date"
                                            id="popup-date"
                                            type="date"
                                            required
                                            className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 cursor-pointer"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="popup-time" className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                                            Preferred Time
                                        </label>
                                        <input
                                            name="time"
                                            id="popup-time"
                                            type="time"
                                            required
                                            className="w-full border-b border-stone-200 py-3 focus:border-amber-500 outline-none transition bg-transparent text-emerald-950 cursor-pointer"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="popup-ritual-select" className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest">
                                        Preferred Ritual
                                    </label>
                                    <select
                                        name="ritual"
                                        id="popup-ritual-select"
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
            )
            }
        </AnimatePresence >
    );
};

export default BookingPopup;
