"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(".contact-form-wrapper", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".contact-form-wrapper",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(".contact-info-item", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(".hours-item", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".hours-list",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise(r => setTimeout(r, 1500));
    setFormState("success");
    formRef.current?.reset();
    setTimeout(() => setFormState("idle"), 5000);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative section-padding bg-ink">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mint/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-coral/10 rounded-full blur-[200px]" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%230D9488' fillOpacity='0.05'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-max">
        <div className="contact-header text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-semibold mb-6">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Ready for Your
            <br />
            <span className="text-mint">Best Smile?</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Book online in 60 seconds or call us directly. Same-day emergencies welcome.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Booking Form */}
          <div className="contact-form-wrapper relative">
            <div className="card bg-slate/50 border-slate-700/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-mint/5 via-transparent to-coral/5" />
              
              {formState === "success" ? (
                <div className="relative z-10 text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mint/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-2">Request Sent!</h3>
                  <p className="text-slate-300 mb-6">We'll call you within 15 minutes to confirm your appointment.</p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="btn-secondary"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint/50 focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint/50 focus:border-transparent transition-all"
                        placeholder="(905) 555-0199"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint/50 focus:border-transparent transition-all"
                        placeholder="john@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-mint/50 focus:border-transparent transition-all appearance-none bg-no-repeat bg-right pr-10"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748B' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                      >
                        <option value="">Select a service</option>
                        <option value="checkup">Comprehensive Checkup</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="ortho">Invisalign / Braces</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="pediatric">Pediatric / Family</option>
                        <option value="implants">Implants / Restorative</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Notes / Preferred Time</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-mint/50 focus:border-transparent transition-all resize-none"
                      placeholder="Any specific concerns? Preferred days/times? Emergency details?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn-primary w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Booking...
                      </>
                    ) : (
                      <>
                        Book Appointment — Free Consultation
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 text-center">By submitting, you agree to be contacted via phone/email. No spam. Ever.</p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div className="contact-info space-y-6">
              <div className="contact-info-item flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center text-mint flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-slate-300">123 Rymal Rd E, Hamilton, ON L9B 1B9</p>
                  <a href="https://maps.google.com/?q=123+Rymal+Rd+E+Hamilton+ON" target="_blank" rel="noopener" className="text-mint text-sm font-medium inline-flex items-center gap-1 mt-2 hover:text-mint-light transition-colors">
                    Get Directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="contact-info-item flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center text-mint flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <a href="tel:+19055550199" className="text-slate-300 hover:text-mint transition-colors">(905) 555-0199</a>
                  <p className="text-slate-500 text-sm mt-1">Emergency line available after hours</p>
                </div>
              </div>

              <div className="contact-info-item flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center text-mint flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:support@rymalgagedental.ca" className="text-slate-300 hover:text-mint transition-colors">support@rymalgagedental.ca</a>
                  <p className="text-slate-500 text-sm mt-1">We respond within 2 hours</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-display text-xl font-semibold text-white mb-4">Hours</h4>
              <div className="hours-list space-y-3">
                {[
                  { days: "Mon – Thu", hours: "9:00 AM – 2:00 PM" },
                  { days: "Fri – Sat", hours: "9:00 AM – 1:00 PM" },
                  { days: "Sun", hours: "Closed (Emergencies Only)" }
                ].map((item, i) => (
                  <div key={i} className="hours-item flex justify-between items-center py-3 px-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <span className="font-medium text-slate-100">{item.days}</span>
                    <span className="text-slate-300">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
