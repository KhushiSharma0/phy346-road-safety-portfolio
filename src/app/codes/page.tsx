import { siteTexts } from '../../constants/texts';

export default function CodesPage() {
  const { title, description, repos } = siteTexts.codesPage;

  return (
    <main className="p-8 bg-[var(--background)] text-gray-900">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{description}</p>

      <div className="space-y-6">
        {repos.map((repo, index) => (
          <div key={index} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{repo.name}</h2>
            <p className="text-sm text-gray-700 mb-2">{repo.description}</p>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-accent underline"
            >
              Visit Repository →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
