import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Toy Store - Thế giới đồ chơi",
  description:
    "Toy Store - Website bán đồ chơi trực tuyến dành cho trẻ em.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Header />

        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}