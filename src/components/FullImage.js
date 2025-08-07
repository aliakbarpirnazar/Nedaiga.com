import Link from "next/link";
import Image from "next/image";

export default function FullImageSection() {
  return (
    <section className="bg-black pt-8" aria-label="Academic Engagement Section">
      <div className="container mx-auto relative w-full h-[380px] sm:h-[650px] md:h-[700px] lg:h-[770px] rounded-xl bg-no-repeat bg-cover bg-center">

     
      {/* تصویر زمینه */}
     <Image
        src="/service6.webp"
        alt="Illustration representing academic engagement"
        fill
        className="object-cover object-center"
        priority
      />

      {/* محتوای روی تصویر */}
      <div
        className="
          absolute
          text-white
          left-[40px] top-[200px] 
          sm:left-[80px] sm:top-[350px]
          md:left-[180px] md:top-[380px]
          lg:left-[280px] lg:top-[450px]
        "
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Academic Engagement
        </h2>
        <Link
          href="/learn-more"
          aria-label="Learn more about Academic Engagement"
          className="
            inline-block mt-4 text-sm sm:text-base
            border border-white px-4 py-2 rounded
            hover:bg-white hover:text-black transition
          "
        >
          Learn More
        </Link>
      </div>
       </div>
    </section>
  );
}
