import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import LanguageModal from "./components/LanguageModal";
import BottomNav from "./components/BottomNav";
import { LanguageProvider } from "./contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata = {
  title: "Adult Education Open House - HECC",
  description: "Howard and Evanston Community Center Adult Education Open House"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <LanguageModal />
          <SiteHeader />
          {children}
          <BottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
