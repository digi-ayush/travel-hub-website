export default function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-white/68">{text}</p> : null}
    </div>
  );
}
