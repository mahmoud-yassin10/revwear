import type { Metadata } from "next";
import { Mail, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the RevWear team for orders, collaborations, and community questions.",
};

export default function ContactPage() {
  return (
    <div className="container py-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.14em] text-gray-400">Contact</p>
        <h1 className="text-3xl font-semibold">Talk to RevWear</h1>
        <p className="text-sm text-gray-400">
          Questions, fit help, or partnership ideas—drop us a note. We respond
          within one business day.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <form className="space-y-5 rounded-lg border border-border bg-card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <Input id="topic" name="topic" placeholder="Orders, sizing, collaborations..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              className="min-h-[140px]"
            />
          </div>
          <Button type="submit" className="flex items-center gap-2">
            Send message <Send className="h-4 w-4" />
          </Button>
        </form>

        <div className="space-y-4 rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold">Quick links</h2>
          <Separator />
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              support@revwear.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              +1 (555) 012-3456
            </div>
            <p className="text-gray-400">
              Social links placeholder: Instagram, YouTube, Discord. Add your
              handles when ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
