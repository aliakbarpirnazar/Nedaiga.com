'use client';

import { useEffect, useRef, useState } from 'react';

export default function ServicesSection() {
  const scrollRef = useRef(null);
  const trackRef  = useRef(null);

  const [activeDot, setActiveDot] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [totalDots, setTotalDots] = useState(1);

  // درگ
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);


  const services = [
    {
      title: "Strategic Business Consulting",
      img: "/service1.webp",
      desc: "At NEDA Group, we empower businesses to design smarter growth strategies. From market entry planning to operational optimisation, we deliver tailored, data-driven solutions aligned with each client’s unique goals. Our consulting services help companies navigate competitive industries like energy, mining, and renewables with confidence and precision."
    },
    {
      title: "Advanced Financial Planning & Modelling",
      img: "/service2.webp",
      desc: "We offer expert financial advisory services, including budget development, cash flow management, and long-term investment strategies. Our team creates robust financial models that ensure sustainable growth, enhance decision-making, and strengthen competitive positioning — particularly valuable for growing or emerging businesses."
    },
    {
      title: "Specialized Legal Advisory",
      img: "/service3.webp",
      desc: "Our legal experts provide end-to-end support, covering regulatory compliance, high-stakes contract drafting and negotiation, risk management, and dispute resolution. With deep sector knowledge, especially in energy and industrial fields, we help clients navigate complex legal landscapes and safeguard their operations."
    },
    {
      title: "Comprehensive Claims Management",
      img: "/service4.webp",
      desc: "We manage the entire claims process, from initial assessment to final resolution. Whether dealing with construction disputes, insurance claims, or contract-related issues, we deliver structured, efficient solutions that achieve fair, timely, and cost-effective outcomes — reducing stress and legal exposure for our clients."
    },
    {
      title: "Expert Contract & Procedure Drafting",
      img: "/service5.webp",
      desc: "Our team develops precise, well-structured contracts and standard operating procedures (SOPs) that protect businesses from legal and operational risks. These documents — from service agreements to NDAs and operational guidelines — are crafted to align with both local and international legal frameworks, ensuring operational excellence."
    },
    {
      title: "E&P Industry Support Services",
      img: "/service6.webp",
      desc: "For exploration and production (E&P) companies, we offer specialised services including feasibility studies, gap analyses, operational setup, regulatory guidance, and technology integration. Our deep understanding of technical and compliance challenges allows E&P companies to operate efficiently and confidently, even in highly regulated environments."
    },
    {
      title: "Business Transformation & Organizational Development",
      img: "/service1.webp",
      desc: "We assist companies undergoing large-scale change, helping redesign business models, restructure governance, and align strategic objectives with operational capabilities. Our support enables organisations to successfully navigate transformation and unlock new growth opportunities"
    },
    {
      title: "Academic & Expert Training Engagements",
      img: "/service2.webp",
      desc: "Identify, assess, and minimize business risks through expert training."
    },
  ];
  
  
  
  // بدون اتکا به state محاسبه کن
  const calcPages = (el) => Math.ceil(el.scrollWidth / el.clientWidth) || 1;
  const calcIndex = (el) => Math.round(el.scrollLeft / el.clientWidth);

  const measure = () => {
    const el = scrollRef.current;
    if (!el) return;
    const pages = calcPages(el);
    setTotalDots(pages);
    const idx = calcIndex(el);
    setActiveDot(Math.max(0, Math.min(idx, pages - 1)));
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const pages = calcPages(el);       // ← از DOM بگیر، نه از state
    const idx = calcIndex(el);
    const clamped = Math.max(0, Math.min(idx, pages - 1));
    setActiveDot((prev) => (prev === clamped ? prev : clamped));
  };

  // درگ با ماوس
  const handleMouseDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    isDownRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollStartRef.current = el.scrollLeft;
  };
  const handleMouseLeave = () => { isDownRef.current = false; };
  const handleMouseUp = () => { isDownRef.current = false; };
  const handleMouseMove = (e) => {
    const el = scrollRef.current;
    if (!el || !isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    el.scrollLeft = scrollStartRef.current - walk;
  };

  const handleCardClick = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const goToDot = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onResize = () => {
      measure();
      handleScroll();
    };

    measure();
    handleScroll();

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // بعد از لود شدن تصاویر هم دوباره
    const imgs = trackRef.current?.querySelectorAll('img') || [];
    const imgListeners = [];
    imgs.forEach((img) => {
      if (!img.complete) {
        const fn = () => { measure(); handleScroll(); };
        img.addEventListener('load', fn);
        imgListeners.push({ img, fn });
      }
    });

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => { measure(); handleScroll(); });
      ro.observe(scrollRef.current);
      trackRef.current && ro.observe(trackRef.current);
    }

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', onResize);
      imgListeners.forEach(({ img, fn }) => img.removeEventListener('load', fn));
      ro?.disconnect();
    };
  }, []);

  return (
    <section className="px-4 sm:px-8 py-4 bg-black rounded-md text-white">
      <h2 className="text-xl sm:text-xl font-bold mb-8">Our Services</h2>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
      >
        <div ref={trackRef} className="container flex gap-6 sm:gap-8 md:gap-10 w-max">
         {services.map((service, idx) => {
            const isActive = activeIndex === idx;
            return (
              <article
                key={idx}
                 onClick={() => handleCardClick(idx)}
                className="relative w-64 h-[220px]  md:w-[200px] md:h-[320px] lg:w-[340px] lg:h-[360px]  sm:h-[280px] sm:w-80   bg-gray-900 rounded-xl overflow-hidden group shrink-0 cursor-pointer select-none"
              >
                <img
                  src={service.img}
                  alt={`${service.title} service image`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    isActive ? 'opacity-60' : 'opacity-20 group-hover:opacity-80'
                  }`}
                />
                <div
                  className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                    isActive ? 'opacity-0' : 'group-hover:opacity-0 opacity-100'
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center px-4">
                    {service.title}
                  </h3>
                </div>
                <div
                  className={`absolute inset-0 z-20 text-left text-[11px]  lg:text-[16px] md:text-[16px] sm:text-[16px] text-gray-200 transition-opacity duration-300 px-3 py-8 flex items-center justify-center text-center leading-relaxed ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <p className="max-w-[90%] sm:max-w-[80%]">
                    {service.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Scroll dots */}
      <div className="mt-3 flex justify-center gap-2">
          {Array.from({ length: totalDots }).map((_, i) => (
          <span
            key={i}
             onClick={() => goToDot(i)}
             aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeDot === i ? 'bg-white scale-110' : 'bg-gray-500 opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
