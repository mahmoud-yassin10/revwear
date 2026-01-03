export type Product = {
  slug: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  categories: string[];
  sizes: string[];
  featured?: boolean;
  releaseDate: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "apex-track-hoodie",
    title: "Apex Track Hoodie",
    price: 148,
    description:
      "Structured heavyweight hoodie built for late-night garage sessions. Thermoregulating fleece, zip stash pocket, and matte black hardware.",
    images: [
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80",
    ],
    categories: ["Hoodies", "Outerwear"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    releaseDate: "2024-10-01",
    badge: "Drop 01",
  },
  {
    slug: "carbon-fiber-tee",
    title: "Carbon Fiber Tee",
    price: 68,
    description:
      "Featherweight tee with a subtle grid texture inspired by carbon weave. Soft hand-feel, resistant to stretching out.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80",
    ],
    categories: ["Tees"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: true,
    releaseDate: "2024-09-10",
  },
  {
    slug: "pit-crew-jacket",
    title: "Pit Crew Jacket",
    price: 198,
    description:
      "Water-resistant shell with reflective piping and modular chest pockets. Built for track days and night drives.",
    images: [
      "https://images.unsplash.com/photo-1451188214936-ec16af5ca155?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    ],
    categories: ["Outerwear"],
    sizes: ["S", "M", "L", "XL"],
    releaseDate: "2024-11-05",
    badge: "Limited",
  },
  {
    slug: "gridline-cargo",
    title: "Gridline Cargo Pant",
    price: 132,
    description:
      "Articulated cargo with laser-cut vents, adjustable hem toggles, and reflective hit on the knee. Tailored taper without losing mobility.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1400&q=80",
    ],
    categories: ["Bottoms"],
    sizes: ["28", "30", "32", "34", "36"],
    releaseDate: "2024-08-20",
  },
  {
    slug: "launch-cap",
    title: "Launch Cap",
    price: 48,
    description:
      "Low-profile cap with laser-cut ventilation and contrast undervisor. Minimal branding with heat-transfer badge.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=80",
    ],
    categories: ["Accessories"],
    sizes: ["One Size"],
    releaseDate: "2024-07-04",
  },
  {
    slug: "slipstream-longsleeve",
    title: "Slipstream Longsleeve",
    price: 82,
    description:
      "Breathable longsleeve with thumb loops, side mesh panels, and reflective rear stripe. Engineered for layering.",
    images: [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1400&q=80",
    ],
    categories: ["Tees"],
    sizes: ["S", "M", "L", "XL"],
    featured: false,
    releaseDate: "2024-09-28",
  },
];
