import Link from 'next/link';
import { Locale, getContent, getLocalePath } from '@/lib/content';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = getContent(locale);

  return (
    <footer className="border-t border-rosa-100 bg-rosa-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rosa-300 text-white text-sm font-bold">
                F
              </div>
              <span className="text-lg font-semibold text-gray-900">FødeiNorge</span>
            </div>
            <p className="mt-3 text-sm text-gray-500">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t.footer.links}</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href={getLocalePath(locale, 'home')}
                  className="text-sm text-gray-500 hover:text-rosa-600"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalePath(locale, 'privacy')}
                  className="text-sm text-gray-500 hover:text-rosa-600"
                >
                  {t.nav.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalePath(locale, 'support')}
                  className="text-sm text-gray-500 hover:text-rosa-600"
                >
                  {t.nav.support}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t.footer.contact}</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:support@fodeinorge.app"
                  className="text-sm text-gray-500 hover:text-rosa-600"
                >
                  support@fodeinorge.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-rosa-200 pt-6">
          <p className="text-center text-xs text-gray-400">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
