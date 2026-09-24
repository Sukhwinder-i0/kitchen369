import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kitchen369 Greater Noida | Premium Fine Dining & Express Delivery",
  description: "Experience authentic North Indian, Tandoori & Chinese culinary excellence at Kitchen369. Visit our Beta 1 rooftop terrace or order express delivery from Alpha 1. Call +91 98765 36900.",
  keywords: ["Kitchen369 Greater Noida", "Restaurant in Beta 1 Greater Noida", "Delivery Alpha 1 Greater Noida", "North Indian Fine Dining", "Tandoori Kebabs Greater Noida", "Rooftop Restaurant Greater Noida"],
  openGraph: {
    title: "Kitchen369 | Greater Noida",
    description: "Delicious Meals, Fast Delivery. Beta 1 Dine-In Rooftop & Alpha 1 Express Delivery Hub.",
    images: ["/images/logo.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#FFFBF5] text-[#2C1810] antialiased selection:bg-[#E65100] selection:text-white">
        {children}
      </body>
    </html>
  );
}
