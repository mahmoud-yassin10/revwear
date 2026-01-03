import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck, Truck } from "lucide-react";

import { AddToCartForm } from "@/components/add-to-cart-form";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images.slice(0, 1),
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return notFound();

  const recommendations = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="container py-10">
      <Link
        href="/shop"
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to shop
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg border border-border">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={800}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            {product.featured && (
              <Badge variant="solid" className="absolute left-4 top-4">
                Featured
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.images.slice(1).map((src, index) => (
              <div
                key={src}
                className="overflow-hidden rounded-md border border-border"
              >
                <Image
                  src={src}
                  alt={`${product.title} alt ${index + 1}`}
                  width={300}
                  height={300}
                  className="h-28 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <Badge variant="muted" className="w-fit">
              {product.badge || "RevWear"}
            </Badge>
            <h1 className="text-3xl font-semibold">{product.title}</h1>
            <p className="text-lg font-semibold text-accent">
              {formatCurrency(product.price)}
            </p>
            <p className="text-sm text-gray-300">{product.description}</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-gray-400">
              {product.categories.map((category) => (
                <Badge key={category} variant="muted">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <AddToCartForm product={product} />

          <div className="space-y-3" id="details">
            <Separator />
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <ShieldCheck className="h-5 w-5 text-accent" />
              Premium build: double-stitched seams, matte hardware, soft-touch
              lining.
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Truck className="h-5 w-5 text-accent" />
              Ships in 2–3 business days. Free exchanges on first order.
            </div>
            <Link
              href="/size-guide"
              className="inline-flex items-center gap-2 text-sm text-accent transition hover:text-accent/80"
            >
              View size guide
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">You might also like</h2>
          <Link
            href="/shop"
            className="text-sm text-accent transition hover:text-accent/80"
          >
            Browse all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
