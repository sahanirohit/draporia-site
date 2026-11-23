import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero label="404 — Page not found" lead="This page does not exist or has moved.">
        Lost in <span className="serif grad">transit.</span>
      </PageHero>
      <div className="wrap relative z-10 pb-28 pt-10">
        <Link href="/" className="btn btn-primary">Back to home</Link>
      </div>
    </>
  );
}
