export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PortfolioProject = {
  slug: string;
  brand: string;
  product: string;
  category: string;
  work: string;
  summary: string;
  accent: string;
  images: PortfolioImage[];
};

const img = (file: string, alt: string): PortfolioImage => ({
  src: `/portfolio/${file}.webp`,
  alt,
  width: 1600,
  height: 990,
});

export const portfolio: PortfolioProject[] = [
  {
    slug: "genestic-thai-lemongrass",
    brand: "Genestic",
    product: "Thai Lemongrass Perfume Body Wash, 250 ml",
    category: "Beauty & Personal Care",
    work: "A+ content · 5 modules",
    summary:
      "A deep plum and lemongrass palette that carries the herbal positioning through every module: the hero shot, the three key ingredients, a three-step shower routine and lifestyle scenes.",
    accent: "#B07AA1",
    images: [
      img("genestic-1-hero", "Genestic Thai Lemongrass body wash on a wet stone with lemongrass stalks. Headline: A fresh start, every shower."),
      img("genestic-2-ingredients", "Ingredients module showing 2% lemongrass extract, 2% aloe vera and 0.5% green tea extract."),
      img("genestic-3-steps", "Three-step module: wet skin, lather gently, rinse clean."),
      img("genestic-4-ritual", "Lifestyle module with the bottle beside a folded towel. Headline: Make room for a fresh ritual."),
      img("genestic-5-herbal", "Flat-lay module with the bottle on lemongrass. Headline: Bring a herbal note to your shower."),
    ],
  },
  {
    slug: "kenita-hello-master-bottle",
    brand: "Kenita",
    product: "Hello Master 500 ml frosted water bottle",
    category: "Home & Kitchen",
    work: "A+ content · 5 modules",
    summary:
      "A navy and coral system built around the bottle's frosted colours: a hero on a stone plinth, the four colour variants, the screw-on lid, the 500 ml capacity and the wrist strap in use.",
    accent: "#E8826B",
    images: [
      img("kenita-1-hero", "Teal Hello Master bottle on a stone plinth. Headline: Hello, everyday hydration."),
      img("kenita-2-colours", "Four colour variants of the bottle: teal, white, pink and green."),
      img("kenita-3-lid", "Close-up of the pink bottle's transparent screw-on lid. Headline: Twist closed. Carry confidently."),
      img("kenita-4-500ml", "White bottle on a desk. Headline: 500 ml. Refill. Reuse. Repeat."),
      img("kenita-5-strap", "Person carrying the green bottle by its wrist strap. Headline: Grab the loop. Take your day along."),
    ],
  },
];
