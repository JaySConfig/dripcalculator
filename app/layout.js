import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dividend Reinvestment Calculator | Maximize Your Returns",
  description: "Use our Dividend Reinvestment Calculator to see how reinvesting dividends can grow your investments over time. Calculate your potential returns today!",
  keywords: "dividend reinvestment calculator, compound dividends, dividend growth, investment calculator",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
