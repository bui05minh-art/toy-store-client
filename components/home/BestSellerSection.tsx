import Link from "next/link";
import {
  ArrowRight,
  Crown,
  ShoppingBag,
} from "lucide-react";

import ProductCard, {
  Product,
} from "@/components/product/ProductCard";

const bestSellers: Product[] = [
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
    id: 13,
    name: "Robot điều khiển",
    price: "699.000đ",
    oldPrice: "799.000đ",
    discount: "-13%",
    image: "/images/products/robot_dk.jpg",
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
    id: 5,
    name: "Gấu Teddy dễ thương",
    price: "299.000đ",
    oldPrice: "399.000đ",
    discount: "-25%",
    image: "/images/products/gau_teddy.jpg",
    rating: 5,
  },
];

export default function BestSellerSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="mb-8 flex items-end justify-between">

          <div>
            <div className="mb-2 flex items-center gap-2">
              <Crown
                size={17}
                className="text-red-500"
                fill="currentColor"
              />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">
                Được yêu thích
              </span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Sản phẩm bán chạy
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Những món đồ chơi được nhiều khách hàng lựa chọn
            </p>
          </div>

          <Link
            href="/products"
            className="group hidden items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:text-red-500 sm:flex"
          >
            Xem tất cả

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {bestSellers.map((product, index) => (
            <div
              key={product.id}
              className="relative"
            >

              {/* TOP RANK */}
              <div className="absolute left-3 top-3 z-20 flex items-center gap-1 rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                <ShoppingBag size={11} />
                TOP {index + 1}
              </div>

              <ProductCard product={product} />

            </div>
          ))}

        </div>

        {/* MOBILE BUTTON */}
        <div className="mt-7 flex justify-center sm:hidden">
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white"
          >
            Xem tất cả
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}