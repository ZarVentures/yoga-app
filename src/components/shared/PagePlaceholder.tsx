/** Temporary placeholder body used until each page's real content is built. */
export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="container-page py-20 lg:py-28">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="mt-3 text-4xl lg:text-5xl">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
        <p className="text-sm text-muted-foreground">Content for this page is coming soon.</p>
      </div>
    </section>
  );
}
