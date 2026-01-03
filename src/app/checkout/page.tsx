import type { Metadata } from "next";

import { CheckoutContent } from "@/components/checkout-content";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout for RevWear orders with shipping and payment placeholders.",
};

export default function CheckoutPage() {
  return <CheckoutContent />;
}
