import CategorySection from "@/components/home/CategorySection";
import HeroBanner from "@/components/home/HeroBanner";
import ProductSection from "@/components/home/ProductSection";
import PromoBanner from "@/components/home/PromoBanner";
import BestSellerSection from "@/components/home/BestSellerSection";
import Footer from "@/components/layout/Footer";
import { CreditCard, Headphones, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <ProductSection />
      <PromoBanner />
      <BestSellerSection />

      <section className="bg-[#f7f8fc] py-10 sm:py-14">
        <div className="section-shell">
          <div className="mb-8 text-center">
            <span className="text-xs font-black uppercase tracking-[.2em] text-red-500">Toy Store</span>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">Mua sắm an tâm cho bé</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">Từ lúc chọn món đồ chơi đến khi nhận hàng, mọi thứ đều được thiết kế đơn giản và thuận tiện.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Truck, "Giao hàng nhanh", "Giao hàng tận nơi toàn quốc", "bg-red-50 text-red-500"],
              [ShieldCheck, "Chính hãng", "Sản phẩm chất lượng, rõ nguồn gốc", "bg-emerald-50 text-emerald-500"],
              [CreditCard, "Thanh toán tiện lợi", "Nhiều phương thức thanh toán", "bg-blue-50 text-blue-500"],
              [Headphones, "Hỗ trợ tận tâm", "Luôn sẵn sàng hỗ trợ khách hàng", "bg-violet-50 text-violet-500"],
            ].map(([Icon, title, desc, color]) => {
              const C = Icon as typeof Truck;
              return (
                <div key={title as string} className="group rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color as string} transition group-hover:scale-110`}>
                    <C size={21} />
                  </div>
                  <h3 className="mt-5 text-sm font-black text-slate-900">{title as string}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{desc as string}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[24px] bg-slate-950 px-6 py-5 text-white sm:flex-row">
            <div>
              <p className="flex items-center gap-2 text-sm font-black"><span className="h-2 w-2 rounded-full bg-green-400" /> Sẵn sàng mua sắm?</p>
              <p className="mt-1 text-xs text-slate-400">Khám phá toàn bộ bộ sưu tập Toy Store.</p>
            </div>
            <Link href="/products" className="flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-xs font-black transition hover:bg-red-400">Xem sản phẩm <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
