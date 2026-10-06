"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Package,
  Truck,
} from "lucide-react";
import { useCart } from "@/components/context/CartContext";

interface Province {
  ProvinceID: number;
  ProvinceName: string;
}

interface District {
  DistrictID: number;
  DistrictName: string;
}

interface Ward {
  WardCode: string;
  WardName: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, totalItems, totalPrice } = useCart();

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);

  const [provinceId, setProvinceId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [wardCode, setWardCode] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [shippingFee, setShippingFee] = useState(0);

  const [loadingProvinces, setLoadingProvinces] = useState(false);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [loadingWards, setLoadingWards] = useState(false);
  const [loadingFee, setLoadingFee] = useState(false);

  const [error, setError] = useState("");
  const [orderError, setOrderError] = useState("");

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  /*
   * ==========================================
   * 1. LẤY DANH SÁCH TỈNH / THÀNH PHỐ
   * ==========================================
   */
  useEffect(() => {
    const loadProvinces = async () => {
      setLoadingProvinces(true);
      setError("");

      try {
        const response = await fetch("/api/ghn/provinces", {
          cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
              "Không thể lấy danh sách tỉnh/thành phố.",
          );
        }

        setProvinces(result.data || []);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Không thể kết nối tới máy chủ.",
        );
      } finally {
        setLoadingProvinces(false);
      }
    };

    loadProvinces();
  }, []);

  /*
   * ==========================================
   * 2. KHI CHỌN TỈNH → LẤY QUẬN / HUYỆN
   * ==========================================
   */
  useEffect(() => {
    if (!provinceId) {
      return;
    }

    const loadDistricts = async () => {
      setLoadingDistricts(true);
      setError("");

      try {
        const response = await fetch(
          `/api/ghn/districts?province_id=${provinceId}`,
          {
            cache: "no-store",
          },
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
              "Không thể lấy danh sách quận/huyện.",
          );
        }

        setDistricts(result.data || []);
      } catch (err) {
        setDistricts([]);

        setError(
          err instanceof Error
            ? err.message
            : "Không thể lấy danh sách quận/huyện.",
        );
      } finally {
        setLoadingDistricts(false);
      }
    };

    loadDistricts();
  }, [provinceId]);

  /*
   * ==========================================
   * 3. KHI CHỌN QUẬN → LẤY PHƯỜNG / XÃ
   * ==========================================
   */
  useEffect(() => {
    if (!districtId) {
      return;
    }

    const loadWards = async () => {
      setLoadingWards(true);
      setError("");

      try {
        const response = await fetch(
          `/api/ghn/wards?district_id=${districtId}`,
          {
            cache: "no-store",
          },
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
              "Không thể lấy danh sách phường/xã.",
          );
        }

        setWards(result.data || []);
      } catch (err) {
        setWards([]);

        setError(
          err instanceof Error
            ? err.message
            : "Không thể lấy danh sách phường/xã.",
        );
      } finally {
        setLoadingWards(false);
      }
    };

    loadWards();
  }, [districtId]);

  /*
   * ==========================================
   * 4. KHI CHỌN PHƯỜNG → TÍNH PHÍ GHN
   * ==========================================
   */
  useEffect(() => {
    if (!districtId || !wardCode || totalItems <= 0) {
      return;
    }

    const calculateShippingFee = async () => {
      setLoadingFee(true);
      setError("");

      try {
        const response = await fetch("/api/ghn/fee", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to_district_id: Number(districtId),
            to_ward_code: wardCode,

            /*
             * TẠM THỜI:
             * Dùng kiện hàng mẫu 1kg.
             *
             * Sau này có thể thay bằng
             * trọng lượng thực tế của sản phẩm.
             */
            weight: 1000,

            length: 20,
            width: 15,
            height: 10,

            insurance_value: 0,
            cod_value: 0,
          }),
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
              "GHN không thể tính phí vận chuyển.",
          );
        }

        setShippingFee(Number(result.shippingFee) || 0);
      } catch (err) {
        setShippingFee(0);

        setError(
          err instanceof Error
            ? err.message
            : "Không thể tính phí vận chuyển.",
        );
      } finally {
        setLoadingFee(false);
      }
    };

    calculateShippingFee();
  }, [districtId, wardCode, totalItems]);

  /*
   * ==========================================
   * 5. TỔNG TIỀN
   * ==========================================
   */
  const grandTotal = totalPrice + shippingFee;

  /*
   * ==========================================
   * 6. KIỂM TRA THÔNG TIN
   * ==========================================
   */
  const validateOrder = () => {
    setOrderError("");

    if (!fullName.trim()) {
      setOrderError("Vui lòng nhập họ và tên.");
      return false;
    }

    if (!phone.trim()) {
      setOrderError("Vui lòng nhập số điện thoại.");
      return false;
    }

    const cleanPhone = phone.replace(/\s/g, "");

    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;

    if (!phoneRegex.test(cleanPhone)) {
      setOrderError("Số điện thoại không hợp lệ.");
      return false;
    }

    if (!provinceId) {
      setOrderError("Vui lòng chọn tỉnh/thành phố.");
      return false;
    }

    if (!districtId) {
      setOrderError("Vui lòng chọn quận/huyện.");
      return false;
    }

    if (!wardCode) {
      setOrderError("Vui lòng chọn phường/xã.");
      return false;
    }

    if (!address.trim()) {
      setOrderError("Vui lòng nhập địa chỉ chi tiết.");
      return false;
    }

    if (shippingFee <= 0) {
      setOrderError(
        "Chưa tính được phí vận chuyển. Vui lòng kiểm tra lại địa chỉ nhận hàng.",
      );
      return false;
    }

    return true;
  };

  /*
   * ==========================================
   * 7. ĐẶT HÀNG
   * ==========================================
   */
  const handlePlaceOrder = () => {
    if (!validateOrder()) {
      return;
    }

    /*
     * Hiện tại mới kiểm tra dữ liệu.
     *
     * Bước tiếp theo sẽ kết nối API tạo đơn hàng.
     */

    alert(
      `Thông tin đặt hàng hợp lệ!\n\n` +
        `Khách hàng: ${fullName}\n` +
        `Số điện thoại: ${phone}\n` +
        `Phí vận chuyển: ${formatPrice(shippingFee)}\n` +
        `Tổng tiền: ${formatPrice(grandTotal)}`,
    );
  };

  /*
   * ==========================================
   * 8. GIỎ HÀNG TRỐNG
   * ==========================================
   */
  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <Package className="mx-auto mb-4 h-16 w-16 text-gray-300" />

          <h1 className="text-2xl font-bold text-gray-900">
            Giỏ hàng đang trống
          </h1>

          <p className="mt-2 text-gray-500">
            Bạn cần thêm sản phẩm vào giỏ hàng trước khi
            thanh toán.
          </p>

          <button
            onClick={() => router.push("/products")}
            className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Tiếp tục mua sắm
          </button>
        </div>
      </main>
    );
  }

  /*
   * ==========================================
   * 9. GIAO DIỆN CHECKOUT
   * ==========================================
   */
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-red-600 to-rose-500">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <button
            onClick={() => router.push("/cart")}
            className="mb-4 flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />

            Quay lại giỏ hàng
          </button>

          <h1 className="text-3xl font-bold text-white">
            Thanh toán
          </h1>

          <p className="mt-2 text-white/80">
            Hoàn tất thông tin để đặt hàng
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-3">
        {/* ======================================
            LEFT
        ======================================= */}
        <div className="space-y-6 lg:col-span-2">
          {/* THÔNG TIN NHẬN HÀNG */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-red-50 p-3">
                <MapPin className="h-5 w-5 text-red-600" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Thông tin nhận hàng
                </h2>

                <p className="text-sm text-gray-500">
                  Nhập chính xác địa chỉ để GHN giao hàng
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* HỌ TÊN */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Họ và tên
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    setOrderError("");
                  }}
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* SỐ ĐIỆN THOẠI */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Số điện thoại
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setOrderError("");
                  }}
                  placeholder="0987654321"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* TỈNH / THÀNH PHỐ */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Tỉnh / Thành phố
                </label>

                <select
                  value={provinceId}
                  onChange={(e) => {
                    const value = e.target.value;

                    setProvinceId(value);

                    setDistrictId("");
                    setWardCode("");

                    setDistricts([]);
                    setWards([]);

                    setShippingFee(0);
                    setError("");
                    setOrderError("");
                  }}
                  disabled={loadingProvinces}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:bg-gray-100"
                >
                  <option value="">
                    {loadingProvinces
                      ? "Đang tải tỉnh/thành..."
                      : "-- Chọn tỉnh/thành phố --"}
                  </option>

                  {provinces.map((province) => (
                    <option
                      key={province.ProvinceID}
                      value={province.ProvinceID}
                    >
                      {province.ProvinceName}
                    </option>
                  ))}
                </select>
              </div>

              {/* QUẬN / HUYỆN */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Quận / Huyện
                </label>

                <select
                  value={districtId}
                  onChange={(e) => {
                    const value = e.target.value;

                    setDistrictId(value);

                    setWardCode("");
                    setWards([]);
                    setShippingFee(0);

                    setError("");
                    setOrderError("");
                  }}
                  disabled={
                    !provinceId || loadingDistricts
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:bg-gray-100"
                >
                  <option value="">
                    {loadingDistricts
                      ? "Đang tải quận/huyện..."
                      : "-- Chọn quận/huyện --"}
                  </option>

                  {districts.map((district) => (
                    <option
                      key={district.DistrictID}
                      value={district.DistrictID}
                    >
                      {district.DistrictName}
                    </option>
                  ))}
                </select>
              </div>

              {/* PHƯỜNG / XÃ */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phường / Xã
                </label>

                <select
                  value={wardCode}
                  onChange={(e) => {
                    setWardCode(e.target.value);
                    setError("");
                    setOrderError("");
                  }}
                  disabled={
                    !districtId || loadingWards
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:bg-gray-100"
                >
                  <option value="">
                    {loadingWards
                      ? "Đang tải phường/xã..."
                      : "-- Chọn phường/xã --"}
                  </option>

                  {wards.map((ward) => (
                    <option
                      key={ward.WardCode}
                      value={ward.WardCode}
                    >
                      {ward.WardName}
                    </option>
                  ))}
                </select>
              </div>

              {/* ĐỊA CHỈ */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Địa chỉ chi tiết
                </label>

                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setOrderError("");
                  }}
                  placeholder="Số nhà, tên đường..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>
            </div>
          </section>

          {/* VẬN CHUYỂN */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-red-50 p-3">
                <Truck className="h-5 w-5 text-red-600" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Vận chuyển
                </h2>

                <p className="text-sm text-gray-500">
                  Phí vận chuyển được tính trực tiếp từ GHN
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-gray-50 p-4">
              {!wardCode ? (
                <div className="text-sm text-gray-500">
                  Vui lòng chọn đầy đủ tỉnh, quận/huyện và
                  phường/xã để tính phí vận chuyển.
                </div>
              ) : loadingFee ? (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />

                  Đang tính phí vận chuyển...
                </div>
              ) : shippingFee > 0 ? (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">
                      Giao hàng GHN
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Phí vận chuyển theo địa chỉ nhận hàng
                    </p>
                  </div>

                  <p className="text-lg font-bold text-red-600">
                    {formatPrice(shippingFee)}
                  </p>
                </div>
              ) : (
                <div className="text-sm text-red-500">
                  Không thể tính phí vận chuyển.
                </div>
              )}
            </div>
          </section>

          {/* LỖI GHN */}
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* LỖI ĐẶT HÀNG */}
          {orderError && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {orderError}
            </div>
          )}
        </div>

        {/* ======================================
            RIGHT
        ======================================= */}
        <div className="lg:col-span-1">
          <section className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Đơn hàng
            </h2>

            {/* SẢN PHẨM */}
            <div className="mt-5 space-y-4">
              {cartItems.map((item) => {
                const itemPrice =
                  Number(
                    item.price
                      .replace(/\./g, "")
                      .replace("đ", ""),
                  ) * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="flex gap-3 border-b border-gray-100 pb-4"
                  >
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                   <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                    />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-semibold text-gray-800">
                        {item.name}
                      </p>

                      <div className="mt-1 flex justify-between">
                        <span className="text-xs text-gray-500">
                          x{item.quantity}
                        </span>

                        <span className="text-sm font-semibold text-gray-900">
                          {formatPrice(itemPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* TỔNG TIỀN */}
            <div className="mt-5 space-y-3 border-b border-gray-200 pb-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Tạm tính
                </span>

                <span className="font-medium text-gray-800">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Phí vận chuyển
                </span>

                <span className="font-medium text-gray-800">
                  {loadingFee
                    ? "Đang tính..."
                    : shippingFee > 0
                      ? formatPrice(shippingFee)
                      : "--"}
                </span>
              </div>
            </div>

            {/* TỔNG CỘNG */}
            <div className="mt-5 flex items-end justify-between">
              <span className="font-semibold text-gray-700">
                Tổng cộng
              </span>

              <span className="text-2xl font-bold text-red-600">
                {formatPrice(grandTotal)}
              </span>
            </div>

            {/* ĐẶT HÀNG */}
            <button
              onClick={handlePlaceOrder}
              disabled={loadingFee || shippingFee <= 0}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
            >
              <CheckCircle2 className="h-5 w-5" />

              {loadingFee
                ? "Đang tính phí..."
                : "Đặt hàng"}
            </button>

            <p className="mt-3 text-center text-xs text-gray-400">
              Phí vận chuyển được lấy trực tiếp từ hệ thống GHN.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}