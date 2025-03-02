import { getTranslations } from 'next-intl/server';

export default async function Features({pageName}:{pageName:string|null|undefined}) {
  const prefix = pageName ? pageName + '.' : '';
  const t = await getTranslations(`${prefix}HomeFeatures`);
  const screenshot_prefix = pageName ? '/games/' + pageName : '';
  const game_screenshot_path = `${screenshot_prefix}/game_screenshot.webp`;
  return (
    <>
      {/* <h2 className="text-xl md:text-5xl font-bold text-left mb-4 md:mb-8 text-feature-title font-leckerli">{t('gameTitle')}</h2> */}

      <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4 text-feature-title font-leckerli">{t('whatIsTitle')}</h2>
      <div className="flex flex-col mb-4 md:mb-8 items-stretch md:flex-row space-y-4 md:space-y-0">
        <section className="flex pr-4 md:pr-8 md:w-1/2 md:items-center">
          <p className="text-sm md:text-base text-feature-description">{t('whatIsDescription').split(/\[highlight\]|\[\/highlight\]/).map((part, i) => 
    i % 2 === 0 ? part : <span key={i} className="text-feature-title font-semibold">{part}</span>
  )}</p>
        </section>
        <div className="w-full md:w-1/2 flex justify-center items-stretch">
          <img
                  src={game_screenshot_path}
                  alt="Game screenshot"
                  className="rounded-xl w-full md:w-4/5 h-auto"
                />
        </div>
      </div>

      <section className="mb-4 md:mb-8">
        <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4 text-feature-title font-leckerli">{t('howToPlayTitle')}</h2>
        <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm md:text-base text-feature-description">
          <li>{t('howToPlayStep1')}</li>
          <li>{t('howToPlayStep2')}</li>
          <li>{t('howToPlayStep3')}</li>
          <li>{t('howToPlayStep4')}</li>
          <li>{t('howToPlayStep5')}</li>
        </ul>
      </section>
      <section className="mb-4 md:mb-8">
        <h2 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4 text-feature-title font-leckerli">
          {t('keyFeaturesTitle')}
        </h2>
        <ul className="grid grid-cols-2 gap-2 md:gap-4">
          {['feature1', 'feature2', 'feature3', 'feature4','feature5','feature6'].map((feature, index) => (
            <li key={index} className="bg-feature-card hover:bg-feature-card-hover transition-colors p-2 md:p-4 rounded-lg">
              <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 text-feature-title">{t(`${feature}Title`)}</h3>
              <p className="text-xs md:text-base text-feature-description">{t(`${feature}Description`)}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
