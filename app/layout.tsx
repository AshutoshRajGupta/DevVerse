import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import LightRays from "@/components/LightRays"
import { Suspense } from "react";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { PostHogProvider } from "./providers";
import { PostHogPageView } from "./PostHogPageView";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevVerse",
  description: "The Hub for Every Dev Event you Mustn't Miss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <PostHogProvider>
      <Suspense fallback={null}><PostHogPageView /></Suspense>
      <Navbar />

<div className="absolute inset-0 top-0 w-full h-[600px] -z-10 min-h-screen">
  <LightRays
      raysOrigin="top-center-offset"
      raysColor="#5dfeca"
      raysSpeed={0.5}
      lightSpread={1.9}
      rayLength={1.4}
      followMouse={true}
      mouseInfluence={0.02}
      noiseAmount={0}
      distortion={0.01}
  />

</div>


<main>
  {children}
</main>
      </PostHogProvider>
      </body>
    </html>
  );
}
