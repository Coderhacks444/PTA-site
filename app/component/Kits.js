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

function KitSlider({ images, cardBg }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`w-full flex flex-col items-center ${cardBg} rounded-lg shadow p-2 h-[450px] md:h-[420px] max-w-[400px] md:max-w-[420px] mx-auto`}>
      <div className="relative flex items-center justify-center w-full h-[430px] md:h-[400px] transition-all duration-700">
        <Image
          src={images[index].src}
          alt={images[index].label}
          fill
          sizes="(max-width: 768px) 400px, 400px"
          priority={index === 0}
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
}

function InstrumentSlider({ images, cardBg }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`w-full flex flex-col items-center ${cardBg} rounded-lg shadow p-3 h-[350px] md:h-[420px] max-w-[320px] md:max-w-[420px] mx-auto`}>
      <div className="relative flex items-center justify-center w-full h-[320px] md:h-[400px] transition-all duration-700">
        <Image
          src={images[index].src}
          alt={images[index].label}
          fill
          sizes="(max-width: 768px) 320px, 400px"
          priority={index === 0}
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
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center justify-center px-4 md:px-12">
        {/* Kits Slider */}
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-6 text-amber-600 text-center">Kits</h2>
          <KitSlider images={kitImages} cardBg="bg-orange-300" />
        </div>
        {/* Instruments Slider */}
        <div className="flex-1 flex flex-col items-center pt-4 md:pt-0">
          <h2 className="text-xl font-semibold mb-6 text-green-700 text-center">Instruments</h2>
          <InstrumentSlider images={instrumentImages} cardBg="bg-amber-100" />
        </div>
      </div>
    </section>
  );
} 