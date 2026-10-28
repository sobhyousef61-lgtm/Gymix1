import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GYMIX | إدارة النوادي الرياضية",
  description:
    "نظام بسيط لإدارة المشتركين والاشتراكات والدفعات ومتابعة مواعيد التجديد في ناديك الرياضي.",
};

export const viewport: Viewport = {
  themeColor: "#0E1210",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
