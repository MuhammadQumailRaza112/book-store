import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BookProvider from "@/redux/providers/BookProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BookProvider>
        <body className={inter.className}>{children}</body>
      </BookProvider>
    </html>
  );
}
