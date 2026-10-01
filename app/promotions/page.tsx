"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Flame, Gift, Percent, Sparkles } from "lucide-react";

const products = [
  {
    name: "LEGO City Xe cứu hộ",
    image: "/images/products/lego_cuuho.jpg",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "-14%",
  },
  {
    name: "Robot siêu nhân",
    image: "/images/products/robot_siunhan.jpg",
    price: "399.000đ",
    oldPrice: "499.000đ",
    discount: "-20%",
  },
  {
    name: "Gấu bông Teddy",
    image: "/images/products/gau_teddy.jpg",
    price: "299.000đ",
    oldPrice: "399.000đ",
    discount: "-25%",
  },
  {
    name: "Đồ chơi bé yêu",
    image: "/images/products/bupbe_cc.jpg",
    price: "349.000đ",
    oldPrice: "449.000đ",
    discount: "-22%",
  },
];

export default function PromotionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO SALE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-400">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="section-shell relative py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="text-white">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black backdrop-blur">
                <Flame size={17} className="animate-pulse" />
                HOT DEAL HÔM NAY
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                SALE CỰC SỐC
                <span className="block text-yellow-300">
                  ĐỒ CHƠI GIÁ HỜI
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-red-50 sm:text-base">
                Hàng loạt sản phẩm đồ chơi yêu thích đang được giảm giá.
                Săn ngay deal hấp dẫn trước khi chương trình kết thúc!
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#sale-products"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-red-600 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  Xem sản phẩm SALE
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
                >
                  Tất cả sản phẩm
                </Link>
              </div>
            </div>

            {/* SALE CARD */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="absolute right-4 top-4 rounded-full bg-yellow-300 px-4 py-2 text-xs font-black text-red-700 shadow-lg">
                  UP TO 50%
                </div>

                <div className="flex h-64 items-center justify-center">
                  <div className="relative h-52 w-52">
                    <Image
                      src="/images/products/lego_cuuho.jpg"
                      alt="Sản phẩm sale"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-5 text-slate-900 shadow-xl">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-red-500">
                    <Sparkles size={15} />
                    Flash Sale
                  </div>

                  <h2 className="mt-2 text-xl font-black">
                    Deal đồ chơi cực hot
                  </h2>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Chương trình còn</p>
                      <p className="mt-1 flex items-center gap-2 font-black text-red-600">
                        <Clock3 size={16} />
                        Hôm nay
                      </p>
                    </div>

                    <div className="rounded-xl bg-red-50 px-4 py-2 text-center">
                      <p className="text-2xl font-black text-red-600">50%</p>
                      <p className="text-[10px] font-bold text-red-400">
                        GIẢM TỐI ĐA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-shell py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Percent,
              title: "Giảm đến 50%",
              text: "Nhiều deal hấp dẫn",
            },
            {
              icon: Gift,
              title: "Quà tặng cực xinh",
              text: "Ưu đãi cho đơn hàng",
            },
            {
              icon: Flame,
              title: "Flash Sale",
              text: "Deal hot mỗi ngày",
            },
            {
              icon: Sparkles,
              title: "Sản phẩm chính hãng",
              text: "An tâm mua sắm",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-black text-slate-800">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SALE PRODUCTS */}
      <section id="sale-products" className="section-shell py-8 pb-16">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-black text-red-500">
              <Flame size={18} />
              DEAL HOT
            </div>

            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
              Săn SALE ngay hôm nay 🔥
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Những sản phẩm đang có mức giá ưu đãi cực hấp dẫn.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-black text-red-600 transition hover:gap-3"
          >
            Xem tất cả
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              href="/products"
              key={product.name}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                <div className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white shadow-lg">
                  {product.discount}
                </div>

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-5 transition duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[10px] font-bold text-white backdrop-blur">
                  SALE HOT
                </div>
              </div>

              <div className="p-4">
                <h3 className="line-clamp-2 min-h-[42px] text-sm font-black text-slate-800">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-lg font-black text-red-600">
                    {product.price}
                  </span>

                  <span className="text-xs text-slate-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-red-100">
                  <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-red-500 to-orange-400" />
                </div>

                <p className="mt-2 text-[11px] font-bold text-slate-400">
                  🔥 Đang có nhiều người quan tâm
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}