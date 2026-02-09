import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneMockup from '@/components/PhoneMockup';
import { getContent } from '@/lib/content';

const t = getContent('en');

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
};

export default function HomePageEn() {
  return (
    <>
      <Header locale="en" />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-rosa-50 to-white px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {t.hero.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {t.hero.subtitle}
              </p>
              <div className="mt-10">
                <p className="text-sm font-medium text-teal-500">{t.hero.comingSoon}</p>
                <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
                  <div className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white opacity-60">
                    App Store
                  </div>
                  <div className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white opacity-60">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {t.features.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600">{t.features.subtitle}</p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {t.features.items.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
