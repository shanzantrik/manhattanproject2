import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { price, currency, itemDesc } = await request.json();

    // BitPay API credentials - should be stored in environment variables
    const BITPAY_API_KEY = process.env.BITPAY_API_KEY || "";
    const BITPAY_ENVIRONMENT = process.env.BITPAY_ENVIRONMENT || "test"; // 'test' or 'production'

    if (!BITPAY_API_KEY) {
      return NextResponse.json(
        { error: "BitPay API key not configured" },
        { status: 500 }
      );
    }

    // BitPay API endpoint
    const bitpayUrl =
      BITPAY_ENVIRONMENT === "production"
        ? "https://bitpay.com/invoices"
        : "https://test.bitpay.com/invoices";

    // Create invoice payload
    const invoiceData = {
      price: price,
      currency: currency || "USD",
      orderId: `MP20-${Date.now()}`,
      itemDesc: itemDesc || "The Manhattan Project 2.0 - Book Purchase",
      notificationURL: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/bitpay-webhook`,
      redirectURL: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/purchase/success`,
    };

    // Create invoice with BitPay
    const response = await fetch(bitpayUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Accept-Version": "2.0.0",
        "X-BitPay-Plugin-Info": "NextJS",
        Authorization: `Basic ${Buffer.from(BITPAY_API_KEY).toString("base64")}`,
      },
      body: JSON.stringify(invoiceData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("BitPay error:", data);
      return NextResponse.json(
        { error: data.error || "Failed to create invoice" },
        { status: response.status }
      );
    }

    // Return the payment URL
    return NextResponse.json({
      url: data.data?.url || data.url,
      invoiceId: data.data?.id || data.id,
    });
  } catch (error) {
    console.error("Invoice creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
