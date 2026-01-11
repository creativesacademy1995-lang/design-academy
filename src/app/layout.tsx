import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google"; // Import fonts
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { AdmissionsProvider } from "@/components/AdmissionsContext";
import AdmissionsModalClient from "@/components/AdmissionsModalClient";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Design Academy",
  description: "Learn modern design from industry experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={cn(
        "min-h-screen bg-background font-sans antialiased flex flex-col",
        manrope.variable,
        inter.variable
      )}>
        <AdmissionsProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ChatWidget />
          <AdmissionsModalClient />
        </AdmissionsProvider>
      </body>
    </html>
  );
}
