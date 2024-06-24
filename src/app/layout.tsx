import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SessionProvider from "./SessionProvider";

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
        <SessionProvider>
          <Header />
          <main className="m-auto p-0 md:container">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
