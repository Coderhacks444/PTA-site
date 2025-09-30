"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

const kitImages = [
  { src: "/ant.png", label: "Antigen Test Kit" },
  { src: "/speckits.png", label: "Spectrum Diagnostic Kit" },
  { src: "/kit.png", label: "Clinical Test Kit" },
  { src: "/kl.png", label: "Laboratory Kit" },
  { src: "/lab.png", label: "Lab Analysis Kit" },
  { src: "/cr.png", label: "Creatinine Kit" },
  { src: "/ua.png", label: "Uric Acid Kit" },
  { src: "/ami.png", label: "AMI Test Kit" },
  { src: "/crp.png", label: "CRP Test Kit" },
];

const instrumentImages = [
  { src: "/tec.png", label: "TECOM 6030 Analyzer" },
  { src: "/te.png", label: "TECOM Hematology" },
  { src: "/tcom.png", label: "TECOM Equipment" },
  { src: "/hem.png", label: "Hematology Analyzer" },
  { src: "/hamo.png", label: "Hematology Machine" },
  { src: "/m.png", label: "Medical Instrument" },
  { src: "/pip.png", label: "Precision Pipette" },
];

function ImageSlider({ images, cardBg }) {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = () => setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  const next = () => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

  return (
    <div className={`w-full flex flex-col items-center ${cardBg} rounded-lg shadow p-4 h-[420px] max-w-[420px]`}>
      <div className="relative flex items-center justify-center w-full h-[400px] transition-all duration-700">
        <Image
          src={images[index].src}
          alt={images[index].label}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          priority
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
}

export default function Kits() {
  return (
    <section className="bg-orange-200 min-h-[80vh] w-full py-12 mt-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 text-indigo-400">Kits & Instruments</h1>
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start justify-center px-4 md:px-12">
        {/* Kits Slider */}
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-6 text-amber-600 text-center md:text-left">Kits</h2>
          <ImageSlider images={kitImages} cardBg="bg-orange-300" />
        </div>
        {/* Instruments Slider */}
        <div className="flex-1 flex flex-col items-center pt-10 md:pt-0 md:pl-10">
          <h2 className="text-xl font-semibold mb-6 text-green-700 text-center md:text-left">Instruments</h2>
          <ImageSlider images={instrumentImages} cardBg="bg-amber-100" />
        </div>
      </div>
    </section>
  );
} 