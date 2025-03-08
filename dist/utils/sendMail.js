"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = sendMail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: "ruhitinfo@gmail.com",
        pass: process.env.MAIL_PASS,
    },
});
async function sendMail(data) {
    try {
        const info = await transporter.sendMail({
            from: '"Ruhit Baidya" <ruhitinfo@gmail.com>',
            to: `${data.email}`,
            subject: `Hello ${data.name} ✔`,
            text: "This email send you only for you order ", // Plain text version
            html: `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Template</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f9;
                margin: 0;
                padding: 0;
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              .header {
                background-color: #5f63f2;
                color: #ffffff;
                text-align: center;
                padding: 20px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                padding: 20px;
                color: #333333;
                line-height: 1.6;
              }
              .content h2 {
                color: #5f63f2;
                font-size: 20px;
              }
              .content p {
                margin: 10px 0;
              }
              .footer {
                background-color: #f4f4f9;
                text-align: center;
                padding: 15px;
                font-size: 12px;
                color: #777777;
              }
              .footer a {
                color: #5f63f2;
                text-decoration: none;
              }
              .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #5f63f2;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h1>Hello from Ruhit ✔</h1>
              </div>
              <div class="content">
                <h2>Hi, ${data.name}</h2>
                <p>This Email we send Your Processs is ${data.text}</p>
                <p>If you have any questions, feel free to reach out to us. please email ruhitbaidya01@gmail.com</p>
              </div>
              <div class="footer">
                <p>&copy; 2023 Ruhit Baidya. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>`,
        });
        console.log("✅ Message sent: %s", info.messageId);
    }
    catch (err) {
        console.error(err);
    }
}
