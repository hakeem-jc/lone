import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lone - Affordable Digital Loans at Your Fingertips",
  description: "Get access to fast, secure, and low-rate digital loans with Lone. Apply online in minutes and receive quick approvals with flexible repayment options. No hidden fees, just transparent lending for your financial needs.",
  keywords: "digital loans, low-rate loans, online loans, fast loans, unsecured loans, personal loans, loan application, quick approvals, flexible repayment",
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
