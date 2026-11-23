import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact and free account audit",
  description:
    "Book a free audit of your Amazon.in seller account. Call, WhatsApp or email Draporia in Surat, Gujarat.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHero label="Contact — Consignment note">
        Namaste. Let&apos;s talk <span className="serif grad">shop.</span>
      </PageHero>
      <section className="wrap relative z-10 flex flex-wrap items-start gap-x-16 gap-y-12 pb-28 pt-16">
        <Reveal className="max-w-[480px] flex-[1_1_300px]">
          <p className="m-0 mb-8 text-[19px] leading-[1.55] text-muted">
            Tell us about your business. We will review your account and reply within
            one working day. The first audit is free.
          </p>
          <dl className="dl m-0 border-t border-line">
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href={contact.phoneHref}>{contact.phoneDisplay}</a></dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd><a href={contact.whatsappHref} rel="noopener">{contact.phoneDisplay}</a></dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{contact.hours}</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{contact.location}</dd>
            </div>
          </dl>
        </Reveal>
        <Reveal className="flex-[1.3_1_340px]" delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
