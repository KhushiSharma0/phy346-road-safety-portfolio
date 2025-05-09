import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 shadow bg-[var(--primary)] text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">South Yorkshire Safety</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/report" className="hover:text-[var(--secondary)]">Report</Link>
          <Link href="/codes" className="hover:text-[var(--secondary)]">Codes & Guides</Link>
          <Link href="/tools" className="hover:text-[var(--secondary)]">Interactive Tools</Link>
          <Link href="/resources" className="hover:text-[var(--secondary)]">Resources</Link>
          <Link href="/about" className="hover:text-[var(--secondary)]">About</Link>
        </div>
      </div>
    </nav>
  );
}
