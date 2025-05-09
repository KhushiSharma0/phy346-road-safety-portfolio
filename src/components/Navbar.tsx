import Link from 'next/link';
import { siteTexts } from "../constants/texts";

export default function Navbar() {
  const links = siteTexts.navbar.links;

  return (
    <nav className="p-4 sticky top-0 z-50 shadow bg-[var(--primary)] text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">{siteTexts.navbar.brand}</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/report" className="hover:text-[var(--secondary)]">{links.report}</Link>
          <Link href="/codes" className="hover:text-[var(--secondary)]">{links.codes}</Link>
          <Link href="/tools" className="hover:text-[var(--secondary)]">{links.tools}</Link>
          <Link href="/resources" className="hover:text-[var(--secondary)]">{links.resources}</Link>
          <Link href="/about" className="hover:text-[var(--secondary)]">{links.about}</Link>
        </div>
      </div>
    </nav>
  );
}