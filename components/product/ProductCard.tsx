"use client";

import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;

  // Sản phẩm mới dùng ảnh
  image?: string;

  // Sản phẩm cũ vẫn có thể dùng icon
  icon?: string;

  // Nếu chưa có rating thì mặc định 5
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const rating = product.rating ?? 5;

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* BADGE GIẢM GIÁ */}
      <div className="absolute left-3 top-3 z-10 rounded-lg bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
        {product.discount}
      </div>

      {/* YÊU THÍCH */}
      <button
        type="button"
        aria-label="Thêm vào yêu thích"
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-md transition hover:scale-110 hover:text-red-500"
      >
        ♡
      </button>

      {/* ẢNH SẢN PHẨM */}
      <Link href={`/products/${product.id}`}>
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-white p-5 sm:h-60">

          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-contain p-5 transition duration-500 group-hover:scale-110"
            />
          ) : (
            <span className="text-7xl transition duration-500 group-hover:scale-110">
              {product.icon}
            </span>
          )}

        </div>

        {/* THÔNG TIN */}
        <div className="px-4 pb-3">

          {/* ĐÁNH GIÁ */}
          <div className="mb-2 flex items-center gap-1">
            <div className="flex text-sm text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>
                  {index < rating ? "★" : "☆"}
                </span>
              ))}
            </div>

            <span className="text-xs text-gray-400">
              ({rating.toFixed(1)})
            </span>
          </div>

          {/* TÊN */}
          <h3 className="line-clamp-2 min-h-11 text-sm font-semibold leading-5 text-gray-800 transition group-hover:text-red-500">
            {product.name}
          </h3>

          {/* GIÁ */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-lg font-black text-red-500">
              {product.price}
            </span>

            <span className="text-xs text-gray-400 line-through">
              {product.oldPrice}
            </span>
          </div>

        </div>
      </Link>

      {/* THÊM GIỎ */}
      <div className="px-4 pb-4">
        <button
          type="button"
          className="w-full rounded-full bg-red-500 py-2.5 text-sm font-bold text-white transition hover:bg-red-600 active:scale-95"
          onClick={() => {
            alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
          }}
        >
          🛒 Thêm vào giỏ
        </button>
      </div>

    </article>
  );
}