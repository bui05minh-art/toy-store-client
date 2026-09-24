"use client";

import { useMemo, useState } from "react";
import ProductCard, {
  Product,
} from "@/components/product/ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Đồ chơi nhà bếp cho bé",
    price: "839.250đ",
    oldPrice: "1.119.000đ",
    discount: "-25%",
    image: "/images/products/anh-bep.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Búp bê dễ thương",
    price: "399.000đ",
    oldPrice: "499.000đ",
    discount: "-20%",
    image: "/images/products/cc_dethuong.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Đồ chơi dễ thương cho bé",
    price: "299.000đ",
    oldPrice: "399.000đ",
    discount: "-25%",
    image: "/images/products/bupbe_cc.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Đồ chơi sáng tạo",
    price: "349.000đ",
    oldPrice: "449.000đ",
    discount: "-22%",
    image: "/images/products/dc_sangtao.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Gấu Teddy dễ thương",
    price: "299.000đ",
    oldPrice: "399.000đ",
    discount: "-25%",
    image: "/images/products/gau_teddy.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Gấu bông thông minh",
    price: "459.000đ",
    oldPrice: "559.000đ",
    discount: "-18%",
    image: "/images/products/gau_thongminh.jpg",
    rating: 5,
  },
  {
    id: 7,
    name: "LEGO City Xe cứu hộ",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "-14%",
    image: "/images/products/lego_cuuho.jpg",
    rating: 5,
  },
  {
    id: 8,
    name: "LEGO Ngôi nhà",
    price: "699.000đ",
    oldPrice: "799.000đ",
    discount: "-13%",
    image: "/images/products/lego_ngoinha.jpg",
    rating: 5,
  },
  {
    id: 9,
    name: "LEGO Đồ chơi sáng tạo",
    price: "499.000đ",
    oldPrice: "599.000đ",
    discount: "-17%",
    image: "/images/products/lego_sangtao.jpg",
    rating: 5,
  },
  {
    id: 10,
    name: "LEGO Bộ đồ chơi lắp ráp",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "-14%",
    image: "/images/products/lego1.jpg",
    rating: 5,
  },
  {
    id: 11,
    name: "Ninja đồ chơi",
    price: "399.000đ",
    oldPrice: "499.000đ",
    discount: "-20%",
    image: "/images/products/ninja.jpg",
    rating: 4,
  },
  {
    id: 12,
    name: "Ô tô điều khiển từ xa",
    price: "449.000đ",
    oldPrice: "549.000đ",
    discount: "-18%",
    image: "/images/products/oto_dkhien.jpg",
    rating: 5,
  },
  {
    id: 13,
    name: "Robot điều khiển",
    price: "699.000đ",
    oldPrice: "799.000đ",
    discount: "-13%",
    image: "/images/products/robot_dk.jpg",
    rating: 5,
  },
  {
    id: 14,
    name: "Robot siêu nhân",
    price: "599.000đ",
    oldPrice: "699.000đ",
    discount: "-14%",
    image: "/images/products/robot_siunhan.jpg",
    rating: 5,
  },
  {
    id: 15,
    name: "Xe cảnh sát đồ chơi",
    price: "399.000đ",
    oldPrice: "499.000đ",
    discount: "-20%",
    image: "/images/products/xecsat.jpg",
    rating: 4,
  },
];
const categories = [
  "Tất cả",
  "LEGO",
  "Xe đồ chơi",
  "Robot",
  "Búp bê",
  "Thú bông",
];

export default function ProductsPage() {
  const [category, setCategory] = useState("Tất cả");
  const [sort, setSort] = useState("Mới nhất");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category === "LEGO") {
      result = result.filter((product) =>
        product.name.toLowerCase().includes("lego"),
      );
    }

    if (category === "Xe đồ chơi") {
      result = result.filter((product) =>
        product.name.toLowerCase().includes("xe"),
      );
    }

    if (category === "Robot") {
      result = result.filter((product) =>
        product.name.toLowerCase().includes("robot"),
      );
    }

    if (category === "Búp bê") {
  result = result.filter((product) =>
    product.name.toLowerCase().includes("búp bê"),
  );
}

if (category === "Thú bông") {
  result = result.filter((product) =>
    product.name.toLowerCase().includes("gấu"),
  );
}
    if (sort === "Giá thấp đến cao") {
      result.sort(
        (a, b) =>
          Number(a.price.replace(/\D/g, "")) -
          Number(b.price.replace(/\D/g, "")),
      );
    }

    if (sort === "Giá cao đến thấp") {
      result.sort(
        (a, b) =>
          Number(b.price.replace(/\D/g, "")) -
          Number(a.price.replace(/\D/g, "")),
      );
    }

    return result;
  }, [category, sort]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <div className="max-w-2xl text-white">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest">
              🧸 Toy Store
            </p>

            <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              Thế giới đồ chơi
            </h1>

            <p className="mt-3 text-sm text-orange-50 sm:text-base">
              Khám phá những món đồ chơi thú vị dành cho bé yêu.
              Nhiều sản phẩm hấp dẫn đang chờ bạn.
            </p>
          </div>
        </div>
      </section>

      {/* NỘI DUNG */}
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-6">

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">

          {/* SIDEBAR */}
          <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-gray-900">
                Bộ lọc
              </h2>

              <button
                type="button"
                onClick={() => setCategory("Tất cả")}
                className="text-xs font-semibold text-orange-500 hover:underline"
              >
                Xóa lọc
              </button>
            </div>

            {/* DANH MỤC */}
            <div className="mt-6 border-t border-gray-100 pt-5">
              <h3 className="font-bold text-gray-900">
                Danh mục
              </h3>

              <div className="mt-3 space-y-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                      category === item
                        ? "bg-orange-50 font-bold text-orange-500"
                        : "text-gray-600 hover:bg-gray-50 hover:text-orange-500"
                    }`}
                  >
                    <span>{item}</span>

                    {category === item && (
                      <span>✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* GIÁ */}
            <div className="mt-6 border-t border-gray-100 pt-5">
              <h3 className="font-bold text-gray-900">
                Khoảng giá
              </h3>

              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <label className="flex cursor-pointer gap-2">
                  <input type="radio" name="price" />
                  Dưới 300.000đ
                </label>

                <label className="flex cursor-pointer gap-2">
                  <input type="radio" name="price" />
                  300.000đ - 500.000đ
                </label>

                <label className="flex cursor-pointer gap-2">
                  <input type="radio" name="price" />
                  500.000đ - 1.000.000đ
                </label>

                <label className="flex cursor-pointer gap-2">
                  <input type="radio" name="price" />
                  Trên 1.000.000đ
                </label>
              </div>
            </div>

          </aside>

          {/* PRODUCTS */}
          <div>

            {/* HEADER */}
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="text-xl font-black text-gray-900">
                  Tất cả sản phẩm
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {filteredProducts.length} sản phẩm
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Sắp xếp:
                </span>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold outline-none focus:border-orange-500"
                >
                  <option>Mới nhất</option>
                  <option>Giá thấp đến cao</option>
                  <option>Giá cao đến thấp</option>
                </select>
              </div>

            </div>

            {/* GRID */}
            {filteredProducts.length > 0 ? (
              <div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
                <div className="text-5xl">🧸</div>

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  Chưa có sản phẩm
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Hãy thử chọn danh mục khác.
                </p>

                <button
                  type="button"
                  onClick={() => setCategory("Tất cả")}
                  className="mt-5 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-orange-600"
                >
                  Xem tất cả sản phẩm
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

    </main>
  );
}