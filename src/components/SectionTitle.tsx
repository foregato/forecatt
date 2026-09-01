export default function SectionTitle({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
