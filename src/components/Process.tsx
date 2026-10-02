"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: "01", title: "Book Online", desc: "Pick a time that works for you. 60-second booking. No phone tag.", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  )},
  { number: "02", title: "Welcome Visit", desc: "Comprehensive exam, digital X-rays, and a personalized treatment plan.", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )},
  { number: "03", title: "Gentle Treatment", desc: "Pain-free procedures with modern anesthetic options and sedation if needed.", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 6v6l4 4" />
    </svg>
  )},
  { number: "04", title: "Healthy Smile", desc: "Walk out confident. Follow-up care, maintenance plan, and 24/7 support.", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )}
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.from(".process-header > *", {
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

      // Step cards
      gsap.from(".process-step", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".process-steps",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Connecting line animation
      gsap.from(lineRef.current, {
        strokeDashoffset: 800,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".process-steps",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Number counter animation
      gsap.utils.toArray(".step-number").forEach((el: any) => {
        gsap.from(el, {
          scale: 0,
          rotation: -180,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative section-padding bg-pearl">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-mint/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-coral/5 rounded-full blur-[200px]" />
      </div>

      <div className="container-max">
        <div className="process-header text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-semibold mb-6">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-tight mb-6">
            Four Steps to Your
            <br />
            <span className="text-mint">Best Smile</span>
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Simple, transparent, stress-free. We've removed the friction from dental care.
          </p>
        </div>

        <div className="process-steps relative">
          {/* Connecting line */}
          <svg className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 pointer-events-none" viewBox="0 0 2 600" preserveAspectRatio="none">
            <line ref={lineRef} x1="1" y1="0" x2="1" y2="600" stroke="url(#gradient-line)" strokeWidth="2" strokeDasharray="800" strokeDashoffset="800" />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0D9488" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0D9488" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="process-step relative">
                {/* Step number circle */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-16 h-16 rounded-full bg-gradient-to-br from-mint to-mint-light flex items-center justify-center text-white font-display font-bold text-2xl shadow-glow step-number">
                  {step.number}
                </div>

                {/* Card content */}
                <div className="card pt-20 text-center relative">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-mint/10 flex items-center justify-center text-mint group-hover:bg-mint group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
