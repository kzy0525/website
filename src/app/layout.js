import { Geist, Geist_Mono } from "next/font/google";
import { Cantata_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cantata = Cantata_One({
  variable: "--font-cantata",
  subsets: ["latin"],
  weight: "400", 
});

export const metadata = {
  title: 'Kevin Ye',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cantata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
