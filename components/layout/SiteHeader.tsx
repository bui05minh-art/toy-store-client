"use client";

import { usePathname } from "next/navigation";

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";

export default function SiteHeader() {
  const pathname = usePathname();

  const hideHeader =
    pathname === "/login" ||
    pathname === "/register";

  if (hideHeader) {
    return null;
  }

  return (
    <>
      <Header />
      <Navbar />
    </>
  );
}