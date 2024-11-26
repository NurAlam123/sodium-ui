import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { domino, geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: "Sodium UI",
  description: "A collection of random UI and web animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${domino.variable} ${geistSans.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
