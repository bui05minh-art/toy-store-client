"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Eye, Star, Zap } from "lucide-react";
import { useCart } from "@/components/context/CartContext";

export interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  image?: string;
  icon?: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const rating = product.rating ?? 5;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product.image) {
      alert("Sản phẩm này chưa có hình ảnh để thêm vào giỏ hàng.");
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      discount: product.discount,
      image: product.image,
    });
  };

  return (
    <article className="group relative overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(15,23,42,.12)]">
      <div className="absolute left-3 top-3 z-20 flex items-center gap-1 rounded-full bg-red-500 px-2.5 py-1 text-[10px] font-black text-white shadow-md">
        <Zap size={10} fill="currentColor" />
        {product.discount}
      </div>

      <button
        type="button"
        aria-label="Thêm vào yêu thích"
        className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-md backdrop-blur transition hover:scale-110 hover:text-red-500"
      >
        <Heart size={17} />
      </button>

      <Link href={`/products/${product.id}`}>
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white sm:h-60">
          <div className="absolute inset-5 rounded-[28px] bg-slate-100/60 transition duration-500 group-hover:bg-red-50/70" />
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="relative object-contain p-6 transition duration-500 group-hover:scale-110"
            />
          ) : (
            <span className="relative text-7xl transition group-hover:scale-110">{product.icon}</span>
          )}

          <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-900/90 py-2 text-[11px] font-bold text-white backdrop-blur">
              <Eye size={14} /> Xem nhanh sản phẩm
            </div>
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="mb-2 flex items-center gap-1">
            <div className="flex text-[12px] text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill={i < rating ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-[10px] text-slate-400">({rating.toFixed(1)})</span>
          </div>

          <h3 className="line-clamp-2 min-h-10 text-sm font-bold leading-5 text-slate-800 transition group-hover:text-red-500">
            {product.name}
          </h3>

          <div className="mt-2 flex flex-wrap items-end gap-2">
            <span className="text-lg font-black text-red-500">{product.price}</span>
            <span className="text-[11px] text-slate-400 line-through">{product.oldPrice}</span>
          </div>
        </div>
      </Link>

      <div className="p-4 pt-3">
        <button
          type="button"
          onClick={handleAddToCart}
          className="group/cart flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-2.5 text-xs font-black text-white shadow-sm shadow-red-100 transition hover:bg-red-600 hover:shadow-lg active:scale-[.98]"
        >
          <ShoppingCart size={15} className="transition group-hover/cart:rotate-[-8deg]" />
          Thêm vào giỏ
        </button>
      </div>
    </article>
  );
}
