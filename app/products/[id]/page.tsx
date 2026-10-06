"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import {
  ArrowLeft,
  Check,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
} from "lucide-react";

import { useCart } from "@/components/context/CartContext";

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  image: string;
  rating: number;
}

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

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const productId = Number(params.id);

  const product = products.find(
    (item) => item.id === productId,
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-3xl font-black text-gray-900">
            Không tìm thấy sản phẩm
          </h1>

          <p className="mt-3 text-gray-500">
            Sản phẩm bạn đang tìm kiếm không tồn tại.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
          >
            <ArrowLeft size={18} />
            Quay lại sản phẩm
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        oldPrice: product.oldPrice,
        discount: product.discount,
        image: product.image,
      },
      quantity,
    );

    alert(
      `Đã thêm ${quantity} "${product.name}" vào giỏ hàng!`,
    );
  };

  const handleBuyNow = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        oldPrice: product.oldPrice,
        discount: product.discount,
        image: product.image,
      },
      quantity,
    );

    router.push("/cart");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* BREADCRUMB */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link
              href="/"
              className="transition hover:text-red-500"
            >
              Trang chủ
            </Link>

            <span>/</span>

            <Link
              href="/products"
              className="transition hover:text-red-500"
            >
              Sản phẩm
            </Link>

            <span>/</span>

            <span className="font-semibold text-gray-800">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAIL */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT - IMAGE */}
          <div>
            <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              {/* SALE */}
              <div className="absolute left-5 top-5 z-10 rounded-xl bg-red-500 px-3 py-2 text-sm font-black text-white shadow">
                {product.discount}
              </div>

              {/* FAVORITE */}
              <button
                type="button"
                onClick={() =>
                  setIsFavorite(!isFavorite)
                }
                aria-label="Yêu thích"
                className={`absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 ${
                  isFavorite
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                <Heart
                  size={21}
                  fill={
                    isFavorite
                      ? "currentColor"
                      : "none"
                  }
                />
              </button>

              <div className="relative h-[420px] sm:h-[500px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8 transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* SERVICE */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-gray-100">
                <Truck
                  className="mx-auto text-red-500"
                  size={24}
                />

                <p className="mt-2 text-xs font-bold text-gray-700">
                  Giao hàng nhanh
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-gray-100">
                <ShieldCheck
                  className="mx-auto text-red-500"
                  size={24}
                />

                <p className="mt-2 text-xs font-bold text-gray-700">
                  Chính hãng
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-gray-100">
                <RotateCcw
                  className="mx-auto text-red-500"
                  size={24}
                />

                <p className="mt-2 text-xs font-bold text-gray-700">
                  Đổi trả dễ dàng
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - INFO */}
          <div>
            {/* BRAND */}
            <div className="flex items-center gap-2 text-sm">
              <span className="rounded-full bg-red-50 px-3 py-1 font-bold text-red-500">
                TOY STORE
              </span>

              <span className="text-gray-400">
                Mã SP: TS-
                {product.id.toString().padStart(4, "0")}
              </span>
            </div>

            {/* NAME */}
            <h1 className="mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            {/* RATING */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map(
                  (_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ),
                )}
              </div>

              <span className="text-sm font-semibold text-gray-600">
                {product.rating}.0
              </span>

              <span className="text-gray-300">
                |
              </span>

              <span className="text-sm text-gray-500">
                Đã bán nhiều
              </span>
            </div>

            {/* PRICE */}
            <div className="mt-6 rounded-2xl bg-red-50 p-5">
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-3xl font-black text-red-500 sm:text-4xl">
                  {product.price}
                </span>

                <span className="text-base text-gray-400 line-through">
                  {product.oldPrice}
                </span>

                <span className="rounded-lg bg-red-500 px-2.5 py-1 text-sm font-black text-white">
                  {product.discount}
                </span>
              </div>

              <p className="mt-2 text-sm text-red-500">
                Giá ưu đãi có thể thay đổi theo chương
                trình khuyến mãi.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                  <Check
                    size={16}
                    className="text-green-600"
                  />
                </div>

                <span className="text-sm text-gray-700">
                  Sản phẩm chính hãng, chất lượng cao
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                  <Check
                    size={16}
                    className="text-green-600"
                  />
                </div>

                <span className="text-sm text-gray-700">
                  Đóng gói cẩn thận trước khi giao hàng
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                  <Check
                    size={16}
                    className="text-green-600"
                  />
                </div>

                <span className="text-sm text-gray-700">
                  Hỗ trợ đổi trả theo chính sách cửa hàng
                </span>
              </div>
            </div>

            {/* STOCK */}
            <div className="mt-7 rounded-2xl border border-gray-100 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">
                  Tình trạng
                </span>

                <span className="font-bold text-green-600">
                  Còn hàng
                </span>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-bold text-gray-800">
                Số lượng
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      Math.max(1, quantity - 1),
                    )
                  }
                  className="flex h-11 w-11 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                >
                  <Minus size={17} />
                </button>

                <span className="flex h-11 min-w-12 items-center justify-center border-x border-gray-200 px-3 font-bold text-gray-900">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="flex h-11 w-11 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                >
                  <Plus size={17} />
                </button>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-red-500 bg-white py-3.5 font-black text-red-500 transition hover:bg-red-50 active:scale-95"
              >
                <ShoppingCart size={20} />
                Thêm vào giỏ
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="flex items-center justify-center gap-2 rounded-full bg-red-500 py-3.5 font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-600 active:scale-95"
              >
                Mua ngay
              </button>
            </div>

            {/* NOTE */}
            <div className="mt-6 rounded-2xl bg-gray-100 p-4">
              <p className="text-sm leading-6 text-gray-600">
                🚚 Miễn phí vận chuyển cho đơn hàng đủ
                điều kiện.
                <br />
                🎁 Nhiều ưu đãi hấp dẫn dành cho khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DESCRIPTION */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="rounded-3xl bg-gray-50 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-gray-900">
              Thông tin sản phẩm
            </h2>

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-bold text-gray-900">
                  Mô tả
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {product.name} là sản phẩm đồ chơi
                  phù hợp cho trẻ em, mang đến những
                  giờ phút vui chơi và khám phá thú vị.
                  Sản phẩm được lựa chọn với tiêu chí
                  an toàn, đẹp mắt và phù hợp với nhu
                  cầu vui chơi của bé.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Chính sách
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex gap-3">
                    <Check
                      className="mt-0.5 shrink-0 text-green-500"
                      size={18}
                    />

                    <span className="text-sm text-gray-600">
                      Hỗ trợ tư vấn sản phẩm.
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Check
                      className="mt-0.5 shrink-0 text-green-500"
                      size={18}
                    />

                    <span className="text-sm text-gray-600">
                      Đóng gói cẩn thận.
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Check
                      className="mt-0.5 shrink-0 text-green-500"
                      size={18}
                    />

                    <span className="text-sm text-gray-600">
                      Hỗ trợ đổi trả theo chính sách.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}