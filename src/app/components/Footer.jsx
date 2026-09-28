import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.png";
const Footer = () => {
  return (
    <footer className="mt-20 py-8 border-t border-white/10 bg-[#0b0c10]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 sm:flex-row sm:justify-between sm:gap-4 sm:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={22} height={22} />
          <span className="text-sm font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
