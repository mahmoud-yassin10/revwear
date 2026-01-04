"use client";

import { useMemo, useState } from "react";
import { Filter } from "lucide-react";

import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";

type SortOption = "newest" | "price-asc" | "price-desc";

export function ShopGrid({ products }: { products: Product[] }) {
  const categories = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.categories))),
    [products]
  );
  const sizes = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.sizes))),
    [products]
  );
  const prices = products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [category, setCategory] = useState<string>("all");
  const [size, setSize] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("newest");
  const [priceMin, setPriceMin] = useState<number>(minPrice);
  const [priceMax, setPriceMax] = useState<number>(maxPrice);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filtered = useMemo(() => {
    let next = products.filter(
      (product) => product.price >= priceMin && product.price <= priceMax
    );
    if (category !== "all") {
      next = next.filter((product) => product.categories.includes(category));
    }
    if (size !== "all") {
      next = next.filter((product) => product.sizes.includes(size));
    }
    if (featuredOnly) {
      next = next.filter((product) => product.featured);
    }
    return next.sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
      const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
      return dateB - dateA;
    });
  }, [products, category, size, sort, priceMin, priceMax, featuredOnly]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Filter className="h-5 w-5 text-accent" />
          <div>
            Filters <span className="text-gray-500">(auto-applied)</span>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger>
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All sizes</SelectItem>
              {sizes.map((sizeOption) => (
                <SelectItem key={sizeOption} value={sizeOption}>
                  {sizeOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={(val: SortOption) => setSort(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-3">
            <Checkbox
              id="featured"
              checked={featuredOnly}
              onCheckedChange={(checked) => setFeaturedOnly(Boolean(checked))}
            />
            <Label htmlFor="featured" className="text-sm text-gray-300">
              Featured only
            </Label>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 sm:max-w-xs">
          <div className="space-y-1">
            <Label htmlFor="minPrice" className="text-xs uppercase tracking-[0.12em]">
              Min EGP
            </Label>
            <Input
              id="minPrice"
              type="number"
              min={minPrice}
              max={priceMax}
              value={priceMin}
              onChange={(e) => {
                const value = Number(e.target.value) || minPrice;
                setPriceMin(Math.min(Math.max(value, minPrice), priceMax));
              }}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="maxPrice" className="text-xs uppercase tracking-[0.12em]">
              Max EGP
            </Label>
            <Input
              id="maxPrice"
              type="number"
              min={priceMin}
              max={maxPrice}
              value={priceMax}
              onChange={(e) => {
                const value = Number(e.target.value) || maxPrice;
                setPriceMax(Math.max(Math.min(value, maxPrice), priceMin));
              }}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Badge variant="muted">
            {filtered.length} styles
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-foreground"
            onClick={() => {
              setCategory("all");
              setSize("all");
              setSort("newest");
              setPriceMin(minPrice);
              setPriceMax(maxPrice);
              setFeaturedOnly(false);
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      <Separator />

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-10 text-center text-sm text-gray-400">
          Nothing here yet. Try widening the filters.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
