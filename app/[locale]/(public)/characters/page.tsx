import { alternatesLanguage, defaultLocale, locales } from '@/lib/i18n/locales';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { siteConfig } from '@/lib/config/site';
import { Link } from '@/lib/i18n/navigation';
import { AppLayout } from '@/lib/components/layout/AppLayout';
import { getHomeSettings } from '@/lib/utils/game-box-settings';

import { CardList } from '@/lib/components/ui/card';
import { image } from '@nextui-org/theme';

import { CardData } from '@/lib/types/base';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale = defaultLocale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  return {
    title: `${t('CharacterPage.meta.title')} | ${siteConfig.name}`,
    description: t('CharacterPage.meta.description'),
    alternates: {
      languages: alternatesLanguage('/characters'),
    },
  };
}

export default async function CharacterPage({ params }: Props) {
  const { locale = defaultLocale } = await params;
  setRequestLocale(locale);
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const datamelody = messages.CharacterPage?.['Melody-Characters']?.cardlist as CardData[];
  const vocal = messages.CharacterPage?.['Vocal-Characters']?.cardlist as CardData[];
  const Beat = messages.CharacterPage?.['Beat-Characters']?.cardlist as CardData[];
  const Effect = messages.CharacterPage?.['Beat-Characters']?.cardlist as CardData[];

  return (
    <div className="bg-background py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">{messages.CharacterPage?.title}</h1>
        <p className="text-feature-description max-w-7xl mx-auto">{messages.CharacterPage?.desc_p}</p>
      </div>

      <h2 className="text-2xl text-center font-semibold text-primary my-8">
        {messages.CharacterPage['Melody-Characters'].title}
      </h2>
      <div className="max-w-7xl mx-auto">
        <CardList data={datamelody} />
      </div>

      <h2 className="text-2xl text-center font-semibold text-primary my-8">
        {messages.CharacterPage['Vocal-Characters'].title}
      </h2>
      <div className="max-w-7xl mx-auto">
        <CardList data={vocal} />
      </div>

      <h2 className="text-2xl text-center font-semibold text-primary my-8">
        {messages.CharacterPage['Beat-Characters'].title}
      </h2>
      <div className="max-w-7xl mx-auto">
        <CardList data={Beat} />
      </div>

      <h2 className="text-2xl text-center font-semibold text-primary my-8">
        {messages.CharacterPage['Effect-Characters'].title}
      </h2>
      <div className="max-w-7xl mx-auto">
        <CardList data={Effect} />
      </div>

      <h2 className="text-2xl text-center font-semibold text-primary my-8">
      Tips for Using Characters
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Mix and Match</h3>
            <p className="text-feature-description">
              Experiment with different character combinations to create unique sounds!
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Layer Sounds</h3>
            <p className="text-feature-description">
              Stack multiple characters to create rich, complex arrangements.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Follow the Beat</h3>
            <p className="text-feature-description">
              Start with beat characters to establish a strong rhythm foundation.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
