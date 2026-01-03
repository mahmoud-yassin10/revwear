import type { Metadata } from "next";

import { CartPageContent } from "@/components/cart-page";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your RevWear items before checkout.",
};

export default function CartPage() {
  return <CartPageContent />;
}
