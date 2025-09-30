import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function EmailPage() {
  const email = "a.gani@pakistanitradingagencies.com";
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-white py-16 px-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-8 flex items-center gap-3">
        <FaEnvelope className="text-indigo-500 text-4xl" />
        Email Us
      </h1>
      <div className="bg-blue-50 rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center gap-6">
        <p className="text-lg text-gray-700 text-center">
          For any inquiries, please email us at:
        </p>
        <a
          href={`mailto:${email}`}
          className="text-blue-700 underline hover:text-blue-900 font-mono text-xl transition flex items-center gap-2 break-all"
        >
          <FaEnvelope className="text-indigo-400 text-2xl" />
          {email}
        </a>
      </div>
      <Link href="/contact" className="mt-10 text-indigo-500 hover:underline">Back to Contact</Link>
    </section>
  );
} 