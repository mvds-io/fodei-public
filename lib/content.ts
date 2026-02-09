export type Locale = 'no' | 'en';

export const content = {
  no: {
    meta: {
      title: 'FødeiNorge — Finn ditt fødested',
      description:
        'Sammenlign fødeavdelinger, fødestuer og hjemmefødselstjenester i hele Norge. Gratis app for gravide og deres familier.',
    },
    nav: {
      home: 'Hjem',
      privacy: 'Personvern',
      support: 'Støtte',
      language: 'English',
      languageFlag: '🇬🇧',
    },
    hero: {
      title: 'Finn ditt fødested',
      subtitle:
        'Sammenlign fødeavdelinger, fødestuer og hjemmefødselstjenester i hele Norge. Alt du trenger for å ta et informert valg.',
      cta: 'Last ned gratis',
      comingSoon: 'Kommer snart på App Store og Google Play',
    },
    features: {
      title: 'Alt du trenger',
      subtitle: 'FødeiNorge gir deg oversikt over alle fødetilbudene i Norge',
      items: [
        {
          icon: '🏥',
          title: 'Alle fødesteder',
          description:
            'Komplett oversikt over fødeavdelinger, fødestuer, hjemmefødselstjenester og doulaer i Norge.',
        },
        {
          icon: '⚖️',
          title: 'Sammenlign',
          description:
            'Sammenlign fødesteder side om side — fasiliteter, smertelindring, statistikk og mer.',
        },
        {
          icon: '🗺️',
          title: 'Kjøretid',
          description:
            'Se hvor lang kjøretid det er fra din posisjon til nærmeste fødested.',
        },
        {
          icon: '⏱️',
          title: 'Rieteller',
          description:
            'Innebygd rieteller som hjelper deg å holde oversikt over rier og varighet.',
        },
        {
          icon: '📚',
          title: 'Artikler',
          description:
            'Les fagartikler om fødsel, forberedelser og hva du kan forvente.',
        },
        {
          icon: '🌍',
          title: 'Flerspråklig',
          description:
            'Tilgjengelig på norsk, engelsk, nordsamisk, lulesamisk, ukrainsk og polsk.',
        },
      ],
    },
    footer: {
      tagline: 'Hjelper deg å finne riktig fødested.',
      links: 'Lenker',
      contact: 'Kontakt',
      copyright: `© ${new Date().getFullYear()} FødeiNorge. Alle rettigheter reservert.`,
    },
    privacy: {
      title: 'Personvernerklæring',
      lastUpdated: 'Sist oppdatert: 9. februar 2026',
      sections: [
        {
          title: 'Innledning',
          content:
            'FødeiNorge («vi», «oss», «vår») er opptatt av å beskytte ditt personvern. Denne personvernerklæringen forklarer hvordan vi samler inn, bruker og beskytter dine opplysninger når du bruker vår mobilapplikasjon FødeiNorge («appen»).',
        },
        {
          title: 'Behandlingsansvarlig',
          content:
            'FødeiNorge er behandlingsansvarlig for behandlingen av personopplysninger beskrevet i denne erklæringen. Kontakt oss på support@fodeinorge.app.',
        },
        {
          title: 'Hvilke data vi samler inn',
          content: `Vi samler inn minimalt med data. Appen er designet for å fungere uten brukerregistrering.

**Data som lagres lokalt på din enhet (Hive):**
- Favorittfødesteder du har markert
- Sammenligningshistorikk
- Søkehistorikk
- Rieteller-data
- Appinnstillinger (språk, tema)

Disse dataene lagres kun på din enhet og sendes ikke til våre servere.

**Data vi mottar via Supabase (valgfritt):**
- Anonyme bruksstatistikker (hvilke sider som besøkes)
- Ingen personidentifiserende informasjon

**Posisjonsdata:**
- Appen kan bruke din posisjon for å beregne kjøretid til fødesteder via Google Maps Distance Matrix API
- Posisjonsdata sendes kun til Google Maps når du aktivt bruker kjøretidsfunksjonen
- Vi lagrer ikke posisjonsdata på våre servere`,
        },
        {
          title: 'Google Maps',
          content:
            'Appen bruker Google Maps Distance Matrix API for å beregne kjøretider. Når du bruker denne funksjonen, sendes din posisjon til Google. Googles personvernerklæring gjelder for denne behandlingen. Se: https://policies.google.com/privacy',
        },
        {
          title: 'Informasjonskapsler og sporing',
          content:
            'Vi bruker ikke informasjonskapsler, annonsesporing eller tredjepartsanalyse-verktøy. Vi selger ikke dine data til tredjeparter.',
        },
        {
          title: 'Datalagring og sikkerhet',
          content:
            'Lokale data lagres kryptert på din enhet. Eventuelle serverdata er lagret i Supabase-infrastruktur i EU (Frankfurt). Vi implementerer passende tekniske og organisatoriske tiltak for å beskytte dine data.',
        },
        {
          title: 'Dine rettigheter (GDPR)',
          content: `I henhold til GDPR har du følgende rettigheter:

- **Rett til innsyn** — Du kan be om innsyn i dine personopplysninger
- **Rett til retting** — Du kan be om retting av uriktige opplysninger
- **Rett til sletting** — Du kan be om sletting av dine data
- **Rett til dataportabilitet** — Du kan be om å motta dine data i et maskinlesbart format
- **Rett til å protestere** — Du kan protestere mot behandling av dine data

For å utøve dine rettigheter, kontakt oss på support@fodeinorge.app.

Alle lokale data slettes automatisk dersom du avinstallerer appen.`,
        },
        {
          title: 'Barn',
          content:
            'Appen er ikke rettet mot barn under 16 år. Vi samler ikke bevisst inn data fra barn.',
        },
        {
          title: 'Endringer i personvernerklæringen',
          content:
            'Vi kan oppdatere denne erklæringen fra tid til annen. Ved vesentlige endringer vil vi varsle deg via appen. Fortsatt bruk av appen etter endringer innebærer aksept av den oppdaterte erklæringen.',
        },
        {
          title: 'Kontakt oss',
          content:
            'Har du spørsmål om personvern? Kontakt oss på support@fodeinorge.app.',
        },
      ],
    },
    support: {
      title: 'Støtte',
      subtitle: 'Vi er her for å hjelpe deg',
      faq: {
        title: 'Ofte stilte spørsmål',
        items: [
          {
            question: 'Er appen gratis?',
            answer:
              'Ja, FødeiNorge er helt gratis å laste ned og bruke. Det er ingen skjulte kostnader eller abonnementer.',
          },
          {
            question: 'Hvordan finner jeg nærmeste fødested?',
            answer:
              'Appen bruker din posisjon for å beregne kjøretid til alle fødesteder i Norge. Du kan også søke og filtrere basert på fasiliteter, type fødested og region.',
          },
          {
            question: 'Lagrer appen mine personlige data?',
            answer:
              'Appen lagrer favoritter, søkehistorikk og innstillinger lokalt på din enhet. Ingen personlig data sendes til våre servere. Les vår personvernerklæring for mer informasjon.',
          },
          {
            question: 'Hvilke språk støtter appen?',
            answer:
              'Appen er tilgjengelig på norsk (bokmål), engelsk, nordsamisk, lulesamisk, ukrainsk og polsk.',
          },
          {
            question: 'Hvordan bruker jeg rietelleren?',
            answer:
              'Åpne rietelleren fra menyen. Trykk «Start» når en ri begynner og «Stopp» når den er over. Appen beregner automatisk intervaller og varighet.',
          },
          {
            question: 'Informasjonen om et fødested stemmer ikke. Hva gjør jeg?',
            answer:
              'Vi jobber kontinuerlig med å holde informasjonen oppdatert. Hvis du finner feil, send oss en e-post på support@fodeinorge.app så retter vi det så snart som mulig.',
          },
        ],
      },
      contact: {
        title: 'Kontakt oss',
        description:
          'Fant du ikke svaret du lette etter? Send oss en e-post, så hjelper vi deg.',
        email: 'support@fodeinorge.app',
        button: 'Send e-post',
      },
      appInfo: {
        title: 'App-informasjon',
        version: 'Versjon 1.0.0',
        platforms: 'Tilgjengelig for iOS og Android',
      },
    },
  },
  en: {
    meta: {
      title: 'FødeiNorge — Find Your Birthplace',
      description:
        'Compare maternity wards, birth centers, and home birth services across Norway. Free app for expectant parents.',
    },
    nav: {
      home: 'Home',
      privacy: 'Privacy',
      support: 'Support',
      language: 'Norsk',
      languageFlag: '🇳🇴',
    },
    hero: {
      title: 'Find Your Birthplace',
      subtitle:
        'Compare maternity wards, birth centers, and home birth services across Norway. Everything you need to make an informed choice.',
      cta: 'Download for free',
      comingSoon: 'Coming soon to App Store and Google Play',
    },
    features: {
      title: 'Everything You Need',
      subtitle: 'FødeiNorge gives you a complete overview of all birth services in Norway',
      items: [
        {
          icon: '🏥',
          title: 'All Birth Facilities',
          description:
            'Complete overview of maternity wards, birth centers, home birth services, and doulas in Norway.',
        },
        {
          icon: '⚖️',
          title: 'Compare',
          description:
            'Compare facilities side by side — amenities, pain relief, statistics, and more.',
        },
        {
          icon: '🗺️',
          title: 'Drive Time',
          description:
            'See how long it takes to drive from your location to the nearest birth facility.',
        },
        {
          icon: '⏱️',
          title: 'Contraction Timer',
          description:
            'Built-in contraction timer to help you track contractions and their duration.',
        },
        {
          icon: '📚',
          title: 'Articles',
          description:
            'Read expert articles about birth, preparation, and what to expect.',
        },
        {
          icon: '🌍',
          title: 'Multilingual',
          description:
            'Available in Norwegian, English, Northern Sami, Lule Sami, Ukrainian, and Polish.',
        },
      ],
    },
    footer: {
      tagline: 'Helping you find the right birthplace.',
      links: 'Links',
      contact: 'Contact',
      copyright: `© ${new Date().getFullYear()} FødeiNorge. All rights reserved.`,
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: February 9, 2026',
      sections: [
        {
          title: 'Introduction',
          content:
            'FødeiNorge ("we", "us", "our") is committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your information when you use our mobile application FødeiNorge ("the app").',
        },
        {
          title: 'Data Controller',
          content:
            'FødeiNorge is the data controller for the processing of personal data described in this policy. Contact us at support@fodeinorge.app.',
        },
        {
          title: 'What Data We Collect',
          content: `We collect minimal data. The app is designed to work without user registration.

**Data stored locally on your device (Hive):**
- Favorite birth facilities you have marked
- Comparison history
- Search history
- Contraction timer data
- App settings (language, theme)

This data is stored only on your device and is not sent to our servers.

**Data we receive via Supabase (optional):**
- Anonymous usage statistics (which pages are visited)
- No personally identifiable information

**Location data:**
- The app may use your location to calculate drive times to birth facilities via Google Maps Distance Matrix API
- Location data is only sent to Google Maps when you actively use the drive time feature
- We do not store location data on our servers`,
        },
        {
          title: 'Google Maps',
          content:
            'The app uses the Google Maps Distance Matrix API to calculate drive times. When you use this feature, your location is sent to Google. Google\'s privacy policy applies to this processing. See: https://policies.google.com/privacy',
        },
        {
          title: 'Cookies and Tracking',
          content:
            'We do not use cookies, advertising tracking, or third-party analytics tools. We do not sell your data to third parties.',
        },
        {
          title: 'Data Storage and Security',
          content:
            'Local data is stored encrypted on your device. Any server data is stored in Supabase infrastructure in the EU (Frankfurt). We implement appropriate technical and organizational measures to protect your data.',
        },
        {
          title: 'Your Rights (GDPR)',
          content: `Under the GDPR, you have the following rights:

- **Right of access** — You can request access to your personal data
- **Right to rectification** — You can request correction of inaccurate data
- **Right to erasure** — You can request deletion of your data
- **Right to data portability** — You can request your data in a machine-readable format
- **Right to object** — You can object to the processing of your data

To exercise your rights, contact us at support@fodeinorge.app.

All local data is automatically deleted if you uninstall the app.`,
        },
        {
          title: 'Children',
          content:
            'The app is not directed at children under 16. We do not knowingly collect data from children.',
        },
        {
          title: 'Changes to This Policy',
          content:
            'We may update this policy from time to time. For significant changes, we will notify you through the app. Continued use of the app after changes constitutes acceptance of the updated policy.',
        },
        {
          title: 'Contact Us',
          content:
            'Have questions about privacy? Contact us at support@fodeinorge.app.',
        },
      ],
    },
    support: {
      title: 'Support',
      subtitle: 'We\'re here to help',
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Is the app free?',
            answer:
              'Yes, FødeiNorge is completely free to download and use. There are no hidden costs or subscriptions.',
          },
          {
            question: 'How do I find the nearest birth facility?',
            answer:
              'The app uses your location to calculate drive times to all birth facilities in Norway. You can also search and filter based on amenities, facility type, and region.',
          },
          {
            question: 'Does the app store my personal data?',
            answer:
              'The app stores favorites, search history, and settings locally on your device. No personal data is sent to our servers. Read our privacy policy for more information.',
          },
          {
            question: 'What languages does the app support?',
            answer:
              'The app is available in Norwegian (Bokmål), English, Northern Sami, Lule Sami, Ukrainian, and Polish.',
          },
          {
            question: 'How do I use the contraction timer?',
            answer:
              'Open the contraction timer from the menu. Press "Start" when a contraction begins and "Stop" when it ends. The app automatically calculates intervals and duration.',
          },
          {
            question: 'The information about a facility is incorrect. What should I do?',
            answer:
              'We continuously work to keep information up to date. If you find an error, please send us an email at support@fodeinorge.app and we will correct it as soon as possible.',
          },
        ],
      },
      contact: {
        title: 'Contact Us',
        description:
          'Didn\'t find the answer you were looking for? Send us an email and we\'ll help you.',
        email: 'support@fodeinorge.app',
        button: 'Send email',
      },
      appInfo: {
        title: 'App Information',
        version: 'Version 1.0.0',
        platforms: 'Available for iOS and Android',
      },
    },
  },
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'no' ? 'en' : 'no';
}

export function getLocalePath(locale: Locale, path: string): string {
  const paths: Record<string, Record<Locale, string>> = {
    home: { no: '/', en: '/en' },
    privacy: { no: '/personvern', en: '/en/privacy' },
    support: { no: '/stotte', en: '/en/support' },
  };
  return paths[path]?.[locale] ?? '/';
}
