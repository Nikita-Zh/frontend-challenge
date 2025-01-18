import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { Navbar } from "@/components";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Кошачий пинтерест",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} ${styles.page}`}>
        <Navbar />
        <main className={`${styles.main}`}>{children}</main>
      </body>
    </html>
  );
}
