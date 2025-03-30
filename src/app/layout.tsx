import type { Metadata } from "next";
import { Koulen, Poppins } from "next/font/google";
import "./globals.css";

const koulen = Koulen({
  weight: "400",
  variable: "--font-koulen",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
        className={`${koulen.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
