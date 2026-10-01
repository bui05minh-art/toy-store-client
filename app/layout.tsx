import type { Metadata } from "next";

import "./globals.css";

import SiteHeader from "@/components/layout/SiteHeader";
import { CartProvider } from "@/components/context/CartContext";
import { AuthProvider } from "@/components/context/AuthContext";

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
      <body className="min-h-screen bg-[#f7f8fc] text-slate-900 antialiased">
        <CartProvider>
          <AuthProvider>
            <SiteHeader />

            <main>{children}</main>
          </AuthProvider>
        </CartProvider>
      </body>
    </html>
  );
}