export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      stroke="var(--color-violet)"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M15 2 27 8.5v13L15 28 3 21.5v-13L15 2Z" />
      <path d="M3 8.5 15 15l12-6.5M15 15v13" />
    </svg>
  );
}

export function Check({ color = "var(--color-violet)" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: "none" }}
    >
      <path d="m3 8.5 3.2 3L13 4.5" />
    </svg>
  );
}

export function Arrow() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h12M10 4l5 5-5 5" />
    </svg>
  );
}
