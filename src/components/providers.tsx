"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "./cart-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
