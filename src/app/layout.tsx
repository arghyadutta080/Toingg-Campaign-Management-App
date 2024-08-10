import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toingg",
  description: "Build AI Calling Agent that can do Lead Generation, Sales Call, Recruitment, B2B Data Collection, Fund Raising, Political Campaigning, Appointment Booking, Interview Scheduling, Market Surveys, Upselling & Cross-selling, Payment Reminders, Customer Feedback Collection, Property Listing Handling, Brand Promotion, Resolve Customer Complaints Everything"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
