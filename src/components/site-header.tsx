"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag } from "lucide-react";

import { useCart } from "./cart-provider";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 animate-fade-in">
          <Image
            src="/brand/revwear-logo-square.png"
            alt="RevWear"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md border border-border"
            priority
          />
          <span className="hidden text-lg font-semibold uppercase tracking-[0.16em] sm:inline">
            RevWear
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-accent ${
                pathname === item.href ? "text-accent" : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" asChild className="hidden md:inline-flex">
            <Link href="/shop">Shop Now</Link>
          </Button>
          <Link
            href="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1 text-xs font-semibold text-black">
                {count}
              </span>
            )}
          </Link>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-10 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-semibold transition hover:text-accent ${
                      pathname === item.href ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/cart"
                  className="flex items-center gap-3 text-lg font-semibold transition hover:text-accent"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Cart ({count})
                </Link>
                <div className="pt-2">
                  <ThemeToggle />
                </div>
                <Button asChild>
                  <Link href="/shop">Shop the Drop</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
