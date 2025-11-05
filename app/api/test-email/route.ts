import { NextRequest, NextResponse } from "next/server";
import { sendPurchaseConfirmationEmail, sendBuyerConfirmationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY not configured. Please add it to your environment variables." },
        { status: 500 }
      );
    }

    const { type = "both" } = await request.json();

    const testInvoiceId = `TEST-${Date.now()}`;
    const testBuyerEmail = "test@example.com";
    const testAmount = 49;
    const testCurrency = "USD";

    const results: any = {};

    try {
      if (type === "admin" || type === "both") {
        // Test sending to contact@manhattanproject20.com
        const adminResult = await sendPurchaseConfirmationEmail(
          testBuyerEmail,
          testInvoiceId,
          testAmount,
          testCurrency
        );
        results.adminEmail = {
          success: true,
          message: "Test email sent to contact@manhattanproject20.com",
          data: adminResult.data,
        };
      }

      if (type === "buyer" || type === "both") {
        // Test sending buyer confirmation
        const buyerResult = await sendBuyerConfirmationEmail(
          testBuyerEmail,
          testInvoiceId,
          testAmount,
          testCurrency
        );
        results.buyerEmail = {
          success: true,
          message: "Test buyer confirmation email sent",
          data: buyerResult.data,
        };
      }

      return NextResponse.json({
        success: true,
        message: "Test emails sent successfully",
        results,
      });
    } catch (emailError: any) {
      console.error("Email test error:", emailError);
      return NextResponse.json(
        {
          error: "Failed to send test email",
          details: emailError.message || String(emailError),
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Test email endpoint error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error.message || String(error),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Test Email Endpoint",
    usage: "POST to /api/test-email with optional body: { type: 'admin' | 'buyer' | 'both' }",
    note: "Requires RESEND_API_KEY environment variable",
  });
}

