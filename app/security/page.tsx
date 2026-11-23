import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { security } from "@/content/legal";

export const metadata: Metadata = {
  title: security.title,
  description: security.description,
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return <LegalPage doc={security} />;
}
