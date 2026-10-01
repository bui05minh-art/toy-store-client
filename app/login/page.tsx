"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Sau này nối API đăng nhập từ Backend ở đây
    console.log("Login:", {
      email,
      password,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* =========================
            LEFT - BRANDING
        ========================= */}
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-rose-400 lg:flex">
          {/* Decorative circles */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/10" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 text-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                <ShoppingBag
                  size={26}
                  className="text-red-500"
                />
              </div>

              <div>
                <p className="text-xl font-black">
                  TOY STORE
                </p>

                <p className="text-xs font-medium text-red-100">
                  Thế giới đồ chơi
                </p>
              </div>
            </Link>

            {/* Content */}
            <div className="max-w-lg">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                🎈 Chào mừng bạn quay trở lại
              </span>

              <h1 className="mt-6 text-5xl font-black leading-tight text-white xl:text-6xl">
                Mua sắm vui vẻ,
                <br />
                <span className="text-yellow-300">
                  niềm vui bất tận!
                </span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-red-50">
                Đăng nhập để khám phá hàng nghìn món đồ
                chơi thú vị dành cho bé yêu.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    ✓
                  </div>

                  <span className="font-semibold">
                    Sản phẩm chính hãng
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    ✓
                  </div>

                  <span className="font-semibold">
                    Nhiều ưu đãi hấp dẫn
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    ✓
                  </div>

                  <span className="font-semibold">
                    Giao hàng nhanh chóng
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <p className="text-sm text-red-100">
              © 2026 Toy Store. All rights reserved.
            </p>
          </div>
        </section>

        {/* =========================
            RIGHT - LOGIN FORM
        ========================= */}
        <section className="flex items-center justify-center px-4 py-10 sm:px-8">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-8 flex items-center justify-center gap-3 lg:hidden"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-200">
                <ShoppingBag size={23} />
              </div>

              <div>
                <p className="text-xl font-black text-gray-900">
                  TOY STORE
                </p>

                <p className="text-xs text-gray-500">
                  Thế giới đồ chơi
                </p>
              </div>
            </Link>

            {/* Heading */}
            <div className="text-center sm:text-left">
              <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
                ĐĂNG NHẬP
              </span>

              <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl">
                Chào mừng trở lại! 👋
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Đăng nhập vào tài khoản để tiếp tục mua sắm
                tại Toy Store.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Nhập email của bạn"
                    required
                    className="h-13 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-bold text-gray-800"
                  >
                    Mật khẩu
                  </label>

                  <button
                    type="button"
                    className="text-xs font-bold text-red-500 transition hover:text-red-600"
                  >
                    Quên mật khẩu?
                  </button>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Nhập mật khẩu"
                    required
                    className="h-13 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Ẩn mật khẩu"
                        : "Hiện mật khẩu"
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-red-500"
                />

                <span className="text-sm text-gray-600">
                  Ghi nhớ đăng nhập
                </span>
              </label>

              {/* Login */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 py-3.5 font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-600 hover:shadow-xl active:scale-[0.98]"
              >
                Đăng nhập

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium text-gray-400">
                HOẶC
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Register */}
            <div className="rounded-2xl border border-red-100 bg-red-50 p-5 text-center">
              <p className="text-sm text-gray-600">
                Bạn chưa có tài khoản?
              </p>

              <Link
                href="/register"
                className="mt-2 inline-block font-black text-red-500 transition hover:text-red-600"
              >
                Đăng ký tài khoản →
              </Link>
            </div>

            {/* Security */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck size={16} />

              <span>
                Thông tin của bạn được bảo mật an toàn
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}