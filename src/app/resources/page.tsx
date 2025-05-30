import { siteTexts } from '../../constants/texts';

export default function ResourcesPage() {
  const { title, description, placeholderNote } = siteTexts.resourcesPage;

  return (
    <main className="p-8 bg-[var(--background)] text-gray-900">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-4">{description}</p>
      <p className="text-sm text-gray-600">{placeholderNote}</p>
    </main>
  );
}
