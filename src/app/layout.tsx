import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";
import Footer from "@/components/Footer";
import I18nProvider from "@/components/I18nProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samir Baishnab - Fullstack Developer",
  description: "Architecting Scalable Fullstack Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-background text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container overflow-x-hidden min-h-screen flex flex-col relative">
        <I18nProvider>
          <SmoothScrollProvider>
            <TopNavBar />
            <SideNavBar />
            <main className="min-h-screen grid-pattern pt-20 lg:pl-20 bg-background relative z-10">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
