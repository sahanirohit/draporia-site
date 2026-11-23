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
    slug: "top-lucky-knife-set",
    brand: "Top Lucky",
    product: "6-piece kitchen knife set with storage block",
    category: "Home & Kitchen",
    work: "A+ content · 5 modules",
    summary:
      "A warm beige and wood-grain look in a sunlit kitchen, matched to the product itself: the set in its fluted block, all six pieces laid out, close-ups of the patterned blades and handles, and the knives in use.",
    accent: "#C9A27A",
    images: [
      img("toplucky-1-hero", "Knife set in its fluted beige block on a kitchen counter. Headline: Everyday prep. Beautifully organized."),
      img("toplucky-2-six-pieces", "Four knives, scissors and the storage block laid out in a row. Headline: Six pieces. One coordinated set."),
      img("toplucky-3-details", "Close-ups of the patterned blades and wood-grain handles. Headline: Details that bring it together."),
      img("toplucky-4-prep", "Three panels showing the set used to slice, prep and snip. Headline: Ready for everyday prep."),
      img("toplucky-5-block", "The storage block with knives and scissors in it. Headline: A place for every piece."),
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
  {
    slug: "manual-citrus-juicer",
    brand: "Manual Citrus Juicer",
    product: "Aluminium hand-press fruit juicer",
    category: "Home & Kitchen",
    work: "A+ content · 5 modules",
    summary:
      "A bright orange and green system with bold headlines for a high-energy kitchen product: the press in action, a three-step how-to, labelled feature callouts and the range of juices it can make.",
    accent: "#F07A1A",
    images: [
      img("juicer-1-hero", "Hand pressing the juicer over a glass of orange juice. Headline: Fresh juice. Pressed your way."),
      img("juicer-2-freshness", "Juicer pouring into a glass beside a fruit, press and serve strip. Headline: Bring freshness back to your kitchen."),
      img("juicer-3-control", "Juicer with four numbered callouts: leverage design, stable base, controlled pouring and manual operation. Headline: More control. Less fuss."),
      img("juicer-4-steps", "Three panels: place, press and pour. Headline: Three simple steps to freshness."),
      img("juicer-5-possibilities", "Juicer surrounded by orange, lemon, lime, pomegranate and homemade drinks. Headline: One press. So many fresh possibilities."),
    ],
  },
];
