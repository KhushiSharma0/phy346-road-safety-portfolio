import { siteTexts } from '../../constants/texts';

export default function ReportPage() {
  const { title, description, placeholderNote } = siteTexts.reportPage;

  return (
    <main className="p-8 bg-[var(--background)] text-gray-900">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-4">{description}</p>
      <p className="text-sm text-gray-600">{placeholderNote}</p>

      <p className="text-lg mb-4">You can view the full report PDF below:</p>

      <div className="w-full" style={{ height: '80vh' }}>
        <iframe
          src="/report.pdf"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>

      <p className="mt-4 text-sm text-gray-600">
        If the embed doesn’t load, <a href="/report.pdf" className="text-accent underline" target="_blank" rel="noopener noreferrer">click here to open the PDF</a>.
      </p>
    </main>
  );
}
