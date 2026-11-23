export const siteUrl = "https://draporiaofficial.vercel.app";

export const contact = {
  email: "draporiaofficial@gmail.com",
  phoneDisplay: "+91 72038 77149",
  phoneHref: "tel:+917203877149",
  whatsappNumber: "917203877149",
  whatsappHref: "https://wa.me/917203877149",
  hours: "Mon to Sat, 10 AM to 6 PM IST",
  location: "Surat, Gujarat, India",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/packages", label: "Packages" },
  { href: "/faq", label: "FAQ" },
];

export const tape = [
  "Listings",
  "Account health",
  "Promotions",
  "Advertising",
  "Listing images",
  "A+ content",
  "Reporting",
  "Amazon.in",
];

export type Tier = "plan" | "addon" | "request";

export type Service = {
  no: string;
  tier: Tier;
  title: string;
  short: string;
  long: string;
  points: string[];
};

export const tierLabel: Record<Tier, string> = {
  plan: "In every plan",
  addon: "₹199–₹299 per job",
  request: "Quoted on request",
};

const raw: Omit<Service, "no">[] = [
  {
    tier: "plan",
    title: "Listing management",
    short:
      "Keyword-led titles, bullets and images, catalogue errors fixed and suppressed listings brought back live.",
    long: "Every listing is researched, written and structured for Amazon India search and for the shopper reading it. When a listing is suppressed or shows an error, we fix it and get it live again.",
    points: [
      "Keyword research for Amazon.in",
      "Titles, bullets and descriptions",
      "Catalogue errors and suppressed listings",
    ],
  },
  {
    tier: "plan",
    title: "Account health",
    short:
      "Policy issues, performance notifications and stock levels watched every working day.",
    long: "We check your account health, notifications and stock levels every working day, resolve policy issues quickly and help with appeals when a listing or account is hit.",
    points: [
      "Account health and policy monitoring",
      "Performance notifications handled",
      "Appeals and plan-of-action support",
    ],
  },
  {
    tier: "plan",
    title: "Promotions",
    short:
      "Coupons and deals planned and set up around your sale calendar.",
    long: "We plan and run coupons and deals around the moments that matter for your category, including the big Amazon.in sale events, and check what each one returned.",
    points: [
      "Coupons set up and monitored",
      "Deals planned for sale events",
      "Results reviewed after each promotion",
    ],
  },
  {
    tier: "plan",
    title: "Advertising",
    short:
      "Sponsored campaigns planned and optimised around profit, not just spend.",
    long: "We plan, launch and refine Sponsored Products campaigns, and Sponsored Brands where your brand qualifies, against the ACoS and revenue targets we agree with you.",
    points: [
      "Campaign structure and bidding",
      "Regular search-term and bid optimisation",
      "Budget planning for sale events",
    ],
  },
  {
    tier: "addon",
    title: "Listing images & A+ design",
    short:
      "Listing image sets and A+ designs that present your products clearly, priced per job.",
    long: "We design listing image sets and A+ content for your products. Design work is priced per job: ₹199 for 7 listing images and ₹299 for an A+ design with 6 modules.",
    points: [
      "Listing image design: 7 images for ₹199",
      "A+ listing design: 6 modules for ₹299",
    ],
  },
  {
    tier: "request",
    title: "Setup, compliance & fulfilment",
    short:
      "Account setup, approvals, Brand Registry and FBA planning, quoted separately when you need them.",
    long: "These are not part of the monthly plan. Tell us what you need and we will quote it before starting.",
    points: [
      "Seller registration and GST setup",
      "Category approvals and Brand Registry",
      "FBA shipment planning and reimbursement claims",
      "Brand Store build",
    ],
  },
];

export const services: Service[] = raw.map((s, i) => ({
  ...s,
  no: String(i + 1).padStart(2, "0"),
}));

export const steps = [
  {
    title: "Audit",
    body: "We review your account, catalogue, ads and account health, free of charge.",
  },
  {
    title: "Plan",
    body: "You receive a written plan with clear priorities and targets for your account.",
  },
  {
    title: "Manage",
    body: "Our team takes over daily operations through secure, permission-based access.",
  },
  {
    title: "Report",
    body: "Every month you get a plain-language report and a review call.",
  },
];

export const planFeatures = [
  "Listing management",
  "Account health monitoring",
  "Promotions: coupons and deals",
  "Advertising management",
];

export const plans = [
  {
    id: "monthly",
    name: "Monthly",
    tag: "Billed monthly",
    price: "₹5,000",
    unit: "/month",
    note: "",
    body: "Full account management for your Amazon.in store, paid month by month.",
    cta: "Choose monthly",
    featured: false,
  },
  {
    id: "quarterly",
    name: "Quarterly",
    tag: "Billed quarterly · Best value",
    price: "₹4,000",
    unit: "/month",
    note: "Billed quarterly: ₹12,000 per quarter",
    body: "The same full service at a lower monthly rate, paid three months at a time.",
    cta: "Choose quarterly",
    featured: true,
  },
];

export const designJobs = [
  {
    name: "Images",
    tag: "Listing image design",
    price: "₹199",
    unit: "for 7 images",
    body: "A set of listing images designed for your product.",
    points: ["7 listing image designs", "Priced per set"],
    cta: "Order images",
  },
  {
    name: "A+ Design",
    tag: "A+ listing design",
    price: "₹299",
    unit: "for 6 design modules",
    body: "A+ content designed for your product listing.",
    points: ["A+ listing design", "6 design modules"],
    cta: "Order A+ design",
  },
];

export const pricingNote =
  "No GST is added to these prices. Account management prices exclude ad spend.";

export const faqs = [
  {
    q: "Do I keep ownership of my seller account?",
    a: "Yes. The Seller Central account, your brand, your data and all payouts stay with you. We work through the Manage Your Users permissions that you grant, and you can remove our access at any time. We never ask for your login password or OTP.",
  },
  {
    q: "How does onboarding work, and how long does it take?",
    a: "After a free audit call we send a short checklist: user-permission invite, brand documents, GST details and your product catalogue. Most accounts are fully onboarded within about a week. New sellers need a little longer because registration and category approvals depend on Amazon's review times.",
  },
  {
    q: "Do you handle FBA and Easy Ship?",
    a: "Stock levels are watched as part of every plan. FBA shipment planning and reimbursement claims are not included in the monthly fee, but we can take them on: tell us what you need and we will quote it separately. Physical packing and dispatch stay with you or your logistics partner.",
  },
  {
    q: "Is ad spend included in the package price?",
    a: "No. Advertising budgets are paid directly to Amazon from your own account. Our monthly fee covers planning, campaign management and optimisation, so you always see exactly where your ad money goes.",
  },
  {
    q: "What if my account is suspended or a listing is removed?",
    a: "Send us the notice the same day. We review the policy violation, prepare a plan of action and submit appeals to Seller Support. Reinstatement depends on Amazon's decision and we cannot guarantee an outcome, but we handle the paperwork and follow-ups end to end.",
  },
  {
    q: "Is there a minimum contract or notice period?",
    a: "The monthly plan runs month to month and you can cancel at any time; it ends with the month you have paid for. The quarterly plan is paid three months at a time, and if you cancel we refund ₹4,000 for each full month not yet started. Work in progress is handed back to you in full, including campaign structures and listing files.",
  },
  {
    q: "How do you keep my account secure?",
    a: "Each Draporia team member works under their own Seller Central user with only the permissions their work needs. We never ask for your password or OTP, we review access every quarter and we remove a team member's access within 24 hours if they leave. Our Security & data handling page explains the full process, including what we do if something goes wrong.",
    link: { href: "/security", label: "Read our security & data handling policy" },
  },
  {
    q: "How do you report on performance?",
    a: "You receive a monthly report covering sales, advertising, inventory and account health, followed by a review call with your account manager.",
  },
  {
    q: "Do you charge GST on your fee?",
    a: "No. We do not collect GST on our services, so no GST is added to the prices shown.",
  },
];

export const values = [
  {
    title: "Ownership",
    body: "We treat your account as our own and take responsibility for results.",
  },
  {
    title: "Open books",
    body: "You keep full ownership and visibility of your account, data and ad spend.",
  },
  {
    title: "One focus",
    body: "One marketplace, one service. Our expertise stays deep because it stays narrow.",
  },
];

export const whatsappMessage =
  "Hi Draporia, I would like a free audit of my Amazon.in seller account.";

export const whatsappLink = `${contact.whatsappHref}?text=${encodeURIComponent(whatsappMessage)}`;

/**
 * Google Search Console: paste the content="..." value from the HTML tag
 * verification method here, then redeploy.
 */
export const googleSiteVerification = "";
