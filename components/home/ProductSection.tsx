import Link from "next/link";
import { ArrowRight, Flame, Sparkles, Timer, ShoppingBag } from "lucide-react";
import ProductCard, { Product } from "@/components/product/ProductCard";

const products: Product[] = [
  { id: 1, name: "Đồ chơi nhà bếp cho bé", price: "839.250đ", oldPrice: "1.119.000đ", discount: "-25%", image: "/images/products/anh-bep.jpg", rating: 5 },
  { id: 2, name: "Búp bê dễ thương", price: "399.000đ", oldPrice: "499.000đ", discount: "-20%", image: "/images/products/bupbe_cc.jpg", rating: 5 },
  { id: 5, name: "Gấu Teddy dễ thương", price: "299.000đ", oldPrice: "399.000đ", discount: "-25%", image: "/images/products/gau_teddy.jpg", rating: 5 },
  { id: 7, name: "LEGO City Xe cứu hộ", price: "599.000đ", oldPrice: "699.000đ", discount: "-14%", image: "/images/products/lego_cuuho.jpg", rating: 5 },
  { id: 9, name: "LEGO Đồ chơi sáng tạo", price: "499.000đ", oldPrice: "599.000đ", discount: "-17%", image: "/images/products/lego_sangtao.jpg", rating: 5 },
  { id: 12, name: "Ô tô điều khiển từ xa", price: "449.000đ", oldPrice: "549.000đ", discount: "-18%", image: "/images/products/oto_dkhien.jpg", rating: 5 },
  { id: 13, name: "Robot điều khiển", price: "699.000đ", oldPrice: "799.000đ", discount: "-13%", image: "/images/products/robot_dk.jpg", rating: 5 },
  { id: 14, name: "Robot siêu nhân", price: "599.000đ", oldPrice: "699.000đ", discount: "-14%", image: "/images/products/robot_siunhan.jpg", rating: 5 },
];

export default function ProductSection() {
  return (
    <section className="bg-[#f7f8fc] py-10 sm:py-14">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-slate-100">
          <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-orange-400 px-5 py-5 sm:px-7">
            <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute bottom-[-80px] left-1/3 h-44 w-44 rounded-full bg-yellow-300/15" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-red-500 shadow-lg"><Flame size={25} fill="currentColor" /></span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-white sm:text-2xl">Ưu đãi nổi bật</h2>
                    <span className="rounded-full bg-yellow-300 px-2 py-1 text-[9px] font-black text-red-700">HOT</span>
                  </div>
                  <p className="mt-1 text-xs text-white/80">Deal xịn cho những món đồ chơi bé yêu thích</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-xl bg-black/10 px-3 py-2 text-white backdrop-blur">
                  <Timer size={15} />
                  <span className="text-[10px] font-bold">Đang diễn ra</span>
                </div>
                <Link href="/products" className="hidden items-center gap-1 rounded-full bg-white px-4 py-2.5 text-xs font-black text-red-500 transition hover:bg-slate-900 hover:text-white sm:flex">Xem tất cả <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-bold text-slate-500"><Sparkles size={15} className="text-red-500" /> Sản phẩm nổi bật dành cho bé</span>
              <span className="hidden items-center gap-1 text-[10px] text-slate-400 sm:flex"><ShoppingBag size={13} /> Mua sắm ngay hôm nay</span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>

            <div className="mt-6 flex justify-center sm:hidden">
              <Link href="/products" className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-black text-white">Xem tất cả <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
