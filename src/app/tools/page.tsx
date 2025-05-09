import { siteTexts } from '../../constants/texts';

export default function ToolsPage() {
  const { title, description, placeholderNote } = siteTexts.toolsPage;

  return (
    <main className="p-8 bg-[var(--background)] text-gray-900">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-4">{description}</p>

      <div className="my-6">
        <a
          href="https://phy346-road-safety-tools.streamlit.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            🚀 Open Interactive Dashboard
          </button>
        </a>
      </div>

      <p className="text-sm text-gray-600">{placeholderNote}</p>
    </main>
  );
}
