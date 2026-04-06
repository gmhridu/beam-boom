export const runtime = "edge";

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "info@beamandbloomclinic.com";

const FROM_EMAIL = "Beam & Bloom Clinic <noreply@beamandbloomclinic.com>";


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, message, formType } = body;

    if (!firstName || !email) {
      return NextResponse.json(
        { error: "First name and email are required." },
        { status: 400 },
      );
    }

    const subjectMap: Record<string, string> = {
      contact: "New Contact Form Submission",
      newsletter: "New Newsletter Sign-up",
    };

    const subject = subjectMap[formType] ?? "New Form Submission";

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
        <h2 style="color: #0ea5e9; margin-bottom: 24px;">${subject}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 160px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${firstName} ${lastName ?? ""}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${email}</td>
          </tr>
          ${
            phone
              ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${phone}</td>
          </tr>`
              : ""
          }
          ${
            message
              ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${message}</td>
          </tr>`
              : ""
          }
        </table>
        <p style="margin-top: 32px; font-size: 12px; color: #9ca3af;">Sent from the Beam & Bloom Clinic website</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
