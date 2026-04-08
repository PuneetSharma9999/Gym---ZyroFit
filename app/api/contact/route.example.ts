/**
 * EXAMPLE API ROUTE FOR CONTACT FORM
 * 
 * To use this:
 * 1. Rename file from "route.example.ts" to "route.ts"
 * 2. Install nodemailer: npm install nodemailer
 * 3. Add these env variables to .env.local:
 *    - SMTP_EMAIL=your-email@gmail.com
 *    - SMTP_PASSWORD=your-app-password
 *    - SMTP_HOST=smtp.gmail.com
 *    - SMTP_PORT=587
 * 4. Update the recipient email below
 * 5. Contact form will now send real emails
 */

import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to gym owner
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: 'info@irondesi.com', // Change to your gym email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'We received your message - Iron Desi Gym',
      html: `
        <h2>Thank you for contacting Iron Desi Gym!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you soon.</p>
        <p>Best regards,<br>Iron Desi Gym Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

/**
 * ALTERNATIVE: Using SendGrid API
 * 
 * Install: npm install @sendgrid/mail
 * Env var: SENDGRID_API_KEY=your-api-key
 * 
 * import sgMail from '@sendgrid/mail';
 * sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
 * 
 * await sgMail.send({
 *   to: 'info@irondesi.com',
 *   from: 'noreply@irondesi.com',
 *   subject: `New Contact: ${name}`,
 *   html: `...`
 * });
 */

/**
 * ALTERNATIVE: Using Resend API (Easiest)
 * 
 * Install: npm install resend
 * Env var: RESEND_API_KEY=your-api-key
 * 
 * import { Resend } from 'resend';
 * const resend = new Resend(process.env.RESEND_API_KEY);
 * 
 * await resend.emails.send({
 *   from: 'onboarding@resend.dev',
 *   to: 'info@irondesi.com',
 *   subject: `New Contact: ${name}`,
 *   html: `...`
 * });
 */
