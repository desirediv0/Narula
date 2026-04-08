import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, phone, email, service, message } = body

    // Create a transporter using Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
      },
    })

    // Create HTML Email Template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; }
          .header { background: #0284c7; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0284c7; display: block; margin-bottom: 5px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; }
          .value { font-size: 16px; color: #1e293b; background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #f1f5f9; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 20px; }
          .badge { display: inline-block; padding: 4px 12px; border-radius: 100px; background: #e0f2fe; color: #0369a1; font-weight: 600; font-size: 12px; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin:0;">Narula Clinic - New Quick Enquiry</h2>
          </div>
          <div class="content">
            <div class="badge">Appointment Request</div>
            
            <div class="field">
              <span class="label">Patient Name</span>
              <div class="value">${fullName}</div>
            </div>
            
            <div class="field">
              <span class="label">Phone Number</span>
              <div class="value">${phone}</div>
            </div>
            
            <div class="field">
              <span class="label">Email Address</span>
              <div class="value">${email || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <span class="label">Service Required</span>
              <div class="value">${service || 'General Enquiry'}</div>
            </div>
            
            <div class="field">
              <span class="label">Message</span>
              <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This enquiry was sent from the Narula Clinic website contact form.</p>
            <p>&copy; ${new Date().getFullYear()} Narula Multispeciality Clinic</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send the email
    await transporter.sendMail({
      from: `"Narula Clinic Site" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`,
      to: process.env.NEXT_PUBLIC_TO_EMAIL,
      subject: `New Appointment Inquiry: ${fullName} - ${service || 'General'}`,
      html: htmlTemplate,
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error: any) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email', error: error.message },
      { status: 500 }
    )
  }
}
