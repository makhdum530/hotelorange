"use client"
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Geist, Geist_Mono, Headland_One, Lato, Outfit } from "next/font/google";
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


const headlandOne = Headland_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-headland-one",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headlandOne.variable} `}>
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
