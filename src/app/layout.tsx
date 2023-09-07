import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto px-3 mb-4">
          {children}
        </main>
        <div id="houzz-modal"></div>
      </body>
    </html>
  );
}
