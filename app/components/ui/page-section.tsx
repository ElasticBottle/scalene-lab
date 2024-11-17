interface PageSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function PageSection({
  id,
  title,
  subtitle,
  description,
  children,
  className,
}: PageSectionProps) {
  const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;
  return (
    <section id={id || sectionId} className={className}>
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto space-y-4 pb-6 text-center">
          {title && (
            <h2 className="font-medium font-mono text-primary text-sm uppercase tracking-wider">
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-none sm:text-4xl md:text-5xl">
              {subtitle}
            </h3>
          )}
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-8">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
