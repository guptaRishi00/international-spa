import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Best Spa in HSR Layout | Luxury Massage & Wellness – Sunday The Spa",
  description:
    "Looking for the best spa in HSR Layout? Experience luxury massages, certified therapists, and complete relaxation at Sunday The Spa. Book now!",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-800`}
      >
        {children}
      </body>
    </html>
  );
}
