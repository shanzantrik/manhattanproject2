import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPurchaseConfirmationEmail(
  buyerEmail: string,
  invoiceId: string,
  amount: number,
  currency: string = "USD"
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Manhattan Project 2.0 <noreply@manhattanproject20.com>",
      to: ["contact@manhattanproject20.com"],
      replyTo: buyerEmail,
      subject: `New Book Purchase - Invoice ${invoiceId}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Book Purchase</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1a0d33 0%, #331a66 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
              <h1 style="color: #fff5c3; margin: 0; font-size: 24px;">The Manhattan Project 2.0</h1>
              <p style="color: #f7a827; margin: 5px 0 0 0; font-size: 14px;">New Book Purchase Notification</p>
            </div>

            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1a0d33; margin-top: 0;">Purchase Details</h2>

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Invoice ID:</td>
                  <td style="padding: 8px 0; color: #333;">${invoiceId}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Buyer Email:</td>
                  <td style="padding: 8px 0; color: #333;">${buyerEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Amount:</td>
                  <td style="padding: 8px 0; color: #333; font-size: 18px; font-weight: bold; color: #f7a827;">${currency} $${amount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Book:</td>
                  <td style="padding: 8px 0; color: #333;">The Manhattan Project 2.0</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Purchase Date:</td>
                  <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>

            <div style="background: #fff; padding: 20px; border-left: 4px solid #f7a827; margin-bottom: 20px;">
              <p style="margin: 0; color: #666;">
                <strong>Next Steps:</strong><br>
                Please ensure the buyer receives their book access details and confirmation email.
              </p>
            </div>

            <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">This is an automated notification from Manhattan Project 2.0</p>
              <p style="margin: 5px 0 0 0;">© 2025 Manhattan Project 2.0 - All Rights Reserved</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Book Purchase Notification

Purchase Details:
- Invoice ID: ${invoiceId}
- Buyer Email: ${buyerEmail}
- Amount: ${currency} $${amount.toFixed(2)}
- Book: The Manhattan Project 2.0
- Purchase Date: ${new Date().toLocaleString()}

Next Steps:
Please ensure the buyer receives their book access details and confirmation email.

---
This is an automated notification from Manhattan Project 2.0
© 2025 Manhattan Project 2.0 - All Rights Reserved
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}

export async function sendBuyerConfirmationEmail(
  buyerEmail: string,
  invoiceId: string,
  amount: number,
  currency: string = "USD"
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Manhattan Project 2.0 <noreply@manhattanproject20.com>",
      to: buyerEmail,
      subject: "Thank You for Your Purchase - The Manhattan Project 2.0",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Purchase Confirmation</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1a0d33 0%, #331a66 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
              <h1 style="color: #fff5c3; margin: 0; font-size: 28px;">Thank You!</h1>
              <p style="color: #f7a827; margin: 10px 0 0 0; font-size: 16px;">Your purchase has been confirmed</p>
            </div>

            <div style="background: #f9f9f9; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1a0d33; margin-top: 0;">Order Confirmation</h2>

              <p style="color: #666; margin-bottom: 20px;">
                Dear Valued Reader,
              </p>

              <p style="color: #333;">
                Thank you for purchasing <strong>"The Manhattan Project 2.0"</strong>. We're excited to share this journey into the future of intelligence with you.
              </p>

              <div style="background: #fff; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #f7a827;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #666;">Invoice ID:</td>
                    <td style="padding: 8px 0; color: #333; font-family: monospace;">${invoiceId}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #666;">Amount Paid:</td>
                    <td style="padding: 8px 0; color: #333; font-size: 18px; font-weight: bold; color: #f7a827;">${currency} $${amount.toFixed(2)}</td>
                  </tr>
                </table>
              </div>

              <p style="color: #333; margin-top: 20px;">
                <strong>What's Next?</strong><br>
                You will receive a separate email with your book access details and download instructions within the next few minutes.
              </p>

              <p style="color: #333; margin-top: 20px;">
                If you have any questions or need assistance, please don't hesitate to contact us at
                <a href="mailto:contact@manhattanproject20.com" style="color: #f7a827; text-decoration: none;">contact@manhattanproject20.com</a>
              </p>
            </div>

            <div style="text-align: center; padding: 20px; background: #1a0d33; border-radius: 8px; color: #fff5c3;">
              <p style="margin: 0; font-size: 18px; font-weight: bold;">The Manhattan Project 2.0</p>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #f7a827;">Creating Next Generation Intelligence Dominance</p>
            </div>

            <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">© 2025 Manhattan Project 2.0 - All Rights Reserved</p>
              <p style="margin: 5px 0 0 0;">
                <a href="tel:+16612331023" style="color: #999; text-decoration: none;">+1.661.233.1023</a> |
                <a href="mailto:contact@manhattanproject20.com" style="color: #999; text-decoration: none;">contact@manhattanproject20.com</a>
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
Thank You for Your Purchase!

Dear Valued Reader,

Thank you for purchasing "The Manhattan Project 2.0". We're excited to share this journey into the future of intelligence with you.

Order Details:
- Invoice ID: ${invoiceId}
- Amount Paid: ${currency} $${amount.toFixed(2)}

What's Next?
You will receive a separate email with your book access details and download instructions within the next few minutes.

If you have any questions or need assistance, please contact us at contact@manhattanproject20.com

The Manhattan Project 2.0
Creating Next Generation Intelligence Dominance

© 2025 Manhattan Project 2.0 - All Rights Reserved
Phone: +1.661.233.1023
Email: contact@manhattanproject20.com
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}

