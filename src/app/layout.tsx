import type { Metadata } from "next";
import { Koulen } from "next/font/google";
import "./globals.css";

const koulen = Koulen({
  weight: "400",
  variable: "--font-koulen",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WaleedArhsad | Software Engineer | Freelancer | Consultant",
  description: "Senior Software Engineer, Freelancer, and Consultant. Explore my expertise in Software development, projects, and insights at AskWaleed.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${koulen.variable} ${koulen.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
