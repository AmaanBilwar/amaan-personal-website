import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import type React from "react";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={cn("one-dark", "font-sans", geist.variable)}>
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
