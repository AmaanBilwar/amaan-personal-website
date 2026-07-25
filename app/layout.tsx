import type { Metadata } from "next";
import type React from "react";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "amaan",
  metadataBase: new URL("https://amaandoes.tech"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white antialiased font-serif text-black">
        <Navbar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
