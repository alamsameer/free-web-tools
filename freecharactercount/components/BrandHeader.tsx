type BrandHeaderProps = {
  title: string;
  subhead?: string;
  lead?: string;
  showBrandLink?: boolean;
};

export function BrandHeader({
  title,
  subhead,
  lead,
  showBrandLink = false,
}: BrandHeaderProps) {
  return (
    <header className="brand">
      {showBrandLink ? (
        <p className="brand__name">
          <a className="brand__home" href="/">
            Free Character Count
          </a>
        </p>
      ) : (
        <p className="brand__name">Free Character Count</p>
      )}
      <h1 className="brand__headline">{title}</h1>
      {subhead ? <p className="brand__subhead">{subhead}</p> : null}
      {lead ? <p className="brand__lead">{lead}</p> : null}
    </header>
  );
}
