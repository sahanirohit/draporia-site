export type LegalDoc = {
  title: string;
  label: string;
  description: string;
  updated: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
};

const updated = "16 November 2026";
const reach =
  "Email draporiaofficial@gmail.com or call or WhatsApp +91 72038 77149.";

export const terms: LegalDoc = {
  title: "Terms & Conditions",
  label: "Legal — Terms & Conditions",
  description:
    "The terms that apply when you use the Draporia website or our Amazon.in account management and listing design services.",
  updated: "21 November 2026",
  intro:
    "Draporia is owned and operated by Rohit Sahani and is based in Surat, Gujarat, India. These terms apply when you use this website or buy any of our services. By engaging us you agree to them.",
  sections: [
    {
      title: "Our services",
      paragraphs: [
        "We provide account management for sellers on Amazon.in, covering listing management, account health monitoring, promotions such as coupons and deals, and advertising management.",
        "We also provide design services: listing image design and A+ listing design.",
        "Other work, such as account setup, category approvals, Brand Registry or FBA planning, is not part of the monthly fee and is quoted separately before we start.",
        "The exact scope of work for your account or design job is agreed with you in writing, by email or WhatsApp, before we start.",
      ],
    },
    {
      title: "Your account and your responsibilities",
      paragraphs: [
        "Your Seller Central account, brand, data and payouts remain yours at all times.",
        "We work only through the user permissions that you grant us. We never ask for your login password or OTP, and you can remove our access at any time.",
        "You are responsible for the information, images and documents you give us, for the products you sell, and for making sure those products comply with the law and with Amazon's policies.",
      ],
    },
    {
      title: "Fees and payment",
      paragraphs: [
        "Account management costs ₹5,000 per month on the monthly plan, or ₹4,000 per month on the quarterly plan, which is billed as ₹12,000 per quarter.",
        "Listing image design costs ₹199 for a set of 7 images. A+ listing design costs ₹299 for 6 design modules.",
        "All fees are paid in advance: the monthly plan at the start of each month, the quarterly plan at the start of each quarter, and design jobs before work begins.",
        "No GST is added to these prices. Advertising spend and all Amazon fees are paid by you directly to Amazon and are not part of our fee.",
        "The prices shown on this website apply when you sign up. If a price changes, we will tell you before your next billing period.",
      ],
    },
    {
      title: "Cancellation and refunds",
      paragraphs: [
        "You can cancel at any time by writing to us. Refunds are handled as set out in our Refund & Cancellation Policy, which forms part of these terms.",
      ],
    },
    {
      title: "No guarantee of results",
      paragraphs: [
        "We work to improve your account, but we cannot guarantee sales, rankings, advertising results or any particular outcome.",
        "Decisions made by Amazon, including listing removals, account suspensions and reinstatements, are outside our control.",
      ],
    },
    {
      title: "Designs and content",
      paragraphs: [
        "Content, images and brand assets that you give us remain yours.",
        "Designs we create for you become yours once the fee for that job is paid in full. We will show your work as a sample only with your permission.",
      ],
    },
    {
      title: "Confidentiality",
      paragraphs: [
        "We keep your account information and business data confidential and use it only to provide our services to you.",
      ],
    },
    {
      title: "Limitation of liability",
      paragraphs: [
        "To the extent the law allows, our total liability for any claim connected with our services is limited to the fees you paid us in the three months before the claim arose.",
        "We are not liable for indirect or consequential losses such as lost profit, or for losses caused by Amazon's actions, by third parties, or by information you supplied.",
      ],
    },
    {
      title: "Independent agency",
      paragraphs: [
        "Draporia is an independent agency. We are not affiliated with, endorsed by or sponsored by Amazon.",
      ],
    },
    {
      title: "Changes to these terms",
      paragraphs: [
        "We may update these terms from time to time. The current version is always on this page, with the date it was last updated.",
      ],
    },
    {
      title: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of India. The courts at Surat, Gujarat have jurisdiction over any dispute.",
      ],
    },
    { title: "Contact", paragraphs: [reach] },
  ],
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  label: "Legal — Privacy Policy",
  description:
    "What information Draporia collects, how we use it and the choices you have.",
  updated: "21 November 2026",
  intro:
    "Draporia is owned and operated by Rohit Sahani and is based in Surat, Gujarat, India. This policy explains what information we collect, how we use it and the choices you have.",
  sections: [
    {
      title: "Information we collect",
      paragraphs: [
        "Contact details you give us when you call, email or message us, such as your name, phone number, email address and business name.",
        "Account information we see while providing our services through the Seller Central access you grant, such as your catalogue, orders, advertising and performance reports.",
        "The contact form on this website does not currently send or store what you type into it. Our hosting provider may keep standard technical logs, such as IP address and browser type, to run and secure the site.",
        "This website does not use advertising or tracking cookies. We use Vercel Web Analytics to count page visits; it does not use cookies and does not identify individual visitors.",
      ],
    },
    {
      title: "How we use it",
      paragraphs: [
        "To reply to your enquiries, provide the services you asked for, send you reports and invoices, and keep our business records.",
        "We do not sell your information, and we do not use your account data for any purpose other than serving you.",
      ],
    },
    {
      title: "Who we share it with",
      paragraphs: [
        "We share information only with the service providers we need to run our business, such as website hosting, email and messaging, or when the law requires us to.",
      ],
    },
    {
      title: "How long we keep it",
      paragraphs: [
        "We keep your information while you are a client and for as long afterwards as we need it for records or legal reasons. You can ask us to delete it sooner.",
      ],
    },
    {
      title: "Security",
      paragraphs: [
        "We use permission-based access to your seller account and never ask for your password or OTP. No method of storage or transmission is completely secure, but we take reasonable care to protect your information. Our Security & Data Handling Policy describes our access controls and incident response in detail.",
      ],
    },
    {
      title: "Your choices",
      paragraphs: [
        "You can ask to see, correct or delete the information we hold about you, or withdraw your consent, by contacting us. You can remove our access to your seller account at any time.",
      ],
    },
    {
      title: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The current version is always on this page, with the date it was last updated.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        `For any privacy question or complaint, contact Rohit Sahani. ${reach}`,
      ],
    },
  ],
};

export const refund: LegalDoc = {
  title: "Refund & Cancellation",
  label: "Legal — Refund & Cancellation Policy",
  description:
    "How to cancel a Draporia plan and when a refund applies for account management and design services.",
  updated,
  intro:
    "This policy explains how to cancel and when a refund applies. All our fees are paid in advance.",
  sections: [
    {
      title: "Monthly plan",
      paragraphs: [
        "The monthly plan is ₹5,000 per month, paid at the start of each month.",
        "You can cancel at any time. Cancellation takes effect at the end of the month you have paid for, and the fee for that month is not refunded.",
      ],
    },
    {
      title: "Quarterly plan",
      paragraphs: [
        "The quarterly plan is ₹12,000 per quarter (₹4,000 per month), paid at the start of each quarter.",
        "If you cancel during a quarter, we refund ₹4,000 for each full month that has not yet started. The month in progress is not refunded.",
      ],
    },
    {
      title: "Design services",
      paragraphs: [
        "Listing image design and A+ listing design are paid for before work begins, and these fees are not refundable.",
      ],
    },
    {
      title: "Advertising spend and Amazon fees",
      paragraphs: [
        "Advertising budgets and Amazon fees are paid by you directly to Amazon. We do not hold this money and cannot refund it.",
      ],
    },
    {
      title: "How to cancel",
      paragraphs: [
        `Write to us to cancel. ${reach}`,
        "When you cancel, we will confirm the date it takes effect, any refund due and how it will be paid.",
      ],
    },
  ],
};

export const security: LegalDoc = {
  title: "Security & Data Handling",
  label: "Policy — Security & Data Handling",
  description:
    "How Draporia accesses Amazon seller accounts, limits and reviews team access, handles seller data and responds to security incidents.",
  updated: "21 November 2026",
  intro:
    "Managing an Amazon account means being trusted with a seller's business. This policy explains how the Draporia team gets access to your account, how we limit and review that access, how we handle your data and what we do if something goes wrong.",
  sections: [
    {
      title: "How we access your account",
      paragraphs: [
        "We work only through Seller Central's user permissions, which you grant and control. You never share your own login.",
        "We never ask for your password, OTP or two-step verification codes, and we will never take over the primary account owner's login.",
        "You can see every Draporia user on your account at any time, and you can remove our access instantly from Seller Central.",
      ],
    },
    {
      title: "Least-privilege access for our team",
      paragraphs: [
        "Every Draporia team member has their own named Seller Central user. We do not share logins inside the team.",
        "Each person is given only the permissions their work on your account needs. For example, someone running your advertising does not get access to payments or tax settings.",
        "Team members must use two-step verification on the accounts they use for client work.",
      ],
    },
    {
      title: "Access reviews and removal",
      paragraphs: [
        "We review who has access to each client account at least once every quarter and remove anything that is no longer needed.",
        "When a team member leaves Draporia or moves off your account, we remove their access within 24 hours.",
        "When you end your plan, we remove all Draporia users from your account and confirm it to you in writing.",
      ],
    },
    {
      title: "How we handle your data",
      paragraphs: [
        "Your data stays in Seller Central wherever possible. When we need a report or file outside it, we keep it only in Draporia's work accounts, never on personal phones or in personal email.",
        "We use your data only to provide our services to you. We do not sell it or share it with anyone except the service providers we need to run our business.",
        "We do not keep buyers' personal information, such as names, addresses or phone numbers, outside Seller Central.",
        "When you end your plan, we delete the copies of your reports and files that we hold, unless the law requires us to keep a record.",
      ],
    },
    {
      title: "Incident response",
      paragraphs: [
        "A security incident is any event where your account or data may have been accessed or changed without permission, such as a lost device, a compromised team login or an unexpected change in your account.",
        "Contain: as soon as we detect or suspect an incident, we remove or restrict the affected Draporia access and change any affected credentials.",
        "Notify: we tell you within 24 hours of detecting the incident. Where Amazon data may be involved, we also notify Amazon at security@amazon.com within 24 hours, as Amazon's Data Protection Policy requires.",
        "Investigate and fix: we work out what happened, what was affected and what needs to change, and we share the findings with you.",
        "Review: after every incident we update our process. We also review this incident response plan at least every six months.",
      ],
    },
    {
      title: "Reporting a concern",
      paragraphs: [
        "If you think something is wrong with your account or with our access, contact us straight away. Email draporiaofficial@gmail.com or call or WhatsApp +91 72038 77149.",
      ],
    },
  ],
};
