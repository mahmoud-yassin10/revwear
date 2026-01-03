import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "RevWear is an automotive lifestyle and streetwear brand built on performance, identity, and community.",
};

const pillars = [
  {
    title: "Car culture, refined",
    copy: "We strip the noise and keep the intent. Subtle references to the grid, the paddock, and the late-night meet.",
  },
  {
    title: "Performance mindset",
    copy: "We prototype fast, test with drivers and builders, and iterate until every seam and stitch is intentional.",
  },
  {
    title: "Community over hype",
    copy: "Limited drops keep the energy focused. We share behind-the-scenes, track days, and invite feedback in real time.",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="space-y-4">
          <Badge variant="solid" className="w-fit">
            Brand story
          </Badge>
          <h1 className="text-3xl font-semibold">
            Built for the drive. Designed for the city.
          </h1>
          <p className="text-sm text-gray-400">
            RevWear started in garages and parking structures—where cars are
            tuned, ideas are traded, and style is personal. We create pieces
            that feel premium, move with you, and nod to the culture without
            shouting logos.
          </p>
          <p className="text-sm text-gray-400">
            Each drop is produced in tight quantities with responsibly sourced
            materials, thoughtful trims, and a focus on longevity. Wear it in
            the pits, on a flight, or at the studio.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <Image
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80"
            alt="RevWear garage session"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <Separator className="my-10" />

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="space-y-3 rounded-lg border border-border bg-card p-6"
          >
            <h3 className="text-lg font-semibold">{pillar.title}</h3>
            <p className="text-sm text-gray-400">{pillar.copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
