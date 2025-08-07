import Link from "next/link";
import { X, Linkedin, Phone } from "lucide-react";

export default function Header({
  showSmallLogo = true,
  isOpen,
  toggleMenu,
  closeMenu,
}) {
  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 w-full bg-black shadow-md z-50 font-sans">
        <div className="flex items-center justify-center px-6 py-4 h-16">
          {showSmallLogo && (
            <div
              data-logo-button
              onClick={toggleMenu}
              className="cursor-pointer select-none"
            >
              <img src="/logo.webp" className="h-17 w-auto object-contain" />
            </div>
          )}
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-sans">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 text-white hover:text-gray-300 cursor-pointer"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Navigation Links */}
          <nav
            className="flex flex-col gap-5 text-xl text-white font-medium text-center"
            aria-label="Primary navigation"
          >
            <Link href="/" onClick={closeMenu} title="Go to Home page">
              Home
            </Link>
            <Link
              href="/neda-academy"
              onClick={closeMenu}
              title="Go to Neda Academy page"
            >
              Neda Academy
            </Link>
            <Link
              href="/contracting-legal"
              onClick={closeMenu}
              title="Go to Contracting and Legal Advisory page"
            >
              Contracting & Legal Advisory
            </Link>
            <Link
              href="/vision-leadership"
              onClick={closeMenu}
              title="Go to Our Vision and Leadership page"
            >
              Our Vision & Leadership
            </Link>
            <Link
              href="/publications-research"
              onClick={closeMenu}
              title="Go to Publications and Research page"
            >
              Publications & Research
            </Link>
            <Link
              href="/Founders-message"
              onClick={closeMenu}
              title="Go to Publications and Research page"
            >
              Founder’s Message
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              title="Go to Publications and Research page"
            >
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="absolute bottom-8 left-6 flex gap-6">
            <a
              href="https://wa.me/989126503974"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <Phone size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/aye-katebi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
