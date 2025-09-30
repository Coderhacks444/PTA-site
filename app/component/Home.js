"use client"
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

export default function Home() {
  const textLines = useMemo(() => [
    "Welcome to Pakistani Trading Agencies.",
    "Excellent Kits for Accurate Diagnostics.",
    "Ready to Use Reagents – Fast & Reliable.",
    "Supreme Quality Machine: TECOM 6030.",
    "Hematology Machines with Trusted Results.",
    "Precision Pipettes & Accessories.",
    "Test Results You Can Trust – On Time."
  ], []);

  const [rotatingText, setRotatingText] = useState(textLines[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % textLines.length;
        setRotatingText(textLines[nextIndex]);
        return nextIndex;
      });
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval);
  }, [textLines]);

  return (
    <section className="bg-amber-200 min-h-[100vh] w-full">


      {/* Hero Heading at the very top */}
      <div className="w-full flex flex-col items-center justify-center pt-24 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-500 mb-2 drop-shadow-lg">
          Pakistani Trading Agencies
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-center text-green-700">
          Your Trusted Source for Lab Kits & Equipment
        </h2>
        <h3 className="font-bold text-center text-amber-500 mb-2 drop-shadow-lg">
          Dedicated To Outshine committed To Healthcare
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 fade-in-up">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl text-left text-gray-800">
        <h2 className=" md:text-1xl font-bold text-center text-orange-500 animate-fade">
          {rotatingText}
        </h2>
          <p className="mb-4 text-lg text-gray-800">
                    <span className="text-green-700 text-2xl">Pakistani Trading Agencies</span> is a reliable supplier of high-quality laboratory kits, instruments, and ready-to-use reagents across Pakistan. We serve diagnostic labs, hospitals, educational institutions, and research centers with trusted and affordable lab solutions.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">🔬 Lab Instruments & Machines</h2>
          <ul className="list-disc list-inside mb-4 text-base text-gray-800">
            <li><b>TECOM 6030 & Hematology Analyzer</b> – A reliable Chinese-made automatic hematology analyzer known for precision and ease of use.</li>
            <li><b>General Hematology Equipment</b> – Including centrifuges, cell counters, and compatible accessories for accurate blood analysis.</li>
            <li><b>Pipettes</b> – Manual and adjustable pipettes with precision calibration, ideal for daily lab use.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">🧫 Diagnostic Kits & Reagents</h2>
          <ul className="list-disc list-inside mb-4 text-base text-gray-800">
            <li><b>Spectrum Diagnostic Kits</b> – Trusted solutions for various biochemical and clinical tests.</li>
            <li><b>Ready-to-Use Reagents</b> – High-quality reagents that ensure consistency and accuracy in test results.</li>
            <li><b>Lyse, Diluent, and Cleaner Solutions</b> – Compatible with most hematology analyzers, these solutions ensure smooth operation and longer machine life.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">✅ Why Choose Us?</h2>
          <ul className="list-disc list-inside text-base text-gray-800">
            <li>Premium quality kits and reagents</li>
            <li>Competitive pricing and bulk availability</li>
            <li>Trusted TECOM and Spectrum solutions</li>
            <li>On-time delivery and support across Pakistan</li>
          </ul>
        </div>

        {/* Right: Images */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-lg w-full gap-6">
          <Image
            src="/speckits.png"
            alt="Lab equipment and diagnostics"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-auto float-lab-img"
            priority
          />
          <Image
            src="/tec.png"
            alt="TECOM 6030 Hematology Analyzer"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-auto float-lab-img"
          />
        </div>
      </div>
    </section>
  );
}
