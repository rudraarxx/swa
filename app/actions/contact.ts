"use server";

import nodemailer from "nodemailer";

export type ContactFormData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export async function sendEnquiry(formData: ContactFormData) {
  const { name, email, projectType, message } = formData;

  // Validation
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Higher timeout for reliability
      connectionTimeout: 10000,
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send from your own email to avoid spoofing filters
      to: process.env.CONTACT_RECEIVER_EMAIL || "shubhangiwahanearchitects@gmail.com",
      replyTo: email, // Set person who filled the form as reply-to
      subject: `New Project Inquiry: ${projectType} from ${name}`,
      text: `
        New Inquiry Received:
        
        Name: ${name}
        Email: ${email}
        Project Type: ${projectType}
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #primary;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <strong>Message:</strong><br/>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">This lead was captured from your website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { 
      success: false, 
      error: "Failed to send inquiry. Please try again or contact us directly via email." 
    };
  }
}
