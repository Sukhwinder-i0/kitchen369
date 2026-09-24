import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farmers Kitchen Noida | Premium Rooftop Fine Dining & Fast Delivery",
  description: "Experience authentic North Indian, Tandoori & Chinese culinary excellence in Noida. Visit our Surajpur starlight rooftop terrace or order express delivery to Sector 73. Call +91 97171 76252.",
  keywords: ["Farmers Kitchen Noida", "Restaurant in Surajpur Greater Noida", "Delivery Sector 73 Noida", "North Indian Fine Dining", "Tandoori Kebabs Noida", "Rooftop Restaurant Noida"],
  openGraph: {
    title: "Farmers Kitchen | Noida & Greater Noida",
    description: "Delicious Meals, Fast Delivery. Surajpur Dine-In Rooftop & Sector 73 Delivery Hub.",
    images: ["/images/logo.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body className="bg-[#0d0806] text-[#faf6f0] antialiased selection:bg-[#5c1600] selection:text-[#d4af37]">
        {children}
      </body>
    </html>
  );
}
