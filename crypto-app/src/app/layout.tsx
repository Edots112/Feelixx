import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$DOSSI",
  description: "$DOSSI ",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
