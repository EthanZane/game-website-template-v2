import { alternatesLanguage, defaultLocale, locales } from '@/lib/i18n/locales';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { siteConfig } from '@/lib/config/site';
import { Link } from '@/lib/i18n/navigation';
import { AppLayout } from '@/lib/components/layout/AppLayout';
import { getHomeSettings } from '@/lib/utils/game-box-settings';

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
    title: `${t('DownloadPage.meta.title')} | ${siteConfig.name}`,
    description: t('DownloadPage.meta.description'),
    alternates: {
      languages: alternatesLanguage('/download'),
    }
  };
}

export default async function DownloadPage({ params }: Props) {
  const { locale = defaultLocale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('DownloadPage');

  const PageContent = () => (
    <div className="bg-background min-h-screen py-10">
      <div className=" mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">{t('title')}</h1>
          <p className="text-feature-description">{t('description')}</p>
        </div>

        {/* Web Version Card */}
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border/50">
            <h2 className="text-2xl font-semibold text-primary mb-2">{t('webVersion.title')}</h2>
            <p className="text-feature-description mb-6">{t('webVersion.description')}</p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('webVersion.playButton')}
            </Link>
          </div>
        </div>

        {/* Download Section */}
        <h2 className="text-2xl font-bold text-center text-foreground mb-8">{t('downloadTitle')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* iOS Version */}
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('ios.title')}</h3>
            <ul className="space-y-3 mb-6 text-feature-description">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                {t('ios.feature1')}
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                {t('ios.feature2')}
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                {t('ios.feature3')}
              </li>
            </ul>
            <Link 
              href='#'
              className="block w-full text-center py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('ios.downloadButton')}
            </Link>
          </div>

          {/* Android Version */}
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('android.title')}</h3>
            <ul className="space-y-3 mb-6 text-feature-description">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                {t('android.feature1')}
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                {t('android.feature2')}
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                {t('android.feature3')}
              </li>
            </ul>
            <Link 
              href='#'
              className="block w-full text-center py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('android.downloadButton')}
            </Link>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">{t('requirements.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* iOS Requirements */}
            <div className="bg-card/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">{t('requirements.ios.title')}</h3>
              <ul className="space-y-2 text-feature-description">
                <li>{t('requirements.ios.os')}</li>
                <li>{t('requirements.ios.device')}</li>
                <li>{t('requirements.ios.space')}</li>
                <li>{t('requirements.ios.network')}</li>
              </ul>
            </div>

            {/* Android Requirements */}
            <div className="bg-card/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">{t('requirements.android.title')}</h3>
              <ul className="space-y-2 text-feature-description">
                <li>{t('requirements.android.os')}</li>
                <li>{t('requirements.android.ram')}</li>
                <li>{t('requirements.android.space')}</li>
                <li>{t('requirements.android.network')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (siteConfig.templateType === 'game-box') {
    const settings = await getHomeSettings(locale);
    return (
      <AppLayout categories={settings.categories}>
        <PageContent />
      </AppLayout>
    );
  }

  return <PageContent />;
}