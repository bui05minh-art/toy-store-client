import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Share2, Camera, PlayCircle, Sparkles } from "lucide-react";

const shopLinks = [
  { label: "Tất cả sản phẩm", href: "/products" },
  { label: "Hàng mới", href: "/products" },
  { label: "Sản phẩm bán chạy", href: "/products" },
  { label: "Khuyến mãi", href: "/products" },
];

const categoryLinks = [
  { label: "LEGO", href: "/products" },
  { label: "Xe đồ chơi", href: "/products" },
  { label: "Robot", href: "/products" },
  { label: "Búp bê", href: "/products" },
  { label: "Thú bông", href: "/products" },
];

const supportLinks = [
  { label: "Liên hệ", href: "#" },
  { label: "Chính sách giao hàng", href: "#" },
  { label: "Chính sách đổi trả", href: "#" },
  { label: "Chính sách bảo mật", href: "#" },
  { label: "Câu hỏi thường gặp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1020] text-white">
      <section className="px-4 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-red-600 via-red-500 to-orange-400 px-6 py-8 shadow-2xl shadow-red-950/20 sm:px-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-xl" />
            <div className="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-yellow-300/10 blur-2xl" />
            <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.22em] text-white/75"><Sparkles size={13} /> Toy Store</p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">Sẵn sàng khám phá thế giới đồ chơi?</h2>
                <p className="mt-2 max-w-xl text-xs leading-6 text-white/80 sm:text-sm">Tìm món quà thú vị cho bé và tạo nên những khoảnh khắc vui chơi đáng nhớ.</p>
              </div>
              <Link href="/products" className="group flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-red-500 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                Khám phá sản phẩm <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500 text-2xl shadow-lg shadow-red-950/30">🧸</span>
                <span>
                  <b className="block text-xl font-black">TOY STORE</b>
                  <small className="text-[9px] font-bold uppercase tracking-[.22em] text-slate-500">Thế giới đồ chơi</small>
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Nơi mang đến những món đồ chơi thú vị, sáng tạo và phù hợp cho bé.</p>
              <div className="mt-6 flex gap-2">
                {[
                  ["f", "Facebook"],
                  [<Camera size={17} />, "Instagram"],
                  [<PlayCircle size={18} />, "Youtube"],
                  [<Share2 size={17} />, "Chia sẻ"],
                ].map(([icon, label]) => (
                  <a key={label as string} href="#" aria-label={label as string} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black transition hover:-translate-y-1 hover:border-red-500 hover:bg-red-500">{icon}</a>
                ))}
              </div>
            </div>

            {[
              ["Mua sắm", shopLinks],
              ["Danh mục", categoryLinks],
            ].map(([title, links]) => (
              <div key={title as string}>
                <h3 className="text-sm font-black uppercase tracking-wider">{title as string}</h3>
                <ul className="mt-5 space-y-3">
                  {(links as typeof shopLinks).map((item) => (
                    <li key={item.label}><Link href={item.href} className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-red-400">{item.label}<ArrowUpRight size={12} className="opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" /></Link></li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-sm font-black uppercase tracking-wider">Liên hệ</h3>
              <div className="mt-5 space-y-4">
                {[
                  [MapPin, "Địa chỉ", "Hà Nội, Việt Nam"],
                  [Phone, "Hotline", "1900 6868"],
                  [Mail, "Email", "support@toystore.vn"],
                  [Clock, "Thời gian", "08:00 - 22:00 mỗi ngày"],
                ].map(([Icon, label, value]) => {
                  const C = Icon as typeof MapPin;
                  return (
                    <div key={label as string} className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-red-400"><C size={16} /></span>
                      <div><p className="text-[10px] text-slate-500">{label as string}</p><p className="mt-1 text-sm text-slate-300">{value as string}</p></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/5 pt-7">
            {supportLinks.map((item) => <Link key={item.label} href={item.href} className="text-xs text-slate-500 transition hover:text-red-400">{item.label}</Link>)}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Toy Store. All rights reserved.</p>
          <p>Thiết kế với ❤️ cho thế giới tuổi thơ.</p>
        </div>
      </section>
    </footer>
  );
}
