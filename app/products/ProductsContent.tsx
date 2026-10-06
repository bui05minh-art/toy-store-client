"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

const PRODUCTS_PER_PAGE = 8;

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchKeyword = searchParams.get("search")?.trim() || "";

  const [category, setCategory] = useState("Tất cả");
  const [sort, setSort] = useState("Mới nhất");
  const [priceRange, setPriceRange] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);

  // ===============================
  // LỌC + TÌM KIẾM + SẮP XẾP
  // ===============================
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // TÌM KIẾM
    if (searchKeyword) {
      const keyword = searchKeyword.toLowerCase();

      result = result.filter((product) =>
        product.name.toLowerCase().includes(keyword),
      );
    }

    // DANH MỤC
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

    // KHOẢNG GIÁ
    if (priceRange !== "Tất cả") {
      result = result.filter((product) => {
        const price = Number(product.price.replace(/\D/g, ""));

        if (priceRange === "Dưới 300.000đ") {
          return price < 300000;
        }

        if (priceRange === "300.000đ - 500.000đ") {
          return price >= 300000 && price <= 500000;
        }

        if (priceRange === "500.000đ - 1.000.000đ") {
          return price > 500000 && price <= 1000000;
        }

        if (priceRange === "Trên 1.000.000đ") {
          return price > 1000000;
        }

        return true;
      });
    }

    // SẮP XẾP
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
  }, [category, sort, searchKeyword, priceRange]);

  // ===============================
  // PHÂN TRANG
  // ===============================
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE,
  );

  const paginatedProducts = useMemo(() => {
    const startIndex =
      (currentPage - 1) * PRODUCTS_PER_PAGE;

    const endIndex = startIndex + PRODUCTS_PER_PAGE;

    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  // ===============================
  // XÓA BỘ LỌC
  // ===============================
  const clearFilters = () => {
    setCategory("Tất cả");
    setPriceRange("Tất cả");
    setSort("Mới nhất");
    setCurrentPage(1);

    router.push("/products");
  };

  // ===============================
  // ĐỔI DANH MỤC
  // ===============================
  const handleCategoryChange = (item: string) => {
    setCategory(item);
    setCurrentPage(1);
  };

  // ===============================
  // ĐỔI GIÁ
  // ===============================
  const handlePriceChange = (value: string) => {
    setPriceRange(value);
    setCurrentPage(1);
  };

  // ===============================
  // ĐỔI SORT
  // ===============================
  const handleSortChange = (value: string) => {
    setSort(value);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-red-500 via-red-400 to-yellow-400">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <div className="max-w-2xl text-white">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest">
              🧸 Toy Store
            </p>

            <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              Thế giới đồ chơi
            </h1>

            <p className="mt-3 text-sm text-red-50 sm:text-base">
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
                onClick={clearFilters}
                className="text-xs font-semibold text-red-500 hover:underline"
              >
                Xóa lọc
              </button>
            </div>

            {/* TỪ KHÓA */}
            {searchKeyword && (
              <div className="mt-5 rounded-xl bg-red-50 p-3">
                <p className="text-[11px] font-bold uppercase tracking-wide text-red-400">
                  Đang tìm kiếm
                </p>

                <p className="mt-1 break-words text-sm font-black text-red-600">
                  &quot;{searchKeyword}&quot;
                </p>
              </div>
            )}

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
                    onClick={() => handleCategoryChange(item)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                      category === item
                        ? "bg-red-50 font-bold text-red-500"
                        : "text-gray-600 hover:bg-gray-50 hover:text-red-500"
                    }`}
                  >
                    <span>{item}</span>

                    {category === item && <span>✓</span>}
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
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    value="Tất cả"
                    checked={priceRange === "Tất cả"}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    className="accent-red-500"
                  />
                  Tất cả mức giá
                </label>

                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    value="Dưới 300.000đ"
                    checked={priceRange === "Dưới 300.000đ"}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    className="accent-red-500"
                  />
                  Dưới 300.000đ
                </label>

                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    value="300.000đ - 500.000đ"
                    checked={priceRange === "300.000đ - 500.000đ"}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    className="accent-red-500"
                  />
                  300.000đ - 500.000đ
                </label>

                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    value="500.000đ - 1.000.000đ"
                    checked={priceRange === "500.000đ - 1.000.000đ"}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    className="accent-red-500"
                  />
                  500.000đ - 1.000.000đ
                </label>

                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="price"
                    value="Trên 1.000.000đ"
                    checked={priceRange === "Trên 1.000.000đ"}
                    onChange={(e) => handlePriceChange(e.target.value)}
                    className="accent-red-500"
                  />
                  Trên 1.000.000đ
                </label>
              </div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <div>
            {/* BỘ LỌC ĐANG ÁP DỤNG */}
            {(searchKeyword ||
              category !== "Tất cả" ||
              priceRange !== "Tất cả") && (
              <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-sm font-bold text-gray-700">
                    Đang lọc:
                  </span>

                  {searchKeyword && (
                    <button
                      type="button"
                      onClick={() => router.push("/products")}
                      className="group flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 transition hover:bg-red-100"
                    >
                      🔎 {searchKeyword}
                      <span className="text-red-400 group-hover:text-red-600">
                        ×
                      </span>
                    </button>
                  )}

                  {category !== "Tất cả" && (
                    <button
                      type="button"
                      onClick={() => handleCategoryChange("Tất cả")}
                      className="group flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-600 transition hover:bg-orange-100"
                    >
                      📂 {category}
                      <span className="text-orange-400 group-hover:text-orange-600">
                        ×
                      </span>
                    </button>
                  )}

                  {priceRange !== "Tất cả" && (
                    <button
                      type="button"
                      onClick={() => handlePriceChange("Tất cả")}
                      className="group flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-bold text-yellow-700 transition hover:bg-yellow-100"
                    >
                      💰 {priceRange}
                      <span className="text-yellow-500 group-hover:text-yellow-700">
                        ×
                      </span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="ml-auto text-xs font-bold text-red-500 transition hover:text-red-700 hover:underline"
                  >
                    Xóa tất cả
                  </button>
                </div>
              </div>
            )}

            {/* HEADER */}
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-gray-900">
                  {searchKeyword
                    ? `Kết quả tìm kiếm cho "${searchKeyword}"`
                    : category === "Tất cả"
                      ? "Tất cả sản phẩm"
                      : category}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Tìm thấy {filteredProducts.length} sản phẩm
                </p>
              </div>

              {/* SORT */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Sắp xếp:
                </span>

                <select
                  value={sort}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold outline-none focus:border-red-500"
                >
                  <option>Mới nhất</option>
                  <option>Giá thấp đến cao</option>
                  <option>Giá cao đến thấp</option>
                </select>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-2">
                    {/* PREVIOUS */}
                    <button
                      type="button"
                      disabled={currentPage === 1}
                      onClick={() =>
                        setCurrentPage((page) => Math.max(1, page - 1))
                      }
                      className={`flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-bold transition ${
                        currentPage === 1
                          ? "cursor-not-allowed border-gray-100 bg-gray-100 text-gray-300"
                          : "border-gray-200 bg-white text-gray-600 hover:border-red-400 hover:bg-red-50 hover:text-red-500"
                      }`}
                    >
                      ←
                    </button>

                    {/* PAGE NUMBERS */}
                    {Array.from(
                      { length: totalPages },
                      (_, index) => index + 1,
                    ).map((page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => setCurrentPage(page)}
                        className={`flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-bold transition ${
                          currentPage === page
                            ? "border-red-500 bg-red-500 text-white shadow-md shadow-red-200"
                            : "border-gray-200 bg-white text-gray-600 hover:border-red-400 hover:bg-red-50 hover:text-red-500"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* NEXT */}
                    <button
                      type="button"
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((page) =>
                          Math.min(totalPages, page + 1),
                        )
                      }
                      className={`flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-bold transition ${
                        currentPage === totalPages
                          ? "cursor-not-allowed border-gray-100 bg-gray-100 text-gray-300"
                          : "border-gray-200 bg-white text-gray-600 hover:border-red-400 hover:bg-red-50 hover:text-red-500"
                      }`}
                    >
                      →
                    </button>
                  </div>
                )}

                {/* PAGE INFO */}
                {totalPages > 1 && (
                  <p className="mt-3 text-center text-xs text-gray-400">
                    Trang {currentPage} / {totalPages}
                  </p>
                )}
              </>
            ) : (
              /* EMPTY */
              <div className="mt-6 rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
                <div className="text-5xl">🔎</div>

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  Không tìm thấy sản phẩm
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Không có sản phẩm phù hợp với từ khóa
                  hoặc bộ lọc hiện tại.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-full bg-red-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-red-600"
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