import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PHY346 Road Safety Dashboard",
  description: "Analyze school routes, collisions, and safety insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          <div className="bg-red-500 text-white p-10">
            <h1 className="text-4xl font-bold">Test Block</h1>
            <p>This block should have a red background and white text.</p>
          </div>
          <main>{children}</main>
      </body>
    </html>
  );
}
