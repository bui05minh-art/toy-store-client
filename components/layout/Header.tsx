"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Search,
  UserRound,
  Heart,
  ShoppingCart,
  Truck,
  Gift,
  ShieldCheck,
  Phone,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  ChevronDown,
  LogOut,
  Package,
} from "lucide-react";

import { useCart } from "@/components/context/CartContext";
import { useAuth } from "@/components/context/AuthContext";

const trending = [
  "LEGO",
  "Robot",
  "Gấu bông",
  "Búp bê",
  "Xe điều khiển",
  "Đồ chơi sáng tạo",
];

export default function Header() {
  const router = useRouter();
  const { totalItems } = useCart();
  const { user, isLoggedIn, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    const keyword = searchQuery.trim();

    if (!keyword) return;

    router.push(`/products?search=${encodeURIComponent(keyword)}`);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    logout();
    setAccountOpen(false);
    setMobileOpen(false);
    router.push("/");
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-lg shadow-slate-200/60" : "shadow-sm"
      }`}
    >
      {/* TOP BAR */}
      <div className="bg-[#10182d] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="hidden items-center gap-5 md:flex">
            <span className="flex items-center gap-1.5">
              <Truck size={14} className="text-yellow-400" />
              Giao hàng toàn quốc
            </span>

            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-yellow-400" />
              Cam kết chính hãng
            </span>

            <span className="flex items-center gap-1.5">
              <Gift size={14} className="text-yellow-400" />
              Nhiều ưu đãi hấp dẫn
            </span>
          </div>

          <div className="flex w-full items-center justify-between md:w-auto md:justify-end">
            <span className="text-slate-300">
              Chào mừng đến với Toy Store!
            </span>

            <span className="hidden items-center gap-1.5 text-yellow-300 sm:flex">
              <Phone size={13} />
              Hotline: 1900 1234
            </span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-2xl shadow-lg shadow-red-200">
              🧸
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight text-[#10182d] sm:text-2xl">
                TOY<span className="text-red-600">STORE</span>
              </h1>
              <p className="text-[10px] font-semibold tracking-[2px] text-slate-400">
                THẾ GIỚI ĐỒ CHƠI
              </p>
            </div>
          </Link>

          {/* SEARCH */}
          <div className="hidden max-w-xl flex-1 lg:block">
            <div className="flex h-11 overflow-hidden rounded-xl border-2 border-slate-100 bg-slate-50 transition focus-within:border-red-400 focus-within:bg-white">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Tìm kiếm đồ chơi, LEGO, robot..."
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                onClick={handleSearch}
                className="flex w-12 items-center justify-center bg-red-600 text-white transition hover:bg-red-700"
                aria-label="Tìm kiếm"
              >
                <Search size={19} />
              </button>
            </div>

            <div className="mt-1.5 flex gap-3 overflow-hidden text-[11px] text-slate-400">
              <span className="shrink-0 font-semibold text-slate-500">
                Xu hướng:
              </span>

              {trending.slice(0, 4).map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    router.push(
                      `/products?search=${encodeURIComponent(item)}`
                    );
                  }}
                  className="shrink-0 transition hover:text-red-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            {/* ACCOUNT DESKTOP */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="flex items-center gap-2 rounded-xl px-2 py-2 transition hover:bg-red-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <UserRound size={21} />
                </div>

                <div className="text-left">
                  <p className="text-[11px] text-slate-400">
                    {isLoggedIn ? "Xin chào" : "Tài khoản"}
                  </p>

                  <p className="max-w-[110px] truncate text-sm font-bold text-slate-700">
                    {isLoggedIn ? user?.name : "Đăng nhập"}
                  </p>
                </div>

                <ChevronDown
                  size={14}
                  className="text-slate-400"
                />
              </button>

              {accountOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
                  {isLoggedIn ? (
                    <>
                      <div className="border-b border-slate-100 bg-red-50 px-4 py-3">
                        <p className="font-bold text-slate-800">
                          {user?.name}
                        </p>
                        <p className="mt-1 truncate text-xs text-slate-500">
                          {user?.email}
                        </p>
                      </div>

                      <Link
                        href="/account"
                        onClick={() => setAccountOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 transition hover:bg-red-50 hover:text-red-600"
                      >
                        <UserRound size={17} />
                        Tài khoản của tôi
                      </Link>

                      <Link
                        href="/orders"
                        onClick={() => setAccountOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 transition hover:bg-red-50 hover:text-red-600"
                      >
                        <Package size={17} />
                        Đơn hàng của tôi
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 border-t border-slate-100 px-4 py-3 text-sm text-red-600 transition hover:bg-red-50"
                      >
                        <LogOut size={17} />
                        Đăng xuất
                      </button>
                    </>
                  ) : (
                    <div className="p-3">
                      <p className="mb-3 text-sm text-slate-600">
                        Đăng nhập để trải nghiệm mua sắm dễ dàng hơn.
                      </p>

                      <Link
                        href="/login"
                        onClick={() => setAccountOpen(false)}
                        className="block rounded-xl bg-red-600 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-red-700"
                      >
                        Đăng nhập
                      </Link>

                      <Link
                        href="/register"
                        onClick={() => setAccountOpen(false)}
                        className="mt-2 block rounded-xl border border-red-200 px-4 py-2.5 text-center text-sm font-bold text-red-600 transition hover:bg-red-50"
                      >
                        Tạo tài khoản
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* WISHLIST */}
            <Link
              href="/products"
              className="relative hidden rounded-xl p-2 text-slate-600 transition hover:bg-red-50 hover:text-red-600 sm:block"
              aria-label="Yêu thích"
            >
              <Heart size={22} />
            </Link>

            {/* CART */}
            <Link
              href="/cart"
              className="relative flex items-center gap-2 rounded-xl p-2 text-slate-700 transition hover:bg-red-50 hover:text-red-600"
              aria-label="Giỏ hàng"
            >
              <div className="relative">
                <ShoppingCart size={23} />

                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </div>

              <span className="hidden text-sm font-bold md:block">
                Giỏ hàng
              </span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-xl bg-slate-100 p-2 text-slate-700 transition hover:bg-red-50 hover:text-red-600 lg:hidden"
              aria-label="Mở menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="pb-3 lg:hidden">
          <div className="flex h-10 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              placeholder="Bạn muốn tìm đồ chơi gì?"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
            />

            <button
              onClick={handleSearch}
              className="flex w-11 items-center justify-center bg-red-600 text-white"
              aria-label="Tìm kiếm"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-slate-100 py-3 lg:hidden">
            <div className="flex flex-col">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600"
              >
                Trang chủ
                <ChevronRight size={16} />
              </Link>

              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600"
              >
                Sản phẩm
                <ChevronRight size={16} />
              </Link>

              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600"
              >
                Sản phẩm nổi bật
                <Sparkles size={16} />
              </Link>

              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600"
              >
                Khuyến mãi
                <Gift size={16} />
              </Link>

              {isLoggedIn ? (
                <>
                  <div className="my-2 rounded-xl bg-red-50 p-3">
                    <p className="text-sm font-bold text-slate-800">
                      Xin chào, {user?.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {user?.email}
                    </p>
                  </div>

                  <Link
                    href="/account"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600"
                  >
                    Tài khoản của tôi
                  </Link>

                  <Link
                    href="/orders"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600"
                  >
                    Đơn hàng của tôi
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 rounded-lg px-3 py-3 text-left text-sm font-semibold text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={17} />
                    Đăng xuất
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white hover:bg-red-700"
                >
                  <UserRound size={17} />
                  Đăng nhập / Đăng ký
                </Link>
              )}
            </div>

            <div className="mt-3 rounded-xl bg-red-50 p-3">
              <p className="mb-2 flex items-center gap-2 text-xs font-bold text-red-700">
                <Sparkles size={14} />
                TỪ KHÓA ĐƯỢC TÌM KIẾM NHIỀU
              </p>

              <div className="flex flex-wrap gap-2">
                {trending.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      router.push(
                        `/products?search=${encodeURIComponent(item)}`
                      );
                      setMobileOpen(false);
                    }}
                    className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-red-300 hover:text-red-600"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}