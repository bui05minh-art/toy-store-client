"use client";

import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Blocks,
  Bot,
  Car,
  ChevronDown,
  Crown,
  Flame,
  Heart,
  Menu,
  Percent,
  Sparkles,
  
} from "lucide-react";

const categories = [
  {
    name: "LEGO & Xếp hình",
    icon: Blocks,
    color: "bg-red-50 text-red-500",
  },
  {
    name: "Xe & Điều khiển",
    icon: Car,
    color: "bg-orange-50 text-orange-500",
  },
  {
    name: "Đồ chơi bé yêu",
    icon: Baby,
    color: "bg-pink-50 text-pink-500",
  },
  {
    name: "Robot & Công nghệ",
    icon: Bot,
    color: "bg-blue-50 text-blue-500",
  },
];

const brands = [
  {
    name: "LEGO",
    description: "Xếp hình sáng tạo",
    icon: Blocks,
    color: "bg-red-50 text-red-500",
  },
  {
    name: "Hot Wheels",
    description: "Xe mô hình tốc độ",
    icon: Car,
    color: "bg-orange-50 text-orange-500",
  },
  {
    name: "Robot",
    description: "Đồ chơi công nghệ",
    icon: Bot,
    color: "bg-blue-50 text-blue-500",
  },
  {
    name: "Đồ chơi bé yêu",
    description: "Đáng yêu cho bé",
    icon: Baby,
    color: "bg-pink-50 text-pink-500",
  },
];

function NavItem({
  href,
  children,
  badge,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  badge?: string;
  icon?: React.ElementType;
}) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-1.5 px-3 py-4 text-sm font-bold text-slate-700 transition hover:text-red-600"
    >
      {Icon && (
        <Icon
          size={16}
          className="transition duration-300 group-hover:-translate-y-0.5"
        />
      )}

      <span>{children}</span>

      {badge && (
        <span className="absolute -right-1 -top-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[8px] font-black text-white shadow-sm">
          {badge}
        </span>
      )}

      <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-center scale-x-0 rounded-full bg-red-500 transition duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

export default function Navbar() {
  return (
   <nav className="relative z-40 border-b border-slate-100 bg-white shadow-sm">
      <div className="section-shell flex items-center">
        {/* CATEGORY */}
        <div className="group relative shrink-0">
          <button
            type="button"
            className="flex items-center gap-2 rounded-t-2xl bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 text-xs font-black text-white shadow-lg shadow-red-100 transition hover:from-red-600 hover:to-orange-500 sm:px-6 sm:text-sm"
          >
            <Menu size={18} />

            <span className="hidden sm:inline">
              Danh mục sản phẩm
            </span>

            <span className="sm:hidden">Danh mục</span>

            <ChevronDown
              size={15}
              className="transition duration-300 group-hover:rotate-180"
            />
          </button>

          {/* CATEGORY DROPDOWN */}
          <div className="invisible absolute left-0 top-full z-50 w-[min(850px,calc(100vw-2rem))] translate-y-2 rounded-b-3xl border border-slate-100 bg-white p-5 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase text-red-500">
                  Khám phá
                </p>

                <h3 className="mt-1 text-lg font-black text-slate-900">
                  Danh mục đồ chơi
                </h3>
              </div>

              <Link
                href="/products"
                className="flex items-center gap-1 text-xs font-bold text-red-500 hover:gap-2"
              >
                Xem tất cả
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    href="/products"
                    key={category.name}
                    className="group/item rounded-2xl border border-slate-100 p-4 transition hover:-translate-y-1 hover:border-red-100 hover:shadow-lg"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${category.color}`}
                    >
                      <Icon size={21} />
                    </div>

                    <p className="mt-3 text-xs font-black text-slate-800">
                      {category.name}
                    </p>

                    <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 transition group-hover/item:text-red-500">
                      Khám phá
                      <ArrowRight size={11} />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-xs font-black text-slate-800">
                    Đồ chơi mới về mỗi tuần
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Cập nhật những sản phẩm hot nhất
                  </p>
                </div>
              </div>

              <Link
                href="/new-arrivals"
                className="hidden items-center gap-1 text-xs font-black text-red-600 sm:flex"
              >
                Hàng mới
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="hidden flex-1 items-center lg:flex">
          <NavItem href="/" icon={Sparkles}>
            Trang chủ
          </NavItem>

          <NavItem href="/products">Sản phẩm</NavItem>

          <NavItem href="/new-arrivals" icon={Sparkles} badge="NEW">
            Hàng mới
          </NavItem>

          {/* BRAND DROPDOWN */}
          <div className="group/brand relative">
            <Link
              href="/brands"
              className="group flex items-center gap-1.5 px-3 py-4 text-sm font-bold text-slate-700 transition hover:text-red-600"
            >
              <Crown
                size={16}
                className="transition group-hover:-translate-y-0.5"
              />

              <span>Thương hiệu</span>

              <ChevronDown
                size={14}
                className="transition duration-300 group-hover/brand:rotate-180"
              />

              <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-center scale-x-0 rounded-full bg-red-500 transition duration-300 group-hover/brand:scale-x-100" />
            </Link>

            {/* BRAND MENU */}
            <div className="invisible absolute left-1/2 top-full w-[430px] -translate-x-1/2 translate-y-2 rounded-3xl border border-slate-100 bg-white p-5 opacity-0 shadow-2xl transition-all duration-200 group-hover/brand:visible group-hover/brand:translate-y-0 group-hover/brand:opacity-100">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-red-500">
                    Thương hiệu nổi bật
                  </p>

                  <h3 className="mt-1 text-lg font-black text-slate-900">
                    Bé thích thương hiệu nào? ✨
                  </h3>
                </div>

                <Crown className="text-yellow-400" size={24} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {brands.map((brand) => {
                  const Icon = brand.icon;

                  return (
                    <Link
                      href="/brands"
                      key={brand.name}
                      className="group/card flex items-center gap-3 rounded-2xl border border-slate-100 p-3 transition duration-200 hover:-translate-y-1 hover:border-red-100 hover:bg-red-50/50 hover:shadow-md"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${brand.color}`}
                      >
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-xs font-black text-slate-800 group-hover/card:text-red-600">
                          {brand.name}
                        </p>

                        <p className="mt-1 truncate text-[10px] text-slate-400">
                          {brand.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/brands"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 py-3 text-xs font-black text-white transition hover:shadow-lg"
              >
                Xem tất cả thương hiệu
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* PROMOTIONS */}
          <NavItem href="/promotions" icon={Percent} badge="HOT">
            Khuyến mãi
          </NavItem>

          {/* SALE */}
          <Link
            href="/promotions"
            className="group relative ml-1 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-xs font-black text-white shadow-md shadow-red-100 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Flame
              size={15}
              className="transition group-hover:scale-125"
            />

            SALE

            <span className="absolute -right-1 -top-2 rounded-full bg-yellow-300 px-1.5 py-0.5 text-[7px] font-black text-red-700">
              HOT
            </span>
          </Link>
        </div>

        {/* MEMBER */}
        <div className="hidden items-center gap-2 text-xs font-bold text-slate-500 xl:flex">
          <Heart size={17} className="fill-red-100 text-red-500" />
          Thành viên TOY STORE
        </div>
      </div>
    </nav>
  );
}