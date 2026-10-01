"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Gift,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

const slides = [
  {
    tag: "BỘ SƯU TẬP MỚI",
    title: "Cùng bé",
    highlight: "xây nên thế giới riêng",
    description: "Đồ chơi sáng tạo giúp bé thỏa sức tưởng tượng, khám phá và tạo nên những khoảnh khắc vui vẻ mỗi ngày.",
    image: "/images/products/lego_cuuho.jpg",
    product: "LEGO City Xe cứu hộ",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "20%",
    theme: "from-red-600 via-red-500 to-orange-400",
  },
  {
    tag: "ĐỒ CHƠI HOT",
    title: "Biến mỗi ngày",
    highlight: "thành một cuộc phiêu lưu",
    description: "Robot, xe điều khiển và những món đồ chơi thú vị dành cho các bé yêu thích khám phá.",
    image: "/images/products/robot_siunhan.jpg",
    product: "Robot siêu nhân",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "14%",
    theme: "from-violet-600 via-fuchsia-500 to-pink-400",
  },
  {
    tag: "MÓN QUÀ DỄ THƯƠNG",
    title: "Trao yêu thương",
    highlight: "cùng gấu Teddy",
    description: "Một người bạn nhỏ đáng yêu đồng hành cùng bé trong những giờ vui chơi và những giấc ngủ thật ngon.",
    image: "/images/products/gau_teddy.jpg",
    product: "Gấu Teddy dễ thương",
    price: "299.000đ",
    oldPrice: "399.000đ",
    discount: "25%",
    theme: "from-pink-500 via-rose-500 to-orange-400",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[current];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, [paused]);

  const next = () => setCurrent((v) => (v + 1) % slides.length);
  const prev = () => setCurrent((v) => (v - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#f7f8fc] pb-10 pt-4 sm:pt-6">
      <div className="section-shell">
        <div
          className="group relative overflow-hidden rounded-[30px] shadow-[0_25px_70px_rgba(239,68,68,.18)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.theme} transition-colors duration-700`} />

          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-48 left-[28%] h-[480px] w-[480px] rounded-full bg-yellow-200/20 blur-3xl" />
          <div className="absolute left-[44%] top-8 h-5 w-5 rounded-full bg-white/50 animate-soft-pulse" />
          <div className="absolute right-[34%] top-[28%] h-3 w-3 rounded-full bg-white/70 animate-pulse" />
          <div className="absolute bottom-[22%] left-[51%] h-2 w-2 rounded-full bg-white/60 animate-ping" />

          <div className="relative z-10 grid min-h-[510px] lg:grid-cols-[48%_52%]">
            <div className="flex items-center px-7 py-12 sm:px-10 lg:px-14">
              <div className="max-w-xl">
                <div key={`tag-${current}`} className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-black tracking-wide text-white backdrop-blur-md">
                  <Sparkles size={14} />
                  {slide.tag}
                </div>

                <h1 key={`title-${current}`} className="animate-fade-up max-w-xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[60px]">
                  {slide.title}
                  <br />
                  <span className="text-yellow-100">{slide.highlight}</span>
                </h1>

                <p key={`desc-${current}`} className="animate-fade-up mt-6 max-w-lg text-sm leading-7 text-white/90 sm:text-base">
                  {slide.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/products" className="group/btn inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-slate-900">
                    Khám phá ngay
                    <ArrowRight size={17} className="transition group-hover/btn:translate-x-1" />
                  </Link>
                  <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-red-500">
                    Xem sản phẩm
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-white/90">
                  <span className="flex items-center gap-2"><ShieldCheck size={15} /> Chính hãng</span>
                  <span className="flex items-center gap-2"><Truck size={15} /> Giao hàng nhanh</span>
                  <span className="flex items-center gap-2"><Gift size={15} /> Nhiều ưu đãi</span>
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[510px] lg:block">
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

              <div className="absolute left-1/2 top-1/2 h-[405px] w-[455px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] rounded-[42px] bg-white/95 shadow-2xl transition duration-700 group-hover:rotate-0" />

              <div key={`image-${current}`} className="animate-zoom-in absolute left-1/2 top-1/2 h-[385px] w-[435px] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={slide.image}
                  alt={slide.product}
                  fill
                  priority
                  sizes="435px"
                  className="object-contain p-7 drop-shadow-[0_28px_30px_rgba(0,0,0,.22)] transition duration-700 group-hover:scale-105"
                />
              </div>

              <div key={`info-${current}`} className="animate-slide-right absolute right-4 top-12 z-20 rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-slate-50">
                    <Image src={slide.image} alt="" fill sizes="56px" className="object-contain p-1" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-1 text-[10px] text-yellow-500">
                      <Star size={10} fill="currentColor" /> 5.0
                    </div>
                    <p className="text-xs font-black text-slate-800">{slide.product}</p>
                    <div className="mt-0.5 flex items-center gap-2">
                      <b className="text-xs text-red-500">{slide.price}</b>
                      <span className="text-[10px] text-slate-400 line-through">{slide.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-float-toy absolute bottom-12 left-2 z-20 rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-pink-50">
                    <Image src="/images/products/gau_teddy.jpg" alt="Gấu Teddy" fill sizes="48px" className="object-contain p-1" />
                  </div>
                  <div>
                    <div className="text-[10px] text-yellow-400">★★★★★</div>
                    <p className="text-xs font-black text-slate-800">Gấu Teddy</p>
                    <p className="text-[10px] text-slate-400">Bé yêu thích ❤️</p>
                  </div>
                </div>
              </div>

              <div className="animate-float-slow absolute bottom-14 right-8 z-20 flex h-20 w-20 rotate-6 items-center justify-center rounded-full border-4 border-white bg-red-600 shadow-2xl">
                <div className="text-center text-white">
                  <p className="text-[9px] font-black uppercase">SALE</p>
                  <p className="text-xl font-black">{slide.discount}</p>
                </div>
              </div>
            </div>
          </div>

          <button onClick={prev} aria-label="Banner trước" className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-white hover:text-red-500">
            <ArrowLeft size={18} />
          </button>
          <button onClick={next} aria-label="Banner tiếp theo" className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-white hover:text-red-500">
            <ArrowRight size={18} />
          </button>

          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/10 px-3 py-2 backdrop-blur-md">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Banner ${index + 1}`}
                className={`h-2 rounded-full transition-all ${current === index ? "w-8 bg-white" : "w-2 bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            [Truck, "Giao hàng nhanh", "Toàn quốc", "bg-red-50 text-red-500"],
            [ShieldCheck, "Chính hãng", "An tâm mua sắm", "bg-emerald-50 text-emerald-500"],
            [Gift, "Ưu đãi hấp dẫn", "Mỗi tuần", "bg-yellow-50 text-yellow-500"],
            [Sparkles, "Đồ chơi đa dạng", "Cho mọi lứa tuổi", "bg-blue-50 text-blue-500"],
          ].map(([Icon, title, sub, color]) => {
            const C = Icon as typeof Truck;
            return (
              <div key={title as string} className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color as string} transition group-hover:scale-110`}>
                  <C size={19} />
                </span>
                <span>
                  <b className="block text-xs text-slate-800 sm:text-sm">{title as string}</b>
                  <small className="text-[10px] text-slate-400 sm:text-xs">{sub as string}</small>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
