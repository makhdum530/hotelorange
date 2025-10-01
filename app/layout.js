"use client"
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Geist, Geist_Mono } from "next/font/google";
import './index.css';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import theme from '@/theme/muiTheme';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
