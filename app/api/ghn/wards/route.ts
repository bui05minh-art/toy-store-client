import { NextRequest, NextResponse } from "next/server";

const GHN_API_URL =
  "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward";

export async function GET(request: NextRequest) {
  try {
    const districtId =
      request.nextUrl.searchParams.get("district_id");

    if (!districtId) {
      return NextResponse.json(
        {
          success: false,
          message: "Thiếu district_id.",
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
            "Chưa cấu hình GHN_TOKEN hoặc GHN_SHOP_ID trong .env.local",
        },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${GHN_API_URL}?district_id=${districtId}`,
      {
        method: "GET",
        headers: {
          Token: token,
          ShopId: shopId,
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok || data.code !== 200) {
      return NextResponse.json(
        {
          success: false,
          message:
            data.message || "Không thể lấy phường/xã từ GHN.",
        },
        { status: response.status || 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data.data,
    });
  } catch (error) {
    console.error("GHN wards error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể kết nối tới GHN.",
      },
      { status: 500 }
    );
  }
}