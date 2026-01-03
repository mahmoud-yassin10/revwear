import type { Metadata } from "next";
import { Truck } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping details for RevWear orders including timelines and rates.",
};

const shippingPoints = [
  "Orders ship within 2–3 business days.",
  "Free domestic shipping on orders over $150.",
  "Express options available at checkout for select regions.",
  "Tracking numbers are emailed once your order leaves the warehouse.",
];

export default function ShippingPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-3">
        <Truck className="h-6 w-6 text-accent" />
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gray-400">Policy</p>
          <h1 className="text-3xl font-semibold">Shipping</h1>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="space-y-4 text-sm text-gray-300">
        {shippingPoints.map((point) => (
          <p key={point}>• {point}</p>
        ))}
        <p className="text-gray-400">
          International customers are responsible for duties and taxes. Contact
          support for special delivery requests or freight forwarding guidance.
        </p>
      </div>
    </div>
  );
}
