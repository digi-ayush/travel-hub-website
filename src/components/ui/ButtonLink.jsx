import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const styles =
    variant === "ghost"
      ? "border border-white/20 bg-white/8 text-white hover:bg-white/14"
      : "bg-brand text-white shadow-[0_18px_50px_rgba(69,129,104,0.32)] hover:bg-[#58a384]";

  return (
    <Link href={href} className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-black transition ${styles} ${className}`}>
      {children}
    </Link>
  );
}
