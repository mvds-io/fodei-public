import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getContent } from '@/lib/content';

const t = getContent('en');

export const metadata: Metadata = {
  title: `${t.support.title} — FødeiNorge`,
  description: 'Support and help for the FødeiNorge app.',
};

export default function SupportPageEn() {
  return (
    <>
      <Header locale="en" />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.support.title}
          </h1>
          <p className="mt-2 text-lg text-gray-600">{t.support.subtitle}</p>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">{t.support.faq.title}</h2>
            <div className="mt-6 space-y-6">
              {t.support.faq.items.map((item) => (
                <div key={item.question} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mt-12 rounded-2xl bg-rosa-50 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">{t.support.contact.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{t.support.contact.description}</p>
            <a
              href={`mailto:${t.support.contact.email}`}
              className="mt-4 inline-block rounded-xl bg-teal-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-500"
            >
              {t.support.contact.button}
            </a>
          </section>

          {/* App Info */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900">{t.support.appInfo.title}</h2>
            <div className="mt-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-600">{t.support.appInfo.version}</p>
              <p className="mt-1 text-sm text-gray-600">{t.support.appInfo.platforms}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}
