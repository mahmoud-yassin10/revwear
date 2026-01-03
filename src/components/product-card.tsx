"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import type { Product } from "@/data/products";
import { useCart } from "./cart-provider";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const defaultSize = product.sizes[0];

  return (
    <div className="group flex h-full flex-col rounded-lg border border-border bg-card p-4 transition hover:-translate-y-1 hover:border-accent/70">
      <Link href={`/product/${product.slug}`} className="relative block overflow-hidden rounded-md">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={600}
          height={750}
          className="h-72 w-full rounded-md object-cover transition duration-500 group-hover:scale-105"
          priority={product.featured}
        />
        {product.featured && (
          <Badge className="absolute left-3 top-3" variant="solid">
            Featured
          </Badge>
        )}
        {product.badge && !product.featured && (
          <Badge className="absolute left-3 top-3">{product.badge}</Badge>
        )}
      </Link>

      <div className="mt-4 flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {product.title}
            </h3>
            <p className="text-sm text-gray-400">
              {product.categories.join(" • ")}
            </p>
          </div>
          <p className="text-base font-semibold text-foreground">
            {formatCurrency(product.price)}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            onClick={() => addItem(product, { size: defaultSize })}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </Button>
          <Button variant="ghost" size="sm" asChild className="w-full text-gray-300">
            <Link href={`/product/${product.slug}`}>View</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
