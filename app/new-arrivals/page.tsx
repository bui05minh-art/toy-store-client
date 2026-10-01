"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShoppingCart,
  Heart,
  Star,
  Zap,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "LEGO City Xe cứu hộ",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "-14%",
    image: "/images/products/lego_cuuho.jpg",
    tag: "MỚI",
  },
  {
    id: 2,
    name: "Robot siêu nhân",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "-14%",
    image: "/images/products/robot_siunhan.jpg",
    tag: "HOT",
  },
  {
    id: 3,
    name: "Gấu Teddy dễ thương",
    price: "299.000đ",
    oldPrice: "399.000đ",
    discount: "-25%",
    image: "/images/products/gau_teddy.jpg",
    tag: "MỚI",
  },
  {
    id: 4,
    name: "Búp bê công chúa",
    price: "399.000đ",
    oldPrice: "499.000đ",
    discount: "-20%",
    image: "/images/products/bupbe_cc.jpg",
    tag: "MỚI",
  },
];

export default function NewArrivalsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-red-400 to-orange-300">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div className="text-white">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur">
                <Sparkles size={16} />
                Bộ sưu tập mới nhất
              </div>

              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Hàng mới
                <br />
                <span className="text-yellow-100">
                  vừa cập bến!
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                Khám phá những món đồ chơi mới nhất tại TOY STORE.
                Nhiều sản phẩm thú vị đang chờ bé khám phá.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-800"
                >
                  Khám phá ngay
                  <ArrowRight size={17} />
                </Link>

                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-3.5 text-sm font-bold backdrop-blur">
                  <Zap size={17} />
                  Cập nhật mỗi tuần
                </span>
              </div>
            </div>

            <div className="relative hidden h-[350px] lg:block">
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-2xl" />

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/products/lego_cuuho.jpg"
                  alt="Sản phẩm mới"
                  fill
                  className="object-contain drop-shadow-2xl transition duration-700 hover:scale-110"
                />
              </div>

              <div className="absolute right-0 top-8 rounded-2xl bg-white p-4 shadow-2xl">
                <p className="text-xs text-slate-400">
                  Sản phẩm nổi bật
                </p>
                <p className="mt-1 text-sm font-black text-slate-800">
                  LEGO City
                </p>
                <p className="mt-1 text-xs font-bold text-red-500">
                  599.000đ
                </p>
              </div>

              <div className="absolute bottom-5 left-2 rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white shadow-xl">
                NEW ✨
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TITLE */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-500">
              <span className="h-1 w-8 rounded-full bg-red-500" />
              Vừa cập nhật
            </div>

            <h2 className="text-3xl font-black text-slate-900">
              Sản phẩm mới nhất
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Những sản phẩm vừa được thêm vào cửa hàng
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-600"
          >
            Xem tất cả
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* PRODUCTS */}
        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* TAG */}
              <div className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-[10px] font-black text-white">
                {product.tag}
              </div>

              {/* DISCOUNT */}
              <div className="absolute right-3 top-3 z-10 rounded-full bg-yellow-400 px-2.5 py-1 text-[10px] font-black text-red-700">
                {product.discount}
              </div>

              {/* HEART */}
              <button className="absolute right-3 top-12 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 hover:text-red-500">
                <Heart size={16} />
              </button>

              {/* IMAGE */}
              <Link href={`/products/${product.id}`}>
                <div className="relative h-52 overflow-hidden bg-slate-50 p-5 sm:h-60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="300px"
                    className="object-contain p-5 transition duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>

              {/* CONTENT */}
              <div className="p-4">
                <div className="mb-2 flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                    <Star size={13} fill="currentColor" />
                  </div>

                  <span className="text-[10px] text-slate-400">
                    (12)
                  </span>
                </div>

                <Link href={`/products/${product.id}`}>
                  <h3 className="line-clamp-2 min-h-10 text-sm font-bold text-slate-800 transition group-hover:text-red-500">
                    {product.name}
                  </h3>
                </Link>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-lg font-black text-red-500">
                    {product.price}
                  </span>

                  <span className="text-xs text-slate-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 text-xs font-bold text-white transition hover:bg-red-600 hover:shadow-lg">
                  <ShoppingCart size={15} />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM PROMO */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-7 py-10 text-white sm:px-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold text-red-400">
                ✨ ĐỪNG BỎ LỠ
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Hàng mới sẽ được cập nhật liên tục
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Theo dõi TOY STORE để không bỏ lỡ sản phẩm mới.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-bold transition hover:bg-red-600 hover:shadow-xl"
            >
              Xem sản phẩm
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}