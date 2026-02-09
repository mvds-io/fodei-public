'use client';

import Link from 'next/link';
import { Locale, getContent, getLocalePath, getAlternateLocale } from '@/lib/content';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const t = getContent(locale);
  const altLocale = getAlternateLocale(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-rosa-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={getLocalePath(locale, 'home')} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rosa-300 text-white text-sm font-bold">
            F
          </div>
          <span className="text-lg font-semibold text-gray-900">FødeiNorge</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href={getLocalePath(locale, 'privacy')}
            className="hidden text-sm text-gray-600 hover:text-rosa-600 sm:block"
          >
            {t.nav.privacy}
          </Link>
          <Link
            href={getLocalePath(locale, 'support')}
            className="hidden text-sm text-gray-600 hover:text-rosa-600 sm:block"
          >
            {t.nav.support}
          </Link>
          <Link
            href={getLocalePath(altLocale, 'home')}
            className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition-colors hover:border-rosa-300 hover:text-rosa-600"
          >
            <span>{t.nav.languageFlag}</span>
            <span>{t.nav.language}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
