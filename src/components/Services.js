'use client';

import { useEffect, useRef, useState } from 'react';

export default function ServicesSection() {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  // تنظیمات کارت و گروه بندی دات‌ها
  const cardWidth = 450; // عرض حدودی هر کارت
  const groupSize = 2; // چند کارت در هر گروه؟


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

 
 const totalDots = Math.ceil(services.length / groupSize);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const index = Math.round(scrollLeft / (cardWidth * groupSize));
    setActiveDot(index);
  };

  // Mouse drag scroll
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => (isDown = false);
  const handleMouseUp = () => (isDown = false);

  const handleMouseMove = (e) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
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
        <div className="container flex gap-6 sm:gap-8 md:gap-10 w-max">
          {services.map((service, idx) => {
            const isActive = activeIndex === idx;
            return (
              <article
                key={idx}
                onClick={() => handleClick(idx)}
                className="relative w-64 sm:w-80 md:w-[400px] lg:w-[440px] h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] bg-gray-900 rounded-xl overflow-hidden group shrink-0 cursor-pointer select-none"
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
                  className={`absolute inset-0 z-20 text-l text-justify text-left sm:text-xs md:text-xl text-gray-200 transition-opacity duration-300 px-3 py-8 flex items-center justify-center text-center leading-relaxed ${
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
        {[...Array(totalDots)].map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeDot === i ? 'bg-white scale-110' : 'bg-gray-500 opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
