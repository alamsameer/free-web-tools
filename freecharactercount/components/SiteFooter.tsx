import { TOOL_PAGES } from "@/lib/toolPages";

const trustLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__block">
          <p className="site-footer__heading">Tools</p>
          <ul className="site-footer__list">
            <li>
              <a href="/">Character counter</a>
            </li>
            {TOOL_PAGES.map((tool) => (
              <li key={tool.slug}>
                <a href={`/${tool.slug}`}>{tool.navLabel}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer__block">
          <p className="site-footer__heading">Site</p>
          <ul className="site-footer__list">
            {trustLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="site-footer__note">
          Free Character Count runs in your browser. Nothing you type is uploaded.
        </p>
      </div>
    </footer>
  );
}
