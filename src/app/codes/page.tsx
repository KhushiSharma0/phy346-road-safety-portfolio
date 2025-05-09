import { siteTexts } from '../../constants/texts';
import Image from 'next/image';

export default function CodesPage() {
  const { title, description, repos } = siteTexts.codesPage;

  return (
    <main className="p-8 bg-[var(--background)] text-gray-900">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{description}</p>

      <div className="grid gap-6 md:grid-cols-2">
        {repos.map((repo, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md bg-gray-100 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-1">{repo.name}</h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Topic:</strong> {repo.topic}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Author:</strong> {repo.author}
            </p>
            <p className="text-sm text-gray-700 mb-4">{repo.description}</p>

            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              <Image
                src="/icons/github-white.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="mr-2"
              />
              Visit Repository
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
