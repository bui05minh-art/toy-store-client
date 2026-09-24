"use client";

import Link from "next/link";
import {
  Search,
  UserRound,
  Heart,
  ShoppingCart,
  Truck,
  Gift,
  ShieldCheck,
  Phone,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white">

      {/* =====================================================
          TOP BAR
      ===================================================== */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">

          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <Truck size={14} className="text-orange-400" />
              <span>Giao hàng toàn quốc</span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <ShieldCheck size={14} className="text-green-400" />
              <span>Đồ chơi chính hãng</span>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <Gift size={14} className="text-yellow-400" />
              <span>Nhiều ưu đãi hấp dẫn</span>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-xs sm:flex">
            <Phone size={14} className="text-orange-400" />
            <span>Hotline:</span>
            <span className="font-bold text-orange-400">
              1900 6868
            </span>
          </div>

        </div>
      </div>

      {/* =====================================================
          MAIN HEADER
      ===================================================== */}
      <div className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-5">

          {/* LOGO */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-2xl shadow-lg shadow-orange-200 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
              🧸
            </div>

            <div className="hidden sm:block">
              <div className="text-xl font-black tracking-tight text-slate-900">
                TOY<span className="text-orange-500">STORE</span>
              </div>

              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Thế giới đồ chơi
              </div>
            </div>
          </Link>

          {/* SEARCH */}
          <div className="flex flex-1 items-center">
            <div className="group relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm đồ chơi, LEGO, robot, búp bê..."
                className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 pl-5 pr-14 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />

              <button
                type="button"
                aria-label="Tìm kiếm"
                className="absolute right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg"
              >
                <Search size={19} />
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="hidden items-center gap-1 lg:flex">

            {/* ACCOUNT */}
            <Link
              href="/login"
              className="group flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-orange-50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-orange-100">
                <UserRound
                  size={19}
                  className="text-slate-600 group-hover:text-orange-500"
                />
              </div>

              <div className="hidden xl:block">
                <p className="text-[11px] text-slate-400">
                  Xin chào
                </p>

                <p className="text-sm font-bold text-slate-700">
                  Tài khoản
                </p>
              </div>
            </Link>

            {/* WISHLIST */}
            <Link
              href="/wishlist"
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-orange-50"
              aria-label="Yêu thích"
            >
              <Heart
                size={21}
                className="text-slate-600 transition group-hover:scale-110 group-hover:text-red-500"
              />

              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                0
              </span>
            </Link>

            {/* CART */}
            <Link
              href="/cart"
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-orange-50"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart
                size={22}
                className="text-slate-600 transition group-hover:scale-110 group-hover:text-orange-500"
              />

              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[9px] font-bold text-white">
                0
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* =====================================================
          SEARCH SUGGESTIONS / TRENDING
      ===================================================== */}
      <div className="hidden border-b border-slate-100 bg-white md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5">

          <span className="shrink-0 text-[11px] font-bold uppercase tracking-wide text-slate-400">
            Tìm kiếm phổ biến
          </span>

          <div className="flex items-center gap-2 overflow-hidden">

            <Link
              href="/products"
              className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500 transition hover:bg-orange-50 hover:text-orange-500"
            >
              LEGO
            </Link>

            <Link
              href="/products"
              className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500 transition hover:bg-orange-50 hover:text-orange-500"
            >
              Robot
            </Link>

            <Link
              href="/products"
              className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500 transition hover:bg-orange-50 hover:text-orange-500"
            >
              Gấu bông
            </Link>

            <Link
              href="/products"
              className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500 transition hover:bg-orange-50 hover:text-orange-500"
            >
              Búp bê
            </Link>

            <Link
              href="/products"
              className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500 transition hover:bg-orange-50 hover:text-orange-500"
            >
              Xe điều khiển
            </Link>

            <Link
              href="/products"
              className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500 transition hover:bg-orange-50 hover:text-orange-500"
            >
              Đồ chơi sáng tạo
            </Link>

          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE ACTION BAR
      ===================================================== */}
      <div className="border-b border-slate-100 px-4 py-3 lg:hidden">
        <div className="flex items-center justify-between">

          <Link
            href="/login"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600"
          >
            <UserRound size={18} />
            Tài khoản
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600"
          >
            <Heart size={18} />
            Yêu thích
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600"
          >
            <ShoppingCart size={18} />
            Giỏ hàng
          </Link>

          <button
            type="button"
            className="flex items-center gap-1 text-sm font-semibold text-slate-600"
          >
            Thêm
            <ChevronDown size={15} />
          </button>

        </div>
      </div>

    </header>
  );
}