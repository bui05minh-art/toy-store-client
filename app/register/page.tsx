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
  User,
  Phone,
  Check,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleRegister = (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    // TODO: Sau này nối API đăng ký từ Backend ở đây
    console.log("Register:", {
      fullName,
      email,
      phone,
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
                🎉 Tham gia cùng Toy Store
              </span>

              <h1 className="mt-6 text-5xl font-black leading-tight text-white xl:text-6xl">
                Tạo tài khoản,
                <br />
                <span className="text-yellow-300">
                  nhận thật nhiều
                </span>
                <br />
                ưu đãi!
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-red-50">
                Đăng ký tài khoản để trải nghiệm mua sắm
                nhanh chóng và nhận những ưu đãi hấp dẫn
                dành riêng cho thành viên.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    <Check size={17} />
                  </div>

                  <span className="font-semibold">
                    Theo dõi đơn hàng dễ dàng
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    <Check size={17} />
                  </div>

                  <span className="font-semibold">
                    Lưu thông tin mua hàng
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    <Check size={17} />
                  </div>

                  <span className="font-semibold">
                    Nhận ưu đãi dành riêng cho thành viên
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
            RIGHT - REGISTER FORM
        ========================= */}
        <section className="flex items-center justify-center px-4 py-8 sm:px-8">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-6 flex items-center justify-center gap-3 lg:hidden"
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
                ĐĂNG KÝ
              </span>

              <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
                Tạo tài khoản 🎁
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Đăng ký để bắt đầu trải nghiệm mua sắm tại
                Toy Store.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleRegister}
              className="mt-6 space-y-4"
            >
              {/* Full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Họ và tên
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) =>
                      setFullName(e.target.value)
                    }
                    placeholder="Nhập họ và tên"
                    required
                    className="h-12 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

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
                    size={18}
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
                    className="h-12 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Số điện thoại
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="Nhập số điện thoại"
                    required
                    className="h-12 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Mật khẩu
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
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
                    placeholder="Tạo mật khẩu"
                    required
                    minLength={6}
                    className="h-12 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
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

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Xác nhận mật khẩu
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value,
                      )
                    }
                    placeholder="Nhập lại mật khẩu"
                    required
                    minLength={6}
                    className="h-12 w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword,
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Ẩn mật khẩu"
                        : "Hiện mật khẩu"
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-red-500"
                />

                <span className="text-xs leading-5 text-gray-500">
                  Tôi đồng ý với{" "}
                  <span className="font-bold text-red-500">
                    điều khoản sử dụng
                  </span>{" "}
                  và{" "}
                  <span className="font-bold text-red-500">
                    chính sách bảo mật
                  </span>{" "}
                  của Toy Store.
                </span>
              </label>

              {/* Register */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 py-3.5 font-black text-white shadow-lg shadow-red-200 transition hover:bg-red-600 hover:shadow-xl active:scale-[0.98]"
              >
                Tạo tài khoản

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Login */}
            <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4 text-center">
              <p className="text-sm text-gray-600">
                Bạn đã có tài khoản?
              </p>

              <Link
                href="/login"
                className="mt-1 inline-block font-black text-red-500 transition hover:text-red-600"
              >
                Đăng nhập ngay →
              </Link>
            </div>

            {/* Security */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck size={15} />

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