import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Share2,
  Camera,
  PlayCircle,
} from "lucide-react";

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
    <footer className="bg-slate-950 text-white">

      {/* ============================= */}
      {/* CTA */}
      {/* ============================= */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-orange-500 via-orange-500 to-amber-400 px-6 py-8 sm:px-10 sm:py-10">

            {/* DECORATION */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 right-32 h-52 w-52 rounded-full bg-white/10" />

            <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">

              {/* TEXT */}
              <div className="max-w-xl">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Toy Store
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                  Sẵn sàng khám phá thế giới đồ chơi?
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/85">
                  Khám phá hàng trăm sản phẩm thú vị dành cho bé
                  và tìm món quà phù hợp cho những khoảnh khắc
                  đặc biệt.
                </p>

              </div>

              {/* BUTTON */}
              <Link
                href="/products"
                className="group flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-orange-500 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Khám phá sản phẩm

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

            </div>
          </div>

        </div>
      </section>


      {/* ============================= */}
      {/* MAIN FOOTER */}
      {/* ============================= */}

      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">

            {/* ============================= */}
            {/* BRAND */}
            {/* ============================= */}

            <div>

              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-2xl shadow-lg">
                  🧸
                </div>

                <div>
                  <div className="text-xl font-black tracking-tight">
                    TOY STORE
                  </div>

                  <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Thế giới đồ chơi
                  </div>
                </div>

              </Link>


              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Nơi mang đến những món đồ chơi thú vị, sáng tạo
                và phù hợp cho bé. Cùng Toy Store tạo nên thật
                nhiều khoảnh khắc vui chơi đáng nhớ.
              </p>


              {/* SOCIAL */}
              <div className="mt-6 flex items-center gap-3">

                {/* FACEBOOK */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
                >
                  f
                </a>


                {/* INSTAGRAM */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
                >
                  <Camera size={18} />
                </a>


                {/* YOUTUBE */}
                <a
                  href="#"
                  aria-label="Youtube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
                >
                  <PlayCircle size={19} />
                </a>


                {/* SHARE */}
                <a
                  href="#"
                  aria-label="Chia sẻ"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
                >
                  <Share2 size={17} />
                </a>

              </div>

            </div>


            {/* ============================= */}
            {/* SHOP */}
            {/* ============================= */}

            <div>

              <h3 className="text-sm font-black uppercase tracking-wider">
                Mua sắm
              </h3>

              <ul className="mt-5 space-y-3">

                {shopLinks.map((item) => (
                  <li key={item.label}>

                    <Link
                      href={item.href}
                      className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-orange-400"
                    >
                      {item.label}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </Link>

                  </li>
                ))}

              </ul>

            </div>


            {/* ============================= */}
            {/* CATEGORY */}
            {/* ============================= */}

            <div>

              <h3 className="text-sm font-black uppercase tracking-wider">
                Danh mục
              </h3>

              <ul className="mt-5 space-y-3">

                {categoryLinks.map((item) => (
                  <li key={item.label}>

                    <Link
                      href={item.href}
                      className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-orange-400"
                    >
                      {item.label}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </Link>

                  </li>
                ))}

              </ul>

            </div>


            {/* ============================= */}
            {/* CONTACT */}
            {/* ============================= */}

            <div>

              <h3 className="text-sm font-black uppercase tracking-wider">
                Liên hệ
              </h3>


              <div className="mt-5 space-y-4">

                {/* ADDRESS */}
                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-orange-400">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Địa chỉ
                    </p>

                    <p className="mt-1 text-sm leading-5 text-slate-300">
                      Hà Nội, Việt Nam
                    </p>
                  </div>

                </div>


                {/* PHONE */}
                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-orange-400">
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Hotline
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-200">
                      1900 6868
                    </p>
                  </div>

                </div>


                {/* EMAIL */}
                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-orange-400">
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      support@toystore.vn
                    </p>
                  </div>

                </div>


                {/* TIME */}
                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-orange-400">
                    <Clock size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Thời gian hỗ trợ
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      08:00 - 22:00 mỗi ngày
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ============================= */}
          {/* SUPPORT LINKS */}
          {/* ============================= */}

          <div className="mt-12 border-t border-white/10 pt-8">

            <div className="flex flex-wrap gap-x-7 gap-y-3">

              {supportLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs text-slate-500 transition hover:text-orange-400"
                >
                  {item.label}
                </Link>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ============================= */}
      {/* COPYRIGHT */}
      {/* ============================= */}

      <section className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">

          <p>
            © 2026 Toy Store. All rights reserved.
          </p>

          <p>
            Thiết kế với ❤️ cho thế giới tuổi thơ.
          </p>

        </div>

      </section>

    </footer>
  );
}