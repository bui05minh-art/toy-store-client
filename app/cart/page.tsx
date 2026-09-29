"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { useCart } from "@/components/context/CartContext";

export default function CartPage() {
  const router = useRouter();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  const formatPrice = (price: number) => {
    return `${price.toLocaleString("vi-VN")}đ`;
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-gray-100">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
              <ShoppingBag
                size={38}
                className="text-red-500"
              />
            </div>

            <h1 className="mt-6 text-2xl font-black text-gray-900">
              Giỏ hàng đang trống
            </h1>

            <p className="mt-3 text-gray-500">
              Hãy thêm những món đồ chơi yêu thích vào giỏ hàng.
            </p>

            <Link
              href="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3 font-bold text-white transition hover:bg-red-600"
            >
              <ArrowLeft size={18} />
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-rose-400">
        <div className="mx-auto max-w-7xl px-4 py-10 text-white sm:px-6">
          <p className="text-sm font-semibold text-red-100">
            Toy Store
          </p>

          <h1 className="mt-1 text-3xl font-black sm:text-4xl">
            Giỏ hàng của bạn
          </h1>

          <p className="mt-2 text-red-100">
            Bạn đang có {totalItems} sản phẩm trong giỏ hàng.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Cart items */}
          <div className="space-y-4">
            {cartItems.map((item) => {
              const price = Number(
                item.price
                  .replace(/\./g, "")
                  .replace("đ", ""),
              );

              const itemTotal = price * item.quantity;

              return (
                <article
                  key={item.id}
                  className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-5"
                >
                  <div className="flex gap-4">
                    <Link
                      href={`/products/${item.id}`}
                      className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-gray-50 sm:h-32 sm:w-32"
                    >
                    <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="128px"
                    className="object-contain p-3"
                    />
                    </Link>

                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between gap-3">
                        <div>
                          <Link
                            href={`/products/${item.id}`}
                            className="line-clamp-2 font-bold text-gray-900 transition hover:text-red-500"
                          >
                            {item.name}
                          </Link>

                          <span className="mt-1 inline-block rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-red-500">
                            {item.discount}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          aria-label="Xóa sản phẩm"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="font-black text-red-500">
                            {item.price}
                          </span>

                          <span className="ml-2 text-xs text-gray-400 line-through">
                            {item.oldPrice}
                          </span>
                        </div>

                        <div className="flex items-center overflow-hidden rounded-xl border border-gray-200">
                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="flex h-9 w-9 items-center justify-center text-gray-500 transition hover:bg-gray-100"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="flex h-9 min-w-9 items-center justify-center border-x border-gray-200 px-2 text-sm font-bold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="flex h-9 w-9 items-center justify-center text-gray-500 transition hover:bg-gray-100"
                          >
                            <Plus size={15} />
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 border-t border-gray-100 pt-3 text-right">
                        <span className="text-xs text-gray-400">
                          Thành tiền:{" "}
                        </span>

                        <span className="font-black text-gray-900">
                          {formatPrice(itemTotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-red-500 transition hover:text-red-600"
            >
              <ArrowLeft size={18} />
              Tiếp tục mua sắm
            </Link>
          </div>

          {/* Summary */}
          <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:sticky lg:top-24">
            <h2 className="text-xl font-black text-gray-900">
              Tổng đơn hàng
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Sản phẩm
                </span>

                <span className="font-semibold text-gray-900">
                  {totalItems} sản phẩm
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Tạm tính
                </span>

                <span className="font-semibold text-gray-900">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Phí vận chuyển
                </span>

                <span className="font-semibold text-gray-500">
                  Tính ở bước thanh toán
                </span>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-end justify-between">
                  <span className="font-bold text-gray-900">
                    Tạm tính
                  </span>

                  <span className="text-2xl font-black text-red-500">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <p className="mt-1 text-right text-xs text-gray-400">
                  Phí GHN sẽ được tính tại trang thanh toán.
                </p>
              </div>
            </div>

            {/* Tiến hành thanh toán */}
            <button
              type="button"
              onClick={() => router.push("/checkout")}
              className="mt-6 w-full rounded-full bg-red-500 py-3.5 font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-600 active:scale-95"
            >
              Tiến hành thanh toán
            </button>

            <div className="mt-5 rounded-2xl bg-gray-50 p-4 text-center">
              <p className="text-xs leading-5 text-gray-500">
                🔒 Thông tin của bạn được bảo mật an toàn.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}