import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "LEGO",
    description: "Lắp ráp & sáng tạo",
    image: "/images/products/lego_sangtao.jpg",
    color: "from-red-500 to-yellow-400",
  },
  {
    name: "Xe đồ chơi",
    description: "Xe đua & điều khiển",
    image: "/images/products/oto_dkhien.jpg",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Robot",
    description: "Robot & siêu nhân",
    image: "/images/products/robot_siunhan.jpg",
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "Búp bê",
    description: "Thế giới bé yêu",
    image: "/images/products/bupbe_cc.jpg",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Gấu bông",
    description: "Ôm là thích",
    image: "/images/products/gau_teddy.jpg",
    color: "from-red-500 to-red-400",
  },
  {
    name: "Đồ chơi sáng tạo",
    description: "Khơi nguồn ý tưởng",
    image: "/images/products/dc_sangtao.jpg",
    color: "from-green-500 to-emerald-400",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex items-end justify-between">

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-red-500" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">
                Khám phá
              </span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Khám phá theo danh mục
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Tìm món đồ chơi phù hợp với sở thích của bé
            </p>
          </div>

          <Link
            href="/products"
            className="group hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-red-200 hover:text-red-500 sm:flex"
          >
            Xem tất cả

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* ================= CATEGORY GRID ================= */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {categories.map((category) => (
            <Link
              key={category.name}
              href="/products"
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden bg-slate-50">

                {/* COLOR GLOW */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${category.color} opacity-10`}
                />

                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-contain p-5 transition duration-500 group-hover:scale-110"
                />

                {/* ARROW */}
                <div className="absolute right-3 top-3 flex h-8 w-8 translate-x-2 items-center justify-center rounded-full bg-white/90 text-slate-400 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:text-red-500 group-hover:opacity-100">
                  <ArrowRight size={15} />
                </div>

              </div>

              {/* TEXT */}
              <div className="px-4 pb-4 pt-3">

                <h3 className="text-sm font-bold text-slate-800 transition group-hover:text-red-500">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {category.description}
                </p>

              </div>

            </Link>
          ))}

        </div>

        {/* MOBILE VIEW ALL */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white"
          >
            Xem tất cả sản phẩm
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}