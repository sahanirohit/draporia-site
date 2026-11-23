"use client";

import { useState } from "react";
import { contact } from "@/content/site";

type Values = { name: string; email: string; phone: string; stage: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const stages = [
  "Not yet selling on Amazon.in",
  "Under ₹5 lakh",
  "₹5 to 25 lakh",
  "Above ₹25 lakh",
];

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !/^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(v.phone.trim()))
    e.phone = "Enter a 10-digit Indian mobile number.";
  if (v.message.length > 1000) e.message = "Please keep this under 1000 characters.";
  return e;
}

function compose(v: Values) {
  return [
    "Free audit request (draporia website)",
    `Name: ${v.name.trim()}`,
    v.email.trim() && `Email: ${v.email.trim()}`,
    v.phone.trim() && `Phone: ${v.phone.trim()}`,
    `Monthly Amazon sales today: ${v.stage}`,
    v.message.trim() && `How can you help: ${v.message.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function ContactForm() {
  const [v, setV] = useState<Values>({ name: "", email: "", phone: "", stage: stages[0], message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState<"" | "WhatsApp" | "your email app">("");

  const set =
    (k: keyof Values) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setV((prev) => ({ ...prev, [k]: ev.target.value }));

  const send = (via: "whatsapp" | "email") => {
    const e = validate(v);
    setErrors(e);
    if (Object.keys(e).length) return;
    const text = compose(v);
    if (via === "whatsapp") {
      window.open(
        `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener",
      );
      setOpened("WhatsApp");
    } else {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        "Free audit request",
      )}&body=${encodeURIComponent(text)}`;
      setOpened("your email app");
    }
  };

  return (
    <form
      noValidate
      onSubmit={(ev) => {
        ev.preventDefault();
        send("whatsapp");
      }}
      className="plan featured gap-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="h3 text-[22px]">Free audit request</h2>
        <span className="badge">No obligation</span>
      </div>

      <label className="field">
        <span>Full name</span>
        <input className="input" type="text" name="name" autoComplete="name" value={v.name} onChange={set("name")} aria-invalid={!!errors.name} />
        {errors.name && <span className="err" role="alert">{errors.name}</span>}
      </label>
      <label className="field">
        <span>Email (optional)</span>
        <input className="input" type="email" name="email" autoComplete="email" value={v.email} onChange={set("email")} aria-invalid={!!errors.email} />
        {errors.email && <span className="err" role="alert">{errors.email}</span>}
      </label>
      <label className="field">
        <span>Phone (optional)</span>
        <input className="input" type="tel" name="phone" autoComplete="tel" value={v.phone} onChange={set("phone")} aria-invalid={!!errors.phone} />
        {errors.phone && <span className="err" role="alert">{errors.phone}</span>}
      </label>
      <label className="field">
        <span>Monthly Amazon sales today</span>
        <select className="input" name="stage" value={v.stage} onChange={set("stage")}>
          {stages.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>How can we help?</span>
        <textarea className="input" name="message" rows={4} value={v.message} onChange={set("message")} aria-invalid={!!errors.message} />
        {errors.message && <span className="err" role="alert">{errors.message}</span>}
      </label>

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn btn-primary flex-[1_1_220px]" style={{ boxShadow: "none" }}>
          Send on WhatsApp
        </button>
        <button type="button" onClick={() => send("email")} className="btn btn-ghost flex-[1_1_180px]">
          Send by email
        </button>
      </div>
      <p className="m-0 text-[14px] text-dim" role="status">
        {opened
          ? `We opened ${opened} with your request ready. Press send there to reach us.`
          : "This opens WhatsApp or your email app with your request filled in. Nothing you type is stored on this website."}
      </p>
    </form>
  );
}
