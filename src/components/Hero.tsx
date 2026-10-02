"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const scrollIndicatorRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(titleRef.current, { 
        y: 60, 
        opacity: 0, 
        duration: 1.2,
        ease: "expo.out"
      })
      .from(subtitleRef.current, { 
        y: 40, 
        opacity: 0, 
        duration: 1,
        ease: "expo.out"
      }, "-=0.6")
      .from(ctaRef.current, { 
        y: 30, 
        opacity: 0, 
        duration: 0.8,
        ease: "expo.out"
      }, "-=0.5")
      .from(statsRef.current?.children || [], { 
        y: 30, 
        opacity: 0, 
        duration: 0.8,
        stagger: 0.15,
        ease: "expo.out"
      }, "-=0.4")
      .from(scrollIndicatorRef.current, { 
        opacity: 0, 
        duration: 1,
        ease: "power2.out"
      }, "-=0.3");

      // Parallax background elements
      gsap.to(".hero-bg-shape", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      // Floating animation for decorative elements
      gsap.to(".float-slow", {
        y: -20,
        rotation: 3,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      gsap.to(".float-medium", {
        y: 15,
        rotation: -2,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      gsap.to(".float-fast", {
        y: -10,
        x: 5,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      // Scroll indicator bounce
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pearl via-cream to-white" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-mint/10 rounded-full blur-[200px] hero-bg-shape float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-coral/10 rounded-full blur-[200px] hero-bg-shape float-medium" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mint/5 rounded-full blur-[300px] hero-bg-shape float-fast" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%230D9488' fillOpacity='0.03'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Floating decorative teeth/sparkles */}
      <div className="absolute top-20 left-10 w-8 h-8 text-mint/20 float-slow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 6v6l4 4" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-16 w-6 h-6 text-coral/20 float-medium" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 w-10 h-10 text-mint/15 float-fast" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>

      <div className="container-max section-padding pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/10 text-mint text-sm font-medium mb-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
            </span>
            Accepting New Patients — Same-Day Emergencies
          </div>

          <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-ink leading-[1.1] tracking-tight mb-6 text-balance">
            Hamilton's Trusted
            <br />
            <span className="text-mint">Dental Care</span>
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-coral" />
            </span>
          </h1>

          <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Decades of expertise. Gentle, modern dentistry. 500+ five-star reviews.
            <br />Same-day emergencies. Book in 60 seconds.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#contact" className="btn-primary group">
              Book Appointment
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="tel:+19055550199" className="btn-secondary hidden sm:inline-flex">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: (905) 555-0199
            </a>
          </div>

          {/* Trust stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto" role="list" aria-label="Practice statistics">
            <div className="text-center p-4" role="listitem">
              <div className="font-display text-4xl md:text-5xl font-bold text-mint mb-1" data-count="527">527+</div>
              <div className="text-text-muted text-sm font-medium">5-Star Reviews</div>
            </div>
            <div className="text-center p-4" role="listitem">
              <div className="font-display text-4xl md:text-5xl font-bold text-mint mb-1" data-count="35">35+</div>
              <div className="text-text-muted text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-center p-4" role="listitem">
              <div className="font-display text-4xl md:text-5xl font-bold text-mint mb-1" data-count="12000">12K+</div>
              <div className="text-text-muted text-sm font-medium">Happy Patients</div>
            </div>
            <div className="text-center p-4" role="listitem">
              <div className="font-display text-4xl md:text-5xl font-bold text-mint mb-1" data-count="99">99%</div>
              <div className="text-text-muted text-sm font-medium">Satisfaction Rate</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div ref={scrollIndicatorRef} className="mt-16 flex flex-col items-center gap-2 text-text-muted opacity-60" aria-hidden="true">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
