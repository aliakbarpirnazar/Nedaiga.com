export default function WhyChooseUsSection() {
  return (
    <section
      className="w-full bg-[#161616] text-left text-[#f8f1f1] px-3 pb-6 "
      aria-labelledby="why-choose-neda-heading"
    >
      <div className="max-w-4xl pt-4 space-y-10">
        {/* تیتر اصلی با id و نقش معنایی */}
        <h2
          id="why-choose-neda-heading"
          className="text-2xl sm:text-2xl md:text-4xl font-bold text-[#f8f1f1]"
        >
          Why Choose NEDA Group
        </h2>

        {/* پاراگراف معرفی با توضیح سئوپسند */}
        <p className="text-base sm:text-lg leading-relaxed text-justify sm:text-left">
          NEDA Group is a strategic partner for leading companies in the energy, renewables, mining, and industrial sectors. Discover the key reasons why organizations trust us to help them innovate, grow, and lead.
        </p>

        {/* ویژگی‌ها به صورت article معنایی */}
        <div className="space-y-8">
          {[
            {
              title: "Proven Industry Expertise",
              desc:
                "With a deep understanding of the exploration and production (E&P) landscape, we offer specialized insights and strategic guidance tailored to the unique challenges of each client.",
            },
            {
              title: "Innovative and Future-Focused Solutions",
              desc:
                "We combine advanced technologies with global best practices to transform operations, drive efficiency, and ensure our clients remain competitive in fast-evolving markets.",
            },
            {
              title: "Commitment to Excellence and Continuous Improvement",
              desc:
                "Our unwavering focus on quality means we consistently refine and adapt our services, ensuring the highest standards of delivery and measurable results.",
            },
            {
              title: "Comprehensive End-to-End Support",
              desc:
                "From initial evaluation and strategic planning to full-scale business transformation, we provide integrated services that ensure seamless execution and sustained success.",
            },
            {
              title: "Integrity and Long-Term Partnerships",
              desc:
                "We believe in building relationships based on trust, transparency, and accountability, ensuring alignment with our clients’ long-term goals.",
            },
            {
              title: "Environmental Responsibility",
              desc:
                "Sustainability is at the core of our approach. We support clients in adopting environmentally responsible practices, aligning business growth with global sustainability goals.",
            },
          ].map((item, index) => (
            <article key={index} aria-labelledby={`why-neda-${index}`}>
              <h3
                id={`why-neda-${index}`}
                className="text-xl sm:text-2xl font-semibold text-[#f8f1f1] mb-2"
              >
                {item.title}
              </h3>
              <p className="text-base text-[#f8f1f1] leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
