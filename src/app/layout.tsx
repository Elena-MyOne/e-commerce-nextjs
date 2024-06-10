import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shop.co",
    template: "%s | Shop.co",
  },
  description:
    "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Header</header>
        <main className="max-w-7xl p-4 m-auto min-w-[310px]">{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
