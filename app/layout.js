import { Audiowide } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--audiowide",
});

export const metadata = {
  title: "Awesome Navbar",
  description: "Created by Aryesh Saha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={audiowide.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
