import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, Shield, Sparkles } from "lucide-react";

import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";

const featuredProducts = products.filter((product) => product.featured);

export default function Home() {
  return (
    <div className="bg-black text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="container grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <Badge variant="solid" className="w-fit">
              Drop 01 · Limited Release
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Performance streetwear for people who move fast.
            </h1>
            <p className="max-w-2xl text-lg text-gray-300">
              Engineered fabrics, automotive cues, and silhouettes that stay
              sharp. Designed for the garage, the grid, and the night drive
              after.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button variant="ghost" asChild size="lg" className="text-gray-300">
                <Link href="/about" className="flex items-center gap-2">
                  Brand Story <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 pt-6 sm:grid-cols-3">
              {[
                { title: "Premium fabric", desc: "Double-knit, breathable, built to last." },
                { title: "Car-culture DNA", desc: "Motorsport cues without the loud logos." },
                { title: "Limited drops", desc: "Small batches, numbered runs, never mass." },
              ].map((item) => (
                <div key={item.title} className="space-y-2 rounded-lg border border-border bg-card p-4">
                  <p className="text-sm uppercase tracking-[0.14em] text-gray-400">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
                alt="RevWear collection"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -right-6 bottom-6 hidden rounded-full border border-border bg-black/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur lg:block">
              Built to move
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-gray-400">
              Featured collection
            </p>
            <h2 className="text-2xl font-semibold">Drop 01 highlights</h2>
          </div>
          <Button variant="ghost" asChild className="text-gray-300">
            <Link href="/shop" className="flex items-center gap-2">
              Explore Shop <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/60">
        <div className="container grid gap-8 py-12 md:grid-cols-3">
          {[
            {
              title: "Premium fabrications",
              copy: "Thermoregulating fleece, breathable mesh, and hardware that feels intentional.",
              icon: <Sparkles className="h-5 w-5 text-accent" />,
            },
            {
              title: "Performance cues",
              copy: "Reflective hits, articulated cuts, and modular pockets tuned for motion.",
              icon: <Gauge className="h-5 w-5 text-accent" />,
            },
            {
              title: "Tested in motion",
              copy: "Developed with drivers, designers, and late-night builders in the loop.",
              icon: <Shield className="h-5 w-5 text-accent" />,
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3 rounded-lg border border-border bg-black/60 p-6">
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
              Social proof strip
            </p>
            <h3 className="text-xl font-semibold">Trusted by builders, drivers, and crews.</h3>
            <p className="text-sm text-gray-400">
              Placeholder for partner logos and community testimonials.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-gray-400">
            <Badge variant="muted">Track Day</Badge>
            <Badge variant="muted">Night Run</Badge>
            <Badge variant="muted">Garage Labs</Badge>
            <Badge variant="muted">Design Meet</Badge>
          </div>
        </div>
      </section>

      <Separator className="opacity-60" />

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div className="space-y-4">
            <Badge variant="default">Size Guide</Badge>
            <h3 className="text-2xl font-semibold">Dialed fit, ready to layer.</h3>
            <p className="text-sm text-gray-400">
              From fitted tees to articulated outerwear, RevWear is graded for movement.
              Visit the size guide for detailed measurements and fit notes.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/size-guide">View Size Guide</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <Image
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=80"
              alt="RevWear look"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
