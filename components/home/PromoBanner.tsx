import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, Sparkles, Star, Clock3 } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="bg-[#f7f8fc] py-10 sm:py-14">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[30px] bg-slate-950 shadow-[0_25px_70px_rgba(15,23,42,.16)]">
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />
          <div className="absolute left-[55%] top-10 h-3 w-3 rounded-full bg-yellow-300 animate-pulse" />
          <Star className="absolute right-[37%] top-12 text-yellow-300/80" size={18} fill="currentColor" />

          <div className="relative grid min-h-[350px] lg:grid-cols-[52%_48%]">
            <div className="flex items-center px-7 py-12 sm:px-10 lg:px-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-red-400">
                  <Gift size={14} /> Ưu đãi đặc biệt
                </span>
                <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  Món quà nhỏ,
                  <br />
                  <span className="text-red-400">niềm vui lớn</span>
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
                  Khám phá LEGO, robot, xe điều khiển, búp bê và những món quà đáng yêu cho bé.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Giảm đến 25%", "Deal mỗi tuần", "Số lượng có hạn"].map((text) => (
                    <span key={text} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold text-slate-300">{text}</span>
                  ))}
                </div>

                <Link href="/products" className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-1 hover:bg-red-400">
                  Khám phá ngay <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative hidden min-h-[350px] lg:block">
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-2xl" />
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 animate-float-slow">
                <Image src="/images/products/gau_thongminh.jpg" alt="Gấu bông thông minh" fill sizes="280px" className="object-contain p-5 drop-shadow-2xl" />
              </div>

              <div className="absolute left-[7%] top-[17%] h-24 w-24 rotate-[-8deg] rounded-2xl bg-white p-2 shadow-xl transition hover:rotate-0 hover:scale-105">
                <Image src="/images/products/lego_sangtao.jpg" alt="LEGO sáng tạo" fill sizes="96px" className="object-contain p-2" />
              </div>

              <div className="absolute right-[7%] bottom-[16%] h-24 w-24 rotate-[8deg] rounded-2xl bg-white p-2 shadow-xl transition hover:rotate-0 hover:scale-105">
                <Image src="/images/products/robot_dk.jpg" alt="Robot điều khiển" fill sizes="96px" className="object-contain p-2" />
              </div>

              <div className="absolute right-[17%] top-[8%] flex h-20 w-20 rotate-6 items-center justify-center rounded-full border-4 border-white bg-red-500 shadow-xl">
                <div className="text-center text-white"><p className="text-[8px] font-black">GIẢM ĐẾN</p><p className="text-xl font-black">25%</p></div>
              </div>

              <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-bold text-white backdrop-blur">
                <Clock3 size={13} /> Ưu đãi đang diễn ra
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
