import { NextResponse } from "next/server";

const GHN_API_URL =
  "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province";

export async function GET() {
  try {
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

    const response = await fetch(GHN_API_URL, {
      method: "GET",
      headers: {
        Token: token,
        ShopId: shopId,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok || data.code !== 200) {
      return NextResponse.json(
        {
          success: false,
          message:
            data.message || "Không thể lấy danh sách tỉnh/thành từ GHN.",
        },
        { status: response.status || 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data.data,
    });
  } catch (error) {
    console.error("GHN provinces error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể kết nối tới GHN.",
      },
      { status: 500 }
    );
  }
}