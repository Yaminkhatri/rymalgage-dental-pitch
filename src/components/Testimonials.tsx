"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Best dental experience of my life. Dr. Patel and team made my root canal completely painless. The technology they use is incredible — I watched my own X-rays on the ceiling screen!",
    author: "Rebecca G.",
    role: "Patient since 2019",
    avatar: "RG",
    rating: 5
  },
  {
    quote: "My kids actually ask when they can go back to the dentist. The pediatric team is magical — they turned a cavity filling into an adventure. Zero tears, lots of stickers.",
    author: "Sruti M. James",
    role: "Mom of 3",
    avatar: "SM",
    rating: 5
  },
  {
    quote: "Same-day emergency on a Saturday when I cracked a tooth eating ice. They saw me within 2 hours, fixed it permanently, and I was back to work Monday. Unreal service.",
    author: "Dean M.",
    role: "Patient since 2021",
    avatar: "DM",
    rating: 5
  },
  {
    quote: "Invisalign changed my confidence completely. 14 months, virtually invisible, and the payment plan made it zero stress. My only regret is not doing it sooner.",
    author: "Amanda K.",
    role: "Invisalign graduate",
    avatar: "AK",
    rating: 5
  },
  {
    quote: "I've been terrified of dentists for 30 years. The team here listened, never judged, and offered nitrous oxide. First cleaning in a decade — zero anxiety. Thank you.",
    author: "Robert T.",
    role: "Patient since 2023",
    avatar: "RT",
    rating: 5
  },
  {
    quote: "My whole family goes here — grandparents to toddler. They remember every detail, every preference. That personal touch is rare. Hamilton's best, hands down.",
    author: "The Chen Family",
    role: "4 generations of patients",
    avatar: "CF",
    rating: 5
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-header > *", {
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

      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".testimonials-track",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) diff > 0 ? prevSlide() : nextSlide();
  };

  return (
    <section ref={sectionRef} id="testimonials" className="relative section-padding bg-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-mint/5 via-transparent to-coral/5 rounded-full blur-[300px]" />
      </div>

      <div className="container-max">
        <div className="testimonials-header text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint text-sm font-semibold mb-6">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-tight mb-6">
            527+ Five-Star Reviews
            <br />
            <span className="text-mint">And Counting</span>
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Real patients. Real results. Read why Hamilton trusts us with their smiles.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div
              ref={trackRef}
              className="testimonials-track flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <article key={index} className="testimonial-card w-full flex-shrink-0 px-4">
                  <div className="card h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-coral fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl lg:text-2xl text-ink leading-relaxed mb-8 font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mint to-mint-light flex items-center justify-center text-white font-semibold text-lg">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-ink">{testimonial.author}</div>
                        <div className="text-sm text-text-muted">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-10" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-mint w-8" : "bg-border hover:bg-mint/50"
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-border text-text-muted hover:bg-mint hover:text-white hover:border-mint transition-all duration-300 shadow-soft"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-border text-text-muted hover:bg-mint hover:text-white hover:border-mint transition-all duration-300 shadow-soft"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Google Reviews badge */}
        <div className="mt-16 text-center">
          <a href="https://g.page/r/CX1234567890/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-mint/5 border border-mint/20 hover:bg-mint/10 transition-all duration-300">
            <svg className="w-8 h-8 text-mint" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-semibold text-ink">Read 527+ reviews on Google →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
