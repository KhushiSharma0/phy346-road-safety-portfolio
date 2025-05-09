import { siteTexts } from "../constants/texts";

export default function HomePage() {
  return (
    <main className="p-8 bg-[var(--background)] text-gray-900">
      <h1 className="text-4xl font-bold mb-4">{siteTexts.homepage.welcomeHeading}</h1>
      <p className="text-lg">{siteTexts.homepage.welcomeText}</p>
    </main>
  );
}
