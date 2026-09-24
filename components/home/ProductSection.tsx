import Link from "next/link";
import {
  ArrowRight,
  Flame,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import ProductCard, {
  Product,
} from "@/components/product/ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Đồ chơi nhà bếp cho bé",
    price: "839.250đ",
    oldPrice: "1.119.000đ",
    discount: "-25%",
    image: "/images/products/anh-bep.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Búp bê dễ thương",
    price: "399.000đ",
    oldPrice: "499.000đ",
    discount: "-20%",
    image: "/images/products/bupbe_cc.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Gấu Teddy dễ thương",
    price: "299.000đ",
    oldPrice: "399.000đ",
    discount: "-25%",
    image: "/images/products/gau_teddy.jpg",
    rating: 5,
  },
  {
    id: 7,
    name: "LEGO City Xe cứu hộ",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "-14%",
    image: "/images/products/lego_cuuho.jpg",
    rating: 5,
  },
  {
    id: 9,
    name: "LEGO Đồ chơi sáng tạo",
    price: "499.000đ",
    oldPrice: "599.000đ",
    discount: "-17%",
    image: "/images/products/lego_sangtao.jpg",
    rating: 5,
  },
  {
    id: 12,
    name: "Ô tô điều khiển từ xa",
    price: "449.000đ",
    oldPrice: "549.000đ",
    discount: "-18%",
    image: "/images/products/oto_dkhien.jpg",
    rating: 5,
  },
  {
    id: 13,
    name: "Robot điều khiển",
    price: "699.000đ",
    oldPrice: "799.000đ",
    discount: "-13%",
    image: "/images/products/robot_dk.jpg",
    rating: 5,
  },
  {
    id: 14,
    name: "Robot siêu nhân",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "-14%",
    image: "/images/products/robot_siunhan.jpg",
    rating: 5,
  },
];

export default function ProductSection() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* =====================================================
            FLASH SALE HEADER
        ===================================================== */}
        <div className="relative overflow-hidden rounded-t-[28px] bg-gradient-to-r from-red-500 via-red-500 to-red-400 px-6 py-6 sm:px-8">

          {/* DECORATION */}
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-yellow-300/10" />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* TITLE */}
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-red-500 shadow-lg">
                <Flame
                  size={29}
                  fill="currentColor"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">

                  <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Ưu đãi nổi bật
                  </h2>

                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    Hot
                  </span>

                </div>

                <p className="mt-1 text-sm text-white/85">
                  Những sản phẩm được yêu thích với mức giá hấp dẫn
                </p>
              </div>
            </div>

            {/* RIGHT INFO */}
            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-white/15 px-4 py-2 text-center backdrop-blur-sm">
                <p className="text-[10px] font-medium uppercase text-white/70">
                  Ưu đãi
                </p>

                <p className="text-sm font-black text-white">
                  Đến 25%
                </p>
              </div>

              <Link
                href="/products"
                className="group hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-red-500 shadow-sm transition hover:bg-slate-900 hover:text-white sm:flex"
              >
                Xem tất cả

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>
        </div>

        {/* =====================================================
            PRODUCT AREA
        ===================================================== */}
        <div className="rounded-b-[28px] bg-white p-4 shadow-sm sm:p-6">

          {/* SMALL TOOLBAR */}
          <div className="mb-5 flex items-center justify-between">

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Sparkles
                size={16}
                className="text-red-500"
              />

              <span>
                Sản phẩm nổi bật dành cho bé
              </span>
            </div>

            <div className="hidden items-center gap-2 text-xs font-medium text-slate-400 sm:flex">
              <ShoppingBag size={14} />
              Mua sắm ngay hôm nay
            </div>

          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

          {/* MOBILE VIEW ALL */}
          <div className="mt-7 flex justify-center sm:hidden">
            <Link
              href="/products"
              className="group flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-500"
            >
              Xem tất cả sản phẩm

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}