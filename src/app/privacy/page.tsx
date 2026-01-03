import type { Metadata } from "next";
import { Shield } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RevWear collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-3">
        <Shield className="h-6 w-6 text-accent" />
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gray-400">Policy</p>
          <h1 className="text-3xl font-semibold">Privacy</h1>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="space-y-4 text-sm text-gray-300">
        <p>
          We collect the minimum data needed to process orders, improve the site,
          and communicate with you about drops. Payment details are handled
          securely by our payment provider and never stored on our servers.
        </p>
        <p>
          Cookies are used for cart persistence and analytics. You can disable
          non-essential cookies in your browser settings. For access or deletion
          requests, email support@revwear.com.
        </p>
        <p className="text-gray-400">
          This placeholder policy should be replaced with your legal review
          before launch.
        </p>
      </div>
    </div>
  );
}
