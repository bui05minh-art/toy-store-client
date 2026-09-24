"use client";

import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Sparkles,
  Percent,
  Blocks,
  Car,
  Baby,
  Bot,
  Heart,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center px-4">

        {/* ================= DANH MỤC ================= */}
        <div className="group relative">
          <button
            type="button"
            className="flex items-center gap-2 rounded-t-xl bg-red-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-600"
          >
            <Menu size={19} />

            <span>Danh mục sản phẩm</span>

            <ChevronDown
              size={16}
              className="transition-transform duration-300 group-hover:rotate-180"
            />
          </button>

          {/* ================= MEGA MENU ================= */}
          <div className="invisible absolute left-0 top-full z-50 w-212.5 translate-y-3 rounded-b-2xl border border-slate-100 bg-white p-7 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

            <div className="grid grid-cols-4 gap-8">

              {/* LEGO */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500">
                    <Blocks size={19} />
                  </div>

                  <h3 className="font-bold text-slate-900">
                    LEGO
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-slate-500">
                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    LEGO City
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    LEGO Friends
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    LEGO Creator
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    LEGO Classic
                  </Link>
                </div>
              </div>

              {/* XE & MÔ HÌNH */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                    <Car size={19} />
                  </div>

                  <h3 className="font-bold text-slate-900">
                    Xe & Mô hình
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-slate-500">
                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Xe điều khiển
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Xe mô hình
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Xe cảnh sát
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Xe đua
                  </Link>
                </div>
              </div>

              {/* ROBOT */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-500">
                    <Bot size={19} />
                  </div>

                  <h3 className="font-bold text-slate-900">
                    Robot
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-slate-500">
                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Robot điều khiển
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Robot biến hình
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Robot siêu nhân
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Robot thông minh
                  </Link>
                </div>
              </div>

              {/* BÉ YÊU THÍCH */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-50 text-pink-500">
                    <Baby size={19} />
                  </div>

                  <h3 className="font-bold text-slate-900">
                    Bé yêu thích
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-slate-500">
                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Búp bê
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Gấu bông
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Đồ chơi sáng tạo
                  </Link>

                  <Link
                    href="/products"
                    className="block transition hover:translate-x-1 hover:text-red-500"
                  >
                    Đồ chơi nhà bếp
                  </Link>
                </div>
              </div>
            </div>

            {/* ================= MEGA MENU BOTTOM ================= */}
            <div className="mt-7 flex items-center justify-between rounded-2xl bg-linear-to-r from-red-50 to-yellow-50 px-6 py-5">

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg shadow-red-200">
                  <Sparkles size={21} />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Khám phá thế giới đồ chơi
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Hàng trăm sản phẩm thú vị đang chờ bé
                  </p>
                </div>
              </div>

              <Link
                href="/products"
                className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-red-500"
              >
                Xem tất cả
              </Link>
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="hidden flex-1 items-center lg:flex">

          <Link
            href="/"
            className="px-5 py-4 text-sm font-semibold text-slate-700 transition hover:text-red-500"
          >
            Trang chủ
          </Link>

          <Link
            href="/products"
            className="px-5 py-4 text-sm font-semibold text-slate-700 transition hover:text-red-500"
          >
            Sản phẩm
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-1 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:text-red-500"
          >
            Hàng mới
            <Sparkles size={14} />
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-1 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:text-red-500"
          >
            Thương hiệu
            <ChevronDown size={14} />
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-1 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:text-red-500"
          >
            Khuyến mãi
            <Percent size={14} />
          </Link>

          <Link
            href="/products"
            className="ml-1 flex items-center gap-1 rounded-full px-4 py-2 text-sm font-black text-red-500 transition hover:bg-red-50"
          >
            SALE
            <Sparkles size={14} />
          </Link>
        </div>

        {/* ================= THÀNH VIÊN ================= */}
        <div className="hidden items-center gap-2 text-xs font-medium text-slate-500 xl:flex">
          <Heart
            size={17}
            className="text-red-500"
          />

          <span>Thành viên TOY STORE</span>
        </div>
      </div>
    </nav>
  );
}