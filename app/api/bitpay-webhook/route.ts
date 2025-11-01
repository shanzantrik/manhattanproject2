import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const webhookData = await request.json();

    // Verify webhook signature if needed (BitPay provides signature verification)
    // For now, we'll log the webhook data

    console.log("BitPay Webhook received:", webhookData);

    // Handle different invoice statuses
    const status = webhookData?.data?.status || webhookData?.status;

    if (status === "confirmed" || status === "complete") {
      // Payment confirmed - send confirmation email, grant access, etc.
      const invoiceId = webhookData?.data?.id || webhookData?.id;
      const buyerEmail = webhookData?.data?.buyer?.email || webhookData?.buyer?.email;

      // TODO: Implement email sending, database updates, etc.
      console.log(`Payment confirmed for invoice ${invoiceId}, buyer: ${buyerEmail}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
