// app/api/send-email/route.ts

export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

// Env-based config
const TO_EMAIL = process.env.TO_EMAIL || "info@beamandbloomclinic.com";
const FROM_EMAIL =
  process.env.FROM_EMAIL ||
  "Beam & Bloom Clinic <noreply@beamandbloomclinic.com>";

// Simple sanitizer to prevent HTML injection
const sanitize = (str: string = "") =>
  str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Basic email validation
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      phone,
      email,
      message,
      formType = "contact",
    } = body;

    // 🔒 Required field validation
    if (!firstName?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "First name and email are required." },
        { status: 400 },
      );
    }

    // 🔒 Email validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    // 🔒 Form type validation
    if (!["contact", "newsletter"].includes(formType)) {
      return NextResponse.json(
        { error: "Invalid form type." },
        { status: 400 },
      );
    }

    // Subject mapping
    const subjectMap: Record<string, string> = {
      contact: "New Contact Form Submission",
      newsletter: "New Newsletter Sign-up",
    };

    const subject = subjectMap[formType];

    // ✨ Sanitize all inputs
    const safeFirstName = sanitize(firstName);
    const safeLastName = sanitize(lastName);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone);
    const safeMessage = sanitize(message);

    // 📧 HTML Email
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
        <h2 style="color: #0ea5e9;">${subject}</h2>

        <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>

        ${phone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}

        ${message ? `<p><strong>Message:</strong><br/> ${safeMessage}</p>` : ""}

        <hr style="margin: 24px 0;" />
        <p style="font-size: 12px; color: #888;">
          Sent from your website contact form
        </p>
      </div>
    `;

    // 📧 Plain text fallback
    const text = `
New Form Submission

Name: ${firstName} ${lastName || ""}
Email: ${email}
Phone: ${phone || "N/A"}
Message: ${message || "N/A"}
    `;

    // 🚀 Send Email
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (err) {
    console.error("Unexpected error:", err);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
