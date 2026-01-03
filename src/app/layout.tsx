import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RevWear | Performance Streetwear",
    template: "%s | RevWear",
  },
  description:
    "RevWear blends automotive performance with premium streetwear. Limited drops, engineered fabrics, and a clean black/white/red system.",
  icons: {
    icon: "/brand/revwear-logo-square.png",
    shortcut: "/brand/revwear-logo-square.png",
    apple: "/brand/revwear-logo-square.png",
  },
  openGraph: {
    title: "RevWear | Performance Streetwear",
    description:
      "Automotive-inspired streetwear built with precision materials. Shop the latest limited drops from RevWear.",
    images: ["/brand/revwear-logo-square.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RevWear | Performance Streetwear",
    description:
      "Precision-built streetwear for drivers and creators. Explore the latest RevWear drop.",
    images: ["/brand/revwear-logo-square.png"],
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
        className={cn(
          "bg-background text-foreground antialiased",
          spaceGrotesk.variable
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
