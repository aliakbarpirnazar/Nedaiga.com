
export default function HeroSection({ sectionRef, toggleMenu }) {

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black"
      aria-label="Hero section with logo and company profile link"
    >
      <div className="container relative min-h-[calc(60vh-4rem)] mx-auto bg-black mt-[-16px] flex flex-col items-center justify-center text-white px-4 cursor-pointer">
       
       <img
          src="/logo.webp"
          alt="Logo of Neda Group of Advisors"
          onClick={toggleMenu}
          aria-label="Hero section with logo and company profile link"
          className="w-84 h-82 sm:w-226 sm:h-103 md:w-126 md:h-126 object-contain scale-up"
          />
        <a
          href="/company-profile.pdf"
          aria-label="Download Neda Group Company Profile PDF"
          download
          className="absolute left-6 bottom-4 text-sm text-gray-400 hover:text-[#38bdf8] transition-colors underline underline-offset-4"
        >
          Company Profile →
        </a>
      </div>
    </section>
  );
}
