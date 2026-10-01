"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Car,
  Crown,
  Flame,
  Gamepad2,
  Sparkles,
  Star,
} from "lucide-react";

const brands = [
  {
    name: "LEGO",
    subtitle: "Sáng tạo không giới hạn",
    description:
      "Khám phá thế giới LEGO với những bộ xếp hình đầy sáng tạo dành cho mọi lứa tuổi.",
    image: "/images/products/lego_cuuho.jpg",
    icon: Blocks,
    color: "from-red-600 to-orange-500",
    tag: "HOT",
  },
  {
    name: "Hot Wheels",
    subtitle: "Tốc độ bùng nổ",
    description:
      "Những mẫu xe mô hình cực chất dành cho các tín đồ đam mê tốc độ.",
    image: "/images/products/oto_dkhien.jpg",
    icon: Car,
    color: "from-orange-500 to-yellow-400",
    tag: "NEW",
  },
  {
    name: "Robot",
    subtitle: "Thế giới công nghệ",
    description:
      "Robot thông minh, đồ chơi điều khiển và những món đồ chơi công nghệ thú vị.",
    image: "/images/products/robot_siunhan.jpg",
    icon: Gamepad2,
    color: "from-blue-600 to-cyan-400",
    tag: "HOT",
  },
  {
    name: "Đồ chơi bé yêu",
    subtitle: "Niềm vui cho bé",
    description:
      "Những món đồ chơi đáng yêu giúp bé vui chơi, khám phá và phát triển mỗi ngày.",
    image: "/images/products/gau_teddy.jpg",
    icon: Star,
    color: "from-pink-500 to-rose-400",
    tag: "LOVE",
  },
];

const popular = [
  {
    name: "LEGO City",
    image: "/images/products/lego_cuuho.jpg",
  },
  {
    name: "Robot siêu nhân",
    image: "/images/products/robot_siunhan.jpg",
  },
  {
    name: "Gấu Teddy",
    image: "/images/products/gau_teddy.jpg",
  },
  {
    name: "Xe điều khiển",
    image: "/images/products/oto_dkhien.jpg",
  },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-400">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="section-shell relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-white backdrop-blur">
              <Crown size={17} />
              THƯƠNG HIỆU ĐỒ CHƠI
            </div>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Khám phá
              <span className="block text-yellow-300">
                thương hiệu yêu thích
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-red-50 sm:text-base">
              Từ những bộ LEGO sáng tạo đến những chiếc xe tốc độ và robot
              thông minh. Tìm thương hiệu yêu thích của bé ngay hôm nay.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#brands"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-red-600 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Khám phá thương hiệu
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                Xem tất cả sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND LIST */}
      <section id="brands" className="section-shell py-12 sm:py-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-black text-red-500">
            <Sparkles size={18} />
            THƯƠNG HIỆU NỔI BẬT
          </div>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            Chọn thương hiệu bạn yêu thích
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Những thương hiệu đồ chơi được yêu thích tại TOY STORE.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {brands.map((brand) => {
            const Icon = brand.icon;

            return (
              <Link
                href="/products"
                key={brand.name}
                className="group relative min-h-[330px] overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-90`}
                />

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

                {/* Image */}
                <div className="absolute bottom-0 right-0 h-64 w-64 transition duration-500 group-hover:scale-110 sm:h-72 sm:w-72">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain p-5 drop-shadow-2xl"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full min-h-[330px] max-w-[60%] flex-col justify-between p-7 sm:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur">
                        <Icon size={23} />
                      </div>

                      <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black text-slate-800 shadow-lg">
                        {brand.tag}
                      </span>
                    </div>

                    <p className="mt-8 text-xs font-bold uppercase tracking-wider text-white/75">
                      {brand.subtitle}
                    </p>

                    <h3 className="mt-2 text-3xl font-black text-white">
                      {brand.name}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-white/85 sm:text-sm">
                      {brand.description}
                    </p>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
                    Xem sản phẩm
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="border-y border-slate-100 bg-white py-12 sm:py-16">
        <div className="section-shell">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-black text-red-500">
                <Flame size={18} />
                SẢN PHẨM HOT
              </div>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Đang được yêu thích 🔥
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-black text-red-600 transition hover:gap-3"
            >
              Xem tất cả
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {popular.map((product) => (
              <Link
                href="/products"
                key={product.name}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <div className="mb-2 flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={13} fill="currentColor" />
                    ))}
                  </div>

                  <h3 className="text-sm font-black text-slate-800">
                    {product.name}
                  </h3>

                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-red-600">
                    Xem sản phẩm
                    <ArrowRight
                      size={13}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-shell py-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-600 to-orange-500 px-7 py-10 text-center shadow-xl sm:px-12">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-yellow-300/10" />

          <div className="relative">
            <Sparkles className="mx-auto text-yellow-300" size={30} />

            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Sẵn sàng khám phá thế giới đồ chơi?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-red-50">
              Chọn thương hiệu yêu thích và tìm món đồ chơi hoàn hảo cho bé.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-black text-red-600 shadow-xl transition hover:-translate-y-1"
            >
              Mua sắm ngay
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}