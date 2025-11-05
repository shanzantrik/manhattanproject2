import { NextRequest, NextResponse } from "next/server";
import { sendPurchaseConfirmationEmail, sendBuyerConfirmationEmail } from "@/lib/email";

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
      const price = webhookData?.data?.price || webhookData?.price || 49;
      const currency = webhookData?.data?.currency || webhookData?.currency || "USD";

      console.log(`Payment confirmed for invoice ${invoiceId}, buyer: ${buyerEmail}`);

      // Send emails
      try {
        // Send notification to contact@manhattanproject20.com
        await sendPurchaseConfirmationEmail(buyerEmail || "unknown@example.com", invoiceId, price, currency);
        console.log("Purchase notification email sent to contact@manhattanproject20.com");

        // Send confirmation to buyer if email is available
        if (buyerEmail) {
          await sendBuyerConfirmationEmail(buyerEmail, invoiceId, price, currency);
          console.log("Confirmation email sent to buyer:", buyerEmail);
        }
      } catch (emailError) {
        console.error("Error sending emails:", emailError);
        // Don't fail the webhook if email fails, but log it
      }
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
