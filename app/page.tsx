import CategorySection from "@/components/home/CategorySection";
import HeroBanner from "@/components/home/HeroBanner";
import ProductSection from "@/components/home/ProductSection";
import PromoBanner from "@/components/home/PromoBanner";
import BestSellerSection from "@/components/home/BestSellerSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroBanner />

      {/* DANH MỤC */}
      <CategorySection />

      {/* ƯU ĐÃI NỔI BẬT */}
      <ProductSection />

      {/* BANNER KHUYẾN MÃI */}
      <PromoBanner />

      {/* SẢN PHẨM BÁN CHẠY */}
      <BestSellerSection />

      {/* DỊCH VỤ / CAM KẾT */}
      <section className="bg-slate-50 px-4 py-12 lg:px-6">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Toy Store
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Mua sắm an tâm cho bé
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
              Những dịch vụ được thiết kế để mang đến trải nghiệm mua sắm
              thuận tiện và an tâm cho gia đình.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* GIAO HÀNG */}
            <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-2xl transition group-hover:scale-110">
                🚚
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Giao hàng nhanh
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Giao hàng tận nơi nhanh chóng và thuận tiện trên toàn quốc.
              </p>

            </div>

            {/* CHÍNH HÃNG */}
            <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-2xl transition group-hover:scale-110">
                🛡️
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Sản phẩm chính hãng
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sản phẩm chất lượng, nguồn gốc rõ ràng và an toàn cho bé.
              </p>

            </div>

            {/* THANH TOÁN */}
            <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition group-hover:scale-110">
                💳
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Thanh toán tiện lợi
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Nhiều phương thức thanh toán phù hợp với nhu cầu của bạn.
              </p>

            </div>

            {/* HỖ TRỢ */}
            <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-2xl transition group-hover:scale-110">
                🎧
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Hỗ trợ khách hàng
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Luôn sẵn sàng hỗ trợ và tư vấn khi khách hàng cần.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}