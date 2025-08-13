import { Linkedin, Phone } from "lucide-react";
import Image from "next/image";

export default function FooterWith() {
  return (
    <footer className="bg-[#f8f1f1]  text-[#686868] py-3 px-4 font-sans text-sm border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
           {/* اطلاعات تماس */}
        <div className="flex flex-col items-start space-y-2">
          <h2 className="font-semibold text-base">Contact Info:</h2>
          <address className="not-italic text-[#686868] space-y-1 text-sm">
            <p>
              Email:{" "}
              <a
                href="mailto:info@nedaiga.com"
                className="underline"
                aria-label="Send email to info@nedaiga.com"
              >
                info@nedaiga.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+982188945309"
                className="underline"
                aria-label="Call phone number +98 21 88945309"
              >
                +98 21 88945309
              </a>
            </p>
            <p>
              Whatsapp:{" "}
              <a
                href="https://wa.me/989126503974"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                aria-label="Chat on WhatsApp with +98 912 650 3974"
              >
                +98 912 650 3974
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/aye-katebi/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                aria-label="Visit LinkedIn profile of Dr. Aye Katebei"
              >
                Aye Katebei — Founder of company
              </a>
            </p>
          </address>

          {/* آیکون‌ها */}
          <div className="flex gap-4 pt-1 text-[#686868]">
            <a
              href="https://wa.me/989126503974"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              aria-label="WhatsApp chat with +98 912 650 3974"
            >
              <Phone size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/aye-katebi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn profile of Dr. Aye Katebei"
            >
              <Linkedin size={19} />
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-2">Designed by Pirnazar</p>
        </div>
        
        {/* لوگو و توضیح */}
        <div className="flex flex-col items-start space-y-2">
          <Image
            src="/Neda_logo-Gray.webp" 
            alt="Neda Group Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <p className="text-xs text-[#686868] max-w-xs">
           Neda Internatinal Group of Advisors 
          </p>
           <p className="text-xs text-[#686868] max-w-xs">
            گروه مشاوران بین الملل ندا
          </p>
        </div>

     
      </div>
    </footer>
  );
}
