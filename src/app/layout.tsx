import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header";
import { geistMono, geistSans, montserrat, openSans, inter, spaceGrotesk } from "./fonts/Fonts";
import { GridBackground } from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "DevInsight.ai",
  description: "Generated by create next app",
  icons: {
    icon: "/assets/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${openSans.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <GridBackground /> {/* <- Add here */}
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
