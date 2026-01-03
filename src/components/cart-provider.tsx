"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  quantity: number;
  size?: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, options?: { quantity?: number; size?: string }) => void;
  removeItem: (slug: string, size?: string) => void;
  updateQuantity: (slug: string, size: string | undefined, quantity: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "revwear-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem: CartContextValue["addItem"] = (product, options) => {
    const selectedSize = options?.size;
    const quantity = options?.quantity ?? 1;
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.slug === product.slug && item.size === selectedSize
      );
      if (existingIndex >= 0) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, quantity, size: selectedSize }];
    });
  };

  const removeItem: CartContextValue["removeItem"] = (slug, size) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.slug === slug && item.size === size))
    );
  };

  const updateQuantity: CartContextValue["updateQuantity"] = (
    slug,
    size,
    quantity
  ) => {
    if (quantity <= 0) {
      removeItem(slug, size);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.slug === slug && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clear = () => setItems([]);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    count,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
