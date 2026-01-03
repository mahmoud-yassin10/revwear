'use client';

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";

import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";

export function CartPageContent() {
  const { items, subtotal, updateQuantity, removeItem, count } = useCart();

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
          Cart
        </p>
        <h1 className="text-3xl font-semibold">Your bag</h1>
        <p className="text-sm text-gray-400">
          {count} {count === 1 ? "item" : "items"} ready for checkout.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="mt-10 rounded-lg border border-border bg-card p-10 text-center">
          <p className="text-lg font-semibold">Your cart is empty.</p>
          <p className="mt-2 text-sm text-gray-400">
            Add pieces from the latest drop.
          </p>
          <Button asChild className="mt-6">
            <Link href="/shop">Shop now</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={`${item.product.slug}-${item.size}`}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.title}
                    width={120}
                    height={120}
                    className="h-28 w-28 rounded-md object-cover"
                  />
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold">
                      {item.product.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      Size {item.size ?? "—"}
                    </p>
                    <p className="text-sm font-semibold text-accent">
                      {formatCurrency(item.product.price)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-end gap-3">
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor={`${item.product.slug}-${item.size}-qty`}
                      className="text-xs uppercase tracking-[0.12em] text-gray-400"
                    >
                      Qty
                    </label>
                    <Input
                      id={`${item.product.slug}-${item.size}-qty`}
                      type="number"
                      min={1}
                      value={item.quantity}
                      className="w-24"
                      onChange={(e) =>
                        updateQuantity(
                          item.product.slug,
                          item.size,
                          Math.max(1, Number(e.target.value))
                        )
                      }
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Remove item"
                    onClick={() => removeItem(item.product.slug, item.size)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Order summary</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-semibold">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="text-gray-400">Calculated at checkout</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-base font-semibold">
                <span>Total</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <Button asChild className="w-full">
                <Link href="/checkout">Proceed to checkout</Link>
              </Button>
              <Button variant="secondary" asChild className="w-full">
                <Link href="/shop">Continue shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
