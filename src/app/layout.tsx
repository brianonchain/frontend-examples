import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@brianonchain frontend | Various frontend examples",
  description:
    "Hello! I am Brian Huang, a frontend developer. This is a collection of frontend examples of popular website demonstrating various animation and styling techniques.",
  openGraph: {
    url: " https://frontend-examples.vercel.app/",
    title: "@brianonchain frontend | Various frontend examples",
    description:
      "Hello! I am Brian Huang, a frontend developer. This is a collection of frontend examples of popular website demonstrating various animation and styling techniques.",
    images: [
      {
        url: "/logoOpenGraph.png",
        width: 1000,
        height: 500,
        alt: "@brianonchain frontend",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
