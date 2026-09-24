import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gift,
  Sparkles,
  Star,
} from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">

        <div className="relative min-h-[330px] overflow-hidden rounded-[32px] bg-slate-900 shadow-xl">

          {/* DECORATION */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-2xl" />

          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="absolute right-1/3 top-10 h-32 w-32 rounded-full bg-orange-400/10 blur-2xl" />

          {/* SMALL DECORATIONS */}
          <div className="absolute right-[42%] top-8 text-yellow-300 opacity-80">
            <Star size={20} fill="currentColor" />
          </div>

          <div className="absolute bottom-10 left-[45%] text-orange-400 opacity-70">
            <Sparkles size={22} />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 grid min-h-[330px] items-center lg:grid-cols-2">

            {/* LEFT */}
            <div className="px-7 py-12 sm:px-10 lg:px-14">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                <Gift size={15} />
                Ưu đãi đặc biệt
              </div>

              <h2 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Món quà nhỏ,
                <br />
                <span className="text-orange-400">
                  niềm vui lớn
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                Khám phá những món đồ chơi thú vị dành cho bé.
                Từ LEGO, robot, xe điều khiển đến những chú gấu bông
                đáng yêu.
              </p>

              <Link
                href="/products"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Khám phá ngay

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* RIGHT PRODUCT SHOWCASE */}
            <div className="relative hidden h-[330px] lg:block">

              {/* MAIN WHITE CIRCLE */}
              <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/95 shadow-2xl" />

              {/* MAIN PRODUCT */}
              <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/products/gau_thongminh.jpg"
                  alt="Gấu bông thông minh"
                  fill
                  sizes="270px"
                  className="object-contain p-5 drop-shadow-xl transition duration-500 hover:scale-105"
                />
              </div>

              {/* SMALL PRODUCT LEFT */}
              <div className="absolute left-[8%] top-[20%] flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-2 shadow-xl rotate-[-8deg] transition duration-300 hover:rotate-0 hover:scale-105">
                <Image
                  src="/images/products/lego_ngoinha.jpg"
                  alt="LEGO Ngôi nhà"
                  fill
                  sizes="96px"
                  className="object-contain p-2"
                />
              </div>

              {/* SMALL PRODUCT RIGHT */}
              <div className="absolute right-[8%] bottom-[17%] flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-2 shadow-xl rotate-[8deg] transition duration-300 hover:rotate-0 hover:scale-105">
                <Image
                  src="/images/products/robot_dk.jpg"
                  alt="Robot điều khiển"
                  fill
                  sizes="96px"
                  className="object-contain p-2"
                />
              </div>

              {/* SALE BADGE */}
              <div className="absolute right-[18%] top-[8%] flex h-20 w-20 rotate-6 items-center justify-center rounded-full bg-orange-500 shadow-xl">
                <div className="text-center text-white">
                  <p className="text-[9px] font-bold uppercase">
                    Giảm đến
                  </p>

                  <p className="text-xl font-black">
                    25%
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}