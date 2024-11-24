import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouSELL - Superapp for sellers",
  description: "YouSELL - Superapp for sellers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
