import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Gift,
} from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="bg-slate-50 pb-10 pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4">

        {/* =====================================================
            HERO
        ===================================================== */}
        <div className="relative min-h-[480px] overflow-hidden rounded-[32px] bg-gradient-to-br from-red-500 via-red-400 to-yellow-300 shadow-xl shadow-red-100">

          {/* DECORATION */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-yellow-200/20" />
          <div className="absolute left-1/2 top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

          {/* =================================================
              CONTENT
          ================================================= */}
          <div className="relative z-10 grid min-h-[480px] items-center lg:grid-cols-2">

            {/* LEFT */}
            <div className="px-7 py-12 sm:px-10 lg:px-14 lg:py-16">

              {/* LABEL */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                <Sparkles size={16} />
                Bộ sưu tập mới
              </div>

              {/* TITLE */}
              <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Khám phá
                <br />
                <span className="text-yellow-100">
                  thế giới đồ chơi
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/90 sm:text-base">
                Những món đồ chơi thú vị giúp bé thỏa sức sáng tạo,
                khám phá và tạo nên những khoảnh khắc vui vẻ mỗi ngày.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
                >
                  Khám phá ngay

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-red-500"
                >
                  Xem sản phẩm
                </Link>

              </div>

              {/* TRUST */}
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-white/90">

                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} />
                  Chính hãng
                </div>

                <div className="flex items-center gap-2">
                  <Truck size={16} />
                  Giao hàng nhanh
                </div>

                <div className="flex items-center gap-2">
                  <Gift size={16} />
                  Nhiều ưu đãi
                </div>

              </div>
            </div>

            {/* =================================================
                PRODUCT IMAGE
            ================================================= */}
            <div className="relative hidden h-full min-h-[480px] lg:block">

              {/* WHITE GLOW */}
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-2xl" />

              {/* MAIN IMAGE */}
              <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2">

                <Image
                  src="/images/products/lego_cuuho.jpg"
                  alt="LEGO City Xe cứu hộ"
                  fill
                  priority
                  sizes="390px"
                  className="object-contain drop-shadow-2xl transition duration-700 hover:scale-105"
                />

              </div>

              {/* FLOATING CARD 1 */}
              <div className="absolute right-8 top-16 flex items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur-sm">

                <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-slate-50">
                  <Image
                    src="/images/products/robot_siunhan.jpg"
                    alt="Robot siêu nhân"
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-medium text-slate-400">
                    Được yêu thích
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    Robot siêu nhân
                  </p>

                  <p className="text-xs font-bold text-red-500">
                    599.000đ
                  </p>
                </div>

              </div>

              {/* FLOATING CARD 2 */}
              <div className="absolute bottom-16 left-5 flex items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur-sm">

                <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-slate-50">
                  <Image
                    src="/images/products/gau_teddy.jpg"
                    alt="Gấu Teddy dễ thương"
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-yellow-400">
                      ★★★★★
                    </span>
                  </div>

                  <p className="text-sm font-bold text-slate-800">
                    Gấu Teddy
                  </p>

                  <p className="text-xs text-slate-400">
                    Bé yêu thích
                  </p>
                </div>

              </div>

              {/* SALE BADGE */}
              <div className="absolute bottom-20 right-14 flex h-20 w-20 rotate-6 items-center justify-center rounded-full bg-red-500 text-center shadow-xl">

                <div>
                  <p className="text-[10px] font-bold uppercase text-white">
                    Sale
                  </p>

                  <p className="text-xl font-black text-white">
                    25%
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            QUICK BENEFITS
        ===================================================== */}
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">

          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <Truck size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Giao hàng nhanh
              </p>

              <p className="text-xs text-slate-400">
                Toàn quốc
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-500">
              <ShieldCheck size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Chính hãng
              </p>

              <p className="text-xs text-slate-400">
                An tâm mua sắm
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-500">
              <Gift size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Ưu đãi hấp dẫn
              </p>

              <p className="text-xs text-slate-400">
                Mỗi tuần
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
              <Sparkles size={19} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Đồ chơi đa dạng
              </p>

              <p className="text-xs text-slate-400">
                Cho mọi lứa tuổi
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}