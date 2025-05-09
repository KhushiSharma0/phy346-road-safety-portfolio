import { siteTexts } from '../../constants/texts';

export default function ReportPage() {
  const { title, description, placeholderNote } = siteTexts.reportPage;

  return (
    <main className="bg-[var(--background)] text-gray-900">
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-4">{description}</p>
        <p className="text-sm text-gray-600 mb-4">{placeholderNote}</p>

        <p className="mb-4 text-sm text-gray-600">
          If the embed doesn’t load,{' '}
          <a
            href="/report/PHY346_2024_Report.pdf"
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here to open the PDF
          </a>.
        </p>
      </section>

      <div className="w-full px-4" style={{ height: '100vh' }}>
        <iframe
          src="/report/PHY346_2024_Report.pdf"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </main>
  );
}
