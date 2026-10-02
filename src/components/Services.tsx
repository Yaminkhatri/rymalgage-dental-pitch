"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 4" />
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
      </svg>
    ),
    title: "Comprehensive Checkups",
    desc: "Thorough exams with digital X-rays, oral cancer screening, and personalized prevention plans.",
    features: ["Digital X-rays (90% less radiation)", "Oral cancer screening", "Gum health assessment", "Bite & jaw analysis"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 4" />
      </svg>
    ),
    title: "Professional Whitening",
    desc: "Advanced in-office and take-home systems for a dazzling smile up to 8 shades whiter.",
    features: ["In-office Zoom whitening", "Custom take-home trays", "Sensitivity-free formulas", "Results in 1 visit"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4 7h16M4 12h16M4 17h10" />
        <path d="M18 7v10" />
        <circle cx="18" cy="17" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Orthodontics & Invisalign",
    desc: "Straighten teeth discreetly with clear aligners or traditional braces for all ages.",
    features: ["Invisalign® certified", "Clear ceramic braces", "Early intervention (age 7+)", "Flexible payment plans"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <path d="M15 9l-3 3-2-2" />
      </svg>
    ),
    title: "Emergency Dental Care",
    desc: "Same-day appointments for toothaches, broken teeth, lost fillings, and dental trauma.",
    features: ["Same-day appointments", "After-hours emergency line", "Pain relief first visit", "Insurance direct billing"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Family & Pediatric",
    desc: "Gentle care for children from first tooth to teens. Positive experiences build lifelong habits.",
    features: ["First visit by age 1", "Cavity prevention & sealants", "Sports mouthguards", "Nitrous oxide available"]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 12l2 2 4-4" />
        <path d="M16 8a4 4 0 0 1 0 8" />
      </svg>
    ),
    title: "Restorative & Implants",
    desc: "Crowns, bridges, and dental implants to restore function and confidence permanently.",
    features: ["Same-day CEREC crowns", "Dental implants (3D guided)", "Implant-supported dentures", "0% financing available"]
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance
      gsap.from(".services-header > *", {
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

      // Card stagger with scroll trigger
      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Icon hover animations handled via CSS
      // Feature list stagger on card hover - handled by CSS

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-20 md:py-28 lg:py-32 bg-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mint/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-coral/5 rounded-full blur-[200px]" />
      </div>

      <div className="container-max section-padding">
        <div className="services-header text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-semibold mb-6">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-tight mb-6">
            Comprehensive Dental Care
            <br />
            <span className="text-mint">Under One Roof</span>
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            From routine cleanings to complex implant surgery — modern technology, gentle touch, transparent pricing.
          </p>
        </div>

        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card card group relative overflow-hidden"
              style={{ '--index': index }}
            >
              {/* Icon wrapper with animated background */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-mint/10 to-coral/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 rounded-xl bg-white shadow-soft flex items-center justify-center text-mint group-hover:text-white group-hover:bg-mint transition-all duration-500">
                  {service.icon}
                </div>
                {/* Floating particles on hover */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-mint/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ transform: "translate(20px, -20px)" }} />
                <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-coral/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ transform: "translate(-20px, 20px)" }} />
              </div>

              <h3 className="font-display text-xl font-semibold text-ink mb-3 group-hover:text-mint transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">{service.desc}</p>

              <ul className="space-y-3" role="list">
                {service.features.map((feature, i) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-text-muted group-hover:text-ink transition-colors duration-300 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ transitionDelay: `${(i + 1) * 50}ms` }}>
                    <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex">
            View All Services & Pricing
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
