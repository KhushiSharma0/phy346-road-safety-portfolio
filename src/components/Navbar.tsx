import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">South Yorkshire Safety</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/report" className="hover:text-secondary">Report</Link>
          <Link href="/codes" className="hover:text-secondary">Codes & Guides</Link>
          <Link href="/tools" className="hover:text-secondary">Interactive Tools</Link>
          <Link href="/resources" className="hover:text-secondary">Resources</Link>
          <Link href="/about" className="hover:text-secondary">About</Link>
        </div>
      </div>
    </nav>
  );
}
