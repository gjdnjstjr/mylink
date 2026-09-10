import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "허원석 | Vibe Coder & Frontend Developer",
  description: "Imagine a Vibe Coder — Official portfolio and interactive hub of Frontend Developer Heo Wonseok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} h-full antialiased bg-[#0a0d3a]`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0d3a] text-white">{children}</body>
    </html>
  );
}
