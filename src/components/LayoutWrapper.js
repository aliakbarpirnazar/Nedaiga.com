"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, cloneElement } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/app/page";
import FooterWith from "./FooterWith";

export default function LayoutWrapper({ children }) {
 const pathname = usePathname();
  const showSimpleFooter = pathname === "/" || pathname === "/Founders-message/";
  const isHomePage = pathname === "/";
  const sectionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showSmallLogo, setShowSmallLogo] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isHomePage) {
      setShowSmallLogo(true);
      return;
    }else{
      setShowSmallLogo(false);
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      setShowSmallLogo(top <= 0);
    };

    handleScroll(); 

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <>
      <Header
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        showSmallLogo={showSmallLogo}
      />

      <main className="pt-20 min-h-[calc(100vh-212px)]">
        
        
        {isHomePage
          ? (<Home  toggleMenu={toggleMenu} showSmallLogo={showSmallLogo}  sectionRef={sectionRef} /> )
          : children}
      </main>

      {showSimpleFooter ? <Footer /> : <FooterWith />}

      {/* <Footer /> */}
    </>
  );
}
