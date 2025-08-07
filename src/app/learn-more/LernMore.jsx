export default function LearnMorePage() {
  return (
    <div className="w-full">
      {/* عکس بالای صفحه */}
      <div className="w-full h-[380px] sm:h-[650px] md:h-[700px] lg:h-[770px] bg-no-repeat bg-cover bg-center relative">
        <img
          src="/service6.webp"
          alt="Training Programs by NEDA Group"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* سکشن توضیحی زیر عکس */}
       <section className="max-w-5xl mx-auto px-6 py-12 text-gray-200 bg-[#0f0f0f]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
          Academic Engagement & Professional Training
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-justify">
          At <strong>NEDA Group</strong>, we take pride in offering advanced, expert-led <strong>training programs</strong> rooted in decades of hands-on experience. Our team of distinguished educators and industry specialists deliver <strong>cutting-edge knowledge</strong> across the <strong>energy, natural resources, and upstream sectors</strong> — particularly in the Iranian Petroleum Contract (IPC) framework.
          <br /><br />
          Through our active participation in national and international seminars and in partnership with leading organisations like <strong>Petro Farda</strong>, we have developed and delivered numerous <strong>specialised courses</strong> tailored to the evolving needs of the upstream industry.
        </p>
      </section>
    </div>
  );
}
