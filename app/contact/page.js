import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const ptcl = "04237355173";
  const whatsapp = "03247763344";
  const email = "a.ghani@pakistanitradingagencies.com";
  const whatsappLink = `https://wa.me/92${whatsapp.slice(1)}`;

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-white py-16 px-4">
     <h1 className="mt-10 text-3xl font-bold text-indigo-600 mb-10 top-4">
  Contact & <span className="text-amber-500">Order now</span>
</h1>
      <div className="bg-gray-100 rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6">
        {/* PTCL */}
        <div className="flex items-center gap-3 bg-blue-100 rounded-lg p-4 shadow-sm">
          <FaPhoneAlt className="text-blue-500 text-2xl" />
          <span className="font-semibold text-gray-700">PTCL:</span>
          <span className="ml-2 text-gray-900 text-lg font-mono tracking-wide">{ptcl}</span>
        </div>
        {/* WhatsApp */}
        <div className="flex items-center gap-3 bg-green-50 rounded-lg p-4 shadow-sm">
          <FaWhatsapp className="text-green-500 text-2xl" />
          <span className="font-semibold text-gray-700">WhatsApp:</span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-green-700 underline hover:text-green-900 font-mono text-lg transition"
          >
            {whatsapp} (Chat on WhatsApp)
          </a>
        </div>
        {/* Email */}
        <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4 shadow-sm">
          <FaEnvelope className="text-indigo-500 text-2xl" />
          <span className="font-semibold text-gray-700">Email:</span>
          <a
            href={`mailto:${email}`}
            className="ml-2 text-blue-700 underline hover:text-blue-900 font-mono text-lg transition break-all"
          >
            {email}
          </a>
        </div>
      </div>
      <Link href="/" className="mt-10 text-indigo-500 hover:underline">Back to Home</Link>
    </section>
  );
} 