import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryblokProvider from "@/components/StoryblokProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adventure Pack - Premium Backpacks for Every Journey",
  description: "Discover our collection of premium backpacks designed for hiking, travel, and everyday adventures. Quality, durability, and style combined.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoryblokProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StoryblokProvider>
      </body>
    </html>
  );
}
