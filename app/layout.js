import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pakistani Trading Agencies",
  description: "Suppliers of lab kits, instruments, and scientific equipment in Pakistan.",
  icons: {
    icon: [
      { url: "/pk.png", sizes: "32x32", type: "image/png" },
      { url: "/pk.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/pk.png",
    apple: "/pk.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
