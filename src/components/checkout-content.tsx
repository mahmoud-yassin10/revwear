'use client';

import Link from "next/link";
import { Lock, ShieldCheck, ShoppingBag } from "lucide-react";

import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/utils";

export function CheckoutContent() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <ShoppingBag className="h-10 w-10 text-accent" />
        <h1 className="text-2xl font-semibold">Your cart is empty.</h1>
        <p className="text-sm text-gray-400">
          Add products to continue to checkout.
        </p>
        <Button asChild>
          <Link href="/shop">Shop products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
          Checkout
        </p>
        <h1 className="text-3xl font-semibold">Secure checkout</h1>
        <p className="text-sm text-gray-400">
          Enter shipping details and confirm your order. Payment is handled via
          Stripe (placeholder integration here).
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr,1fr]">
        <Card>
          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" name="state" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP/Postal code</Label>
                <Input id="zip" name="zip" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Delivery notes (optional)</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Gate codes, timing requests, or handling notes."
              />
            </div>

            <div className="space-y-2 rounded-lg border border-border bg-black/60 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Lock className="h-4 w-4 text-accent" />
                Payment
              </div>
              <p className="text-sm text-gray-400">
                Stripe integration here. Plug in your publishable key and
                server-side secret for production payments.
              </p>
              <div className="rounded-md border border-dashed border-border p-3 text-sm text-gray-400">
                Placeholder payment section — connect Stripe Checkout or Payment
                Elements.
              </div>
            </div>

            <Button type="submit" className="w-full">
              Confirm order
            </Button>
            <p className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Secure checkout. Your data is encrypted.
            </p>
          </form>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Order summary</h2>
          <div className="mt-4 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.slug}-${item.size}`}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <p className="font-semibold">{item.product.title}</p>
                  <p className="text-gray-400">
                    {item.quantity} × {formatCurrency(item.product.price)} · Size{" "}
                    {item.size ?? "—"}
                  </p>
                </div>
                <p className="font-semibold">
                  {formatCurrency(item.product.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between text-gray-400">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
          </div>

          <Button asChild variant="secondary" className="mt-6 w-full">
            <Link href="/cart">Edit cart</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
}
