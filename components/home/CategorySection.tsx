import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const categories = [
  { name: "LEGO", description: "Lắp ráp & sáng tạo", image: "/images/products/lego_sangtao.jpg", color: "from-red-500 to-orange-400" },
  { name: "Xe đồ chơi", description: "Xe đua & điều khiển", image: "/images/products/oto_dkhien.jpg", color: "from-blue-500 to-cyan-400" },
  { name: "Robot", description: "Robot & siêu nhân", image: "/images/products/robot_siunhan.jpg", color: "from-violet-500 to-fuchsia-400" },
  { name: "Búp bê", description: "Thế giới bé yêu", image: "/images/products/bupbe_cc.jpg", color: "from-pink-500 to-rose-400" },
  { name: "Gấu bông", description: "Ôm là thích", image: "/images/products/gau_teddy.jpg", color: "from-orange-500 to-yellow-400" },
  { name: "Sáng tạo", description: "Khơi nguồn ý tưởng", image: "/images/products/dc_sangtao.jpg", color: "from-emerald-500 to-teal-400" },
];

export default function CategorySection() {
  return (
    <section className="bg-[#f7f8fc] py-10 sm:py-14">
      <div className="section-shell">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-red-500">
              <Sparkles size={14} /> Khám phá
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Chọn theo sở thích</h2>
            <p className="mt-1.5 text-sm text-slate-500">Tìm món đồ chơi phù hợp với thế giới của bé</p>
          </div>
          <Link href="/products" className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-black text-slate-700 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:text-red-500 sm:flex">
            Xem tất cả <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href="/products"
              className="group relative overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`} />
              <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${category.color} bg-opacity-5`}>
                <div className={`absolute inset-4 rounded-[28px] bg-gradient-to-br ${category.color} opacity-[.08] transition duration-500 group-hover:opacity-[.16]`} />
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="relative object-contain p-5 transition duration-500 group-hover:scale-110 group-hover:-rotate-2"
                />
                <span className="absolute right-3 top-3 flex h-8 w-8 translate-x-2 items-center justify-center rounded-full bg-white text-slate-400 opacity-0 shadow-md transition group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-red-500">
                  <ArrowRight size={14} />
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-black text-slate-800 transition group-hover:text-red-500">{category.name}</p>
                <p className="mt-1 text-[11px] text-slate-400">{category.description}</p>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-full w-1/3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-500 group-hover:w-full`} />
                </div>
              </div>
              {index === 0 && <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-[9px] font-black text-white">HOT</span>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
