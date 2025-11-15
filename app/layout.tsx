import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Google",
  description: "Google clone created by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased relative min-h-screen">
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
