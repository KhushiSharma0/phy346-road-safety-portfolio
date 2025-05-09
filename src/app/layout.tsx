import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar';
import { siteTexts } from "../constants/texts";

export const metadata: Metadata = {
  title: siteTexts.siteTitle,
  description: siteTexts.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          <main>{children}</main>
      </body>
    </html>
  );
}
