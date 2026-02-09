import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getContent } from '@/lib/content';

const t = getContent('en');

export const metadata: Metadata = {
  title: `${t.privacy.title} — FødeiNorge`,
  description: 'Privacy policy for the FødeiNorge app.',
};

export default function PrivacyPageEn() {
  return (
    <>
      <Header locale="en" />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.privacy.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">{t.privacy.lastUpdated}</p>

          <div className="mt-10 space-y-8">
            {t.privacy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-gray-600">
                  {section.content.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return (
                        <strong key={i} className="font-semibold text-gray-800">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer locale="en" />
    </>
  );
}
