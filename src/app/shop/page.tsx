import type { Metadata } from "next";
import Link from "next/link";
import { Filter, Sparkles } from "lucide-react";

import { ShopGrid } from "@/components/shop-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop RevWear: premium automotive-inspired streetwear with limited drops and precision fabrics.",
};

export default function ShopPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Badge variant="solid" className="w-fit">
            New
          </Badge>
          <h1 className="text-3xl font-semibold">Shop the grid</h1>
          <p className="max-w-2xl text-sm text-gray-400">
            Filter by category, size, and price. Every piece is built for motion
            and crafted in limited runs.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-accent" />
          <p className="text-sm text-gray-300">
            Free shipping on orders over $150 in the continental US.
          </p>
        </div>
      </div>

      <Separator className="my-8" />

      <ShopGrid products={products} />

      <div className="mt-12 flex flex-col gap-4 rounded-lg border border-border bg-black/60 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Filter className="h-5 w-5 text-accent" />
          <div>
            <p className="text-sm font-semibold">Need sizing help?</p>
            <p className="text-xs text-gray-400">
              Check the size guide before locking in your cart.
            </p>
          </div>
        </div>
        <Button variant="secondary" asChild>
          <Link href="/size-guide">Open size guide</Link>
        </Button>
      </div>
    </div>
  );
}
