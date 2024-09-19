import React from "react";
import type { Metadata } from "next";
import "@styles/scss/main.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Artify By Farsana Nazar",
  description: "Farsana's World of Fascinating Moments. Frame Your Moments, Artify Your Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
        <Image src={'/whatsapp.png'} height={70} width={70} alt="" className="fixed right-[20px]"/>
      </body>
    </html>
  );
}
