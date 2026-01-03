import type { Metadata } from "next";
import { Ruler, Shirt } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Size Guide",
  description:
    "Find your RevWear size with detailed measurements and fit notes for tees, hoodies, and outerwear.",
};

const sizeChart = [
  { size: "XS", chest: "34-36 in", waist: "28-30 in", length: "26 in" },
  { size: "S", chest: "36-38 in", waist: "30-32 in", length: "27 in" },
  { size: "M", chest: "38-40 in", waist: "32-34 in", length: "28 in" },
  { size: "L", chest: "41-43 in", waist: "34-36 in", length: "29 in" },
  { size: "XL", chest: "44-46 in", waist: "36-38 in", length: "30 in" },
  { size: "XXL", chest: "47-49 in", waist: "38-40 in", length: "31 in" },
];

export default function SizeGuidePage() {
  return (
    <div className="container py-10">
      <div className="space-y-3">
        <Badge variant="solid" className="w-fit">
          Fit guide
        </Badge>
        <h1 className="text-3xl font-semibold">Dialed fits, tuned for motion.</h1>
        <p className="text-sm text-gray-400">
          Slim-but-not-tight through the body, with room to layer. If between
          sizes, size up for a relaxed feel.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-lg border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-muted text-gray-300">
            <tr>
              <th className="px-4 py-3 font-semibold">Size</th>
              <th className="px-4 py-3 font-semibold">Chest</th>
              <th className="px-4 py-3 font-semibold">Waist</th>
              <th className="px-4 py-3 font-semibold">Body Length</th>
            </tr>
          </thead>
          <tbody>
            {sizeChart.map((row) => (
              <tr key={row.size} className="border-t border-border">
                <td className="px-4 py-3 font-semibold">{row.size}</td>
                <td className="px-4 py-3 text-gray-300">{row.chest}</td>
                <td className="px-4 py-3 text-gray-300">{row.waist}</td>
                <td className="px-4 py-3 text-gray-300">{row.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <Ruler className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold">How to measure</h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Chest: Measure under arms at the widest point.</li>
            <li>Waist: Measure where you naturally bend side to side.</li>
            <li>Length: From high shoulder point down the body.</li>
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <Shirt className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold">Fit notes</h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Tees and longsleeves run true to size with a tailored shoulder.</li>
            <li>Hoodies use a slightly relaxed block for layering.</li>
            <li>Outerwear is articulated through the elbows for movement.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
