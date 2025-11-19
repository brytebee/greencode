import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative group">
      {/* Dark slate background */}
      <div className="relative w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center shadow-2xl shadow-green-500/40 group-hover:shadow-green-400/60 transition-all duration-300 group-hover:scale-105 border border-green-400/30">
        <Image
          src="/greencode-logo.png"
          alt="GreenCode logo"
          width={36}
          height={36}
          className="object-contain filter brightness-110"
        />
      </div>
    </div>
  );
}
