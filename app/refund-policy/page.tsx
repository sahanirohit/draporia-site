import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { refund } from "@/content/legal";

export const metadata: Metadata = {
  title: refund.title,
  description: refund.description,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPage() {
  return <LegalPage doc={refund} />;
}
