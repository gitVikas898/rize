import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      
      <body className={inter.className} 
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          {children}
        </ThemeProvider>
      
      </body>
    </html>
  );
}
