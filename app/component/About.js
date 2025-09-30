import Image from "next/image";


export default function About() {
  return (
    <section className="bg-amber-100 min-h-screen mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 fade-in-up">
        {/* Left: About Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            <span className="text-amber-400">🏢 About Pakistani Trading Agencies</span>
          </h1>
          <p className="mb-4 text-lg">
            At Pakistani Trading Agencies, we take pride in being a leading and trusted supplier of supreme-quality laboratory equipment, diagnostic kits, and scientific reagents across Pakistan.
          </p>
          <p className="mb-4 text-base">
            Since 2008, with years of dedication and experience in the lab and diagnostic industry, our mission is simple:
          </p>
          <p className="mb-4 text-base italic">
            To deliver world-class lab solutions that ensure accuracy, reliability, and performance.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">💎 What Sets Us Apart</h2>
          <ul className="list-disc list-inside mb-4 text-base">
            <li><b>Supreme Quality Products</b><br/>Every kit, reagent, and instrument we supply undergoes strict quality control, sourced only from globally recognized manufacturers.</li>
            <li><b>Complete Lab Solutions</b><br/>From TECOM 6030 Hematology Analyzers to Spectrum diagnostic kits, lyse, diluent, cleaners, and precision pipettes — we provide everything a professional laboratory needs to operate efficiently.</li>
            <li><b>Trusted by Experts</b><br/>Our products are used by reputable hospitals, diagnostic labs, medical colleges, and scientific researchers throughout the country.</li>
            <li><b>Unmatched Customer Service</b><br/>We don’t just sell — we support. Our dedicated team ensures timely delivery, expert guidance, and after-sales assistance to keep your operations running smoothly.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">🔬 Our Promise</h2>
          <ul className="list-disc list-inside text-base">
            <li>Supreme-grade instruments and consumables</li>
            <li>Competitive pricing without compromising quality</li>
            <li>Long-term partnerships built on trust, service, and satisfaction</li>
          </ul>
          <p className="mt-6 text-base font-semibold">
            Choose Pakistani Trading Agencies — where quality meets commitment.
          </p>
        </div>
        {/* Right: Images */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-lg w-full">
          <h2 className="text-xl font-semibold mb-4">Certificate of PTA</h2>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="col-span-2">
              <Image
                src="/cer.png"
                alt="PTA Certificate"
                width={500}
                height={300}
                className="rounded-xl shadow-lg object-cover w-full h-auto fade-in"
                priority
              />
            </div>
            <div>
              <Image
                src="/cet.png"
                alt="PTA Certificate"
                width={250}
                height={250}
                className="rounded-xl shadow-lg object-cover w-full h-auto fade-in animation-delay-300"
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/ci.png"
                alt="Diagnostic kit"
                width={250}
                height={250}
                className="rounded-xl shadow-lg object-cover w-full h-auto fade-in animation-delay-600"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 