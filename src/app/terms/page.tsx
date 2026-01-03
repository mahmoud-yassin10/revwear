import type { Metadata } from "next";
import { FileText } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "RevWear terms of service and conditions for purchases.",
};

export default function TermsPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-3">
        <FileText className="h-6 w-6 text-accent" />
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gray-400">Policy</p>
          <h1 className="text-3xl font-semibold">Terms</h1>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="space-y-4 text-sm text-gray-300">
        <p>
          By using this site and purchasing products, you agree to the policies
          outlined here. Pricing, availability, and promotions may change
          without notice.
        </p>
        <p>
          Liability for product use is limited to the purchase price. Any
          disputes will be handled in the governing jurisdiction of the brand.
        </p>
        <p className="text-gray-400">
          Replace this placeholder copy with your reviewed legal terms before
          production launch.
        </p>
      </div>
    </div>
  );
}
