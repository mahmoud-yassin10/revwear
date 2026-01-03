import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Youtube, MessagesSquare } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-black">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/revwear-logo-square.png"
                alt="RevWear"
                width={40}
                height={40}
                className="h-10 w-10 rounded-md border border-border"
              />
              <span className="text-xl font-semibold uppercase tracking-[0.16em]">
                RevWear
              </span>
            </Link>
            <p className="max-w-xl text-sm text-gray-400">
              RevWear builds performance-grade streetwear inspired by the pits,
              tuned for the city. Minimal silhouettes, precision materials, and
              drops that stay limited.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Ready to ship
              </span>
              <span className="hidden h-4 w-px bg-border md:block" />
              <span className="hidden md:inline">Designed in Los Angeles</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-300">
              Explore
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href="/shop" className="transition hover:text-accent">
                Shop
              </Link>
              <Link href="/about" className="transition hover:text-accent">
                About
              </Link>
              <Link href="/size-guide" className="transition hover:text-accent">
                Size Guide
              </Link>
              <Link href="/contact" className="transition hover:text-accent">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-300">
              Policies
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href="/shipping" className="transition hover:text-accent">
                Shipping
              </Link>
              <Link href="/returns" className="transition hover:text-accent">
                Returns
              </Link>
              <Link href="/privacy" className="transition hover:text-accent">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-accent">
                Terms
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MessagesSquare className="h-5 w-5 text-accent" />
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em]">
                Newsletter
              </h4>
            </div>
            <p className="text-sm text-gray-400">
              Drop updates, early access, and track-side dispatches. No spam,
              just signal.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Email for drop alerts"
              aria-label="Email for drop alerts"
              className="flex-1 bg-card"
            />
            <Button type="button" className="sm:w-36">
              Join
            </Button>
          </form>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RevWear. Built for the drive.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link
              href="https://instagram.com"
              className="flex items-center gap-1 transition hover:text-accent"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com"
              className="flex items-center gap-1 transition hover:text-accent"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-1 transition hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4" />
              Contact Team
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
