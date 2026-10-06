import { NextRequest, NextResponse } from "next/server";

const GHN_API_URL =
  "https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      to_district_id,
      to_ward_code,
      weight,
      length,
      width,
      height,
      insurance_value,
      cod_value,
    } = body;

    if (!to_district_id || !to_ward_code) {
      return NextResponse.json(
        {
          success: false,
          message: "Thiếu thông tin quận/huyện hoặc phường/xã.",
        },
        { status: 400 }
      );
    }

    if (!weight || weight <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Trọng lượng đơn hàng không hợp lệ.",
        },
        { status: 400 }
      );
    }

    const token = process.env.GHN_TOKEN;
    const shopId = process.env.GHN_SHOP_ID;

    if (!token || !shopId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Chưa cấu hình GHN_TOKEN hoặc GHN_SHOP_ID trong .env.local.",
        },
        { status: 500 }
      );
    }

    const ghnResponse = await fetch(GHN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Token: token,
        ShopId: shopId,
      },
      body: JSON.stringify({
        to_district_id: Number(to_district_id),
        to_ward_code: String(to_ward_code),

        // Đơn hàng dưới 20kg
        service_type_id: 2,

        // Trọng lượng gram
        weight: Number(weight),

        // Kích thước cm
        length: Number(length || 20),
        width: Number(width || 15),
        height: Number(height || 10),

        insurance_value: Number(insurance_value || 0),
        cod_value: Number(cod_value || 0),
      }),
    });

    const data = await ghnResponse.json();

    if (!ghnResponse.ok || data.code !== 200) {
      return NextResponse.json(
        {
          success: false,
          message:
            data.message || "GHN không thể tính phí vận chuyển.",
          ghnCode: data.code,
        },
        { status: ghnResponse.status || 400 }
      );
    }

    return NextResponse.json({
      success: true,
      shippingFee: data.data.total,
      serviceFee: data.data.service_fee,
      insuranceFee: data.data.insurance_fee,
      codFee: data.data.cod_fee,
    });
  } catch (error) {
    console.error("GHN fee error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi khi kết nối tới GHN.",
      },
      { status: 500 }
    );
  }
}