import type { Metadata } from "next";
import { RefreshCcw } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description: "RevWear returns and exchanges policy for online orders.",
};

const items = [
  "Returns accepted within 30 days of delivery on unworn products with tags.",
  "First exchange is on us—contact support for a prepaid label (where available).",
  "Final sale items and heavily worn garments are not eligible for return.",
  "Refunds process to the original payment method within 5–7 business days.",
];

export default function ReturnsPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-3">
        <RefreshCcw className="h-6 w-6 text-accent" />
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gray-400">Policy</p>
          <h1 className="text-3xl font-semibold">Returns & Exchanges</h1>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="space-y-4 text-sm text-gray-300">
        {items.map((entry) => (
          <p key={entry}>• {entry}</p>
        ))}
        <p className="text-gray-400">
          For processing, include your order number and photos if there are any
          defects. We stand by the build quality of every drop.
        </p>
      </div>
    </div>
  );
}
