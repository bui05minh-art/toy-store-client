import Link from "next/link";
import { ArrowRight, Crown, ShoppingBag, Sparkles } from "lucide-react";
import ProductCard, { Product } from "@/components/product/ProductCard";

const bestSellers: Product[] = [
  { id: 7, name: "LEGO City Xe cứu hộ", price: "599.000đ", oldPrice: "699.000đ", discount: "-14%", image: "/images/products/lego_cuuho.jpg", rating: 5 },
  { id: 13, name: "Robot điều khiển", price: "699.000đ", oldPrice: "799.000đ", discount: "-13%", image: "/images/products/robot_dk.jpg", rating: 5 },
  { id: 12, name: "Ô tô điều khiển từ xa", price: "449.000đ", oldPrice: "549.000đ", discount: "-18%", image: "/images/products/oto_dkhien.jpg", rating: 5 },
  { id: 5, name: "Gấu Teddy dễ thương", price: "299.000đ", oldPrice: "399.000đ", discount: "-25%", image: "/images/products/gau_teddy.jpg", rating: 5 },
];

export default function BestSellerSection() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="section-shell">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-red-500">
              <Crown size={15} fill="currentColor" /> Được yêu thích
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Sản phẩm bán chạy</h2>
            <p className="mt-1.5 text-sm text-slate-500">Những món đồ chơi đang được nhiều khách hàng lựa chọn</p>
          </div>
          <Link href="/products" className="hidden items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-xs font-black text-slate-700 transition hover:border-red-200 hover:text-red-500 sm:flex">Xem tất cả <ArrowRight size={15} /></Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {bestSellers.map((product, index) => (
            <div key={product.id} className="relative">
              <div className="absolute left-3 top-3 z-30 flex items-center gap-1 rounded-full bg-slate-950 px-2.5 py-1 text-[9px] font-black text-white shadow-md">
                <ShoppingBag size={10} /> TOP {index + 1}
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400">
          <Sparkles size={13} className="text-yellow-400" /> Sản phẩm được cập nhật liên tục
        </div>
      </div>
    </section>
  );
}
